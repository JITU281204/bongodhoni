/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - e-Paper Digital Replica Reader v7.0
 * Manages Full 16-Page High-Res Crystal Clear Print Edition Sheet Rendering, Thumbnails & Zoom Controls
 */

const ePaperPages = [
  {
    pageNum: 1,
    title: "১ম পৃষ্ঠা (প্রচ্ছদ)",
    badge: "১ম পৃষ্ঠা",
    headline: "দিল্লির ব্রিকস মঞ্চে বার্তা: কারও শিবিরে নয়, ভারতের পথ ভারতেরই",
    subHeadline: "রাশিয়া, চিন, ইরান—সবার সঙ্গে সংলাপ; কিন্তু চূড়ান্ত সিদ্ধান্ত একটাই: ভারতের স্বার্থই সর্বোচ্চ",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0001.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0001.jpg"
  },
  {
    pageNum: 2,
    title: "২য় পৃষ্ঠা (রাজ্যের কথা)",
    badge: "২য় পৃষ্ঠা",
    headline: "বাংলাদেশের ছায়া এই রাজ্যেও? রামপুরহাটে প্রকাশ্যে সাধু হত্যার অভিযোগ: ২০০ মানুষের সামনে নৃশংস হামলা",
    subHeadline: "তৃণমূলের প্রতীক-সংগ্রাম: পশ্চিমবঙ্গের রাজনীতিতে নতুন সমীকরণ (‘তৃণমূল’ নাম ও ঘাসফুল কার?)",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0002.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0002.jpg"
  },
  {
    pageNum: 3,
    title: "৩য় পৃষ্ঠা (রাজ্যের কথা)",
    badge: "৩য় পৃষ্ঠা",
    headline: "প্যাথলজিক্যাল লায়ার: হিন্দুধর্মের ‘ইসলামীকরণ’! ‘গোথেকো’-বিকাশের মুখে হঠাৎ ধর্মরক্ষার কথা—কিন্তু এই দ্বিচারিতার জবাব দেবেন কে?",
    subHeadline: "তৃণমূলের প্রতীক-সংগ্রাম: কার হাতে থাকবে ঘাসফুল প্রতীক? আইন ও কমিশনের লড়াইয়ে বঙ্গ রাজনীতি",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0003.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0003.jpg"
  },
  {
    pageNum: 4,
    title: "৪র্থ পৃষ্ঠা (দেশের কথা)",
    badge: "৪র্থ পৃষ্ঠা",
    headline: "ককরোচ-দের ভাগাড় রাজনীতি: লাশের উপর রাজনীতি? শিশুমৃত্যুর গ্রামে গিয়ে বিক্ষোভের মুখে CJP প্রধান",
    subHeadline: "স্বয়মেব মৃগেন্দ্রতা: ইরানের জ্বালানি সঙ্কট: ভারতের জন্য সুযোগও, সতর্কবার্তাও",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0004.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0004.jpg"
  },
  {
    pageNum: 5,
    title: "৫ম পৃষ্ঠা (দেশের কথা)",
    badge: "৫ম পৃষ্ঠা",
    headline: "উত্তিষ্ঠত: ৩৫ বছর পর ভারতের সার্বভৌম ঋণমান ‘এ-মাইনাস’ করল জাপানের জেসিআর",
    subHeadline: "বিপন্ন হিন্দু: চিন্ময়কৃষ্ণ প্রভুর ঘটনা: সীমান্তের ওপারের হিন্দু নিরাপত্তা ভারতের নৈতিক প্রশ্ন",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0005.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0005.jpg"
  },
  {
    pageNum: 6,
    title: "৬ষ্ঠ পৃষ্ঠা (বিদেশ বিভুঁই)",
    badge: "৬ষ্ঠ পৃষ্ঠা",
    headline: "এই ভারত ভয় পায় না: চিনের সঙ্গে বরফ গলছে, কিন্তু সীমান্তের স্মৃতি ভুললে চলবে না",
    subHeadline: "বিশ্বগুরু: সাংহাই সহযোগিতা সংস্থার শীর্ষ সম্মেলনে ভারতের ভূমিকা: বাড়ছে কূটনৈতিক ও কৌশলগত প্রভাব",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0006.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0006.jpg"
  },
  {
    pageNum: 7,
    title: "৭ম পৃষ্ঠা (বিদেশ বিভুঁই)",
    badge: "৭ম পৃষ্ঠা",
    headline: "সম্পাদকের কলম (বিদেশ বিভাগ): আত্মবিশ্বাসী ভারতের নতুন কূটনৈতিক মানচিত্র — সৌভিক দত্ত",
    subHeadline: "ধর্মের কল বাতাসে নড়ে: পাকিস্তানে অর্থনৈতিক সংকট, আগস্টে মুদ্রাস্ফীতি ১১.২%",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0007.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0007.jpg"
  },
  {
    pageNum: 8,
    title: "৮ম পৃষ্ঠা (সম্পাদক দর্পণ)",
    badge: "৮ম পৃষ্ঠা",
    headline: "সম্পাদকের কলমে: চীনকে বিশ্বাস করা যায় না—কারণ ইতিহাস সেই সাক্ষ্য দেয়না",
    subHeadline: "মন্থন: ট্রাম্পের শুল্কফাঁদেই শক্ত হচ্ছে BRICS",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0008.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0008.jpg"
  },
  {
    pageNum: 9,
    title: "৯ম পৃষ্ঠা (বিতর্ক-বিমর্শ)",
    badge: "৯ম পৃষ্ঠা",
    headline: "উলোট-পুরাণ: বিশ্বব্যবস্থায় এবার ‘নিয়ম মানবে’ না ভারত, নিয়ম তৈরির শক্তি অর্জনের ডাক মোদীর",
    subHeadline: "নালন্দা-তক্ষশিলা থেকে ইসরো: জাতীয় শক্তির মূল স্তম্ভ: শিক্ষা, প্রযুক্তি ও কর্মসংস্থান",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0009.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0009.jpg"
  },
  {
    pageNum: 10,
    title: "১০ম পৃষ্ঠা (বিতর্ক-বিমর্শ)",
    badge: "১০ম পৃষ্ঠা",
    headline: "ধর্মহিংসা তথৈবচ: ক্ষাত্রধর্মই পথ — সঞ্জীব মণ্ডল",
    subHeadline: "রাজদণ্ড: সরকারি অনুমোদনহীন ২৫২টি মাদ্রাসা নিয়ে কড়া পদক্ষেপ, ‘খারেজি মাদ্রাসা’ বন্ধের নির্দেশ",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0010.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0010.jpg"
  },
  {
    pageNum: 11,
    title: "১১শ পৃষ্ঠা (আন্তর্জাতিক সম্পর্ক)",
    badge: "১১শ পৃষ্ঠা",
    headline: "রণদেহী: ভারত-ইসরায়েল অটোমোবাইল সহযোগিতায় নতুন গতি, ভারতীয় সংস্থার সঙ্গে হাত মেলাচ্ছে ইজরায়েলি প্রযুক্তি কোম্পানি",
    subHeadline: "ব্যানানা রিপাবলিক: পাকিস্তান-অধিকৃত কাশ্মীরে দুই মাস ধরে অশান্তি, মানবাধিকার লঙ্ঘনের অভিযোগ",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0011.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0011.jpg"
  },
  {
    pageNum: 12,
    title: "১২শ পৃষ্ঠা (পড়শী কথা)",
    badge: "১২শ পৃষ্ঠা",
    headline: "বিপদের নাম বাংলাদেশ: বাংলাদেশে চীনা সাইবার চক্র: ভারতের পূর্ব সীমান্তে নতুন বিপদ ঘণ্টা",
    subHeadline: "সন্ত্রাসবাদ ও জল একসাথে প্রবাহিত হবেনা: হেগের সালিশি আদালতের রায় প্রত্যাখ্যান ভারতের, সিন্ধুর জল নিয়ে আরও কঠোর নয়াদিল্লি",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0012.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0012.jpg"
  },
  {
    pageNum: 13,
    title: "১৩শ পৃষ্ঠা (সনাতনী নারী)",
    badge: "১৩শ পৃষ্ঠা",
    headline: "সম্পাদিকার কলম: সন্তানের হাতে ফোন, নাকি ফোনের হাতে সন্তান? — শ্রীমতী অনুপমা মণ্ডল",
    subHeadline: "শক্তিরূপেণ সংস্থিতা: পদ্মিনী থেকে জহর ব্রত: আত্মসম্মান, নারীমর্যাদা ও ভারতীয় নারীত্বের ঐতিহাসিক ঐতিহ্য",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0013.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0013.jpg"
  },
  {
    pageNum: 14,
    title: "১৪শ পৃষ্ঠা (সনাতনী নারী)",
    badge: "১৪শ পৃষ্ঠা",
    headline: "RG Kar কাণ্ডে ফের গ্রেফতার: সোমনাথ দে গ্রেফতার, দেহ সংস্কার ও তথ্যপ্রমাণ নষ্টের চাঞ্চল্যকর অভিযোগ",
    subHeadline: "আমি স্বয়ংসিদ্ধা: চরিত্র নিয়ে সন্দেহ, আদিবাসী মহিলাকে প্রকাশ্যে নির্যাতনের অভিযোগ; বঙ্গধ্বনি সম্পাদকীয় টিম",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0014.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0014.jpg"
  },
  {
    pageNum: 15,
    title: "১৫শ পৃষ্ঠা (আমি ভারত বলছি)",
    badge: "১৫শ পৃষ্ঠা",
    headline: "হরপ্পায় একটি প্রাচীন সিরামিক ফর্মুলেশনের জন্মকথা – লোথাল দর্শন — দেবজ্যোতি চক্রবর্তী",
    subHeadline: "অতুল্য ভারত: প্রাচীন ভারতে উন্নত মেটেরিয়াল সায়েন্স, কোয়ার্টজ সিন্টারিং ও নীল-সবুজ ফায়েন্স তৈরির প্রযুক্তিগত বিস্ময়",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0015.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0015.jpg"
  },
  {
    pageNum: 16,
    title: "১৬শ পৃষ্ঠা (আপনার দৃষ্টি)",
    badge: "১৬শ পৃষ্ঠা",
    headline: "আপনিও হোন বঙ্গধ্বনির খবরদাতা | তিয়ানানমেন স্কোয়ার: গণতন্ত্র, কমিউনিজম ও বিস্মৃত গণহত্যার ইতিহাস",
    subHeadline: "বঙ্গীয় গ্রন্থশিল্প পরিষদ: প্রকাশক, মুদ্রক ও পুস্তক পরিবেশকদের জাতীয়তাবাদী মঞ্চ — “ইদং নঃ মম, ইদং রাষ্ট্রায় স্বাহা”",
    pageImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0016.jpg",
    mainImg: "epaper_pages/Bongodhwani 13-09-26-digital version_page-0016.jpg"
  }
];

let currentPageIndex = 0;
let zoomScale = 1;

function openEPaperModal(pageNumber = 1) {
  const backdrop = document.getElementById("epaper-modal-backdrop");
  if (!backdrop) return;

  currentPageIndex = ePaperPages.findIndex(p => p.pageNum === pageNumber);
  if (currentPageIndex === -1) currentPageIndex = 0;

  if (window.BongoCMS) {
    BongoCMS.trackEPaperView(ePaperPages[currentPageIndex].pageNum);
  }

  renderEPaperThumbnails();
  renderCurrentEPaperSheet();
  updatePageSelectDropdown();

  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeEPaperModal() {
  const backdrop = document.getElementById("epaper-modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function renderEPaperThumbnails() {
  const container = document.getElementById("epaper-thumbs-container");
  if (!container) return;

  container.innerHTML = ePaperPages.map((page, index) => `
    <div class="thumb-item ${index === currentPageIndex ? 'active' : ''}" onclick="switchEPaperPage(${index})" style="cursor:pointer; margin-bottom:8px;">
      <div style="background:#FFF; color:#111; padding:4px; border:1px solid #CCC; overflow:hidden; border-radius:4px;">
        <img src="${page.pageImg}" style="width:100%; height:130px; object-fit:cover; object-position:top; border-radius:2px; filter:none;" alt="${page.title}" />
        <div style="font-weight:bold; margin-top:4px; text-align:center; color:#8b1818; font-family:var(--font-serif); font-size:0.75rem;">${page.badge}</div>
      </div>
    </div>
  `).join("");
}

function renderCurrentEPaperSheet() {
  const stage = document.getElementById("epaper-stage");
  if (!stage) return;

  const settings = window.BongoCMS ? BongoCMS.getSettings() : { editionDateStr: "৭ই সেপ্টেম্বর - ১৩ই সেপ্টেম্বর ২০২৬", price: "₹১০.০০" };
  const page = ePaperPages[currentPageIndex];
  const articlesList = (window.BongoCMS && window.BongoCMS.getArticles) ? BongoCMS.getArticles() : (typeof defaultArticles !== 'undefined' ? defaultArticles : []);
  const article = articlesList.find(a => a.epaperPage === page.pageNum);

  stage.innerHTML = `
    <div class="paper-sheet" style="transform: scale(${zoomScale}); transform-origin: top center; background:#f6efdb; border:2px solid #2e261f; padding:20px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); position:relative; max-width:1080px; margin:0 auto;">
      <div class="sheet-header-print" style="margin-bottom:14px; border-bottom:4px double #1f1914; padding-bottom:10px; text-align:center;">
        <div style="font-family:'Cinzel', var(--font-serif); font-size: 0.75rem; letter-spacing:2px; font-weight:800; color:#8b1818; text-transform:uppercase;">— প্রিমিয়াম ডিজিটাল ক্রিস্টাল ক্লিয়ার প্রিন্ট সংস্করণ —</div>
        <div class="sheet-brand-name" style="font-family:'Noto Serif Bengali', var(--font-serif); font-size:3.2rem; font-weight:900; color:#8b1818; text-shadow: 1px 1px 0px rgba(0,0,0,0.1);">বঙ্গধ্বনি</div>
        <div style="font-size: 0.95rem; font-weight:700; color:#2e261f; font-family:var(--font-vintage); margin-top:2px;">সনাতন বঙ্গের সনাতন ধ্বনি | সাপ্তাহিক ${settings.editionDateStr || "৭ই সেপ্টেম্বর - ১৩ই সেপ্টেম্বর ২০২৬"}</div>
        <div class="sheet-sub-meta" style="display:flex; justify-content:space-between; margin-top:8px; border-top:1px dashed #a39375; padding-top:6px; font-size:0.84rem; font-weight:bold; color:#594939;">
          <span>মূল্য: ${settings.price || "₹১০.০০"}</span>
          <span>বর্ষ ১ | সংখ্যা ৪৫</span>
          <span>পৃষ্ঠা: ${page.badge} (${page.title})</span>
        </div>
      </div>

      <!-- Crystal Clear High Resolution Newspaper Page Scan -->
      <div style="text-align:center; margin-bottom:16px; border:2px solid #2e261f; padding:4px; background:#FFF; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
        <img src="${page.pageImg}" style="width:100%; height:auto; max-width:1000px; display:block; margin:0 auto; filter:none; image-rendering:-webkit-optimize-contrast;" alt="${page.headline}" />
      </div>

      <div style="margin-top:14px; padding-top:12px; border-top:3px double #8b1818;">
        <h2 class="print-lead-headline" style="font-family:var(--font-serif); font-size:1.7rem; font-weight:900; color:#1e1812; line-height:1.3;">${page.headline}</h2>
        <h4 style="font-size:1.1rem; color:#8b1818; margin-top:4px; margin-bottom:8px; font-family:var(--font-serif); font-weight:700;">${page.subHeadline}</h4>
      </div>

      ${article ? `
        <div style="margin-top:16px; padding:18px; background:rgba(255,255,255,0.75); border:1px solid #dcd2b8; border-radius:4px; font-family:var(--font-serif); line-height:1.8; color:#2c241e; font-size:1.02rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #c9bda5; padding-bottom:6px; margin-bottom:12px; font-size:0.86rem; color:#6b5a4a;">
            <span>✍️ <strong>প্রতিবেদক / লেখক:</strong> ${article.author || 'বঙ্গধ্বনি ব্যুরো'}</span>
            <span>📅 <strong>তারিখ:</strong> ${article.date || '১৩ সেপ্টেম্বর ২০২৬'}</span>
          </div>
          <div class="epaper-article-body" style="text-align:justify;">
            ${article.content}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function switchEPaperPage(index) {
  if (index < 0 || index >= ePaperPages.length) return;
  currentPageIndex = index;

  if (window.BongoCMS) {
    BongoCMS.trackEPaperView(ePaperPages[currentPageIndex].pageNum);
  }

  renderEPaperThumbnails();
  renderCurrentEPaperSheet();
  updatePageSelectDropdown();
}

function prevEPaperPage() {
  if (currentPageIndex > 0) switchEPaperPage(currentPageIndex - 1);
}

function nextEPaperPage() {
  if (currentPageIndex < ePaperPages.length - 1) switchEPaperPage(currentPageIndex + 1);
}

function updatePageSelectDropdown() {
  const select = document.getElementById("epaper-page-select");
  if (select) {
    select.value = currentPageIndex;
  }
}

function zoomInEPaper() {
  if (zoomScale < 1.8) {
    zoomScale += 0.2;
    renderCurrentEPaperSheet();
  }
}

function zoomOutEPaper() {
  if (zoomScale > 0.6) {
    zoomScale -= 0.2;
    renderCurrentEPaperSheet();
  }
}

function downloadEPaperPDF() {
  const page = ePaperPages[currentPageIndex];
  const link = document.createElement("a");
  link.href = page.pageImg;
  link.download = `BongoDhoni_EPaper_Page_${page.pageNum}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
