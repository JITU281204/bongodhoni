/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - Pure Real-Time Analytics & CMS Store Engine v13.0
 * Unique 16-Page Scanned E-Paper Distribution Across All Categories (No Duplicates)
 */

const STORAGE_KEYS = {
  ARTICLES: "bongodhoni_articles_v16",
  EPAPER: "bongodhoni_epaper_v16",
  SETTINGS: "bongodhoni_settings_v16",
  METRICS: "bongodhoni_metrics_v16"
};

// Distinct 16 Articles Dataset — Each article mapped to a UNIQUE E-Paper Page (1 to 16)
const defaultArticles = [
  {
    id: "art-101",
    category: "all",
    categoryBengali: "প্রচ্ছদ",
    epaperPage: 1,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "দ্য গ্রেট ক্যালকাটা কিলিংসের ৮০ বছর — ১৬ আগস্ট স্মরণে পশ্চিমবঙ্গজুড়ে ‘ডাইরেক্ট অ্যাকশন ডে’ পালন",
    excerpt: "ইতিহাসের রক্তাক্ত অধ্যায় ভুলে না যাওয়ার বার্তা দিয়ে রাজ্যজুড়ে পালিত হলো ১৬ই আগস্ট ডাইরেক্ট অ্যাকশন ডে। কলকাতা ও জেলায় জেলায় শ্রদ্ধাজ্ঞাপন ও সভার আয়োজন।",
    content: "<p><strong>কলকাতা—</strong> দ্য গ্রেট ক্যালকাটা কিলিংসের ৮০ বছর পূর্তি উপলক্ষে রাজ্যজুড়ে ১৬ই আগস্ট পালিত হলো ‘ডাইরেক্ট অ্যাকশন ডে’। ১৯৪৬ সালের ১৬ই আগস্টের ভয়াবহ সাম্প্রদায়িক হিংসা ও গণহত্যার ঘটনাকে স্মরণ করে কলকাতা সহ বিভিন্ন জেলায় একাধিক সংগঠন শ্রদ্ধাজ্ঞাপন ও সচেতনতামূলক সভার আয়োজন করে।</p><p>বক্তারা বলেন, ইতিহাসের এই নির্মম সত্য ও আত্মবলিদানের স্মৃতিকে মুছে যেতে দেওয়া যাবে না। ভবিষ্যৎ প্রজন্মকে সজাগ করতে এই ইতিহাসের সঠিক চর্চা একান্ত আবশ্যক।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0001.jpg",
    author: "বঙ্গধ্বনি বিশেষ প্রতিনিধি",
    date: "১৭ আগস্ট ২০২৬",
    views: 2850,
    isHero: true,
    isTrending: true,
    trendingRank: "1"
  },
  {
    id: "art-102",
    category: "rajya",
    categoryBengali: "রাজ্যের কথা",
    epaperPage: 2,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "বিচারপতির চেম্বারে আইনজীবী! সুজিত বসুর জামিন মামলায় নজিরবিহীন ঘটনায় বিচারপতি সরে দাঁড়ালেন",
    excerpt: "দমকলমন্ত্রী সুজিত বসুর জামিন মামলা চলাকালীন এজলাসে বেনজির বিশৃঙ্খলা। বিচারপতির চেম্বারে প্রবেশ আইনজীবীর, নজিরবিহীন ঘটনায় মামলা থেকে সরে দাঁড়ালেন বিচারপতি।",
    content: "<p><strong>কলকাতা—</strong> হাইকোর্টে নজিরবিহীন ঘটনার সাক্ষী থাকল রাজ্য। দমকলমন্ত্রী সুজিত বসুর জামিনের মামলা চলাকালীন এক আইনজীবীর বিচারপতির চেম্বারে প্রবেশ ঘিরে চরম বিশৃঙ্খলা তৈরি হয়।</p><p>ঘটনায় তীব্র ক্ষোভ প্রকাশ করে সংশ্লিষ্ট বিচারপতি ব্যক্তিগত কারণ দর্শিয়ে মামলা থেকে সরে দাঁড়ান। এই ঘটনায় আইন মহলে তীব্র চাঞ্চল্যের সৃষ্টি হয়েছে। অন্যদিকে তারাপীঠের এক হোটেলে অগ্নিকাণ্ডের ঘটনায় মৃতের সংখ্যা বেড়ে ৮ হয়েছে।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0002.jpg",
    author: "বঙ্গধ্বনি আদালত প্রতিবেদক",
    date: "১৭ আগস্ট ২০২৬",
    views: 2450,
    isHero: false,
    isTrending: true,
    trendingRank: "2"
  },
  {
    id: "art-103",
    category: "rajya",
    categoryBengali: "রাজ্যের কথা",
    epaperPage: 3,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "যাদবপুরকাণ্ডের পর ABVP-র মিছিল ঘিরে ফের উত্তেজনা | নারী নিরাপত্তায় বাংলায় ‘দুর্গা সুরক্ষা স্কোয়াড’",
    excerpt: "যাদবপুর বিশ্ববিদ্যালয়ের ঘটনার প্রতিবাদে অখিল ভারতীয় বিদ্যার্থী পরিষদের মিছিলে পুলিশি বাধা ঘিরে তীব্র সংঘর্ষ ও উত্তেজনা। নারী সুরক্ষায় স্বাধীনতা দিবসের কুচকাওয়াজে নজর কাড়ল মহিলা স্কোয়াড।",
    content: "<p><strong>কলকাতা—</strong> যাদবপুরকাণ্ডের রেশ কাটতে না কাটতেই ক্যাম্পাসে বহিরাগত প্রবেশ ও ফেটসু (FETSU)-র বৈধতা নিয়ে ফের রণক্ষেত্র পরিস্থিতি। এবিভিপির প্রতিবাদ মিছিলে ব্যারিকেড দিয়ে আটকায় পুলিশ, শুরু হয় তুমুল ধস্তাধস্তি।</p><p>অন্য দিকে রাজ্যে নারী নিরাপত্তা আরও জোরদার করতে আনুষ্ঠানিকভাবে নামানো হলো ‘দুর্গা সুরক্ষা স্কোয়াড’। স্বাধীনতা দিবসের কুচকাওয়াজেও এই বিশেষ মহিলা পুলিশ বাহিনীর উপস্থিতি নজর কেড়েছে।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0003.jpg",
    author: "বঙ্গধ্বনি নিজস্ব প্রতিনিধি",
    date: "১৭ আগস্ট ২০২৬",
    views: 2250,
    isHero: false,
    isTrending: true,
    trendingRank: "3"
  },
  {
    id: "art-104",
    category: "desh",
    categoryBengali: "দেশের কথা",
    epaperPage: 4,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "দ্য ভারত প্রজেক্ট: ১০ লক্ষ নতুন উদ্যোগ, ৫০ লক্ষ কর্মসংস্থানের লক্ষ্য জাতীয় উদ্যোগপতি মিশনের",
    excerpt: "আগামী পাঁচ বছরে দেশে ১০ লক্ষ নতুন এমএসএমই উদ্যোগ এবং ৫০ লক্ষ সম্মানজনক কর্মসংস্থান সৃষ্টির বিশাল রূপরেখা তৈরি করল জাতীয় উদ্যোগপতি মিশন। অসমে কার্বি মহিলাদের চা-শিল্পের সাফল্য।",
    content: "<p><strong>নয়াদিল্লি—</strong> দেশের যুবসমাজকে চাকরিপ্রার্থীর বদলে চাকরিদাতায় পরিণত করার লক্ষ্যে প্রস্তাবিত হলো ‘দ্য ভারত প্রজেক্ট’। জাতীয় উদ্যোগপতি মিশনের অধীনে ১০ লক্ষ নতুন স্টার্টআপ ও ৫০ লক্ষ কর্মসংস্থান গড়ে তোলার লক্ষ্যমাত্রা নেওয়া হয়েছে।</p><p>এদিকে অসমের কার্বি আংলং জেলায় চা-পাতার নিজস্ব প্রক্রিয়াকরণ কেন্দ্র তৈরি করে স্বনির্ভরতার অনন্য নজির গড়েছেন স্থানীয় কার্বি মহিলারা।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0004.jpg",
    author: "বঙ্গধ্বনি দিল্লি ব্যুরো",
    date: "১৭ আগস্ট ২০২৬",
    views: 2100,
    isHero: false,
    isTrending: true,
    trendingRank: "4"
  },
  {
    id: "art-105",
    category: "desh",
    categoryBengali: "দেশের কথা",
    epaperPage: 5,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "বিশ্বজোড়া ষড়যন্ত্র: মোহন ভাগবতের মার্কিন সফরের আগে আরএসএসের বিরুদ্ধে নিষেধাজ্ঞার দাবি",
    excerpt: "আরএসএস সরসঙ্ঘচালক মোহন ভাগবতের আসন্ন মার্কিন সফরের প্রাক্কালে ভারত-বিরোধী গোষ্ঠীর নিষেধাজ্ঞার চক্রান্ত। প্রমাণের বদলে অভিযোগনির্ভর মিথ্যা প্রোপাগাণ্ডা তীব্র ভাষায় খারিজ।",
    content: "<p><strong>নয়াদিল্লি—</strong> আরএসএস সরসঙ্ঘচালক ড. মোহন ভাগবতের মার্কিন সফরের আগে আন্তর্জাতিক মহলে এক পরিকল্পিত অপপ্রচার চালানোর অভিযোগ উঠেছে। কিছু নির্দিষ্ট গোষ্ঠী তথ্যপ্রমাণহীনভাবে নিষেধাজ্ঞার দাবি তুলে বিভ্রান্তি সৃষ্টির অপচেষ্টা করছে।</p><p>আন্তর্জাতিক বিশেষজ্ঞ ও প্রবাসী ভারতীয় সমাজের পক্ষ থেকে এই চক্রান্তের তীব্র নিন্দা জানিয়ে বলা হয়েছে, ভারতের সনাতন সাংস্কৃতিক মূল্যবোধকে কলঙ্কিত করার এই অপপ্রয়াস কখনই সফল হবে না।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0005.jpg",
    author: "বঙ্গধ্বনি বিশেষ প্রতিনিধি",
    date: "১৭ আগস্ট ২০২৬",
    views: 1950,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-106",
    category: "neighbour",
    categoryBengali: "বিদেশ বিভুঁই",
    epaperPage: 6,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "সন্ত্রাসীদের নিষেধাজ্ঞা প্রত্যাহার করে ‘বৈধতা’ দেওয়া চলবে না: রাষ্ট্রসঙ্ঘে ভারতের কড়া বার্তা",
    excerpt: "জাতিসংঘে সন্ত্রাসবাদ ও পাক কূটনীতির মুখোশ খুলে দিল ভারত। মার্কিন শুল্কের হুমকির মাঝেই রাশিয়া থেকে অপরিশোধিত তেল আমদানিতে ভারতের নতুন নজির।",
    content: "<p><strong>নিউ ইয়র্ক / দিল্লি—</strong> রাষ্ট্রসঙ্ঘের নিরাপত্তা পরিষদের মঞ্চে দাঁড়িয়ে আন্তর্জাতিক সন্ত্রাসবাদের বিরুদ্ধে ভারতের প্রতিনিধি স্পষ্ট ভাষায় হুঁশিয়ারি দিয়েছেন—কোনও অবস্থাতেই চিহ্নিত সন্ত্রাসীদের ওপর থেকে নিষেধাজ্ঞা তুলে নিয়ে তাদের রাজনৈতিক বৈধতা দেওয়া বরদাস্ত করা হবে না।</p><p>এদিকে আন্তর্জাতিক বাজারে ওয়াশিংটনের চোখরাঙানি উপেক্ষা করে জাতীয় স্বার্থে রুশ তেল আমদানিতে নতুন রেকর্ড গড়েছে ভারত।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0006.jpg",
    author: "বঙ্গধ্বনি আন্তর্জাতিক ব্যুরো",
    date: "১৭ আগস্ট ২০২৬",
    views: 1890,
    isHero: false,
    isTrending: true,
    trendingRank: "5"
  },
  {
    id: "art-107",
    category: "neighbour",
    categoryBengali: "বিদেশ বিভুঁই",
    epaperPage: 7,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "সম্পাদকের কলম: কাশ্মীর থেকে কোরিয়া, ড্রোনযুদ্ধ থেকে নেপাল— নতুন বিশ্বব্যবস্থার সামনে ভারত",
    excerpt: "সৌভিক দত্তের বিশ্লেষণী কলাম: ইউরেশিয়ার নতুন ভূকৌশলগত ভারসাম্য, ড্রোন প্রযুক্তির আধিপত্য ও দক্ষিণ এশিয়ার অখণ্ড নিরাপত্তার সামনে ভারতের নেতৃত্ব।",
    content: "<p><strong>বিদেশ বিভাগ—</strong> কাশ্মীর থেকে কোরিয়া উপদ্বীপ, কিংবা ড্রোন প্রযুক্তির নবযুগ—একবিংশ শতাব্দীর ভূরাজনীতি এক দ্রুত পরিবর্তনের মধ্য দিয়ে যাচ্ছে। পুতিন ও কিম জং উনের সাম্প্রতিক সামরিক চুক্তি আন্তর্জাতিক শক্তির ভারসাম্যে বড়সড় বদল এনেছে।</p><p>এই জটিল সময়ে ভারত তার কৌশলগত স্বায়ত্তশাসন বজায় রেখে বৈশ্বিক নেতৃত্বের আসনে দৃঢ়ভাবে অবস্থান করছে।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0007.jpg",
    author: "সৌভিক দত্ত (সম্পাদক-বিদেশ বিভাগ)",
    date: "১৭ আগস্ট ২০২৬",
    views: 1780,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-108",
    category: "opinion",
    categoryBengali: "সম্পাদক দর্পণ",
    epaperPage: 8,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "মন্থন: বিজেপির নতুন জাতীয় সাংগঠনিক দল ঘোষণা, ফিরলেন স্মৃতি ইরানি ও রাম মাধব",
    excerpt: "বিজেপির কেন্দ্রীয় সাংগঠনিক রদবদল। জাতীয় সহ-সভাপতি ও সম্পাদক পদে একঝাঁক অভিজ্ঞ মুখকে ফিরিয়ে আনা হলো। সামাজিক মাধ্যমের দায়িত্বেও পরিবর্তন।",
    content: "<p><strong>নয়াদিল্লি—</strong> আসন্ন নির্বাচন ও সাংগঠনিক গতিশীলতা বাড়াতে বিজেপির কেন্দ্রীয় পদাধিকারীদের নতুন তালিকা প্রকাশ করলেন দলের সর্বভারতীয় সভাপতি। দলে নতুন দায়িত্ব নিয়ে ফিরলেন স্মৃতি ইরানি এবং রাম মাধব।</p><p>পাশাপাশি তথ্যপ্রযুক্তি ও সামাজিক মাধ্যম বিভাগেও রদবদল আনা হয়েছে। রাজনৈতিক মহলের মতে, এই টিম আগামী লোকসভা ও বিধানসভা কৌশলকে শক্তিশালী করবে।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0008.jpg",
    author: "বঙ্গধ্বনি সম্পাদকীয় বিভাগ",
    date: "১৭ আগস্ট ২০২৬",
    views: 1720,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-109",
    category: "history",
    categoryBengali: "বিতর্ক-বিমর্শ",
    epaperPage: 9,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ইতিহাসের পুনরাবৃত্তি: স্বাধীনতা ও এক হিন্দুর আক্ষেপ — সঞ্জীব মণ্ডল",
    excerpt: "অখণ্ড হিন্দু সমাজকে ঐক্যবদ্ধ ও শক্তিশালী করার ঐতিহাসিক প্রয়োজনীয়তা এবং ভারতীয় জাতীয়তাবাদের আত্মশুদ্ধি ও পুনর্জাগরণ নিয়ে এক বিশেষ তাত্বিক নিবন্ধ।",
    content: "<p><strong>বিতর্ক-বিমর্শ—</strong> স্বাধীনতা পাওয়ার আট দশক পরেও সনাতন মূল্যবোধ ও অখণ্ড সমাজচিন্তার যে অপূর্ণতা রয়ে গেছে, তাকে অত্যন্ত বলিষ্ঠভাবে তুলে ধরেছেন লেখক সঞ্জীব মণ্ডল।</p><p>বঙ্কিমচন্দ্র, স্বামী বিবেকানন্দ, অরবিন্দ ও তিলকের জাতীয়তাবাদী ভাবধারাকে পুনরায় আত্মস্থ করে বিভক্ত সমাজকে একসূত্রে বাঁধার আহ্বান জানানো হয়েছে এই প্রবন্ধে।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0009.jpg",
    author: "সঞ্জীব মণ্ডল",
    date: "১৭ আগস্ট ২০২৬",
    views: 1650,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-110",
    category: "history",
    categoryBengali: "বিতর্ক-বিমর্শ",
    epaperPage: 10,
    district: "mumbai",
    districtBengali: "মুম্বই",
    title: "তারকার মুখে দেশপ্রেম, বিজ্ঞাপনে দায়বোধ কোথায়? বিমল পানমশলা বিতর্কে শাহরুখ-অজয়-টাইগারকে নোটিস",
    excerpt: "নিষিদ্ধ তামাক ও পানমশলার সারোগেট বিজ্ঞাপনে বলিউড সুপারস্টারদের ভূমিকা নিয়ে তীব্র আইনি চাপ। মহারাষ্ট্র প্রশাসনের নোটিস। ঝাড়খণ্ডে ছাত্র আন্দোলন ঘিরে চাপ।",
    content: "<p><strong>মুম্বই—</strong> কোটি কোটি তরুণ প্রজন্মের আইডল যখন পর্দার বাইরে ক্ষতিকর পানমশলার পরোক্ষ বিজ্ঞাপনে মুখ দেখান, তখন সামাজিক দায়বদ্ধতা নিয়ে প্রশ্ন ওঠা স্বাভাবিক। মহারাষ্ট্র প্রশাসন শাহরুখ খান, অজয় দেবগন ও টাইগার শ্রফকে নোটিস পাঠিয়ে জবাবদিহি চেয়েছে।</p><p>এদিকে ঝাড়খণ্ডে শিক্ষক নিয়োগ ও পেপার লিক কেলেঙ্কারি নিয়ে ছাত্রবিক্ষোভের মুখে অস্বস্তিতে পড়েছে রাজ্য সরকার।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0010.jpg",
    author: "বঙ্গধ্বনি বিশেষ সংবাদদাতা",
    date: "১৭ আগস্ট ২০২৬",
    views: 1820,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-111",
    category: "neighbour",
    categoryBengali: "আন্তর্জাতিক সম্পর্ক",
    epaperPage: 11,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "রণদেহী: ভারতীয়দের অনলাইন ক্ষোভে চাপে পিটার নাভারো, রুশ তেল নিয়ে মন্তব্য ঘিরে ফের বিতর্ক",
    excerpt: "হোয়াইট হাউসের প্রাক্তন উপদেষ্টা পিটার নাভারোর ভারতবিরোধী বয়ান ঘিরে এক্স-এ তুমুল ক্ষোভ। ১৮১৬ সালের সুগোলি চুক্তির মূল নথি হারিয়ে নেপালে তুমুল আলোড়ন।",
    content: "<p><strong>আন্তর্জাতিক ডেস্ক—</strong> রুশ তেল কেনা নিয়ে পিটার নাভারোর অশালীন মন্তব্যের কড়া জবাব দিয়েছেন ভারতীয় নেটিজেনরা। কমিউনিটি নোটস ও তথ্যের মাধ্যমে তাঁর দ্বিমুখী নীতি ফাঁস করে দেওয়া হয়েছে।</p><p>অন্যদিকে কাঠমান্ডু থেকে পাওয়া খবরে জানা গেছে, ভারত-নেপাল সীমান্ত নির্ধারণের ঐতিহাসিক ১৮১৬ সালের সুগোলি চুক্তির মূল নথি খুঁজে পাচ্ছে না নেপাল প্রশাসন।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0011.jpg",
    author: "বঙ্গধ্বনি কূটনৈতিক প্রতিনিধি",
    date: "১৭ আগস্ট ২০২৬",
    views: 1580,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-112",
    category: "neighbour",
    categoryBengali: "পড়শী কথা",
    epaperPage: 12,
    district: "delhi",
    districtBengali: "দিল্লি",
    title: "কাশ্মীর ভারতের অবিচ্ছেদ্য অঙ্গ: ‘গুলির শাসন মানি না’: পাক অধিকৃত কাশ্মীরে গণ-অসহযোগ আন্দোলন",
    excerpt: "পাক অধিকৃত কাশ্মীরে পাকিস্তানি সামরিক বাহিনীর বিরুদ্ধে ফুঁসছে জনতা। ট্রাম্পের ড্রোন শুল্কের আঘাতে চীনের মনোপলি খর্ব, ভারতের জন্য নতুন সুযোগ।",
    content: "<p><strong>মুজফফরাবাদ / দিল্লি—</strong> পাকিস্তান অধিকৃত কাশ্মীরে বিদ্যুৎ বিল, করবৃদ্ধি ও সেনা অত্যাচারের বিরুদ্ধে জয়েন্ট আওয়ামি অ্যাকশন কমিটির ডাকে শুরু হয়েছে সর্বাত্মক অসহযোগ আন্দোলন। জনতা স্পষ্ট জানিয়েছে—আর ইসলামাবাদের অস্ত্রের শাসন মানা হবে না।</p><p>এদিকে ডোনাল্ড ট্রাম্পের ১০০% শুল্ক আরোপের ফলে চীনের ড্রোন শিল্পের একচেটিয়া আধিপত্য বড় ধাক্কা খেল, যা ভারতের প্রতিরক্ষা ড্রোন নির্মাতাদের সামনে নতুন সম্ভাবনার দুয়ার খুলে দিল।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0012.jpg",
    author: "বঙ্গধ্বনি বৈদেশিক ডেস্ক",
    date: "১৭ আগস্ট ২০২৬",
    views: 1670,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-113",
    category: "bharat",
    categoryBengali: "সনাতনী নারী",
    epaperPage: 13,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "ডাঃ মধুচ্ছন্দা কর বিজেপির জাতীয় সহ-সভাপতি | জঙ্গল থেকে র‍্যাম্প, বস্তারের মেয়েদের নতুন দিগন্ত",
    excerpt: "চিকিৎসক ও সমাজসেবী ডাঃ মধুচ্ছন্দা কর বিজেপির কেন্দ্রীয় সহ-সভাপতি নির্বাচিত। ছত্তিশগড়ের বস্তারে প্রাক্তন মাওবাদী অধ্যুষিত অঞ্চলের আদিবাসী কন্যাদের ফ্যাশন মঞ্চে আত্মবিশ্বাস।",
    content: "<p><strong>কলকাতা / রায়পুর—</strong> বিশিষ্ট চিকিৎসক ও মহিলা মোর্চার নেত্রী ডাঃ মধুচ্ছন্দা করকে বিজেপির জাতীয় সহ-সভাপতি মনোনীত করা হয়েছে। রাজ্য রাজনীতিতে নারীর ক্ষমতায়নের এটি এক বড় মাইলফলক।</p><p>অন্য দিকে ছত্তিশগড়ের বস্তারের আদিবাসী তরুণীরা বন্দুকে নয়, ফ্যাশন র‍্যাম্পে ঐতিহ্যবাহী পোশাকে হেঁটে স্বাবলম্বী হওয়ার নতুন ইতিহাস তৈরি করলেন।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0013.jpg",
    author: "অনুপমা মণ্ডল (সম্পাদিকা)",
    date: "১৭ আগস্ট ২০২৬",
    views: 1520,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-114",
    category: "bharat",
    categoryBengali: "সনাতনী নারী",
    epaperPage: 14,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "আমি স্বয়ংসিদ্ধা: মা প্রভাবতী দেবী: যে মায়ের কোলে তৈরি হয়েছিল এক নেতাজি",
    excerpt: "নেতাজি সুভাষচন্দ্র বসুর আত্মবলিদানের প্রেরণা ছিলেন মা প্রভাবতী দেবী। কর্মক্ষেত্রে দ্বিধাহীন হয়ে লড়াই করার আহ্বান জানালেন স্মৃতি ইরানি।",
    content: "<p><strong>বিশেষ ক্রোড়পত্র—</strong> এক বিপ্লবী মহানায়ককে দেশমাতৃকার সেবায় সমর্পণ করার অসীম সাহসের নাম প্রভাবতী দেবী। পারিবারিক সুখের ঊর্ধ্বে উঠে দেশের স্বাধীনতাকে অগ্রাধিকার দেওয়ার যে শিক্ষা তিনি দিয়েছিলেন, তা আজও সমগ্র নারীজাতির আদর্শ।</p><p>একই সঙ্গে ‘ইন্ডিয়া গ্লোবাল ফোরাম’-এ বক্তব্য রাখতে গিয়ে কর্মজীবী নারীদের উদ্দেশ্যে কঠোর পরিশ্রমের পাশাপাশি নির্ভীক আত্মবিশ্বাসের বার্তা দিলেন স্মৃতি ইরানি।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0014.jpg",
    author: "বঙ্গধ্বনি নারী শক্তি বিভাগ",
    date: "১৭ আগস্ট ২০২৬",
    views: 1490,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-115",
    category: "history",
    categoryBengali: "আমি ভারত বলছি",
    epaperPage: 15,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "স্বাধীনতার রক্তবেদী: ১৬ই আগস্ট ১৯৪৬: যে প্রত্যক্ষ সংগ্রাম হিন্দু রক্তে রেঙে আছে আজও",
    excerpt: "১৯৪৬ সালের দ্য গ্রেট ক্যালকাটা কিলিং ও ডাইরেক্ট অ্যাকশন ডে-র রক্তাক্ত অধ্যায়ের ইতিহাস। গোপাল পাঁঠার বীরত্ব ও আত্মরক্ষার সংগ্রাম।",
    content: "<p><strong>কলকাতা—</strong> ১৯৪৬ সালের ১৬ই আগস্ট তৎকালীন মুসলিম লীগ সরকারের ‘ডাইরেক্ট অ্যাকশন ডে’ ঘোষণার পর কলকাতায় নেমে এসেছিল এক নারকীয় হত্যাকাণ্ড। নিরপরাধ হিন্দুদের ওপর চালানো বর্বরোচিত আক্রমণের বিরুদ্ধে কীভাবে বীর গোপাল মুখোপাধ্যায় ও তাঁর সঙ্গীরা প্রতিরোধ গড়ে তুলেছিলেন, তার বিস্তারিত ইতিহাস তুলে ধরা হলো।</p><p>ইতিহাস বিস্মৃত হলে যে সমাজ ফের বিপন্ন হয়, সেই বার্তাই দেয় এই রক্তঝরা দলিল।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0015.jpg",
    author: "বঙ্গধ্বনি ইতিহাস বিভাগ",
    date: "১৭ আগস্ট ২০২৬",
    views: 1790,
    isHero: false,
    isTrending: false
  },
  {
    id: "art-116",
    category: "opinion",
    categoryBengali: "আপনার দৃষ্টি",
    epaperPage: 16,
    district: "kolkata",
    districtBengali: "কলকাতা",
    title: "১৬ আগস্ট স্মরণে হিন্দু সংহতির পদযাত্রা ও বেঙ্গল ভলান্টিয়ার্সের অনুষ্ঠান | বঙ্গীয় গ্রন্থশিল্প পরিষদ",
    excerpt: "শ্রদ্ধেয় তপন ঘোষের প্রতিষ্ঠিত হিন্দু সংহতির উদ্যোগে বিশাল পদযাত্রা ও বেঙ্গল ভলান্টিয়ার্সের স্মরণসভা। প্রকাশকদের জাতীয়তাবাদী মঞ্চ বঙ্গীয় গ্রন্থশিল্প পরিষদের যৌথ বার্তা।",
    content: "<p><strong>কলকাতা—</strong> শ্রদ্ধেয় তপন ঘোষের আদর্শে অনুপ্রাণিত হিন্দু সংহতির উদ্যোগে ১৬ আগস্ট উপলক্ষে শ্রদ্ধানন্দ পার্ক থেকে রানী রাসমণি অ্যাভিনিউ পর্যন্ত এক ঐতিহাসিক পদযাত্রা অনুষ্ঠিত হয়।</p><p>পাশাপাশি মলঙ্গা লেনে বেঙ্গল ভলান্টিয়ার্সের পক্ষ থেকে ডাইরেক্ট অ্যাকশন ডে-র শহীদদের উদ্দেশ্যে শ্রদ্ধার্ঘ্য অর্পণ করা হয়। বঙ্গীয় গ্রন্থশিল্প পরিষদের পক্ষ থেকে সমস্ত জাতীয়তাবাদী লেখক ও প্রকাশককে এক ছাতার তলায় আসার উদাত্ত আহ্বান জানানো হয়।</p>",
    image: "epaper_pages/Bongodhwani 17-08-26_page-0016.jpg",
    author: "বঙ্গধ্বনি প্রতিনিধি",
    date: "১৭ আগস্ট ২০২৬",
    views: 1410,
    isHero: false,
    isTrending: false
  }
];

const categoryEPaperPageMap = {
  "all": 1,
  "rajya": 2,
  "desh": 4,
  "neighbour": 6,
  "opinion": 8,
  "history": 9,
  "bharat": 13
};

class CMSStoreEngine {
  constructor() {
    this.initStore();
  }

  initStore() {
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(defaultArticles));
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({
        editionDateStr: "১৭ই আগস্ট - ২৩শে আগস্ট ২০২৬",
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
      return data ? JSON.parse(data) : { editionDateStr: "১৭ই আগস্ট - ২৩শে আগস্ট ২০২৬", price: "₹১০.০০" };
    } catch (e) {
      return { editionDateStr: "১৭ই আগস্ট - ২৩শে আগস্ট ২০২৬", price: "₹১০.০০" };
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
