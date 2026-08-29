/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - e-Paper Digital Replica Reader v7.0
 * Manages Full 16-Page High-Res Crystal Clear Print Edition Sheet Rendering, Thumbnails & Zoom Controls
 */

const ePaperPages = [
  {
    pageNum: 1,
    title: "১ম পৃষ্ঠা (প্রচ্ছদ)",
    badge: "১ম পৃষ্ঠা",
    headline: "দ্য গ্রেট ক্যালকাটা কিলিংসের ৮০ বছর — ১৬ আগস্ট স্মরণে পশ্চিমবঙ্গজুড়ে ‘ডাইরেক্ট অ্যাকশন ডে’ পালন",
    subHeadline: "ইতিহাসের রক্তাক্ত অধ্যায় ভুলে না যাওয়ার বার্তা; কলকাতা ও জেলায় জেলায় শ্রদ্ধাজ্ঞাপন ও প্রতিবাদ কর্মসূচি",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0001.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0001.jpg"
  },
  {
    pageNum: 2,
    title: "২য় পৃষ্ঠা (রাজ্যের কথা)",
    badge: "২য় পৃষ্ঠা",
    headline: "বিচারপতির চেম্বারে আইনজীবী! সুজিত বসুর জামিন মামলায় নজিরবিহীন ঘটনায় বিচারপতি সরে দাঁড়ালেন",
    subHeadline: "জতুগৃহ রাজ্য: তারাপীঠে হোটেলে ভয়াবহ অগ্নিকাণ্ড, মৃতের সংখ্যা বেড়ে ৮: আতঙ্কে তীর্থনগরী",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0002.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0002.jpg"
  },
  {
    pageNum: 3,
    title: "৩য় পৃষ্ঠা (রাজ্যের কথা)",
    badge: "৩য় পৃষ্ঠা",
    headline: "সেয়ানে-সেয়ানে: যাদবপুরকাণ্ডের পর ABVP-র মিছিল ঘিরে ফের উত্তেজনা | সংঘর্ষে আহতের অভিযোগ, বহিরাগত প্রবেশ নিয়ে প্রশ্ন",
    subHeadline: "নারী নিরাপত্তায় বাংলায় ‘দুর্গা সুরক্ষা স্কোয়াড’, স্বাধীনতা দিবসের কুচকাওয়াজেও নজর কাড়ল মহিলা পুলিশ বাহিনী",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0003.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0003.jpg"
  },
  {
    pageNum: 4,
    title: "৪র্থ পৃষ্ঠা (দেশের কথা)",
    badge: "৪র্থ পৃষ্ঠা",
    headline: "দ্য ভারত প্রজেক্ট: ১০ লক্ষ নতুন উদ্যোগ, ৫০ লক্ষ কর্মসংস্থানের লক্ষ্য: জাতীয় উদ্যোগপতি মিশনের প্রস্তাব",
    subHeadline: "স্বয়মেব মৃগেন্দ্রতা: সমস্যার বদলে সমাধানের পথ দেখাচ্ছে অসম: চা-পাতা থেকেই কার্বি মহিলাদের নতুন জীবিকা",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0004.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0004.jpg"
  },
  {
    pageNum: 5,
    title: "৫ম পৃষ্ঠা (দেশের কথা)",
    badge: "৫ম পৃষ্ঠা",
    headline: "বিশ্বজোড়া ষড়যন্ত্র: মোহন ভাগবতের মার্কিন সফরের আগে আরএসএসের বিরুদ্ধে নিষেধাজ্ঞার দাবি",
    subHeadline: "কংগ্রেসই কি মুসলিম লীগ?: বন্দেমাতরমে ‘কাঁচি’—কংগ্রেসের ১৯৩৭-এর আপসের রাজনীতি কি আজও বহমান?",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0005.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0005.jpg"
  },
  {
    pageNum: 6,
    title: "৬ষ্ঠ পৃষ্ঠা (বিদেশ বিভুঁই)",
    badge: "৬ষ্ঠ পৃষ্ঠা",
    headline: "সন্ত্রাসীদের নিষেধাজ্ঞা প্রত্যাহার করে ‘বৈধতা’ দেওয়া চলবে না: রাষ্ট্রসঙ্ঘে ভারতের কড়া বার্তা",
    subHeadline: "এই ভারত ভয় পায় না: রুশ তেল কেনায় ভারতের নতুন রেকর্ড, ১০০ শতাংশ মার্কিন শুল্কের হুমকির মধ্যেই বাড়ল আমদানি",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0006.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0006.jpg"
  },
  {
    pageNum: 7,
    title: "৭ম পৃষ্ঠা (বিদেশ বিভুঁই)",
    badge: "৭ম পৃষ্ঠা",
    headline: "সম্পাদকের কলম: কাশ্মীর থেকে কোরিয়া, ড্রোনযুদ্ধ থেকে নেপালের ইতিহাস— নতুন বিশ্বব্যবস্থার সামনে ভারত",
    subHeadline: "শক্তি সমীকরণ: আঞ্চলিক নিরাপত্তায় রাশিয়া - উত্তর কোরিয়ার যৌথ সমন্বয়ের বার্তা পুতিনের",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0007.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0007.jpg"
  },
  {
    pageNum: 8,
    title: "৮ম পৃষ্ঠা (সম্পাদক দর্পণ)",
    badge: "৮ম পৃষ্ঠা",
    headline: "মন্থন: বিজেপির নতুন জাতীয় সাংগঠনিক দল ঘোষণা, ফিরলেন স্মৃতি ইরানি ও রাম মাধব",
    subHeadline: "সম্পাদকের কলমে: কূটনীতির ভাষায় পাল্টা জবাব—কাশ্মীর নিয়ে ভারতের অবস্থান স্পষ্ট",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0008.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0008.jpg"
  },
  {
    pageNum: 9,
    title: "৯ম পৃষ্ঠা (বিতর্ক-বিমর্শ)",
    badge: "৯ম পৃষ্ঠা",
    headline: "ইতিহাসের পুনরাবৃত্তি: স্বাধীনতা ও এক হিন্দুর আক্ষেপ — সঞ্জীব মণ্ডল",
    subHeadline: "অখণ্ড হিন্দু সমাজকে ঐক্যবদ্ধ ও শক্তিশালী করার জাতীয়তাবাদী চিন্তন",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0009.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0009.jpg"
  },
  {
    pageNum: 10,
    title: "১০ম পৃষ্ঠা (বিতর্ক-বিমর্শ)",
    badge: "১০ম পৃষ্ঠা",
    headline: "শিল্প-শিল্পী ও অপ-সংস্কৃতি: তারকার মুখে দেশপ্রেম, বিজ্ঞাপনে দায়বোধ কোথায়? বিমল পানমশলা বিতর্কে শাহরুখ-অজয়-টাইগারকে নোটিস",
    subHeadline: "বুমেরাং: ঝাড়খণ্ডে ছাত্র আন্দোলন ঘিরে চাপে সরকার, রাহুল গান্ধীর চিঠি ও কংগ্রেসকে ঘিরে নতুন বিতর্ক",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0010.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0010.jpg"
  },
  {
    pageNum: 11,
    title: "১১শ পৃষ্ঠা (আন্তর্জাতিক সম্পর্ক)",
    badge: "১১শ পৃষ্ঠা",
    headline: "রণদেহী: ভারতীয়দের অনলাইন ক্ষোভে চাপে পিটার নাভারো, রুশ তেল নিয়ে মন্তব্য ঘিরে ফের বিতর্ক",
    subHeadline: "১৮১৬ সালের সুগোলি চুক্তির মূল নথি হারিয়ে ফেলেছে নেপাল? | ‘ইসলামিক রিপাবলিক অব ব্রিটেন’ বিতর্ক",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0011.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0011.jpg"
  },
  {
    pageNum: 12,
    title: "১২শ পৃষ্ঠা (পড়শী কথা)",
    badge: "১২শ পৃষ্ঠা",
    headline: "কাশ্মীর ভারতের অবিচ্ছেদ্য অঙ্গ: ‘গুলির শাসন মানি না’: পাক অধিকৃত কাশ্মীরে পাকিস্তানের বিরুদ্ধে অসহযোগ আন্দোলন",
    subHeadline: "ড্রাগনের শ্বাস: চীনের ড্রোন আধিপত্যে আঘাত ট্রাম্পের ১০০% শুল্ক; ভারতের ভাগ্যে কি শিকে ছিঁড়ছে?",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0012.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0012.jpg"
  },
  {
    pageNum: 13,
    title: "১৩শ পৃষ্ঠা (সনাতনী নারী)",
    badge: "১৩শ পৃষ্ঠা",
    headline: "সম্পাদিকার কলম: ডাঃ মধুচ্ছন্দা কর বিজেপির জাতীয় সহ-সভাপতি, কেন্দ্রীয় নেতৃত্বে বাংলার আরও এক মহিলা মুখ",
    subHeadline: "শক্তিরূপেণ সংস্থিতা: জঙ্গল থেকে র‍্যাম্প, নতুন জীবনের গল্প; বস্তারের মেয়েদের ফ্যাশন শো",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0013.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0013.jpg"
  },
  {
    pageNum: 14,
    title: "১৪শ পৃষ্ঠা (সনাতনী নারী)",
    badge: "১৪শ পৃষ্ঠা",
    headline: "আমি স্বয়ংসিদ্ধা: মা প্রভাবতী দেবী: যে মায়ের কোলে তৈরি হয়েছিল এক নেতাজি",
    subHeadline: "‘ঘোড়ার মতো পরিশ্রম করলে একটু লাথি মারতেও হয়’, কর্মজীবী নারীদের উদ্দেশে স্মৃতি ইরানির স্পষ্ট বার্তা",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0014.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0014.jpg"
  },
  {
    pageNum: 15,
    title: "১৫শ পৃষ্ঠা (আমি ভারত বলছি)",
    badge: "১৫শ পৃষ্ঠা",
    headline: "স্বাধীনতার রক্তবেদী: ১৬ই আগস্ট ১৯৪৬: যে প্রত্যক্ষ সংগ্রাম হিন্দু রক্তে রেঙে আছে আজও",
    subHeadline: "দ্য গ্রেট ক্যালকাটা কিলিংস ও ডাইরেক্ট অ্যাকশন ডে-র রক্তাক্ত অধ্যায় ও ইতিহাসের দর্পণ",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0015.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0015.jpg"
  },
  {
    pageNum: 16,
    title: "১৬শ পৃষ্ঠা (আপনার দৃষ্টি)",
    badge: "১৬শ পৃষ্ঠা",
    headline: "শ্রদ্ধেয় তপন ঘোষের প্রতিষ্ঠিত হিন্দু সংহতির ১৬ আগস্ট পদযাত্রা ও বেঙ্গল ভলান্টিয়ার্সের অনুষ্ঠান",
    subHeadline: "বঙ্গীয় গ্রন্থশিল্প পরিষদ: প্রকাশক, মুদ্রক ও পুস্তক পরিবেশকদের জাতীয়তাবাদী মঞ্চ",
    pageImg: "epaper_pages/Bongodhwani 17-08-26_page-0016.jpg",
    mainImg: "epaper_pages/Bongodhwani 17-08-26_page-0016.jpg"
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

  const settings = window.BongoCMS ? BongoCMS.getSettings() : { editionDateStr: "২রা আগস্ট - ৮ই আগস্ট ২০২৬", price: "₹১০.০০" };
  const page = ePaperPages[currentPageIndex];

  stage.innerHTML = `
    <div class="paper-sheet" style="transform: scale(${zoomScale}); transform-origin: top center; background:#f6efdb; border:2px solid #2e261f; padding:20px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); position:relative; max-width:1080px; margin:0 auto;">
      <div class="sheet-header-print" style="margin-bottom:14px; border-bottom:4px double #1f1914; padding-bottom:10px; text-align:center;">
        <div style="font-family:'Cinzel', var(--font-serif); font-size: 0.75rem; letter-spacing:2px; font-weight:800; color:#8b1818; text-transform:uppercase;">— প্রিমিয়াম ডিজিটাল ক্রিস্টাল ক্লিয়ার প্রিন্ট সংস্করণ —</div>
        <div class="sheet-brand-name" style="font-family:'Noto Serif Bengali', var(--font-serif); font-size:3.2rem; font-weight:900; color:#8b1818; text-shadow: 1px 1px 0px rgba(0,0,0,0.1);">বঙ্গধ্বনি</div>
        <div style="font-size: 0.95rem; font-weight:700; color:#2e261f; font-family:var(--font-vintage); margin-top:2px;">সনাতন বঙ্গের সনাতন ধ্বনি | সাপ্তাহিক ${settings.editionDateStr || "২রা আগস্ট - ৮ই আগস্ট ২০২৬"}</div>
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
