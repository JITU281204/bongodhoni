/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - Commercial News CMS Admin Controller v6.0
 * Anandabazar Patrika & Indian Express Inspired Dashboard
 */

document.addEventListener("DOMContentLoaded", () => {
  renderDashboardStats();
  renderArticlesTable();
  renderEventLogs();
  loadSettingsForm();

  setInterval(() => {
    renderDashboardStats();
    renderEventLogs();
  }, 2500);
});

function renderDashboardStats() {
  const articles = BongoCMS.getArticles();
  const metrics = BongoCMS.getMetrics();
  const activeOnline = BongoCMS.getActiveOnlineUsers();

  const statsEl = document.getElementById("admin-stats-row");
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat-card" style="background:var(--bg-card); color:#10B981; border:1px solid var(--border);">
        <div style="font-size:0.85rem; color:var(--text-2); display:flex; align-items:center; gap:8px; font-weight:700;">
          <span style="display:inline-block; width:10px; height:10px; background:#10B981; border-radius:50%;"></span>
          সক্রিয় অন-লাইন (Live Active)
        </div>
        <div style="font-size:2.2rem; font-weight:900; margin-top:6px; font-family:var(--font-display);">${activeOnline} জন</div>
        <small style="color:var(--text-3);">বর্তমান ব্রাউজার সেশনের প্রকৃত ইউজার</small>
      </div>

      <div class="stat-card" style="background:var(--bg-card); color:#2563EB; border:1px solid var(--border);">
        <div style="font-size:0.85rem; color:var(--text-2); font-weight:700;">📈 মোট সাইট ভিজিট (Page Visits)</div>
        <div style="font-size:2.2rem; font-weight:900; margin-top:6px; font-family:var(--font-display);">${metrics.totalPageVisits} বার</div>
        <small style="color:var(--text-3);">প্রকৃত মোট পেজলোড গণনা</small>
      </div>

      <div class="stat-card" style="background:var(--bg-card); color:var(--crimson); border:1px solid var(--border);">
        <div style="font-size:0.85rem; color:var(--text-2); font-weight:700;">📰 ই-পেপার পঠিত (e-Paper Views)</div>
        <div style="font-size:2.2rem; font-weight:900; margin-top:6px; font-family:var(--font-display);">${metrics.epaperViews} বার</div>
        <small style="color:var(--text-3);">প্রকৃত ই-পেপার খোলার সংখ্যা</small>
      </div>

      <div class="stat-card" style="background:var(--bg-card); color:#D97706; border:1px solid var(--border);">
        <div style="font-size:0.85rem; color:var(--text-2); font-weight:700;">📥 ই-পেপার PDF প্রিন্ট/ডাউনলোড</div>
        <div style="font-size:2.2rem; font-weight:900; margin-top:6px; font-family:var(--font-display);">${metrics.epaperDownloads} টি</div>
        <small style="color:var(--text-3);">প্রকৃত PDF ডাউনলোড অ্যাকশন</small>
      </div>
    `;
  }
}

function renderEventLogs() {
  const container = document.getElementById("event-logs-list");
  if (!container) return;

  const logs = BongoCMS.getEventLogs();
  container.innerHTML = logs.slice(0, 9).map(log => `
    <div style="padding:12px 16px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; font-size:0.88rem;">
      <span style="color:var(--text-1);">⚡ ${log.text}</span>
      <span style="color:var(--text-3); font-size:0.78rem; font-family:var(--font-ui); font-weight:600;">${log.time}</span>
    </div>
  `).join("");
}

function renderArticlesTable() {
  const container = document.getElementById("articles-table-body");
  if (!container) return;

  const articles = BongoCMS.getArticles();

  if (articles.length === 0) {
    container.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:24px; color:var(--text-2);">কোনো খবর তালিকাভুক্ত নেই।</td></tr>`;
    return;
  }

  container.innerHTML = articles.map(art => `
    <tr style="border-bottom:1px solid var(--border);">
      <td><img src="${art.image}" style="width:64px; height:48px; object-fit:cover; border-radius:4px;" /></td>
      <td><strong style="color:var(--text-1); font-family:var(--font-serif); font-size:0.98rem;">${art.title}</strong></td>
      <td><span class="badge badge-crimson">${art.categoryBengali || art.category}</span></td>
      <td style="text-align:right; white-space:nowrap;">
        <button onclick="openEditArticleModal('${art.id}')" style="background:#2563EB; color:#FFF; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-weight:700; font-size:0.78rem; margin-right:6px;">✏️ এডিট</button>
        <button onclick="deleteArticleHandler('${art.id}')" style="background:var(--crimson); color:#FFF; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-weight:700; font-size:0.78rem;">🗑️ মুছুন</button>
      </td>
    </tr>
  `).join("");
}

function openEditArticleModal(id) {
  const articles = BongoCMS.getArticles();
  const art = articles.find(a => a.id === id);
  if (!art) return;

  document.getElementById("edit-art-id").value = art.id;
  document.getElementById("edit-art-category").value = art.category || "rajya";
  document.getElementById("edit-art-title").value = art.title || "";
  document.getElementById("edit-art-excerpt").value = art.excerpt || "";
  document.getElementById("edit-art-image").value = art.image || "";
  document.getElementById("edit-art-author").value = art.author || "";
  
  const rawContent = (art.content || "").replace(/<p>/g, "").replace(/<\/p>/g, "\n\n").trim();
  document.getElementById("edit-art-content").value = rawContent;
  document.getElementById("edit-art-hero").checked = !!art.isHero;

  openModal("article-edit-modal");
}

function submitEditArticleForm(e) {
  e.preventDefault();

  const id = document.getElementById("edit-art-id").value;
  const title = document.getElementById("edit-art-title").value;
  const category = document.getElementById("edit-art-category").value;
  const excerpt = document.getElementById("edit-art-excerpt").value;
  const image = document.getElementById("edit-art-image").value;
  const content = document.getElementById("edit-art-content").value;
  const author = document.getElementById("edit-art-author").value;

  const categoryMap = {
    "rajya": "রাজ্য-রাজধানী",
    "desh": "দেশ ও রাজনীতি",
    "bharat": "ভারত ডায়েরি",
    "neighbour": "প্রতিবেশীর উত্থান",
    "history": "ইতিহাস ও কৃষ্টি",
    "opinion": "আপনার দৃষ্টি"
  };

  const updatedArticle = {
    id: id,
    category: category,
    categoryBengali: categoryMap[category] || "সংবাদ",
    title: title,
    excerpt: excerpt,
    content: `<p>${content.replace(/\n/g, "</p><p>")}</p>`,
    image: image,
    author: author,
    isHero: document.getElementById("edit-art-hero").checked
  };

  BongoCMS.updateArticle(updatedArticle);

  renderDashboardStats();
  renderArticlesTable();
  renderEventLogs();

  closeModal("article-edit-modal");
  alert("✅ খবরটি সাফল্যজনকভাবে আপডেট করা হয়েছে!");
}

function submitNewArticleForm(e) {
  e.preventDefault();

  const title = document.getElementById("new-art-title").value;
  const category = document.getElementById("new-art-category").value;
  const district = document.getElementById("new-art-district") ? document.getElementById("new-art-district").value : "kolkata";
  const excerpt = document.getElementById("new-art-excerpt").value;
  const image = document.getElementById("new-art-image").value || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167";
  const content = document.getElementById("new-art-content").value;
  const author = document.getElementById("new-art-author").value || "নিজস্ব প্রতিনিধি";

  const categoryMap = {
    "rajya": "রাজ্য-রাজধানী",
    "desh": "দেশ ও রাজনীতি",
    "bharat": "ভারত ডায়েরি",
    "neighbour": "প্রতিবেশীর উত্থান",
    "history": "ইতিহাস ও কৃষ্টি",
    "opinion": "আপনার দৃষ্টি"
  };

  const newArticle = {
    category: category,
    categoryBengali: categoryMap[category] || "সংবাদ",
    district: district,
    title: title,
    excerpt: excerpt,
    content: `<p>${content.replace(/\n/g, "</p><p>")}</p>`,
    image: image,
    author: author,
    date: new Date().toLocaleDateString("bn-BD"),
    isHero: document.getElementById("new-art-hero").checked
  };

  BongoCMS.addArticle(newArticle);
  
  renderDashboardStats();
  renderArticlesTable();
  renderEventLogs();

  document.getElementById("create-article-form").reset();
  closeModal('article-create-modal');
  alert("🎉 নতুন খবরটি সাফল্যজনকভাবে ওয়েবসাইটে লাইভ প্রকাশ করা হয়েছে!");
}

function deleteArticleHandler(id) {
  if (confirm("আপনি কি নিশ্চিত যে এই খবরটি ওয়েবসাইট থেকে মুছে ফেলতে চান?")) {
    BongoCMS.deleteArticle(id);
    renderDashboardStats();
    renderArticlesTable();
    renderEventLogs();
    alert("খবরটি সাফল্যের সাথে মুছে ফেলা হয়েছে!");
  }
}

function loadSettingsForm() {
  const settings = BongoCMS.getSettings();
  if (document.getElementById("set-edition-date")) {
    document.getElementById("set-edition-date").value = settings.editionDateStr || '';
    document.getElementById("set-hotline").value = settings.hotlineWhatsApp || '';
    document.getElementById("set-email").value = settings.email || '';
  }
}

function saveSettingsHandler(e) {
  e.preventDefault();
  const settings = BongoCMS.getSettings();

  settings.editionDateStr = document.getElementById("set-edition-date").value;
  settings.hotlineWhatsApp = document.getElementById("set-hotline").value;
  settings.email = document.getElementById("set-email").value;

  BongoCMS.saveSettings(settings);
  renderDashboardStats();
  alert("✅ সাইটের সমস্থ সেটিংস ও তারিখ আপডেট করা হয়েছে!");
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("active");
}
