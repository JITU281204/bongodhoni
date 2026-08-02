/**
 * 'বঙ্গধ্বনি' (Bongo Dhoni) - Commercial News CMS Admin Controller v7.0
 * Minimalist Weekly PDF Publisher
 */

document.addEventListener("DOMContentLoaded", () => {
  loadSettingsForm();
});

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
  alert("✅ সাইটের সমস্থ সেটিংস ও তারিখ আপডেট করা হয়েছে!");
}

function simulatePdfUpload(e) {
  if (e) e.preventDefault();
  
  // Hide default state, show progress
  document.getElementById('upload-content-default').style.display = 'none';
  document.getElementById('upload-progress-container').style.display = 'flex';
  
  const progressBar = document.getElementById('upload-progress-bar');
  const statusText = document.getElementById('upload-status-text');
  
  let progress = 0;
  
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = progress + '%';
    
    if (progress > 30 && progress < 60) {
      statusText.innerText = "PDF পেজগুলো এক্সট্র্যাক্ট করা হচ্ছে...";
    } else if (progress >= 60 && progress < 90) {
      statusText.innerText = "AI নিউজ ক্যাটাগরিগুলো অ্যানালাইজ করছে...";
    } else if (progress >= 100) {
      clearInterval(interval);
      statusText.innerText = "প্রসেসিং সম্পন্ন হয়েছে!";
      
      setTimeout(() => {
        document.getElementById('pdf-upload-zone').style.display = 'none';
        document.getElementById('upload-success-message').style.display = 'block';
      }, 500);
    }
  }, 400);
}

// Drag and drop visual feedback
setTimeout(() => {
  const dropZone = document.getElementById('pdf-upload-zone');
  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'var(--crimson)';
      dropZone.style.background = 'rgba(139,24,24,0.05)';
    });
    
    dropZone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'var(--border-strong)';
      dropZone.style.background = 'var(--bg-card)';
    });
    
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'var(--border-strong)';
      dropZone.style.background = 'var(--bg-card)';
      simulatePdfUpload();
    });
  }
}, 500);
