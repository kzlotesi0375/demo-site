// Google Tag Manager veri katmanı ve gtag temel fonksiyonları
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ dataLayer.push(arguments); };

// "Hemen Başla" buton tıklaması takibi
var startBtn = document.getElementById('startBtn');
if (startBtn) {
  startBtn.addEventListener('click', function() {
    window.gtag('event', 'start_button_click', {
      'event_category': 'engagement',
      'event_label': 'Hemen Başla'
    });
    window.dataLayer.push({
      'event': 'start_button_click'
    });
  });
}

// İletişim formu gönderim takibi
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    window.gtag('event', 'generate_lead', {
      'event_category': 'engagement',
      'event_label': 'İletişim Formu'
    });
    // Google Ads dönüşüm izleme örneği (Conversion ID & Label yerleştirilmeli)
    window.gtag('event', 'conversion', {
      'send_to': 'AW-123456789/AbCdEfGhIj'
    });
    window.dataLayer.push({
      'event': 'form_submit'
    });
    // Form gönderildi mesajını göster ve formu gizle
    document.getElementById('thankYou').style.display = 'block';
    document.getElementById('formContainer').style.display = 'none';
  });
}

// Hizmet kartı tıklama takibi
var serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(function(card) {
  card.addEventListener('click', function(e) {
    e.preventDefault();
    var serviceName = card.getAttribute('data-service');
    window.gtag('event', 'select_content', {
      'content_type': 'service_card',
      'item_id': serviceName
    });
    window.dataLayer.push({
      'event': 'service_click',
      'service_name': serviceName
    });
  });
});
