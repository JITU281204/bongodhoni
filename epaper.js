/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - e-Paper Digital Replica Reader v7.0
 * Manages Full 16-Page High-Res Crystal Clear Print Edition Sheet Rendering, Thumbnails & Zoom Controls
 */

const ePaperPages = [
  { pageNum: 1, title: "১ম পৃষ্ঠা (প্রচ্ছদ)", badge: "১ম পৃষ্ঠা", headline: "জেসাস করিডর: ধর্মান্তরের রাজনীতি ও ভারতের সাংস্কৃতিক নিরাপত্তা", subHeadline: "উত্তরপূর্ব ভারত ও পাঞ্জাবে মিশনারিদের তীব্র আগ্রাসন", pageImg: "12_page-0001.jpg", mainImg: "12_page-0001.jpg" },
  { pageNum: 2, title: "২য় পৃষ্ঠা (রাজ্য-রাজধানী)", badge: "২য় পৃষ্ঠা", headline: "মদন-বাণে চাপে অভিষেক, এবার আইনি নোটিসের পথ!", subHeadline: "তৃণমূলের অন্তর্দ্বন্দ্বে নতুন মোড়", pageImg: "12_page-0002.jpg", mainImg: "12_page-0002.jpg" },
  { pageNum: 3, title: "৩য় পৃষ্ঠা (রাজ্য)", badge: "৩য় পৃষ্ঠা", headline: "অথ দেবরাজ কথা - প্রভাবের দাপট নাকি আইনের শাসন?", subHeadline: "জামিন খারিজ, বাড়ল পুলিশি হেফাজত", pageImg: "12_page-0003.jpg", mainImg: "12_page-0003.jpg" },
  { pageNum: 4, title: "৪র্থ পৃষ্ঠা (দেশ)", badge: "৪র্থ পৃষ্ঠা", headline: "এবার তোরা মানুষ হ: বিদেশের মাটিতে ভারতের সম্মান নিয়ে রাজনীতি—কার লাভ?", subHeadline: "ভারতে প্রথম ডেঙ্গু টিকার অনুমোদন", pageImg: "12_page-0004.jpg", mainImg: "12_page-0004.jpg" },
  { pageNum: 5, title: "৫ম পৃষ্ঠা (দেশ ও বিশ্ব)", badge: "৫ম পৃষ্ঠা", headline: "ভারতের উপর অভিভাবকের ভঙ্গি পরিত্যাগ করুক The New York Times", subHeadline: "ফরচুন ইন্ডিয়া ২০২৬-এর তালিকায় ভারতের ১০০ সর্বাধিক ক্ষমতাশালী নারী", pageImg: "12_page-0005.jpg", mainImg: "12_page-0005.jpg" },
  { pageNum: 6, title: "৬ষ্ঠ পৃষ্ঠা (প্রতিরক্ষা)", badge: "৬ষ্ঠ পৃষ্ঠা", headline: "ভারত মহাসাগরে নৌবাহিনীর অভিনব মহড়া ও কৌশলগত প্রতিরক্ষা বর্ম", subHeadline: "স্বদেশী প্রযুক্তিতে তৈরি নতুন যুদ্ধজাহাজ কমিশন", pageImg: "12_page-0006.jpg", mainImg: "12_page-0006.jpg" },
  { pageNum: 7, title: "৭ম পৃষ্ঠা (বাণিজ্য ও অর্থনীতি)", badge: "৭ম পৃষ্ঠা", headline: "অর্থনীতির আকাশে নতুন সূর্য: ভারতের জিডিপি বৃদ্ধির হার ৮.২ শতাংশ ছুঁল", subHeadline: "ক্ষুদ্র ও মাঝারি শিল্পে নতুন সরকারি প্যাকেজ", pageImg: "12_page-0007.jpg", mainImg: "12_page-0007.jpg" },
  { pageNum: 8, title: "৮ম পৃষ্ঠা (খেলাধুলা)", badge: "৮ম পৃষ্ঠা", headline: "বিশ্বমঞ্চে ভারতের তরুণ খেলোয়াড়দের জয়যাত্রা", subHeadline: "অলিম্পিক প্রস্তুতিতে নতুন উচ্চতা ছুঁল ভারতীয় ট্র্যাক অ্যান্ড ফিল্ড", pageImg: "12_page-0008.jpg", mainImg: "12_page-0008.jpg" },
  { pageNum: 9, title: "৯ম পৃষ্ঠা (ভারত ডায়েরি)", badge: "৯ম পৃষ্ঠা", headline: "৪৮০ বছরের হিন্দু প্রতিরোধ— ইতিহাসের বিজয়ী কাহিনি", subHeadline: "সংস্কৃতিক পুনর্জাগরণ ও ঐতিহ্যের সংরক্ষণ", pageImg: "12_page-0009.jpg", mainImg: "12_page-0009.jpg" },
  { pageNum: 10, title: "১০ম পৃষ্ঠা (প্রতিবেশীর উত্থান)", badge: "১০ম পৃষ্ঠা", headline: "দক্ষিণ এশিয় ভূ-রাজনীতি ও সীমান্ত সুরক্ষা পর্যালোচনা", subHeadline: "ভারত মহাসাগরীয় অঞ্চলে প্রতিবেশীদের কৌশলগত প্রভাব", pageImg: "12_page-0010.jpg", mainImg: "12_page-0010.jpg" },
  { pageNum: 11, title: "১১শ পৃষ্ঠা (ইতিহাস ও কৃষ্টি)", badge: "১১শ পৃষ্ঠা", headline: "আচার্য ব্রহ্মগুপ্তের গোমূত্রিকা সূত্র — প্রাচীন ভারতীয় গণিতশাস্ত্রের স্বর্ণযুগ", subHeadline: "বৈদিক বিজ্ঞানের কালজয়ী অবদান", pageImg: "12_page-0011.jpg", mainImg: "12_page-0011.jpg" },
  { pageNum: 12, title: "১২শ পৃষ্ঠা (আপনার দৃষ্টি)", badge: "১২শ পৃষ্ঠা", headline: "সত্যের সন্ধানে বাংলা ও সনাতন সংস্কৃতির অবিকল প্রতিধ্বনি", subHeadline: "পাঠকদের দৃষ্টিভঙ্গি ও সম্পাদকীয় কলাম", pageImg: "12_page-0012.jpg", mainImg: "12_page-0012.jpg" },
  { pageNum: 13, title: "১৩শ পৃষ্ঠা (বিশেষ নিবন্ধ)", badge: "১৩শ পৃষ্ঠা", headline: "বাংলা সাহিত্য ও সংস্কৃতির ঐতিহ্যের পুনর্গঠন", subHeadline: "তরুণ প্রজন্মের সৃষ্টিশীল চর্চা", pageImg: "12_page-0013.jpg", mainImg: "12_page-0013.jpg" },
  { pageNum: 14, title: "১৪শ পৃষ্ঠা (সমাজ ও ঐতিহ্য)", badge: "১৪শ পৃষ্ঠা", headline: "গ্রামীণ লোকসংস্কৃতি ও কারুশিল্পের বৈশ্বিক সমাদর", subHeadline: "বাংলার ঐতিহ্যবাহী কুটির শিল্পে নতুন রূপান্তর", pageImg: "12_page-0014.jpg", mainImg: "12_page-0014.jpg" },
  { pageNum: 15, title: "১৫শ পৃষ্ঠা (লাইফস্টাইল ও সাহিত্য)", badge: "১৫শ পৃষ্ঠা", headline: "আধুনিক নগরজীবন ও ঐতিহ্যবাহী মূল্যবোধের মেলবন্ধন", subHeadline: "নতুন যুগের সাহিত্য ভাবনা", pageImg: "12_page-0015.jpg", mainImg: "12_page-0015.jpg" },
  { pageNum: 16, title: "১৬শ পৃষ্ঠা (শেষ প্রচ্ছদ)", badge: "১৬শ পৃষ্ঠা", headline: "বঙ্গধ্বনি পরিবার ও পাঠকদের কৃতজ্ঞতা বার্তা", subHeadline: "১৬ পৃষ্ঠার বিশেষ সাপ্তাহিক ডিজিটাল সংস্করণ সমাপ্তি", pageImg: "12_page-0016.jpg", mainImg: "12_page-0016.jpg" }
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

  const settings = window.BongoCMS ? BongoCMS.getSettings() : { editionDateStr: "২৮শে জুলাই - ১লা আগস্ট ২০২৬", price: "₹১০.০০" };
  const page = ePaperPages[currentPageIndex];

  stage.innerHTML = `
    <div class="paper-sheet" style="transform: scale(${zoomScale}); transform-origin: top center; background:#f6efdb; border:2px solid #2e261f; padding:20px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); position:relative; max-width:1080px; margin:0 auto;">
      <div class="sheet-header-print" style="margin-bottom:14px; border-bottom:4px double #1f1914; padding-bottom:10px; text-align:center;">
        <div style="font-family:'Cinzel', var(--font-serif); font-size: 0.75rem; letter-spacing:2px; font-weight:800; color:#8b1818; text-transform:uppercase;">— প্রিমিয়াম ডিজিটাল ক্রিস্টাল ক্লিয়ার প্রিন্ট সংস্করণ —</div>
        <div class="sheet-brand-name" style="font-family:'Noto Serif Bengali', var(--font-serif); font-size:3.2rem; font-weight:900; color:#8b1818; text-shadow: 1px 1px 0px rgba(0,0,0,0.1);">বঙ্গধ্বনি</div>
        <div style="font-size: 0.95rem; font-weight:700; color:#2e261f; font-family:var(--font-vintage); margin-top:2px;">সনাতন বঙ্গের সনাতন ধ্বনি | সাপ্তাহিক ${settings.editionDateStr || "২৮শে জুলাই - ১লা আগস্ট ২০২৬"}</div>
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
