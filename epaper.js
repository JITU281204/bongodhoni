/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - e-Paper Digital Replica Reader v7.0
 * Manages Full 16-Page High-Res Crystal Clear Print Edition Sheet Rendering, Thumbnails & Zoom Controls
 */

const ePaperPages = [
  { pageNum: 1, title: "১ম পৃষ্ঠা (প্রচ্ছদ)", badge: "১ম পৃষ্ঠা", headline: "বিজ্ঞানীর মর্যাদা বনাম গান্ধী বংশ: একজন সাংসদের ভাষা কি এতটাই অধঃপতিত? নাকি অহঙ্কার?", subHeadline: "ভারতের প্রথম মাইক্রোপ্রসেসর নির্মাতা পদ্মশ্রী ভি. কামাকোটি তাঁকে বলা হলো ‘গোমূত্র বিশেষজ্ঞ’!", pageImg: "Bongodhwani 02-08-26-digital version_page-0001.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0001.jpg" },
  { pageNum: 2, title: "২য় পৃষ্ঠা (রাজ্য)", badge: "২য় পৃষ্ঠা", headline: "দিল্লির যন্তর মন্তরের NEET আন্দোলনে নাশকতার ছক? গ্রেফতার সন্দেহভাজন জেইএম জঙ্গিকে নিয়ে চাঞ্চল্যকর দাবি পশ্চিমবঙ্গ STF-এর", subHeadline: "ক্ষমতার পালাবদল আর সাহিত্যিকদের অবস্থান বদল: পশ্চিমবঙ্গের বুদ্ধিজীবীরা ধন্যি", pageImg: "Bongodhwani 02-08-26-digital version_page-0002.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0002.jpg" },
  { pageNum: 3, title: "৩য় পৃষ্ঠা (ছাত্র আন্দোলন)", badge: "৩য় পৃষ্ঠা", headline: "ছাত্র আন্দোলন নাকি আরশোলার উৎপাত", subHeadline: "আরশোলাদের আন্দোলন দেশদ্রোহের আস্ফালন", pageImg: "Bongodhwani 02-08-26-digital version_page-0003.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0003.jpg" },
  { pageNum: 4, title: "৪র্থ পৃষ্ঠা (ছাত্র আন্দোলন)", badge: "৪র্থ পৃষ্ঠা", headline: "দিল্লিতে ছাত্র আন্দোলন। এটা কি প্রকৃত ছাত্র আন্দোলন?", subHeadline: "নিট ছাত্র আন্দোলন এবং ডিপস্টেট ষড়যন্ত্র", pageImg: "Bongodhwani 02-08-26-digital version_page-0004.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0004.jpg" },
  { pageNum: 5, title: "৫ম পৃষ্ঠা (ছাত্র আন্দোলন)", badge: "৫ম পৃষ্ঠা", headline: "যন্তর-মন্তরের মহাভারত", subHeadline: "বিজ্ঞানীর মর্যাদা বনাম গান্ধী বংশ: একজন সাংসদের ভাষা কি এতটাই অধঃপতিত? নাকি অহঙ্কার?", pageImg: "Bongodhwani 02-08-26-digital version_page-0005.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0005.jpg" },
  { pageNum: 6, title: "৬ষ্ঠ পৃষ্ঠা (বিদেশ)", badge: "৬ষ্ঠ পৃষ্ঠা", headline: "স্পেনে মরক্কো বাসীদের অনুপ্রবেশ-স্পেনকে 'শেনজেন অঞ্চল' থেকে সাময়িক বাদ দেওয়ার দাবি মেলোনির।", subHeadline: "হামাসের সাথে নিরস্ত্রীকরণ চুক্তি ঘোষণা করলেন ট্রাম্প", pageImg: "Bongodhwani 02-08-26-digital version_page-0006.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0006.jpg" },
  { pageNum: 7, title: "৭ম পৃষ্ঠা (সংগঠন সমাচার)", badge: "৭ম পৃষ্ঠা", headline: "১০১ বছরের ইতিহাসে প্রথমবার সঙ্ঘ পরিচিতি বর্গে প্রকাশকেরা। সৌজন্যে বঙ্গীয় গ্রন্থশিল্প পরিষদ", subHeadline: "কোচবিহারে রাষ্ট্রীয় লেখক সঙ্ঘের উদ্যোগে গুরুপূজন অনুষ্ঠান", pageImg: "Bongodhwani 02-08-26-digital version_page-0007.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0007.jpg" },
  { pageNum: 8, title: "৮ম পৃষ্ঠা (সম্পাদক দর্পণ)", badge: "৮ম পৃষ্ঠা", headline: "ছাত্র আন্দোলনের আড়ালে সাংস্কৃতিক অবক্ষয়?", subHeadline: "কে কোথায় দাঁড়িয়ে: কে এই পদ্মশ্রী প্রফেসর ভি. কামাকোটি?", pageImg: "Bongodhwani 02-08-26-digital version_page-0008.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0008.jpg" },
  { pageNum: 9, title: "৯ম পৃষ্ঠা (বিতর্ক-বিমর্শ)", badge: "৯ম পৃষ্ঠা", headline: "ঝাড়খণ্ডেও পেপার লিক কাণ্ডে উত্তাল ছাত্র আন্দোলন", subHeadline: "২০২০ দিল্লি দাঙ্গা: আইবি কর্মী অঙ্কিত শর্মা হত্যা মামলায় তাহির হোসেন-সহ পাঁচজনের যাবজ্জীবন", pageImg: "Bongodhwani 02-08-26-digital version_page-0009.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0009.jpg" },
  { pageNum: 10, title: "১০ম পৃষ্ঠা (বিতর্ক-বিমর্শ)", badge: "১০ম পৃষ্ঠা", headline: "মরক্কোর 'গ্রিন মার্চ' থেকে ইউরোপের সীমান্ত সংকট: জনস্রোত, ভূরাজনীতি ও নতুন যুদ্ধকৌশলের বিতর্ক", subHeadline: "প্রধানমন্ত্রীকে নিয়ে আপত্তিকর পোস্ট: মেটার ভারতীয় প্রধানের বিরুদ্ধে মামলা, তদন্তে সহযোগিতার আশ্বাস", pageImg: "Bongodhwani 02-08-26-digital version_page-0010.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0010.jpg" },
  { pageNum: 11, title: "১১শ পৃষ্ঠা (আন্তর্জাতিক সম্পর্ক)", badge: "১১শ পৃষ্ঠা", headline: "চীনের বিরুদ্ধে যৌথ সামরিক মহড়া আমেরিকা, জাপান এবং ফিলিপাইনের", subHeadline: "কৃত্রিম বুদ্ধিমত্তার দুনিয়ায় আবার ঠান্ডা যুদ্ধের ছায়া", pageImg: "Bongodhwani 02-08-26-digital version_page-0011.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0011.jpg" },
  { pageNum: 12, title: "১২শ পৃষ্ঠা (পড়শী কথা)", badge: "১২শ পৃষ্ঠা", headline: "দুই বছর পর ভারতে প্রথম প্রকাশ্য কর্মসূচিতে শেখ হাসিনা, ৫ আগস্ট দিল্লিতে ভার্চুয়াল ভাষণ", subHeadline: "নেপালে সাম্প্রদায়িক উত্তেজনা: কাঁবড় যাত্রাকে ঘিরে সংঘর্ষে তিন হিন্দু যুবকের মৃত্যু, ভয়াবহ দাঙ্গা", pageImg: "Bongodhwani 02-08-26-digital version_page-0012.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0012.jpg" },
  { pageNum: 13, title: "১৩শ পৃষ্ঠা (সনাতনী নারী)", badge: "১৩শ পৃষ্ঠা", headline: "ভাইরাল সংস্কৃতি না মূল্যবোধ—কোন পথে আমাদের সন্তানরা?", subHeadline: "ভারতের ভূতাত্ত্বিক জরিপ দপ্তরের প্রথম মহিলা মহাপরিচালক", pageImg: "Bongodhwani 02-08-26-digital version_page-0013.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0013.jpg" },
  { pageNum: 14, title: "১৪শ পৃষ্ঠা (আমি ভারত বলছি)", badge: "১৪শ পৃষ্ঠা", headline: "তিয়ানানমেন স্কোয়ার ১৯৮৯: গণতন্ত্রের দাবিতে ছাত্র আন্দোলন", subHeadline: "রাষ্ট্রীয় দমননীতি এবং ভারতীয় কমিউনিস্টদের অবস্থান — দেবজ্যোতি চক্রবর্তী", pageImg: "Bongodhwani 02-08-26-digital version_page-0014.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0014.jpg" },
  { pageNum: 15, title: "১৫শ পৃষ্ঠা (আমি ভারত বলছি)", badge: "১৫শ পৃষ্ঠা", headline: "বামপন্থী দ্বিচারিতার দলিল", subHeadline: "তিয়ানানমেন স্কোয়ার ১৯৮৯: গণতন্ত্রের দাবিতে ছাত্র আন্দোলন, রাষ্ট্রীয় দমননীতি এবং ভারতীয় কমিউনিস্টদের অবস্থান", pageImg: "Bongodhwani 02-08-26-digital version_page-0015.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0015.jpg" },
  { pageNum: 16, title: "১৬শ পৃষ্ঠা (আপনার দৃষ্টি)", badge: "১৬শ পৃষ্ঠা", headline: "আপনিও হোন বঙ্গধ্বনির খবরদাতা", subHeadline: "জয় তোমার ক্ষমা নেই", pageImg: "Bongodhwani 02-08-26-digital version_page-0016.jpg", mainImg: "Bongodhwani 02-08-26-digital version_page-0016.jpg" }
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
