window.dataLayer = window.dataLayer || [];

 // buton eventleri
 document.getElementById('btnAddToCart')?.addEventListener('click', function(){
   window.dataLayer.push({
     event: 'add_to_cart',
     ecommerce: {
       currency: 'TRY',
       value: 99.90,
       items: [{
         item_id: 'DEMO-001',
         item_name: 'Demo Ürün',
         price: 99.90,
         quantity: 1
       }]
     }
   });
   alert('add_to_cart event gönderildi (Demo)');
 });

 document.getElementById('btnViewItem')?.addEventListener('click', function(){
   window.dataLayer.push({
     event: 'view_item',
     ecommerce: {
       items: [{ item_id: 'DEMO-001', item_name: 'Demo Ürün' }]
     }
   });
 });

 // form submit yakalama (thanks.html’de lead tetikleniyor)
 const form = document.getElementById('leadForm');
 if (form){
   form.addEventListener('submit', function(){
     window.dataLayer.push({ event: 'begin_checkout' });
   });
 }
