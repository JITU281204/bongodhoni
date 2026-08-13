/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - Pure Real-Time Analytics & CMS Store Engine v13.0
 * Unique 16-Page Scanned E-Paper Distribution Across All Categories (No Duplicates)
 */

const STORAGE_KEYS = {
  ARTICLES: "bongodhoni_articles_v15",
  EPAPER: "bongodhoni_epaper_v15",
  SETTINGS: "bongodhoni_settings_v15",
  METRICS: "bongodhoni_metrics_v15"
};

// Distinct 18 Articles Dataset — Each article mapped to a UNIQUE E-Paper Page (1 to 18)
const defaultArticles = [
  {
    id: "art-201",
    category: "all",
    categoryBengali: "প্রচ্ছদ",
    epaperPage: 1,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বাংলাদেশের পরিস্থিতি ও ভারতের নিরাপত্তা: সীমান্তে হাই এলার্ট",
    excerpt: "বাংলাদেশের উদ্ভূত পরিস্থিতিতে ভারতের নিরাপত্তা জোরদার করা হয়েছে। সীমান্তে হাই এলার্ট জারি করা হয়েছে।",
    content: "<p><strong>কলকাতা প্রতিনিধি—</strong> বাংলাদেশের পরিস্থিতি ও ভারতের নিরাপত্তা নিয়ে বিশেষ সতর্কতা।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0001.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1850,
    isHero: true,
    isTrending: true,
    trendingRank: "1",
  },
  {
    id: "art-202",
    category: "rajya",
    categoryBengali: "বিশেষ খবর",
    epaperPage: 2,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "হিন্দুদের ওপর হামলা: বাংলাদেশ পরিস্থিতি নিয়ে উদ্বিগ্ন ভারত",
    excerpt: "শেখ হাসিনার পলায়ন ও পরবর্তী পরিস্থিতিতে বাংলাদেশে হিন্দুদের ওপর হামলার ঘটনায় তীব্র উদ্বেগ প্রকাশ করেছে ভারত সরকার।",
    content: "<p><strong>নয়াদিল্লি—</strong> হিন্দুদের ওপর হামলা: বাংলাদেশ পরিস্থিতি নিয়ে উদ্বিগ্ন ভারত।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0002.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1750,
    isHero: false,
    isTrending: true,
    trendingRank: "2",
  },
  {
    id: "art-203",
    category: "desh",
    categoryBengali: "দেশের খবর",
    epaperPage: 3,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "ওয়েনাড় ভূমিধস: সংসদে আবেগপ্রবণ রাহুল গান্ধী",
    excerpt: "কেরালার ওয়েনাড়ের ভয়াবহ ভূমিধসের ঘটনায় সংসদে বক্তব্য রাখতে গিয়ে আবেগপ্রবণ হয়ে পড়লেন রাহুল গান্ধী। উদ্ধারকার্যে সেনার তৎপরতা অব্যাহত।",
    content: "<p><strong>দিল্লি প্রতিনিধি—</strong> ওয়েনাড় ভূমিধস: সংসদে আবেগপ্রবণ রাহুল গান্ধী।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0003.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1650,
    isHero: false,
    isTrending: true,
    trendingRank: "3",
  },
  {
    id: "art-204",
    category: "desh",
    categoryBengali: "বিশেষ খবর",
    epaperPage: 4,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "প্যারিস অলিম্পিক: মনু ভাকেরের ঐতিহাসিক ব্রোঞ্জ",
    excerpt: "শুটিংয়ে ভারতের খরা কাটল, প্যারিস অলিম্পিকে ব্রোঞ্জ জিতে ইতিহাস গড়লেন মনু ভাকের।",
    content: "<p><strong>প্যারিস—</strong> প্যারিস অলিম্পিক: মনু ভাকেরের ঐতিহাসিক ব্রোঞ্জ জয়।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0004.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1600,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-205",
    category: "rajya",
    categoryBengali: "রাজ্যের খবর",
    epaperPage: 5,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ডিভিসি-র জল ছাড়া নিয়ে রাজ্যের উদ্বেগ",
    excerpt: "বন্যা পরিস্থিতি মোকাবিলায় নবান্নের প্রস্তুতি। ডিভিসি বেশি জল ছাড়লে রাজ্যের একাধিক জেলা প্লাবিত হতে পারে।",
    content: "<p><strong>কলকাতা প্রতিনিধি—</strong> ডিভিসি-র জল ছাড়া নিয়ে রাজ্যের উদ্বেগ বাড়ছে।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0005.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1550,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-206",
    category: "rajya",
    categoryBengali: "বিশেষ খবর",
    epaperPage: 6,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "আরজি কর হাসপাতালে চিকিৎসক পড়ুয়ার রহস্যমৃত্যু",
    excerpt: "তদন্তে সিট গঠন পুলিশের। আরজি কর হাসপাতালে এক নারী চিকিৎসকের রহস্যজনক মৃত্যুতে চাঞ্চল্য।",
    content: "<p><strong>কলকাতা প্রতিনিধি—</strong> আরজি কর হাসপাতালে চিকিৎসক পড়ুয়ার রহস্যমৃত্যু।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0006.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1500,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-207",
    category: "rajya",
    categoryBengali: "রাজ্যের খবর",
    epaperPage: 7,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "পঞ্চায়েত স্তরে দুর্নীতি রুখতে কড়া বার্তা মুখ্যমন্ত্রীর",
    excerpt: "প্রশাসনিক বৈঠকে কড়া নির্দেশ দিলেন মুখ্যমন্ত্রী। পঞ্চায়েতের কাজে স্বচ্ছতা আনতে হবে।",
    content: "<p><strong>কলকাতা প্রতিনিধি—</strong> পঞ্চায়েত স্তরে দুর্নীতি রুখতে কড়া বার্তা মুখ্যমন্ত্রীর।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0007.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1450,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-208",
    category: "rajya",
    categoryBengali: "বিশেষ খবর",
    epaperPage: 8,
    district: "purulia",
    districtBengali: "পুরুলিয়া",
    title: "বৃষ্টির ঘাটতি দক্ষিণবঙ্গে, চিন্তায় কৃষকরা",
    excerpt: "পর্যাপ্ত বৃষ্টির অভাবে ধান চাষে প্রভাব পড়ার আশঙ্কা। দক্ষিণবঙ্গের কৃষকদের মাথায় হাত।",
    content: "<p><strong>পুরুলিয়া প্রতিনিধি—</strong> বৃষ্টির ঘাটতি দক্ষিণবঙ্গে, চিন্তায় কৃষকরা।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0008.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1400,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-209",
    category: "neighbour",
    categoryBengali: "বিদেশ",
    epaperPage: 9,
    district: "international",
    districtBengali: "আন্তর্জাতিক",
    title: "মক্কায় নতুন অঙ্ক: সৌদি-তুরস্ক-পাকিস্তান",
    excerpt: "মধ্যপ্রাচ্যের রাজনীতিতে নতুন সমীকরণ তৈরি হচ্ছে। মক্কায় এক বিশেষ বৈঠকে তিনটি দেশের রাষ্ট্রপ্রধানরা মিলিত হলেন।",
    content: "<p><strong>আন্তর্জাতিক ডেস্ক—</strong> মক্কায় নতুন অঙ্ক: সৌদি-তুরস্ক-পাকিস্তান।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0009.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1350,
    isHero: false,
    isTrending: true,
    trendingRank: "4",
  },
  {
    id: "art-210",
    category: "opinion",
    categoryBengali: "সম্পাদক",
    epaperPage: 10,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বাংলাদেশের পালাবদল ও ভারতের করণীয়",
    excerpt: "সম্পাদকীয় কলম: প্রতিবেশী দেশের এই পালাবদলের প্রভাবে ভারতের কৌশলগত ও নিরাপত্তাজনিত কী পদক্ষেপ নেওয়া উচিত?",
    content: "<p><strong>সম্পাদকীয়—</strong> বাংলাদেশের পালাবদল ও ভারতের করণীয়।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0010.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1300,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-211",
    category: "opinion",
    categoryBengali: "বিতর্ক-বিমর্শ",
    epaperPage: 11,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "সংরক্ষণ নীতি ও সুপ্রিম কোর্টের রায়",
    excerpt: "ক্রিমি লেয়ার নিয়ে বিতর্ক নতুন মাত্রা পেয়েছে। সুপ্রিম কোর্টের সাম্প্রতিক রায়ে এসসি/এসটি সংরক্ষণ নীতি নিয়ে পুনর্বিবেচনার সুযোগ।",
    content: "<p><strong>বিশেষ প্রতিবেদন—</strong> সংরক্ষণ নীতি ও সুপ্রিম কোর্টের রায় নিয়ে বিতর্ক।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0011.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1250,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-212",
    category: "opinion",
    categoryBengali: "বিতর্ক-বিমর্শ",
    epaperPage: 12,
    district: "dhaka",
    districtBengali: "ঢাকা",
    title: "কোটা সংস্কার আন্দোলন ও বাংলাদেশের ভবিষ্যত",
    excerpt: "ছাত্র রাজনীতির নতুন মোড়। কোটা আন্দোলন কীভাবে গোটা দেশের রাজনীতিকে প্রভাবিত করল তার বিশ্লেষণ।",
    content: "<p><strong>বিশেষ প্রতিবেদন—</strong> কোটা সংস্কার আন্দোলন ও বাংলাদেশের ভবিষ্যত।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0012.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1200,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-213",
    category: "neighbour",
    categoryBengali: "আন্তর্জাতিক সম্পর্ক",
    epaperPage: 13,
    district: "international",
    districtBengali: "আন্তর্জাতিক",
    title: "মক্কা চুক্তির পাল্টা সমীকরণ! আরও ঘনিষ্ঠ হতে পারে ভারত-ইজরায়েল",
    excerpt: "বাংলাদেশ আর বেলুচিস্তানের পরে আবারও স্বাধীনতার ডাক পাক মুলুকে।",
    content: "<p><strong>আন্তর্জাতিক ডেস্ক—</strong> মক্কা চুক্তির পাল্টা সমীকরণ! আরও ঘনিষ্ঠ হতে পারে ভারত-ইজরায়েল।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0013.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1150,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-214",
    category: "neighbour",
    categoryBengali: "পড়শী কথা",
    epaperPage: 14,
    district: "international",
    districtBengali: "আন্তর্জাতিক",
    title: "আজ 'বালোচিস্তান স্বাধীনতা দিবস'! স্বাধীনতার দাবিতে সরব বালোচরা",
    excerpt: "ইসলামাবাদের চোখরাঙানি উপেক্ষা করে স্বাধীনতার দাবিতে সরব বালোচরা। বালোচদের কণ্ঠরোধ করা যাবেনা।",
    content: "<p><strong>আন্তর্জাতিক ডেস্ক—</strong> আজ বালোচিস্তান স্বাধীনতা দিবস! স্বাধীনতার দাবিতে সরব বালোচরা।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0014.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1100,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-215",
    category: "history",
    categoryBengali: "সনাতনী নারী",
    epaperPage: 15,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "নেতাজিকে অপমান মানে ইতিহাসকে অপমান",
    excerpt: "কমলা দাশগুপ্ত: বাংলার এক সাহসী নারী বিপ্লবী। বাংলার নারী বিপ্লবীদের অবদান।",
    content: "<p><strong>ইতিহাসের পাতা থেকে—</strong> নেতাজিকে অপমান মানে ইতিহাসকে অপমান।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0015.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1050,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-216",
    category: "history",
    categoryBengali: "সনাতনী নারী",
    epaperPage: 16,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বাবার শোক বুকে নিয়েই সোনার ইতিহাস, কমনওয়েলথে জুডোর প্রথম ভারতীয় স্বর্ণজয়ী অস্মিতা দে",
    excerpt: "নারীর ন্যায়বিচার নিশ্চিত করতে ‘জাস্টিস ফর ওমেন’ সম্মেলন।",
    content: "<p><strong>ক্রীড়া ডেস্ক—</strong> বাবার শোক বুকে নিয়েই সোনার ইতিহাস অস্মিতা দের।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0016.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 1000,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-217",
    category: "bharat",
    categoryBengali: "আমি ভারত বলছি",
    epaperPage: 17,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "হুতাত্মা ক্ষুদিরাম বসু: গীতার আদর্শে অমর এক অষ্টাদশবর্ষীয় বিপ্লবীর আত্মবলিদান",
    excerpt: "আমি ভারত বলছি: স্বাধীনতা সংগ্রামে ক্ষুদিরাম বসুর আত্মবলিদান ও তাঁর আদর্শের কথা।",
    content: "<p><strong>ইতিহাসের পাতা থেকে—</strong> হুতাত্মা ক্ষুদিরাম বসু: গীতার আদর্শে অমর এক অষ্টাদশবর্ষীয় বিপ্লবীর আত্মবলিদান।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0017.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 950,
    isHero: false,
    isTrending: false,
  },
  {
    id: "art-218",
    category: "all",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 18,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "আপনিও হোন বঙ্গধ্বনির খবরদাতা",
    excerpt: "বঙ্গীয় গ্রন্থশিল্প পরিষদ এবং সাধারণ পাঠকদের জন্য বিশেষ সুযোগ।",
    content: "<p><strong>বিজ্ঞপ্তি—</strong> আপনিও হোন বঙ্গধ্বনির খবরদাতা।</p>",
    image: "epaper_pages/Bongodhwani 09-08-26-digital version_page-0018.jpg",
    author: "বঙ্গধ্বনি রাষ্ট্রীয় লেখক সঙ্ঘ",
    date: "৯ আগস্ট ২০২৬",
    views: 900,
    isHero: false,
    isTrending: false,
  }
];

const categoryEPaperPageMap = {
  "all": 1,
  "rajya": 2,
  "desh": 3,
  "bharat": 7,
  "neighbour": 6,
  "history": 14,
  "opinion": 8
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
