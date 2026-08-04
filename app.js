/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - Main Application Interactivity Engine v6.0
 * Anandabazar Patrika & Indian Express Inspired Edition
 */

let articleFontSize = 1.1; // rem
let activeDistrictFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  initClockAndSettings();
  initRealtimeWeather();
  renderHeroArticle();
  renderAllCategorySections();
  renderHorizontalNews();
  renderTrendingWidget();
  setupEventListeners();
  setupThemeToggle();
  initScrollReveal();
});

function renderAllCategorySections() {
  renderSectionGrid("rajya", "grid-rajya-container", activeDistrictFilter);
  renderSectionGrid("desh", "grid-desh-container");
  renderSectionGrid("bharat", "grid-bharat-container");
  renderSectionGrid("neighbour", "grid-neighbour-container");
  renderSectionGrid("opinion", "grid-opinion-container");
  renderRecommendedNewsGrid();
}

function renderRecommendedNewsGrid() {
  const container = document.getElementById("grid-recommended-container");
  if (!container) return;

  let articles = (window.BongoCMS && window.BongoCMS.getArticles) 
    ? window.BongoCMS.getArticles() 
    : (typeof defaultArticles !== 'undefined' ? defaultArticles : []);

  if (!articles || !Array.isArray(articles) || articles.length === 0) return;

  const recommendedList = articles.slice(4, 8);
  const leadItem = recommendedList[0] || articles[1];
  const sideItems = recommendedList.slice(1, 4);

  container.className = "anandabazar-section-grid";
  container.style.display = "grid";
  container.innerHTML = `
    <!-- Left Column: Primary Recommended News Lead Card -->
    <div class="anandabazar-lead-card" onclick="openArticleModal('${leadItem.id || 'art-108'}')" style="background:var(--bg-card); cursor:pointer;">
      <div class="anandabazar-lead-thumb" style="height:250px;">
        <img src="${leadItem.image || 'Bongodhwani 02-08-26-digital version_page-0005.jpg'}" alt="${leadItem.title || 'বিশেষ খবর'}" loading="lazy" />
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
        <span class="badge badge-crimson" style="font-size:0.75rem;">🔥 বিশেষ সুপার সুপারিশ</span>
        <span class="badge badge-navy" style="font-size:0.72rem; cursor:pointer;" onclick="event.stopPropagation(); openEPaperModal(${leadItem.epaperPage || 5});">📖 পৃষ্ঠা ${leadItem.epaperPage || 5}</span>
      </div>
      <h3 style="font-family:var(--font-serif); font-size:1.35rem; font-weight:900; line-height:1.3; color:var(--text-1); margin:8px 0 6px 0;">${leadItem.title || ''}</h3>
      <p style="font-size:0.9rem; color:var(--text-2); line-height:1.5; margin-bottom:10px;">${leadItem.excerpt || ''}</p>
      <div style="margin-top:auto; padding-top:8px; border-top:1px dashed var(--border-strong); display:flex; justify-content:space-between; align-items:center; font-size:0.8rem;">
        <span>📅 ${leadItem.date || 'আজ'} | ${leadItem.author || 'বঙ্গধ্বনি'}</span>
        <span style="color:var(--crimson); font-weight:bold;">সম্পূর্ণ পড়ুন ➔</span>
      </div>
    </div>

    <!-- Right Column: Recommended Articles Compact List (Matching Screenshot) -->
    <div class="anandabazar-side-stack">
      ${sideItems.map(item => `
        <div class="anandabazar-side-item" onclick="openArticleModal('${item.id || 'art-101'}')" style="cursor:pointer;">
          <div class="anandabazar-side-thumb">
            <img src="${item.image || 'Bongodhwani 02-08-26-digital version_page-0001.jpg'}" alt="${item.title || 'সংবাদ'}" loading="lazy" />
          </div>
          <div style="flex-grow: 1;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="badge badge-navy" style="font-size:0.65rem;">${item.categoryBengali || 'সংবাদ'}</span>
              <span class="badge badge-outline" style="font-size:0.65rem; border-color:#8B1818; color:#8B1818;" onclick="event.stopPropagation(); openEPaperModal(${item.epaperPage || 1});">📖 পৃষ্ঠা ${item.epaperPage || 1}</span>
            </div>
            <h4 style="font-family:var(--font-serif); font-size:0.95rem; font-weight:800; color:var(--text-1); line-height:1.35; margin-bottom:4px;">${item.title || ''}</h4>
            <span style="font-size:0.74rem; color:var(--text-muted);">📅 ${item.date || 'আজ'}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSectionGrid(categoryKey, containerId, districtFilter = "all") {
  const gridContainer = document.getElementById(containerId);
  if (!gridContainer) return;

  let articles = (window.BongoCMS && window.BongoCMS.getArticles) 
    ? window.BongoCMS.getArticles() 
    : (typeof defaultArticles !== 'undefined' ? defaultArticles : []);

  if (!articles || !Array.isArray(articles) || articles.length === 0) {
    if (typeof defaultArticles !== 'undefined') articles = defaultArticles;
    else articles = [];
  }

  if (categoryKey === "rajya" && districtFilter !== "all") {
    articles = articles.filter(a => a.district === districtFilter);
  }

  // Filter out Hero Lead Story so it is NEVER repeated in sub-sections
  let categoryArticles = articles.filter(a => a && a.category === categoryKey && !a.isHero);
  if (!categoryArticles || categoryArticles.length === 0) {
    categoryArticles = articles.filter(a => a && a.category === categoryKey);
  }

  if (!categoryArticles || categoryArticles.length === 0) {
    categoryArticles = articles.filter(a => !a.isHero);
  }

  const leadArticle = categoryArticles[0] || {
    id: "art-102",
    title: "বিশেষ আঞ্চলিক সংবাদ",
    excerpt: "বিস্তারিত জানতে প্রতিবেদনটির ওপর স্পর্শ করুন।",
    image: "Bongodhwani 02-08-26-digital version_page-0002.jpg",
    categoryBengali: "সংবাদ",
    epaperPage: 2,
    date: "আজ"
  };

  const stackItems = categoryArticles.slice(1, 4);
  let sideList = stackItems.length > 0 ? stackItems : articles.filter(a => a.id !== leadArticle.id && !a.isHero).slice(0, 3);

  // If no articles are found for the right side column, populate with related documented news fallbacks
  if (!sideList || sideList.length === 0) {
    sideList = [
      { id: "art-related-1", title: "এই সম্পর্কিত আরও বিস্তারিত ও গুরুত্বপূর্ণ খবরের আপডেট", categoryBengali: "সম্পর্কিত খবর", image: "Bongodhwani 02-08-26-digital version_page-0003.jpg", epaperPage: 3, date: "আজ" },
      { id: "art-related-2", title: "আঞ্চলিক পরিস্থিতির ওপর বিশেষ প্রতিবেদন ও বিশ্লেষণ", categoryBengali: "বিশেষ প্রতিবেদন", image: "Bongodhwani 02-08-26-digital version_page-0016.jpg", epaperPage: 4, date: "আজ" },
      { id: "art-related-3", title: "অন্যান্য জেলার নির্বাচিত গুরুত্বপূর্ণ সংবাদ সংক্ষেপ", categoryBengali: "অন্যান্য সংবাদ", image: "Bongodhwani 02-08-26-digital version_page-0001.jpg", epaperPage: 5, date: "আজ" }
    ];
  }

  gridContainer.className = "anandabazar-section-grid";
  gridContainer.style.display = "grid";
  gridContainer.innerHTML = `
    <!-- Left Column: Lead Feature (Anandabazar Big Card with Key Highlights) -->
    <div class="anandabazar-lead-card" onclick="openArticleModal('${leadArticle.id || 'art-102'}')">
      <div class="anandabazar-lead-thumb">
        <img src="${leadArticle.image || 'Bongodhwani 02-08-26-digital version_page-0002.jpg'}" alt="${leadArticle.title || 'সংবাদ'}" loading="lazy" />
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="badge badge-crimson">🔴 ${leadArticle.categoryBengali || 'বিশেষ সংবাদ'}</span>
        <span class="badge badge-navy" style="font-size:0.7rem; cursor:pointer;" onclick="event.stopPropagation(); openEPaperModal(${leadArticle.epaperPage || 1});">📖 পৃষ্ঠা ${leadArticle.epaperPage || 1}</span>
      </div>
      <h3 style="font-family:var(--font-serif); font-size:1.35rem; font-weight:900; color:var(--text-1); line-height:1.3;">${leadArticle.title || ''}</h3>
      <p style="font-size:0.92rem; color:var(--text-2); line-height:1.6;">${leadArticle.excerpt || ''}</p>
      <div style="margin-top:auto; padding-top:10px; border-top:1px dashed var(--border-strong); display:flex; justify-content:space-between; align-items:center; font-size:0.8rem;">
        <span style="color:var(--text-muted);">📅 ${leadArticle.date || 'আজ'} | ${leadArticle.author || 'বঙ্গধ্বনি'}</span>
        <span style="color:var(--crimson); font-weight:bold;">সম্পূর্ণ পড়ুন ➔</span>
      </div>
    </div>

    <!-- Right Column: Vertical Stack (Anandabazar Patrika Side List) -->
    <div class="anandabazar-side-stack">
      ${sideList.map(item => `
        <div class="anandabazar-side-item" onclick="openArticleModal('${item.id || 'art-102'}')">
          <div class="anandabazar-side-thumb">
            <img src="${item.image || 'Bongodhwani 02-08-26-digital version_page-0002.jpg'}" alt="${item.title || 'সংবাদ'}" loading="lazy" />
          </div>
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="badge badge-navy" style="font-size:0.65rem;">${item.categoryBengali || 'সংবাদ'}</span>
              <span class="badge badge-outline" style="font-size:0.65rem;" onclick="event.stopPropagation(); openEPaperModal(${item.epaperPage || 1});">📖 পৃষ্ঠা ${item.epaperPage || 1}</span>
            </div>
            <h4 style="font-family:var(--font-serif); font-size:0.98rem; font-weight:800; color:var(--text-1); line-height:1.35; margin-bottom:4px;">${item.title || ''}</h4>
            <span style="font-size:0.75rem; color:var(--text-muted);">📅 ${item.date || 'আজ'}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

const categoryNameMap = {
  "all": "প্রচ্ছদ ও প্রধান খবর",
  "rajya": "রাজ্য-রাজধানী",
  "desh": "দেশ ও রাজনীতি",
  "bharat": "ভারত ডায়েরি",
  "neighbour": "প্রতিবেশীর উত্থান",
  "history": "ইতিহাস ও কৃষ্টি",
  "opinion": "আপনার দৃষ্টি"
};

// Category Name Mapping for Breadcrumbs & Navigation
const categoryTitleMap = {
  "all": "বিশেষ সংবাদ ও প্রচ্ছদ (পৃষ্ঠা ১)",
  "rajya": "রাজ্য-রাজধানী সংবাদ (পৃষ্ঠা ২ ও ৩)",
  "desh": "দেশ ও রাজনীতি সংবাদ (পৃষ্ঠা ৪, ৫, ৬, ৭, ৮)",
  "bharat": "ভারত ডায়েরি কলাম ও সংবাদ (পৃষ্ঠা ৯)",
  "neighbour": "প্রতিবেশীর উত্থান ও ভূ-রাজনীতি (পৃষ্ঠা ১০)",
  "history": "ইতিহাস, কৃষ্টি ও সনাতন চর্চা (পৃষ্ঠা ১১, ১৩, ১৪)",
  "opinion": "আপনার দৃষ্টি ও সম্পাদকীয় কলাম (পৃষ্ঠা ১২, ১৫)"
};

// District News Filter Handler (Anandabazar District Pills)
function filterDistrict(districtKey, btnEl) {
  activeDistrictFilter = districtKey;
  const btns = document.querySelectorAll(".district-btn");
  btns.forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  renderSectionGrid("rajya", "grid-rajya-container", districtKey);
}

function convertToBengaliDigits(numStr) {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(numStr).replace(/\d/g, d => bnDigits[d]);
}

const cityBengaliMap = {
  "Kolkata": "কলকাতা",
  "Calcutta": "কলকাতা",
  "Howrah": "হাওড়া",
  "Haora": "হাওড়া",
  "Siliguri": "শিলিগুড়ি",
  "Asansol": "আসানসোল",
  "Durgapur": "দুর্গাপুর",
  "Burdwan": "বর্ধমান",
  "Bardhaman": "বর্ধমান",
  "Kharagpur": "খড়গপুর",
  "Berhampore": "বহরমপুর",
  "Baharampur": "বহরমপুর",
  "Malda": "মালদা",
  "English Bazar": "মালদা",
  "Cooch Behar": "কোচবিহার",
  "Jalpaiguri": "জলপাইগুড়ি",
  "Hooghly": "হুগলি",
  "Chinsurah": "হুগলি-চুঁচুড়া",
  "Midnapore": "মেদিনীপুর",
  "Medinipur": "মেদিনীপুর",
  "Purulia": "পুরুলিয়া",
  "Bankura": "বাঁকুড়া",
  "Krishnanagar": "কৃষ্ণনগর",
  "Nadia": "নদিয়া",
  "Barasat": "বারাসাত",
  "Barrackpore": "ব্যারাকপুর",
  "Dhaka": "ঢাকা",
  "Chittagong": "চট্টগ্রাম",
  "Sylhet": "সিলেট",
  "Rajshahi": "রাজশাহী",
  "Khulna": "খুলনা",
  "Barisal": "বরিশাল",
  "Rangpur": "রংপুর",
  "Delhi": "নয়া দিল্লি",
  "New Delhi": "নয়া দিল্লি",
  "Mumbai": "মুম্বাই",
  "Bengaluru": "বেঙ্গালুরু",
  "Bangalore": "বেঙ্গালুরু",
  "Chennai": "চেন্নাই",
  "Hyderabad": "হায়দ্রাবাদ",
  "Pune": "পুণে",
  "London": "লন্ডন",
  "New York": "নিউ ইয়র্ক"
};

function getBengaliWeatherCondition(code) {
  if (code === 0) return { icon: "☀️", text: "রৌদ্রোজ্জ্বল" };
  if (code >= 1 && code <= 3) return { icon: "⛅", text: "আংশিক মেঘলা" };
  if (code === 45 || code === 48) return { icon: "🌫️", text: "কুয়াশাচ্ছন্ন" };
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return { icon: "🌧️", text: "বৃষ্টিপাত" };
  if (code >= 71 && code <= 77) return { icon: "❄️", text: "তুষারপাত" };
  if (code >= 95) return { icon: "⛈️", text: "বজ্রবিদ্যুৎসহ ঝড়বৃষ্টি" };
  return { icon: "⛅", text: "মেঘলা" };
}

function openLocationModal() {
  const modal = document.getElementById("location-modal-backdrop");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLocationModal() {
  const modal = document.getElementById("location-modal-backdrop");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function requestUserLocation() {
  try {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
        if (result.state === 'denied') {
          alert("আপনি লোকেশন পারমিশন ব্লক করে রেখেছেন। দয়া করে ব্রাউজার সেটিংস থেকে 'Location Permission' অ্যালাউ (Allow) করুন, যাতে আমরা আপনার এলাকার সঠিক খবর ও আবহাওয়া দেখাতে পারি।");
        } else if (result.state === 'prompt') {
          alert("পরবর্তী পপ-আপে 'Allow' বা 'Location Access' বাটনে ক্লিক করে গুগল লোকেশন পারমিশন দিন, যাতে আমরা আপনার এলাকার রিয়েল-টাইম আপডেট দেখাতে পারি।");
          autoDetectLocationWithGPS(true);
        } else {
          autoDetectLocationWithGPS(true);
        }
      }).catch(function(e) {
        // Fallback if query fails
        autoDetectLocationWithGPS(true);
      });
    } else {
      autoDetectLocationWithGPS(true);
    }
  } catch (err) {
    autoDetectLocationWithGPS(true);
  }
}

function updateLocationUI(cityNameBn, tempBn, icon) {
  const topBarEl = document.getElementById("top-bar-weather-text");
  if (topBarEl) {
    topBarEl.innerHTML = `📍 ${cityNameBn}: <strong>${tempBn}°সে ${icon}</strong>`;
  }

  const earpieceLocEl = document.getElementById("earpiece-location-name");
  if (earpieceLocEl) {
    earpieceLocEl.innerText = `${cityNameBn} সংস্করণ`;
  }

  const earpieceWeatherEl = document.getElementById("earpiece-weather-info");
  if (earpieceWeatherEl) {
    earpieceWeatherEl.innerText = `আবহাওয়া: ${tempBn}°সে ${icon}`;
  }
}

function selectManualCity(cityNameRaw, tempBn, icon) {
  const cityNameBn = cityBengaliMap[cityNameRaw] || cityNameRaw || "কলকাতা";
  updateLocationUI(cityNameBn, tempBn, icon);

  try {
    localStorage.setItem("bongodhoni_cached_location", JSON.stringify({
      cityNameBn, tempBn, icon
    }));
  } catch(e) {}

  closeLocationModal();
}

async function fetchWeatherForCoords(lat, lon, cityNameRaw) {
  try {
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const weatherData = await weatherRes.json();
    
    if (weatherData && weatherData.current_weather) {
      const tempC = Math.round(weatherData.current_weather.temperature);
      const weatherCode = weatherData.current_weather.weathercode;
      const weatherInfo = getBengaliWeatherCondition(weatherCode);
      const tempBn = convertToBengaliDigits(tempC);
      const cityNameBn = cityBengaliMap[cityNameRaw] || cityNameRaw || "কলকাতা";

      updateLocationUI(cityNameBn, tempBn, weatherInfo.icon);

      try {
        localStorage.setItem("bongodhoni_cached_location", JSON.stringify({
          lat, lon, cityNameBn, tempBn, icon: weatherInfo.icon
        }));
      } catch(e) {}
    }
  } catch (err) {
    console.warn("Realtime weather fetch fallback:", err);
    updateLocationUI("কলকাতা", "৩১", "⛅");
  }
}

function autoDetectLocationWithGPS(userInitiated = false) {
  const topBarEl = document.getElementById("top-bar-weather-text");
  if (topBarEl && userInitiated) {
    topBarEl.innerHTML = "📡 লাইভ স্থান ট্র্যাকিং হচ্ছে...";
  }

  closeLocationModal();

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // 1. Primary Reverse Geocoding with Bengali Language
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&accept-language=bn`)
          .then(res => res.json())
          .then(data => {
            const addr = data.address || {};
            const cityName = addr.city || addr.town || addr.suburb || addr.municipality || addr.state_district || addr.county || "Kolkata";
            fetchWeatherForCoords(lat, lon, cityName);
          })
          .catch(() => {
            // 2. Backup Reverse Geocoding
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=bn`)
              .then(r => r.json())
              .then(bdData => {
                const cityName = bdData.city || bdData.locality || bdData.principalSubdivision || "Kolkata";
                fetchWeatherForCoords(lat, lon, cityName);
              })
              .catch(() => fetchWeatherForCoords(lat, lon, "Kolkata"));
          });
      },
      (err) => {
        console.warn("GPS tracking permission/error fallback:", err.message);
        if (userInitiated && err.code === err.PERMISSION_DENIED) {
           alert("আপনি লোকেশন পারমিশন দেননি (Permission Denied)। রিয়েল-টাইম লোকেশনের জন্য দয়া করে পারমিশন দিন।");
        }
        fetchIPLocationFallback();
      },
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 300000 }
    );
  } else {
    fetchIPLocationFallback();
  }
}

function fetchIPLocationFallback() {
  // Use a more reliable free IP geolocation API
  fetch("https://get.geojs.io/v1/ip/geo.json")
    .then(r => r.json())
    .then(ipData => {
      if (ipData && ipData.latitude && ipData.longitude) {
        fetchWeatherForCoords(ipData.latitude, ipData.longitude, ipData.city || "কলকাতা");
      } else {
        updateLocationUI("কলকাতা", "--", "☁️");
      }
    })
    .catch(() => {
      updateLocationUI("কলকাতা", "--", "☁️");
    });
}

function initRealtimeWeather() {
  try {
    const cached = JSON.parse(localStorage.getItem("bongodhoni_cached_location"));
    if (cached && cached.cityNameBn) {
      updateLocationUI(cached.cityNameBn, cached.tempBn, cached.icon);
    } else {
      updateLocationUI("কলকাতা", "৩১", "⛅");
    }
  } catch(e) {
    updateLocationUI("কলকাতা", "৩১", "⛅");
  }

  // Trigger real-time location track automatically on load
  autoDetectLocationWithGPS(false);
}

function initClockAndSettings() {
  if (window.BongoCMS) {
    BongoCMS.trackPageVisit();
  }

  const dateElement = document.getElementById("bengali-date-str");
  if (dateElement) {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('bn-BD', options);
    dateElement.innerHTML = `<strong>১৫ শ্রাবণ ১৪৩৩ | ${dateStr}</strong>`;
  }

  const updateLiveUserCount = () => {
    const liveUsersEl = document.getElementById("header-live-visitors");
    if (liveUsersEl && window.BongoCMS) {
      const count = BongoCMS.getActiveOnlineUsers();
      liveUsersEl.innerHTML = `<span style="color:#10B981; font-size:0.9rem;">●</span> অনলাইনে: <strong>${count} জন</strong>`;
    }
  };

  updateLiveUserCount();
  setInterval(updateLiveUserCount, 2000);
}

// Anandabazar Patrika Style Dynamic Category Routing & Spotlight Switcher
function handleCategoryNav(categoryKey, btnEl) {
  const links = document.querySelectorAll(".nav-link");
  links.forEach(l => l.classList.remove("active"));
  if (btnEl) {
    btnEl.classList.add("active");
    try {
      btnEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } catch (e) {}
  }

  // Scroll smoothly to the corresponding section down the page
  let targetId = "hero-news-container"; // Default top section for 'all' / home
  if (categoryKey !== "all" && categoryKey !== "prochhod") {
    targetId = "section-" + categoryKey;
  }

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Render Dynamic Hero Lead Story & Side Stack (Anandabazar Category Spotlight Engine)
function renderHeroArticle(categoryKey = "all") {
  const heroContainer = document.getElementById("hero-news-container");
  if (!heroContainer) return;

  let articles = (window.BongoCMS && window.BongoCMS.getArticles) 
    ? window.BongoCMS.getArticles() 
    : (typeof defaultArticles !== 'undefined' ? defaultArticles : []);

  if (!articles || !Array.isArray(articles) || articles.length === 0) {
    if (typeof defaultArticles !== 'undefined') articles = defaultArticles;
    else return;
  }

  let selectedArticles = articles;
  if (categoryKey && categoryKey !== "all" && categoryKey !== "prochhod") {
    const categoryMatches = articles.filter(a => a && a.category === categoryKey);
    if (categoryMatches.length > 0) {
      selectedArticles = categoryMatches;
    }
  }

  const hero = selectedArticles.find(a => a && a.isHero) || selectedArticles[0] || articles[0];
  const secondary = selectedArticles.slice(1, 4).length > 0 ? selectedArticles.slice(1, 4) : articles.filter(a => a.id !== hero.id).slice(0, 3);

  heroContainer.className = "anandabazar-section-grid";
  heroContainer.style.display = "grid";
  heroContainer.innerHTML = `
    <!-- Left Column: Primary Category Lead Card (Anandabazar Big Card) -->
    <div class="anandabazar-lead-card" onclick="openArticleModal('${hero.id || 'art-101'}')" style="background:var(--bg-card); cursor:pointer;">
      <div class="anandabazar-lead-thumb" style="height:310px;">
        <img src="${hero.image || 'Bongodhwani 02-08-26-digital version_page-0001.jpg'}" alt="${hero.title || 'প্রধান সংবাদ'}" loading="lazy" />
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
        <span class="badge badge-crimson" style="font-size:0.8rem;">🔴 ${hero.categoryBengali || 'প্রধান সংবাদ'}</span>
        <span class="badge badge-navy" style="font-size:0.75rem; cursor:pointer;" onclick="event.stopPropagation(); openEPaperModal(${hero.epaperPage || 1});">📖 ই-পেপার পৃষ্ঠা ${hero.epaperPage || 1}</span>
      </div>
      <h1 style="font-family:var(--font-serif); font-size:1.85rem; font-weight:900; line-height:1.3; color:var(--text-1); margin:8px 0;">${hero.title || ''}</h1>
      <p style="font-size:0.96rem; color:var(--text-2); line-height:1.6;">${hero.excerpt || ''}</p>
      <ul class="hero-bullets">
        <li>সংবাদটি বিস্তারিত পাঠ করতে কার্ডের ওপর স্পর্শ করুন</li>
        <li>বঙ্গধ্বনি ডিজিটাল ই-পেপারে মূল মুদ্রিত সংস্করণ উন্মুক্ত করুন</li>
      </ul>
      <div style="margin-top:auto; padding-top:10px; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; font-size:0.82rem;">
        <span>📅 ${hero.date || 'আজ'} | লেখক: ${hero.author || 'বঙ্গধ্বনি'}</span>
        <span style="color:var(--crimson); font-weight:bold;">সম্পূর্ণ পড়ুন ➔</span>
      </div>
    </div>

    <!-- Right Column: Secondary Top Leads List -->
    <div class="anandabazar-side-stack">
      ${secondary.map(item => `
        <div class="anandabazar-side-item" onclick="openArticleModal('${item.id || 'art-101'}')">
          <div class="anandabazar-side-thumb">
            <img src="${item.image || 'Bongodhwani 02-08-26-digital version_page-0001.jpg'}" alt="${item.title || 'সংবাদ'}" loading="lazy" />
          </div>
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="badge badge-navy" style="font-size:0.65rem;">${item.categoryBengali || 'বিশেষ সংবাদ'}</span>
              <span class="badge badge-outline" style="font-size:0.65rem;" onclick="event.stopPropagation(); openEPaperModal(${item.epaperPage || 1});">📖 পৃষ্ঠা ${item.epaperPage || 1}</span>
            </div>
            <h4 style="font-family:var(--font-serif); font-size:0.98rem; font-weight:800; color:var(--text-1); line-height:1.35; margin-bottom:4px;">${item.title || ''}</h4>
            <span style="font-size:0.75rem; color:var(--text-muted);">📅 ${item.date || 'আজ'}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// Category Navigation Click Handler (Populates the homepage news section dynamically)
function handleCategoryNav(categoryKey, btnEl) {
  const links = document.querySelectorAll(".nav-link");
  links.forEach(l => l.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  // Update Section Title Text
  const titleEl = document.getElementById("sub-news-section-title");
  if (titleEl) {
    titleEl.innerText = categoryTitleMap[categoryKey] || "বিশেষ সংবাদ";
  }

  // Update Quick Link to open the e-paper page
  const quickLinkEl = document.getElementById("category-epaper-quicklink");
  const targetPage = window.BongoCMS ? BongoCMS.getCategoryEPaperPage(categoryKey) : 1;
  if (quickLinkEl) {
    quickLinkEl.innerHTML = `
      <button class="epaper-btn-header vintage-btn" onclick="openEPaperModal(${targetPage})" style="font-size:0.82rem; padding:4px 12px;">
        📖 এই বিভাগের অরিজিনাল ই-পেপার পৃষ্ঠা ${targetPage} খুলুন ➔
      </button>
    `;
  }

  // Render Category News Cards into the Section Grid
  renderSubNewsGrid(categoryKey);

  // Smooth Scroll to Section Title
  if (titleEl) {
    titleEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// District News Filter Handler (Anandabazar District Pills)
function filterDistrict(districtKey, btnEl) {
  activeDistrictFilter = districtKey;
  const btns = document.querySelectorAll(".district-btn");
  btns.forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  renderSectionGrid("rajya", "grid-rajya-container", activeDistrictFilter);
}

// Render Horizontal Culture List
function renderHorizontalNews() {
  const container = document.getElementById("horizontal-news-list");
  if (!container) return;

  const articles = BongoCMS.getArticles();
  const historyArticles = articles.filter(a => a.category === "history" || a.category === "bharat");
  const listToDisplay = historyArticles.length > 0 ? historyArticles : articles.slice(1, 5);

  container.innerHTML = listToDisplay.slice(0, 4).map(article => `
    <div class="news-card-h" onclick="openArticleModal('${article.id}')">
      <div class="news-card-h-img">
        <img src="${article.image}" alt="${article.title}" loading="lazy" />
      </div>
      <div>
        <div style="display:flex; gap:6px; align-items:center; margin-bottom:4px;">
          <span class="badge badge-outline" style="font-size: 0.68rem;">${article.categoryBengali || 'ইতিহাস ও কৃষ্টি'}</span>
          <span class="badge badge-crimson" style="font-size: 0.65rem;" onclick="event.stopPropagation(); openEPaperModal(${article.epaperPage || 11});">📖 পৃষ্ঠা ${article.epaperPage || 11}</span>
        </div>
        <h4 class="news-card-h-title">${article.title}</h4>
        <div class="post-meta">
          <span>${article.date || 'সম্প্রতি'}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Render Trending Rank List (১, ২, ৩, ৪, ৫) - Next-Level Edition
function renderTrendingWidget() {
  const container = document.getElementById("trending-widget-list");
  if (!container) return;

  let articles = (window.BongoCMS && window.BongoCMS.getArticles) 
    ? window.BongoCMS.getArticles() 
    : (typeof defaultArticles !== 'undefined' ? defaultArticles : []);

  if (!articles || !Array.isArray(articles) || articles.length === 0) {
    if (typeof defaultArticles !== 'undefined') articles = defaultArticles;
    else return;
  }

  const sortedByViews = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0));
  const bengaliNums = ["১", "২", "৩", "৪", "৫"];

  container.innerHTML = sortedByViews.slice(0, 5).map((article, idx) => `
    <div class="trending-item-nextlevel" onclick="openArticleModal('${article.id || 'art-101'}')">
      <div class="trending-rank-badge rank-${idx + 1}">${bengaliNums[idx] || (idx + 1)}</div>
      <div class="trending-thumb">
        <img src="${article.image || 'Bongodhwani 02-08-26-digital version_page-0001.jpg'}" alt="${article.title || 'সংবাদ'}" loading="lazy" />
      </div>
      <div class="trending-info">
        <h4 class="trending-item-title">${article.title || ''}</h4>
        <div style="display:flex; justify-content:flex-end; align-items:center; margin-top:4px;">
          <span class="badge badge-outline" style="font-size:0.62rem;" onclick="event.stopPropagation(); openEPaperModal(${article.epaperPage || 1});">📖 পৃষ্ঠা ${article.epaperPage || 1}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Open Article Modal
function openArticleModal(id) {
  let epaperPageNum = 1;

  if (id && id.startsWith('art-related-')) {
    if (id === 'art-related-1') epaperPageNum = 3;
    else if (id === 'art-related-2') epaperPageNum = 4;
    else if (id === 'art-related-3') epaperPageNum = 5;
  } else if (id === 'art-102') {
    epaperPageNum = 2;
  } else if (window.BongoCMS) {
    const articles = BongoCMS.getArticles();
    const article = articles.find(a => a.id === id);
    if (article) {
      epaperPageNum = article.epaperPage || 1;
      BongoCMS.incrementView(id);
    }
  }

  // Directly open the E-Paper PDF section corresponding to this news!
  openEPaperModal(epaperPageNum);
}

function changeArticleFontSize(delta) {
  articleFontSize = Math.min(Math.max(articleFontSize + delta, 0.9), 1.6);
  const textArea = document.getElementById("article-body-text-area");
  if (textArea) {
    textArea.style.fontSize = articleFontSize + "rem";
  }
}

function closeArticleModal() {
  const modalBackdrop = document.getElementById("article-modal-backdrop");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
}

// Copyright & Intellectual Property Legal Modal Handlers
function openCopyrightModal() {
  const modal = document.getElementById("copyright-modal-backdrop");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCopyrightModal() {
  const modal = document.getElementById("copyright-modal-backdrop");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

let isSpeaking = false;
function toggleAudioRead(btn, encodedText) {
  if (!('speechSynthesis' in window)) {
    alert("আপনার ব্রাউজারে স্পিচ ফিচার উপলব্ধ নয়।");
    return;
  }

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    btn.innerHTML = `🔊 শুনুন`;
    return;
  }

  const text = decodeURIComponent(encodedText);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'bn-IN';
  utterance.rate = 0.95;

  utterance.onend = () => {
    isSpeaking = false;
    btn.innerHTML = `🔊 শুনুন`;
  };

  window.speechSynthesis.speak(utterance);
  isSpeaking = true;
  btn.innerHTML = `⏹️ থামুন`;
}

function shareArticle(title) {
  const shareText = `*বঙ্গধ্বনি খবর:* ${title}\n\nপড়ুন: ${window.location.href}`;
  if (navigator.share) {
    navigator.share({ title: title, text: shareText, url: window.location.href }).catch(() => {});
  } else {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank');
  }
}

function openWhatsAppTip() {
  const settings = BongoCMS.getSettings ? BongoCMS.getSettings() : {};
  const phone = settings.hotlineWhatsApp || "919836978826";
  const message = "নমস্কার বঙ্গধ্বনি সম্পাদক মণ্ডলী, আমি একটি খবর / ছবি পাঠাতে চাই:";
  const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

function openSearchModal() {
  const backdrop = document.getElementById("search-modal-backdrop");
  if (!backdrop) return;
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
  const input = document.getElementById("search-input-field");
  if (input) {
    input.value = "";
    input.focus();
    handleSearchInput("");
  }
}

function closeSearchModal() {
  const backdrop = document.getElementById("search-modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function handleSearchInput(query) {
  const container = document.getElementById("search-results-container");
  if (!container) return;

  const q = query.trim().toLowerCase();
  const articles = BongoCMS.getArticles();

  if (!q) {
    container.innerHTML = `
      <p style="color: var(--text-3); font-size: 0.95rem; text-align: center; padding: 24px;">
        🔍 আপনার অনুসন্ধানের শব্দ টাইপ করুন (যেমন: রাম নবমী, নকশাল, গণিত)...
      </p>
    `;
    return;
  }

  const matches = articles.filter(a => 
    (a.title && a.title.toLowerCase().includes(q)) || 
    (a.excerpt && a.excerpt.toLowerCase().includes(q))
  );

  if (matches.length === 0) {
    container.innerHTML = `<p style="color: var(--text-3); font-size: 0.95rem; text-align: center; padding: 24px;">"${query}" সম্পর্কিত কোনো ফলাফল পাওয়া যায়নি।</p>`;
    return;
  }

  container.innerHTML = matches.map(art => `
    <div onclick="closeSearchModal(); openArticleModal('${art.id}');" style="display: flex; gap: 12px; align-items: center; padding: 10px; background: var(--bg-surface); border-radius: var(--radius-xs); cursor: pointer; border: 1px solid var(--border);">
      <img src="${art.image}" style="width: 70px; height: 50px; object-fit: cover; border-radius: 4px; flex-shrink: 0;" />
      <div>
        <span class="badge badge-crimson" style="font-size: 0.65rem; margin-bottom: 2px;">${art.categoryBengali || 'সংবাদ'}</span>
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-1); font-family: var(--font-serif);">${art.title}</h4>
      </div>
    </div>
  `).join("");
}

function filterCategoryByFooter(category) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("data-category") === category) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  renderSubNewsGrid(category);
  const target = document.getElementById("sub-news-grid-container");
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function setupEventListeners() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const category = link.getAttribute("data-category");
      if (!category) return;
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      renderSubNewsGrid(category);

      const target = document.getElementById("sub-news-grid-container");
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function applyTheme(theme) {
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    if (themeBtn) themeBtn.innerHTML = `🌙 Dark Mode`;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    if (themeBtn) themeBtn.innerHTML = `☀️ Light Mode`;
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = (currentTheme === "dark") ? "light" : "dark";
  applyTheme(newTheme);
}

function setupThemeToggle() {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
}
