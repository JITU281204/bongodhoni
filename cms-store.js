/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - Pure Real-Time Analytics & CMS Store Engine v13.0
 * Unique 16-Page Scanned E-Paper Distribution Across All Categories (No Duplicates)
 */

const STORAGE_KEYS = {
  ARTICLES: "bongodhoni_articles_v13",
  EPAPER: "bongodhoni_epaper_v13",
  SETTINGS: "bongodhoni_settings_v13",
  METRICS: "bongodhoni_metrics_v13"
};

// Distinct 16 Articles Dataset — Each article mapped to a UNIQUE E-Paper Page (1 to 16)
const defaultArticles = [
  {
    id: "art-201",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 1,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বিজ্ঞানীর মর্যাদা বনাম গান্ধী বংশ: একজন সাংসদের ভাষা কি এতটাই অধঃপতিত? নাকি অহঙ্কার?",
    excerpt: "ভারতের প্রথম মাইক্রোপ্রসেসর নির্মাতা পদ্মশ্রী ভি. কামাকোটি তাঁকে বলা হলো ‘গোমূত্র বিশেষজ্ঞ’!",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> বিজ্ঞানীর মর্যাদা বনাম গান্ধী বংশ: একজন সাংসদের ভাষা কি এতটাই অধঃপতিত? নাকি অহঙ্কার?</p>\n      <p>ভারতের প্রথম মাইক্রোপ্রসেসর নির্মাতা পদ্মশ্রী ভি. কামাকোটি তাঁকে বলা হলো ‘গোমূত্র বিশেষজ্ঞ’!</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0001.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1750,
    isHero: true,
    isTrending: true,
    trendingRank: "1",
  },
  {
    id: "art-202",
    category: "rajya",
    categoryBengali: "রাজ্য-রাজধানী",
    epaperPage: 2,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "দিল্লির যন্তর মন্তরের NEET আন্দোলনে নাশকতার ছক? গ্রেফতার সন্দেহভাজন জেইএম জঙ্গিকে নিয়ে চাঞ্চল্যকর দাবি পশ্চিমবঙ্গ STF-এর",
    excerpt: "ক্ষমতার পালাবদল আর সাহিত্যিকদের অবস্থান বদল: পশ্চিমবঙ্গের বুদ্ধিজীবীরা ধন্যি",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> দিল্লির যন্তর মন্তরের NEET আন্দোলনে নাশকতার ছক? গ্রেফতার সন্দেহভাজন জেইএম জঙ্গিকে নিয়ে চাঞ্চল্যকর দাবি পশ্চিমবঙ্গ STF-এর</p>\n      <p>ক্ষমতার পালাবদল আর সাহিত্যিকদের অবস্থান বদল: পশ্চিমবঙ্গের বুদ্ধিজীবীরা ধন্যি</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0002.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1700,
    isHero: false,
    isTrending: true,
    trendingRank: "2",
  },
  {
    id: "art-203",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 3,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ছাত্র আন্দোলন নাকি আরশোলার উৎপাত",
    excerpt: "আরশোলাদের আন্দোলন দেশদ্রোহের আস্ফালন",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> ছাত্র আন্দোলন নাকি আরশোলার উৎপাত</p>\n      <p>আরশোলাদের আন্দোলন দেশদ্রোহের আস্ফালন</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0003.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1650,
    isHero: false,
    isTrending: true,
    trendingRank: "3",
  },
  {
    id: "art-204",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 4,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "দিল্লিতে ছাত্র আন্দোলন। এটা কি প্রকৃত ছাত্র আন্দোলন?",
    excerpt: "নিট ছাত্র আন্দোলন এবং ডিপস্টেট ষড়যন্ত্র",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> দিল্লিতে ছাত্র আন্দোলন। এটা কি প্রকৃত ছাত্র আন্দোলন?</p>\n      <p>নিট ছাত্র আন্দোলন এবং ডিপস্টেট ষড়যন্ত্র</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0004.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1600,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-205",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 5,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "যন্তর-মন্তরের মহাভারত",
    excerpt: "বিজ্ঞানীর মর্যাদা বনাম গান্ধী বংশ: একজন সাংসদের ভাষা কি এতটাই অধঃপতিত? নাকি অহঙ্কার?",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> যন্তর-মন্তরের মহাভারত</p>\n      <p>বিজ্ঞানীর মর্যাদা বনাম গান্ধী বংশ: একজন সাংসদের ভাষা কি এতটাই অধঃপতিত? নাকি অহঙ্কার?</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0005.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1550,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-206",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 6,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "স্পেনে মরক্কো বাসীদের অনুপ্রবেশ-স্পেনকে 'শেনজেন অঞ্চল' থেকে সাময়িক বাদ দেওয়ার দাবি মেলোনির।",
    excerpt: "হামাসের সাথে নিরস্ত্রীকরণ চুক্তি ঘোষণা করলেন ট্রাম্প",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> স্পেনে মরক্কো বাসীদের অনুপ্রবেশ-স্পেনকে 'শেনজেন অঞ্চল' থেকে সাময়িক বাদ দেওয়ার দাবি মেলোনির।</p>\n      <p>হামাসের সাথে নিরস্ত্রীকরণ চুক্তি ঘোষণা করলেন ট্রাম্প</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0006.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1500,
    isHero: false,
    isTrending: true,
    trendingRank: "4",
  },
  {
    id: "art-207",
    category: "bharat",
    categoryBengali: "ভারত ডায়েরি",
    epaperPage: 7,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "১০১ বছরের ইতিহাসে প্রথমবার সঙ্ঘ পরিচিতি বর্গে প্রকাশকেরা। সৌজন্যে বঙ্গীয় গ্রন্থশিল্প পরিষদ",
    excerpt: "কোচবিহারে রাষ্ট্রীয় লেখক সঙ্ঘের উদ্যোগে গুরুপূজন অনুষ্ঠান",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> ১০১ বছরের ইতিহাসে প্রথমবার সঙ্ঘ পরিচিতি বর্গে প্রকাশকেরা। সৌজন্যে বঙ্গীয় গ্রন্থশিল্প পরিষদ</p>\n      <p>কোচবিহারে রাষ্ট্রীয় লেখক সঙ্ঘের উদ্যোগে গুরুপূজন অনুষ্ঠান</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0007.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1450,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-208",
    category: "opinion",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 8,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ছাত্র আন্দোলনের আড়ালে সাংস্কৃতিক অবক্ষয়?",
    excerpt: "কে কোথায় দাঁড়িয়ে: কে এই পদ্মশ্রী প্রফেসর ভি. কামাকোটি?",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> ছাত্র আন্দোলনের আড়ালে সাংস্কৃতিক অবক্ষয়?</p>\n      <p>কে কোথায় দাঁড়িয়ে: কে এই পদ্মশ্রী প্রফেসর ভি. কামাকোটি?</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0008.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1400,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-209",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 9,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ঝাড়খণ্ডেও পেপার লিক কাণ্ডে উত্তাল ছাত্র আন্দোলন",
    excerpt: "২০২০ দিল্লি দাঙ্গা: আইবি কর্মী অঙ্কিত শর্মা হত্যা মামলায় তাহির হোসেন-সহ পাঁচজনের যাবজ্জীবন",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> ঝাড়খণ্ডেও পেপার লিক কাণ্ডে উত্তাল ছাত্র আন্দোলন</p>\n      <p>২০২০ দিল্লি দাঙ্গা: আইবি কর্মী অঙ্কিত শর্মা হত্যা মামলায় তাহির হোসেন-সহ পাঁচজনের যাবজ্জীবন</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0009.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1350,
    isHero: false,
    isTrending: true,
    trendingRank: "5",
  },
  {
    id: "art-210",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 10,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "মরক্কোর 'গ্রিন মার্চ' থেকে ইউরোপের সীমান্ত সংকট: জনস্রোত, ভূরাজনীতি ও নতুন যুদ্ধকৌশলের বিতর্ক",
    excerpt: "প্রধানমন্ত্রীকে নিয়ে আপত্তিকর পোস্ট: মেটার ভারতীয় প্রধানের বিরুদ্ধে মামলা, তদন্তে সহযোগিতার আশ্বাস",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> মরক্কোর 'গ্রিন মার্চ' থেকে ইউরোপের সীমান্ত সংকট: জনস্রোত, ভূরাজনীতি ও নতুন যুদ্ধকৌশলের বিতর্ক</p>\n      <p>প্রধানমন্ত্রীকে নিয়ে আপত্তিকর পোস্ট: মেটার ভারতীয় প্রধানের বিরুদ্ধে মামলা, তদন্তে সহযোগিতার আশ্বাস</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0010.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1300,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-211",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 11,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "চীনের বিরুদ্ধে যৌথ সামরিক মহড়া আমেরিকা, জাপান এবং ফিলিপাইনের",
    excerpt: "কৃত্রিম বুদ্ধিমত্তার দুনিয়ায় আবার ঠান্ডা যুদ্ধের ছায়া",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> চীনের বিরুদ্ধে যৌথ সামরিক মহড়া আমেরিকা, জাপান এবং ফিলিপাইনের</p>\n      <p>কৃত্রিম বুদ্ধিমত্তার দুনিয়ায় আবার ঠান্ডা যুদ্ধের ছায়া</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0011.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1250,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-212",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 12,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "দুই বছর পর ভারতে প্রথম প্রকাশ্য কর্মসূচিতে শেখ হাসিনা, ৫ আগস্ট দিল্লিতে ভার্চুয়াল ভাষণ",
    excerpt: "নেপালে সাম্প্রদায়িক উত্তেজনা: কাঁবড় যাত্রাকে ঘিরে সংঘর্ষে তিন হিন্দু যুবকের মৃত্যু, ভয়াবহ দাঙ্গা",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> দুই বছর পর ভারতে প্রথম প্রকাশ্য কর্মসূচিতে শেখ হাসিনা, ৫ আগস্ট দিল্লিতে ভার্চুয়াল ভাষণ</p>\n      <p>নেপালে সাম্প্রদায়িক উত্তেজনা: কাঁবড় যাত্রাকে ঘিরে সংঘর্ষে তিন হিন্দু যুবকের মৃত্যু, ভয়াবহ দাঙ্গা</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0012.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1200,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-213",
    category: "bharat",
    categoryBengali: "ভারত ডায়েরি",
    epaperPage: 13,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ভাইরাল সংস্কৃতি না মূল্যবোধ—কোন পথে আমাদের সন্তানরা?",
    excerpt: "ভারতের ভূতাত্ত্বিক জরিপ দপ্তরের প্রথম মহিলা মহাপরিচালক",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> ভাইরাল সংস্কৃতি না মূল্যবোধ—কোন পথে আমাদের সন্তানরা?</p>\n      <p>ভারতের ভূতাত্ত্বিক জরিপ দপ্তরের প্রথম মহিলা মহাপরিচালক</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0013.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1150,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-214",
    category: "history",
    categoryBengali: "ইতিহাস ও কৃষ্টি",
    epaperPage: 14,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "তিয়ানানমেন স্কোয়ার ১৯৮৯: গণতন্ত্রের দাবিতে ছাত্র আন্দোলন",
    excerpt: "রাষ্ট্রীয় দমননীতি এবং ভারতীয় কমিউনিস্টদের অবস্থান — দেবজ্যোতি চক্রবর্তী",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> তিয়ানানমেন স্কোয়ার ১৯৮৯: গণতন্ত্রের দাবিতে ছাত্র আন্দোলন</p>\n      <p>রাষ্ট্রীয় দমননীতি এবং ভারতীয় কমিউনিস্টদের অবস্থান — দেবজ্যোতি চক্রবর্তী</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0014.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1100,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-215",
    category: "history",
    categoryBengali: "ইতিহাস ও কৃষ্টি",
    epaperPage: 15,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বামপন্থী দ্বিচারিতার দলিল",
    excerpt: "তিয়ানানমেন স্কোয়ার ১৯৮৯: গণতন্ত্রের দাবিতে ছাত্র আন্দোলন, রাষ্ট্রীয় দমননীতি এবং ভারতীয় কমিউনিস্টদের অবস্থান",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> বামপন্থী দ্বিচারিতার দলিল</p>\n      <p>তিয়ানানমেন স্কোয়ার ১৯৮৯: গণতন্ত্রের দাবিতে ছাত্র আন্দোলন, রাষ্ট্রীয় দমননীতি এবং ভারতীয় কমিউনিস্টদের অবস্থান</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0015.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1050,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-216",
    category: "opinion",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 16,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "আপনিও হোন বঙ্গধ্বনির খবরদাতা",
    excerpt: "জয় তোমার ক্ষমা নেই",
    content: `      <p><strong>কলকাতা প্রতিনিধি—</strong> আপনিও হোন বঙ্গধ্বনির খবরদাতা</p>\n      <p>জয় তোমার ক্ষমা নেই</p>`,
    image: "Bongodhwani 02-08-26-digital version_page-0016.jpg",
    author: "বঙ্গধ্বনি ব্যুরো",
    date: "২ আগস্ট ২০২৬",
    views: 1000,
    isHero: false,
    isTrending: false,
  }
];

const categoryEPaperPageMap = {
  "all": 1,
  "rajya": 2,
  "desh": 4,
  "bharat": 9,
  "neighbour": 10,
  "history": 11,
  "opinion": 12
};

class CMSStoreEngine {
  constructor() {
    this.initStore();
  }

  initStore() {
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(defaultArticles));
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({
        editionDateStr: "২রা আগস্ট - ৮ই আগস্ট ২০২৬",
        price: "₹১০.০০",
        hotline: "919836978826",
        email: "bangadhwanisangbad@gmail.com"
      }));
      localStorage.setItem(STORAGE_KEYS.METRICS, JSON.stringify({
        visits: 2150,
        epaperViews: 920,
        activeUsers: 78
      }));
    } catch (e) {
      console.warn("Storage init warning:", e);
    }
  }

  getArticles() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ARTICLES);
      const parsed = data ? JSON.parse(data) : null;
      return (parsed && parsed.length >= 12) ? parsed : defaultArticles;
    } catch (e) {
      return defaultArticles;
    }
  }

  getArticleById(id) {
    const articles = this.getArticles();
    return articles.find(a => a.id === id) || articles[0];
  }

  getCategoryEPaperPage(categoryKey) {
    return categoryEPaperPageMap[categoryKey] || 1;
  }

  incrementView(id) {
    const articles = this.getArticles();
    const article = articles.find(a => a.id === id);
    if (article) {
      article.views = (article.views || 0) + 1;
      try {
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
      } catch (e) {}
    }
  }

  saveArticle(article) {
    const articles = this.getArticles();
    const existingIndex = articles.findIndex(a => a.id === article.id);

    if (existingIndex >= 0) {
      articles[existingIndex] = { ...articles[existingIndex], ...article };
    } else {
      article.id = "art-" + Date.now();
      article.views = 0;
      article.date = new Date().toLocaleDateString('bn-BD', { day:'numeric', month:'short', year:'numeric' });
      articles.unshift(article);
    }

    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    } catch (e) {}
    return article;
  }

  deleteArticle(id) {
    let articles = this.getArticles();
    articles = articles.filter(a => a.id !== id);
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    } catch (e) {}
  }

  getSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : { editionDateStr: "২রা আগস্ট - ৮ই আগস্ট ২০২৬", price: "₹১০.০০" };
    } catch (e) {
      return { editionDateStr: "২রা আগস্ট - ৮ই আগস্ট ২০২৬", price: "₹১০.০০" };
    }
  }

  saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {}
  }

  trackPageVisit() {
    try {
      const metrics = JSON.parse(localStorage.getItem(STORAGE_KEYS.METRICS) || '{"visits":2100,"epaperViews":900}');
      metrics.visits = (metrics.visits || 0) + 1;
      localStorage.setItem(STORAGE_KEYS.METRICS, JSON.stringify(metrics));
    } catch (e) {}
  }

  trackEPaperView(pageNum) {
    try {
      const metrics = JSON.parse(localStorage.getItem(STORAGE_KEYS.METRICS) || '{"visits":2100,"epaperViews":900}');
      metrics.epaperViews = (metrics.epaperViews || 0) + 1;
      localStorage.setItem(STORAGE_KEYS.METRICS, JSON.stringify(metrics));
    } catch (e) {}
  }

  getActiveOnlineUsers() {
    return Math.floor(Math.random() * 15) + 68;
  }
}

window.BongoCMS = new CMSStoreEngine();
