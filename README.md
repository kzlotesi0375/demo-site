# Google Dijital Pazarlama Eğitim Sitesi (Demo)

Bu depo, dijital pazarlama eğitimleri kapsamında kullanılan örnek bir websitesini içerir. Google Ads, Google Analytics 4 (GA4), Google Tag Manager (GTM), Search Console ve Merchant Center gibi araçların entegrasyonlarını uygulamalı olarak öğretmek amacıyla hazırlanmıştır.

## 🔗 Demo Yayın Adresi
https://kzlotesi0375.github.io/demo-site/

## 📂 Dosya Yapısı

| Dosya | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa – tanıtım içeriği, “Hemen Başla” CTA butonu |
| `form.html` | Demo iletişim formu – form gönderimi dönüşüm olarak izlenir |
| `hizmetler.html` | Google ürünlerini temsil eden 4 bilgi kartı – her tıklama dönüşüm tetikler |
| `style.css` | Genel stiller, mobil uyumlu, karanlık tema destekli |
| `script.js` | GTAG ve GTM veri katmanı olayları (buton tıklama, form gönderimi vb.) |
| `README.md` | Bu açıklama dosyası |

## 🎯 Eğitim Kapsamında Kullanılan Google Araçları

- **Google Tag Manager (GTM)**  
  Sayfa etiket yönetimi, event tetikleme ve dönüşüm ölçümü

- **Google Analytics 4 (GA4)**  
  Etkileşim izleme (sayfa görüntüleme, buton tıklama, form gönderimi)

- **Google Ads**  
  Dönüşüm takibi (örnek reklam dönüşüm kodu yerleştirilmiştir)

- **Google Search Console**  
  HTML doğrulama meta etiketi örneği yer alır

## 🧪 İzlenen Etkinlikler

| Olay | Açıklama |
|------|----------|
| `start_button_click` | Ana sayfadaki “Hemen Başla” butonuna tıklama |
| `form_submit` | Form gönderimi (Ayrıca `generate_lead` eventi ile GA4 izleme) |
| `select_content` | Hizmet kartı tıklamaları – içerik seçimi |
| `conversion` | Google Ads dönüşüm etiketi – form sonrası tetiklenir |

## 🔧 Kullanım Talimatları

1. Bu repoyu kendi GitHub hesabına klonla:
   ```bash
   git clone https://github.com/kzlotesi0375/demo-site.git
