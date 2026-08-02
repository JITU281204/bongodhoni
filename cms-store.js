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
  // --- HERO / PROCHHOD (PAGE 1) ---
  {
    id: "art-101",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 1,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "জেসাস করিডর: ধর্মান্তরের রাজনীতি ও ভারতের সাংস্কৃতিক নিরাপত্তা",
    excerpt: "উত্তরপূর্ব ভারত ও পাঞ্জাবে মিশনারিদের তীব্র আগ্রাসনের বিরুদ্ধে সচেতনতার ডাক দিল জাতীয় লেখক সংঘ। সাংস্কৃতিক ঐতিহ্য রক্ষায় কড়া পদক্ষেপের বার্তা দিলেন আন্তর্জাতিক গবেষকবৃন্দ।",
    content: `
      <p><strong>বিশেষ প্রতিবেদন—</strong> উত্তরপূর্ব ভারতের বিভিন্ন সীমান্ত জেলা এবং পাঞ্জাবের গ্রামীণ অঞ্চলে নতুন রূপ নিচ্ছে সুপরিকল্পিত ধর্মীয় প্রচার ও রূপান্তর আন্দোলন। জাতীয় লেখক সংঘের বার্ষিক জাতীয় সম্মেলনে উত্থাপিত গবেষণা পত্রে প্রকাশিত তথ্যে প্রকাশ পেয়েছে, এই ধরনের কার্যকলাপের পেছনে কাজ করছে বিশাল আন্তর্জাতিক তহবিল।</p>
      <p>প্রখ্যাত চিন্তাবিদ ও গবেষকদের মতে, ভারতের হাজার বছরের নিজস্ব সংস্কৃতি ও কৃষ্টির ওপর আক্রমণ প্রতিহত করতে নতুন আইন প্রণয়ন এবং স্থানীয় জনজাতির শিক্ষা ও স্বাস্থ্য সুরক্ষায় জোর দেওয়া জরুরী। দেশের সাংস্কৃতিক নিরাপত্তা সুনিশ্চিত করার লক্ষ্যে সকল নাগরিককে সচেতন হওয়ার আহ্বান জানানো হয়েছে।</p>
    `,
    image: "12_page-0001.jpg",
    author: "দেবজ্যোতি চক্রবর্তী",
    date: "৩১ মার্চ ২০২৬",
    views: 1450,
    isHero: true,
    isTrending: true,
    trendingRank: "১"
  },

  // --- RAJYA / STATE (PAGES 2 & 3) ---
  {
    id: "art-102",
    category: "rajya",
    categoryBengali: "রাজ্য-রাজধানী",
    epaperPage: 2,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "মদন-বাণে চাপে অভিষেক, এবার আইনি নোটিসের পথ! তৃণমূলের অন্তর্দ্বন্দ্বে নতুন মোড়",
    excerpt: "কামারহাটির বিধায়ক মদন মিত্রের একের পর এক বিস্ফোরক মন্তব্যের জেরে অস্বস্তিতে শাসক দল। আইনি পথে হাঁটার ইঙ্গিত তৃণমূল শীর্ষ নেতৃত্বের।",
    content: `
      <p><strong>কলকাতা প্রতিনিধি—</strong> কামারহাটির তৃণমূল বিধায়ক মদন মিত্রের দলবিরোধী ও ক্ষোভ প্রকাশমূলক মন্তব্য ঘিরে আবার উত্তপ্ত রাজ্য রাজনীতি। কুণাল ঘোষের পর এবার মদন মিত্রের বিরুদ্ধে দলীয় শৃঙ্খলার অবমাননার অভিযোগ তুলছেন শীর্ষ নেতৃত্ব।</p>
      <p>রাজ্য রাজনীতির অন্দরে কানাঘুষো, খুব শীঘ্রই তাঁকে শোকজ অথবা আইনি সতর্কবার্তা পাঠানো হতে পারে। এই ঘটনাকে কেন্দ্র করে শাসক শিবিরের ভেতরে গোষ্ঠীদ্বন্দ্ব চরম রূপ ধারণ করেছে।</p>
    `,
    image: "12_page-0002.jpg",
    author: "সৌমিক বন্দ্যোপাধ্যায়",
    date: "৩০ মার্চ ২০২৬",
    views: 1120,
    isHero: false,
    isTrending: true,
    trendingRank: "২"
  },
  {
    id: "art-107",
    category: "rajya",
    categoryBengali: "রাজ্য-রাজধানী",
    epaperPage: 3,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "অথ দেবরাজ কথা — প্রভাবের দাপট নাকি আইনের শাসন? জামিন খারিজ",
    excerpt: "বিধাননগর পুরনিগমের প্রাক্তন প্রতিনিধি দেবরাজ চক্রবর্তীর বিরুদ্ধে গুরুতর তদন্তে জামিন নাকচ করল উচ্চ আদালত। সিআইডি হেফাজত বৃদ্ধির নির্দেশ।",
    content: `
      <p><strong>রাজ্য সংবাদ—</strong> উচ্চ আদালতের রায়ে দেবরাজ চক্রবর্তীর জামিন আর্জি পুনরায় খারিজ। জালিয়াতি ও প্রভাব খাটানোর মামলার তদন্তে সিআইডি হেফাজত বৃদ্ধির নির্দেশ দেওয়া হলো।</p>
    `,
    image: "12_page-0003.jpg",
    author: "সুপ্রকাশ গুহ",
    date: "৩০ মার্চ ২০২৬",
    views: 890,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-116",
    category: "rajya",
    categoryBengali: "রাজ্য-রাজধানী",
    epaperPage: 16,
    district: "siliguri",
    districtBengali: "উত্তরবঙ্গ",
    title: "তিস্তা নদী সেচ প্রকল্প ও উত্তরবঙ্গের চা বাগান সংস্কারে নতুন কমিটি",
    excerpt: "জলপাইগুড়ি ও শিলিগুড়ির চা শ্রমিকদের সামাজিক সুরক্ষা ও ন্যূনতম মজুরি সুনিশ্চিত করতে প্রশাসনিক সিদ্ধান্ত।",
    content: `
      <p><strong>উত্তরবঙ্গ বার্তা—</strong> শিলিগুড়িতে আয়োজিত রাজ্য স্তরের বৈঠকে তিস্তা নদীর পানি বণ্টন ও চা শিল্পের সংকট নিরসনে নতুন টাস্কফোর্স গঠিত হলো।</p>
    `,
    image: "12_page-0016.jpg",
    author: "প্রশান্ত চন্দ",
    date: "২৯ মার্চ ২০২৬",
    views: 650,
    isHero: false,
    isTrending: false
  },

  // --- DESH / NATIONAL (PAGES 4, 5, 6, 7, 8) ---
  {
    id: "art-103",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 4,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ঐতিহাসিক অধ্যায়ের অবসান: নকশালমুক্ত ভারতের পূর্ণাঙ্গ রূপরেখা ঘোষণা",
    excerpt: "রেড করিডোর আজ অতীত। কেন্দ্রীয় স্বরাষ্ট্র মন্ত্রকের ঐতিহাসিক বিজ্ঞপ্তিতে দেশের লাল সন্ত্রাস কবলিত জেলাগুলির সম্পূর্ণ স্বাভাবিকতায় ফেরার কথা ঘোষণা।",
    content: `
      <p><strong>নয়া দিল্লি—</strong> দেশের চার দশকের পুরনো নকশাল সমস্যার অবসান ঘটিয়ে ভারতের কেন্দ্র সরকার ঘোষণা করল ‘নকশালমুক্ত ভারত’। বস্তার, দন্তেওয়াড়া ও গাদচিরোলির মতো একদা উপদ্রুত এলাকাগুলিতে এখন জাতীয় সড়ক, স্কুল ও ইন্টারনেট পরিষেবা স্বাভাবিক।</p>
      <p>সুরক্ষাবাহিনীর নিরলস আত্মত্যাগ এবং কেন্দ্রীয় সরকারের উন্নয়নমূলক পদক্ষেপের ফলেই আজ দেশের জঙ্গলমহল থেকে শুরু করে দণ্ডকারণ্য সর্বত্র শান্তি প্রতিষ্ঠিত হয়েছে।</p>
    `,
    image: "12_page-0004.jpg",
    author: "অভিজ্ঞান রায়",
    date: "২৯ মার্চ ২০২৬",
    views: 980,
    isHero: false,
    isTrending: true,
    trendingRank: "৩"
  },
  {
    id: "art-108",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 5,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ভারতের উপর অভিভাবকের ভঙ্গি পরিত্যাগ করুক The New York Times",
    excerpt: "আন্তর্জাতিক সংবাদমাধ্যমের পক্ষপাতদুষ্ট রিপোর্টিংয়ের কড়া জবাব দিল ভারতীয় বিচারব্যবস্থা ও আন্তর্জাতিক বিশ্লেষক সমাজ।",
    content: `
      <p><strong>আন্তর্জাতিক ডেক্স—</strong> ভারতের অভ্যন্তরীণ সার্বভৌমত্ব নিয়ে মন্তব্য করা নিউ ইয়র্ক টাইমসের কড়া সমালোচনা করা হলো বঙ্গধ্বনির বিশেষ কলামে।</p>
    `,
    image: "12_page-0005.jpg",
    author: "কৌশিক গঙ্গোপাধ্যায়",
    date: "২৮ মার্চ ২০২৬",
    views: 750,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-112",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 6,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "প্রতিরক্ষা ক্ষেত্রে স্বাবলম্বী ভারত: দেশীয় মিসাইল ও সমরাস্ত্রের সফল মহড়া",
    excerpt: "ডিআরডিও কর্তৃক সম্পূর্ণ দেশীয় প্রযুক্তিতে তৈরি প্রলয় ও অগ্নি সিরিজের সফল পরীক্ষার পর সীমান্ত নিরাপত্তা সুদৃঢ়।",
    content: `
      <p><strong>নয়া দিল্লি প্রতিনিধি—</strong> ভারতের প্রতিরক্ষা ক্ষেত্র এখন বিশ্বমানের। ভারতীয় সেনাবাহিনীর মেক ইন ইন্ডিয়া উদ্যোগ অভূতপূর্ব সফলতা অর্জন করেছে।</p>
    `,
    image: "12_page-0006.jpg",
    author: "বিক্রমাদিত্য মুখার্জি",
    date: "২৮ মার্চ ২০২৬",
    views: 680,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-117",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 7,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "অর্থনীতির নতুন রেকর্ড: জিডিপি প্রবৃদ্ধিতে বিশ্বের শীর্ষে ভারতের অবস্থান",
    excerpt: "রিজার্ভ ব্যাঙ্ক ও আন্তর্জাতিক অর্থ ভাণ্ডারের যৌথ পরিসংখ্যানে ভারতের শিল্প ও উৎপাদন ক্ষেত্রের অভাবনীয় বিকাশ উন্মোচিত।",
    content: `
      <p><strong>অর্থনীতি ডেক্স—</strong> ডিজিটাল পেমেন্ট, পরিকাঠামো উন্নয়ন এবং রপ্তানি বৃদ্ধির সুবাদে ভারতীয় অর্থনীতি শক্তিশালী ভিত্তির ওপর প্রতিষ্ঠিত।</p>
    `,
    image: "12_page-0007.jpg",
    author: "অরিন্দম দত্ত",
    date: "২৭ মার্চ ২০২৬",
    views: 610,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-120",
    category: "desh",
    categoryBengali: "দেশ ও রাজনীতি",
    epaperPage: 8,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "খেলার দুনিয়ায় ভারতের জয়যাত্রা: অলিম্পিক প্রস্তুতির নতুন রূপরেখা",
    excerpt: "আন্তর্জাতিক অ্যাথলেটিক্সে ভারতীয় অ্যাথলিটদের একের পর এক স্বর্ণপদক জয় ও বিশ্বমানের প্রশিক্ষণ সুবিধা।",
    content: `
      <p><strong>ক্রীড়া অঙ্গন—</strong> ভারতের ক্রীড়াবিদরা আন্তর্জাতিক মঞ্চে দেশের নাম উজ্জ্বল করছেন।</p>
    `,
    image: "12_page-0008.jpg",
    author: "সোমনাথ মুখার্জী",
    date: "২৭ মার্চ ২০২৬",
    views: 570,
    isHero: false,
    isTrending: false
  },

  // --- BHARAT DIARY (PAGE 9 & 13) ---
  {
    id: "art-105",
    category: "bharat",
    categoryBengali: "ভারত ডায়েরি",
    epaperPage: 9,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "৪৮০ বছরের হিন্দু প্রতিরোধ — ইতিহাসের বিজয়ী কাহিনি ও সাংস্কৃতিক পুনর্জাগরণ",
    excerpt: "রাম জন্মভূমি আন্দোলন থেকে শুরু করে ঐতিহাসিক বিজয়নগর সাম্রাজ্যের স্মৃতি — ভারতের স্বাধিকার রক্ষার অদম্য ইতিহাস।",
    content: `
      <p><strong>ঐতিহাসিক আলেখ্য—</strong> ভারতের ইতিহাস শুধুই পরাধীনতা বা হারের গল্প নয়, তা হলো যুগ যুগ ধরে অদম্য প্রতিরোধ ও বিজয়ের ইতিহাস। বহু আক্রমণ ও নিপীড়ন সহ্য করেও ভারতের বৈদিক ও সনাতন ধারা সজীব রয়েছে।</p>
      <p>আজকের যুবসমাজকে আমাদের পরাক্রমশালী পূর্বপুরুষদের প্রকৃত বীরগাথা জানানোই বঙ্গধ্বনির প্রধান অঙ্গীকার।</p>
    `,
    image: "12_page-0009.jpg",
    author: "শুভ্রাংশু সরকার",
    date: "২৭ মার্চ ২০২৬",
    views: 890,
    isHero: false,
    isTrending: true,
    trendingRank: "৪"
  },
  {
    id: "art-110",
    category: "bharat",
    categoryBengali: "ভারত ডায়েরি",
    epaperPage: 13,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "উত্তরপূর্ব ভারতের জনজাতি সংস্কৃতি ও বৈদিক ঐতিহ্যের মেলবন্ধন",
    excerpt: "অরুণাচল ও নাগাল্যান্ডের নিজস্ব পরব ও লোকজ সংস্কৃতির সংরক্ষণ প্রক্রিয়ায় নতুন আন্তর্জাতিক গবেষণা।",
    content: `
      <p><strong>কৃষ্টি ডেক্স—</strong> ভারতের সীমান্ত অঞ্চলের জনজাতিদের প্রাচীন প্রথা ও পরিবেশ বান্ধব জীবনযাত্রা আজ বিশ্ববাসীর কাছে অনুকরণীয়।</p>
    `,
    image: "12_page-0013.jpg",
    author: "হিমাদ্রি চৌধুরী",
    date: "২৬ মার্চ ২০২৬",
    views: 520,
    isHero: false,
    isTrending: false
  },
    content: `
      <p><strong>উত্তরাখণ্ড বার্তা—</strong> হিমালয় কোলে অবস্থিত বদ্রীনাথ ও কেদারনাথ ধামে যাতায়াত আরও সুগম ও নিরাপদ করতে অল-ওয়েদার রোপওয়ে প্রকল্পের কাজ সম্পন্ন।</p>
    `,
    image: "12_page-0009.jpg",
    author: "হিমাদ্রি সেনগুপ্ত",
    date: "২৫ মার্চ ২০২৬",
    views: 640,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-123",
    category: "bharat",
    categoryBengali: "ভারত ডায়েরি",
    epaperPage: 13,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বিবেকানন্দ কেন্দ্র ও কন্যাকুমারীর স্মারক ভবনে আন্তর্জাতিক ভারতবিদ্যা মহাসম্মেলন",
    excerpt: "স্বামী বিবেকানন্দের বাণী ও বিশ্বজনীন মানবতাবোধ নিয়ে বিশ্বের ৪০টিরও বেশি দেশের গবেষকদের আলোচনা।",
    highlights: [
      "কন্যাকুমারীতে ভারতের সনাতন জ্ঞানধারা ও বেদান্ত দর্শনের পুনশ্চর্চা",
      "বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলির মধ্যে চুক্তি স্বাক্ষর",
      "তরুণ সমাজকে প্রাচ্য দর্শনে উদ্বুদ্ধ করার নতুন পদক্ষেপ"
    ],
    content: `
      <p><strong>কন্যাকুমারী প্রতিনিধি—</strong> কন্যাকুমারী বিবেকানন্দ পাথরে আন্তর্জাতিক ভারতবিদ্যা সেমিনারে ভারতীয় দর্শন ও আধুনিক বিজ্ঞানের সংযোগ তুলে ধরা হলো।</p>
    `,
    image: "12_page-0013.jpg",
    author: "অধ্যাপক অত্রি শাস্ত্রী",
    date: "২৪ মার্চ ২০২৬",
    views: 590,
    isHero: false,
    isTrending: false
  },

  // --- NEIGHBOURS (PAGES 10 & 14) ---
  {
    id: "art-106",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 10,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "দক্ষিণ এশিয়ায় ভূ-রাজনীতি ও সীমান্ত সুরক্ষা: বিশেষ বিশ্লেষণ",
    excerpt: "বাংলাদেশ, মায়ানমার ও নেপালের রাজনৈতিক অস্থিরতা ভারতের উত্তর-পূর্ব সীমান্তে কী বার্তা দিচ্ছে? কড়া পর্যবেক্ষণ।",
    highlights: [
      "প্রতিবেশী রাষ্ট্রসমূহের অভ্যন্তরীণ অস্থিতিশীলতা ও ভারতের কড়া নজরদারি",
      "সীমান্তবর্তী এলাকায় অনুপ্রবেশ রুখতে বিএসএফ-এর নতুন স্মার্ট সার্ভিল্যান্স",
      "ভারত মহাসাগরীয় অঞ্চলের বাণিজ্য পথ সুসুরক্ষিত রাখার কৌশলগত মিশন"
    ],
    content: `
      <p><strong>আন্তর্জাতিক বিশ্লেষণ—</strong> ভারত মহাসাগরীয় অঞ্চলের ভূ-রাজনৈতিক সমীকরণ দ্রুত পরিবর্তিত হচ্ছে। প্রতিবেশী রাষ্ট্রগুলির অভ্যন্তরীণ সংকট এবং বৈদেশিক অনুপ্রবেশ ভারতের জাতীয় সুরক্ষার জন্য অত্যন্ত স্পর্শকাতর।</p>
    `,
    image: "12_page-0010.jpg",
    author: "অনুপম রক্ষিত",
    date: "২৬ মার্চ ২০২৬",
    views: 790,
    isHero: false,
    isTrending: true,
    trendingRank: "৫"
  },
  {
    id: "art-114",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 14,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "মায়ানমার সীমান্ত ও বঙ্গোপসাগরে ভারতের স্ট্র্যাটেজিক পদক্ষেপ",
    excerpt: "কালাদান মাল্টিমোডাল প্রজেক্ট ও পোর্ট অফ সিটওয়ে চালুর মাধ্যমে উত্তর-পূর্ব ভারতের নতুন আন্তর্জাতিক প্রবেশদ্বার।",
    highlights: [
      "কালাদান প্রজেক্ট চালুর মাধ্যমে কলকাতা থেকে শিলিগুড়ি ও মিজোরামের বিকল্প বাণিজ্য পথ",
      "মিজোরাম সীমান্তে মুক্ত সীমান্ত চলাচলে কড়াকড়ি ও বায়োমেট্রিক নজরদারি",
      "বঙ্গোপসাগরে নৌবাহিনীর যৌথ যুদ্ধমহড়ায় বন্ধুভাবাপন্ন দেশের উপস্থিতি"
    ],
    content: `
      <p><strong>সীমান্ত সংবাদ—</strong> বঙ্গোপসাগরে নিরাপত্তার জোরদার ব্যবস্থা গ্রহণ করেছে ভারতীয় নৌবাহিনী।</p>
    `,
    image: "12_page-0014.jpg",
    author: "রচিতা বন্দোপাধ্যায়",
    date: "২৫ মার্চ ২০২৬",
    views: 610,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-124",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 10,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "হিমালয় পারের ভূ-রাজনীতি: নেপাল ও ভুটানের সঙ্গে নতুন কূটনৈতিক দ্বিপাক্ষিক চুক্তি",
    excerpt: "জলবিদ্যুৎ শক্তি বিনিময় ও বাণিজ্য পথ সম্প্রসারণে নতুন জলপথের উদ্বোধন।",
    highlights: [
      "ভুটানের সাথে সরাসরি ট্রেন সংযোগ ও বাণিজ্যিক টার্মিনাল স্থাপন",
      "নেপালের সাথে মুক্ত বিদ্যুৎ বাণিজ্য চুক্তিতে যৌথ বিনিয়োগের সম্মতি",
      "চীন সীমান্ত সংলগ্ন হিমালয় অঞ্চলে ভারতীয় পরিকাঠামো দৃঢ়করণ"
    ],
    content: `
      <p><strong>কূটনৈতিক ডেক্স—</strong> হিমালয় অঞ্চলের প্রতিবেশী বন্ধু রাষ্ট্র নেপাল ও ভুটানের সাথে বাণিজ্যিক ও প্রতিরক্ষা সহযোগিতা সুদৃঢ় করল ভারত।</p>
    `,
    image: "12_page-0010.jpg",
    author: "পার্থপ্রতিম বসু",
    date: "২৪ মার্চ ২০২৬",
    views: 580,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-125",
    category: "neighbour",
    categoryBengali: "প্রতিবেশীর উত্থান",
    epaperPage: 14,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ভারত মহাসাগরে নৌঘাঁটি জোরদার: সেশেলস ও মরিশাসের যৌথ নিরাপত্তা মিশন",
    excerpt: "আন্তর্জাতিক বাণিজ্য রুট সুরক্ষায় কোস্ট গার্ড ও ভারতীয় নৌ সেনার যৌথ টহলদারি।",
    highlights: [
      "সেশেলসে নতুন রাডার ওয়ার্নিং স্টেশন নির্মাণ সুসম্পন্ন",
      "জলদস্যুতা ও অবৈধ মাছ শিকার বন্ধে যৌথ এয়ার পেট্রোলিং",
      "ভারত মহাসাগরে অবাধ ও নিরাপদ মুক্ত নৌ চলাচলের নিশ্চয়তা"
    ],
    content: `
      <p><strong>নৌ কলাম—</strong> ভারত মহাসাগর অঞ্চলে বন্ধু রাষ্ট্র সেশেলস ও মরিশাসের যৌথ নৌ নিরাপত্তা জোরদার করা হয়েছে।</p>
    `,
    image: "12_page-0014.jpg",
    author: "ক্যাপ্টেন সমীর দাস",
    date: "২৩ মার্চ ২০২৬",
    views: 510,
    isHero: false,
    isTrending: false
  },

  // --- HISTORY & CULTURE (PAGES 11 & 15) ---
  {
    id: "art-104",
    category: "history",
    categoryBengali: "ইতিহাস ও কৃষ্টি",
    epaperPage: 11,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "আচার্য ব্রহ্মগুপ্তের গোমূত্রিকা সূত্র — প্রাচীন ভারতীয় গণিতশাস্ত্রের ইতিহাস",
    excerpt: "আধুনিক ইউরোপিয়ান বীজগণিতের শত শত বছর আগে কীভাবে ভারতে বর্গমূল ও চক্রবাল পদ্ধতির উদ্ভাবন হয়েছিল? বিশেষ ঐতিহাসিক পর্যালোচনা।",
    highlights: [
      "সপ্তম শতকের আচার্য ব্রহ্মগুপ্ত উদ্ভাবিত বিশ্বের প্রাচীনতম বীজগণিত সূত্র",
      "ইউরোপের বহু শতবর্ষ আগে ভারতে শূন্য (0) ও ঋণাত্মক সংখ্যার গাণিতিক নিয়ম",
      "আধুনিক গণিত পাঠ্যক্রমে ভারতীয় বিজ্ঞানীদের অবদান অন্তর্ভুক্তির প্রস্তাব"
    ],
    content: `
      <p><strong>সংস্কৃতি কলাম—</strong> সপ্তম শতকের প্রখ্যাতভারতীয় গণিতজ্ঞ ও জ্যোতির্বিজ্ঞানী আচার্য ব্রহ্মগুপ্ত তাঁর ‘ব্রহ্মস্ফুটসিদ্ধান্ত’ গ্রন্থে যে বর্গীকরণ ও সমীকরণ সূত্র লিখেছিলেন, তা আধুনিক বিজ্ঞানের ভিত্তি স্থাপন করে।</p>
    `,
    image: "12_page-0011.jpg",
    author: "ড. অমলেশ মুখোপাধ্যায়",
    date: "২৮ মার্চ ২০২৬",
    views: 940,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-119",
    category: "history",
    categoryBengali: "ইতিহাস ও কৃষ্টি",
    epaperPage: 15,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "প্রাচীন তাম্রলিপ্ত বন্দর ও বঙ্গের নৌ-বাণিজ্যের স্বর্ণযুগ",
    excerpt: "খ্রিস্টপূর্ব তৃতীয় শতকে সুবর্ণভূমি ও সিংহলে রেশম ও মশলা রফতানির প্রাণকেন্দ্র ছিল বাংলার প্রাচীন বন্দর তাম্রলিপ্ত।",
    highlights: [
      "প্রাচীন বাংলার সমুদ্র বাণিজ্যের প্রধান কেন্দ্র তাম্রলিপ্ত বন্দরের প্রত্নতাত্ত্বিক আবিষ্কার",
      "মৌর্য ও গুপ্ত যুগে বাংলার পোড়ামাটির ভাস্কর্য ও বস্ত্রের আন্তর্জাতিক চাহিদা",
      "গঙ্গারিডাই নৌবহরের শক্তি ও গ্রিক ঐতিহাসিকদের নথিতে রূপায়ন"
    ],
    content: `
      <p><strong>ইতিহাস কলাম—</strong> বাংলার নৌ-ঐতিহ্য অত্যন্ত সমৃদ্ধ। গঙ্গারিডাই সাম্রাজ্যের সময় থেকেই বঙ্গোপসাগর জুড়ে বাঙালি সওদাগরদের ছিল অসামান্য আধিপত্য।</p>
    `,
    image: "12_page-0015.jpg",
    author: "অধ্যাপক তরুণ পাল",
    date: "২৭ মার্চ ২০২৬",
    views: 580,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-126",
    category: "history",
    categoryBengali: "ইতিহাস ও কৃষ্টি",
    epaperPage: 11,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "গুপ্ত আমলের ভাস্কর্য ও বাংলায় নালন্দা বিশ্ববিদ্যালয় পাঠ্যক্রমের ইতিহাস",
    excerpt: "অষ্টম ও নবম শতকে বিক্রমশীলা ও পাল সাম্রাজ্যের উদ্যোগে জ্ঞানচর্চার স্বর্ণযুগ।",
    highlights: [
      "পাল ও সেন আমলের শিলালিপি ও ব্রোঞ্জ মূর্তির প্রামাণ্য ইতিহাস বিশ্লেষণ",
      "প্রাচীন বাংলায় অতীশ দীপঙ্করের অবদান ও এশিয়ায় জ্ঞান বিস্তার",
      "প্রত্নতাত্ত্বিক খননকার্যে আবিষ্কৃত ধ্বংসাবশেষের সংরক্ষণ প্রক্রিয়া"
    ],
    content: `
      <p><strong>ঐতিহাসিক অনুসন্ধান—</strong> পাল ও সেন আমলের শিল্পচর্চা ও মহাবিদ্যালয়গুলি এশিয়ার জ্ঞানচর্চার মূল প্রদীপ ছিল।</p>
    `,
    image: "12_page-0011.jpg",
    author: "ড. শাশ্বতী বসু",
    date: "২৬ মার্চ ২০২৬",
    views: 620,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-127",
    category: "history",
    categoryBengali: "ইতিহাস ও কৃষ্টি",
    epaperPage: 15,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বঙ্কিমচন্দ্র ও রবীন্দ্রনাথের স্বদেশী সাহিত্য আন্দোলন ও বঙ্গভঙ্গ প্রতিরোধ",
    excerpt: "১৯০৫ সালের বঙ্গভঙ্গ আন্দোলনের সময় সাহিত্য ও সংগীতের মাধ্যমে জাতীয় চেতনার উন্মেষ।",
    highlights: [
      "বঙ্কিমচন্দ্রের 'বন্দে মাতরম' গানের ঐতিহাসিক প্রভাব ও জাতীয়তাবোধ",
      "রবীন্দ্রনাথের রাখি বন্ধন উৎসব এবং বাংলা সংস্কৃতি রক্ষার মহামন্ত্র",
      "স্বদেশী আন্দোলনের সময় সংবাদপত্র ও বঙ্গীয় সাহিত্য পরিষদের ভূমিকা"
    ],
    content: `
      <p><strong>সাহিত্য ইতিহাস—</strong> ১৯০৫ সালে লর্ড কার্জনের বঙ্গভঙ্গ পরিকল্পনার বিরুদ্ধে বাঙালি লেখক সমাজ কালজয়ী গান ও নিবন্ধ রচনার মাধ্যমে ঐক্য বজায় রেখেছিলেন।</p>
    `,
    image: "12_page-0015.jpg",
    author: "অনিন্দ্য চ্যাটার্জি",
    date: "২৫ মার্চ ২০২৬",
    views: 710,
    isHero: false,
    isTrending: false
  },

  // --- OPINION (PAGE 12) ---
  {
    id: "art-109",
    category: "opinion",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 12,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "সত্যের সন্ধানে বাংলা ও সনাতন সংস্কৃতির অবিকল প্রতিধ্বনি",
    excerpt: "নিরপেক্ষ সাংবাদিকতা কোনো পণ্য নয়, তা সমাজের আত্মবিশ্বাস ও কৃষ্টির প্রকৃত দর্পণ। পাঠক সমাজের মুক্ত মতামত।",
    highlights: [
      "ডিজিটাল যুগে বস্তুনিষ্ঠ ও সত্যনিষ্ঠ সংবাদ পরিবেশনার গুরুত্ব",
      "সামাজিক মাধ্যমে ভুয়া খবর ও বিভ্রান্তিকর প্রচারের কড়া প্রতিরোধ",
      "বঙ্গধ্বনি পরিবারের পাঠক মণ্ডলীর গঠনমূলক প্রতিক্রিয়া ও পরামর্শ"
    ],
    content: `
      <p><strong>পাঠক কলাম—</strong> সমাজ গঠনে সংবাদপত্র ও ডিজিটাল প্ল্যাটফর্মের নিরপেক্ষ ভুমিকা বজায় রাখা অত্যন্ত প্রাসঙ্গিক।</p>
    `,
    image: "12_page-0012.jpg",
    author: "দেবজ্যোতি চক্রবর্তী",
    date: "২৫ মার্চ ২০২৬",
    views: 710,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-128",
    category: "opinion",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 12,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ডিজিটাল যুগে সংবাদের বস্তুনিষ্ঠতা ও কৃত্রিম বুদ্ধিমত্তার প্রভাব",
    excerpt: "প্রযুক্তির বিকাশ সত্ত্বেও মূলধারার সাংবাদিকতার নৈতিক দায়বদ্ধতা কীভাবে রক্ষা করা সম্ভব?",
    highlights: [
      "এআই জেনারেটেড ভুয়া কন্টেন্ট চেনার জন্য পাঠক সচেতনতা বৃদ্ধি",
      "ডিজিটাল মিডিয়ার দায়িত্বশীল ভূমিকা এবং সততা বজায় রাখার অঙ্গীকার",
      "সংবাদ যাচাইয়ের নির্ভরযোগ্য অনলাইন মেকানিজম প্রয়োগের প্রস্তাব"
    ],
    content: `
      <p><strong>সম্পাদকীয় কলাম—</strong> প্রযুক্তি যত দ্রুতই অগ্রসর হোক না কেন, সত্য ও বস্তুনিষ্ঠ সাংবাদিকতার নীতি অক্ষুণ্ণ রাখা প্রতিটি সংবাদমাধ্যমের মূল ধর্ম।</p>
    `,
    image: "12_page-0012.jpg",
    author: "শুভময় মুখার্জী",
    date: "২৪ মার্চ ২০২৬",
    views: 670,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-129",
    category: "opinion",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 12,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বাংলার যুব সমাজের কর্মসংস্থান ও কারিগরি শিক্ষা ব্যবস্থার সংস্কার",
    excerpt: "একুশ শতকের কর্মসংস্থান ও স্টার্টআপ ইকোসিস্টেম গড়তে বাংলায় কারিগরি শিক্ষার মানোন্নয়ন।",
    highlights: [
      "আইটিআই ও পলিটেকনিক কলেজগুলিতে আধুনিক প্রযুক্তি পাঠ্যক্রম সংযোজন",
      "স্থানীয় শিল্প ও স্টার্টআপগুলির জন্য রাজ্য স্তরে উৎসাহ ভাতা ঘোষণা",
      "গ্রামীণ যুবক-যুবতীদের স্কিল ডেভেলপমেন্ট ও স্বনির্ভরতার দিগন্ত"
    ],
    content: `
      <p><strong>যুব মতামত—</strong> আধুনিক শিল্পের চাহিদা অনুযায়ী যুবসমাজকে কারিগরি ও প্রযুক্তিগত শিক্ষায় প্রশিক্ষিত করা অত্যন্ত জরুরী।</p>
    `,
    image: "12_page-0012.jpg",
    author: "সৌমেন সরকার",
    date: "২৩ মার্চ ২০২৬",
    views: 610,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-130",
    category: "opinion",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 12,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "পরিবেশবান্ধব নগর উন্নয়ন ও গঙ্গা নদীর দুই পাড়ের ঐতিহ্য সংরক্ষণ",
    excerpt: "কলকাতা ও হাওড়ার ঐতিহাসিক ঘাটের সৌন্দর্য্যায়ন এবং প্লাস্টিক দূষণ প্রতিরোধের উদ্যোগ।",
    highlights: [
      "গঙ্গাপাড়ের শতাব্দী প্রাচীন ঘাটগুলির বৈজ্ঞানিক ঐতিহ্য সংরক্ষণ",
      "প্লাস্টিক ও রাসায়নিক বর্জ্য মুক্ত গঙ্গা নদী গড়ে তোলার গণপ্রচারণা",
      "গ্রিন সিটি গড়তে নাগরিক ও প্রশাসনের যৌথ দায়িত্ব পালন"
    ],
    content: `
      <p><strong>পরিবেশ স্তম্ভ—</strong> পরিবেশের ভারসাম্য রক্ষা না করলে আধুনিক নগর উন্নয়ন অসম্পূর্ণ থেকে যায়। গঙ্গাপাড়ের নদীকেন্দ্রিক সভ্যতাকে বাঁচিয়ে রাখা আমাদের সকলের দায়িত্ব।</p>
    `,
    image: "12_page-0012.jpg",
    author: "ড. রূপা বোস",
    date: "২২ মার্চ ২০২৬",
    views: 590,
    isHero: false,
    isTrending: false
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
        editionDateStr: "৩১শে মার্চ - ৬ই এপ্রিল ২০২৬",
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
      return data ? JSON.parse(data) : { editionDateStr: "৩১শে মার্চ - ৬ই এপ্রিল ২০২৬", price: "₹১০.০০" };
    } catch (e) {
      return { editionDateStr: "৩১শে মার্চ - ৬ই এপ্রিল ২০২৬", price: "₹১০.০০" };
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
