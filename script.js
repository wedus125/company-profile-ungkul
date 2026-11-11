const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const languageSelect = document.querySelector('#language-select');
const translations = {
  "Logo PT Ungkul Jaya Raya": "PT Ungkul Jaya Raya logo",
  "Foto dari arsip perusahaan": "Photo from company archives",
  "Identitas perusahaan": "Company information",
  "Bentuk badan usaha": "Legal entity type",
  "Perseroan Perorangan": "Single-member limited liability company",
  "Tanggal pendirian": "Date of establishment",
  "15 Juli 2026": "15 July 2026",
  "Nomor Induk Berusaha": "Business Identification Number",
  "NPWP": "Tax Identification Number",
  "KBLI 2025": "KBLI 2025",
  "Lada hitam dan putih di atas daun pisang": "Black and white pepper on a banana leaf",
  "Kunyit dalam bentuk bubuk dan irisan": "Turmeric powder and slices",
  "Jahe dalam bentuk bubuk dan irisan": "Ginger powder and slices",
  "Potongan serai di atas daun pisang": "Cut lemongrass on a banana leaf",

  "Parameter spesifikasi": "Specification parameters",
  "Informasi produk untuk mendukung kebutuhan pengadaan Anda. Spesifikasi dan ketentuan pesanan dikonfirmasi saat penawaran.": "Product information to support your sourcing needs. Specifications and order terms are confirmed when quoting.",
  "Lihat spesifikasi produk": "View product specifications",
  "Tutup spesifikasi": "Close specifications",
  "SPESIFIKASI PRODUK": "PRODUCT SPECIFICATIONS",
  "Ketersediaan produk, kemasan, dan jumlah minimum pesanan dikonfirmasi saat penawaran.": "Product availability, packaging, and minimum order quantities are confirmed when quoting.",
  "Diskusikan spesifikasi kunyit": "Discuss turmeric specifications",
  "Bentuk produk": "Product form",
  "Segar, kering, atau irisan dibahas sesuai kebutuhan.": "Fresh, dried, or sliced forms are discussed as required.",
  "Pemeriksaan mutu": "Quality checks",
  "Kebersihan, kondisi rimpang, kadar air untuk produk kering, dan parameter uji sesuai permintaan.": "Cleanliness, rhizome condition, moisture for dried products, and requested test parameters.",
  "Diskusikan spesifikasi jahe": "Discuss ginger specifications",
  "Jenis & bentuk": "Variety & form",
  "Jenis jahe serta bentuk segar, kering, atau irisan dikonfirmasi sebelum pemesanan.": "Ginger variety and fresh, dried, or sliced form are confirmed before ordering.",
  "Kebersihan, kondisi rimpang, kadar air produk kering, dan toleransi kerusakan fisik.": "Cleanliness, rhizome condition, dried product moisture, and physical damage tolerances.",
  "Diskusikan spesifikasi serai": "Discuss lemongrass specifications",
  "Batang utuh, dipangkas, atau dipotong sesuai kebutuhan pembeli.": "Whole, trimmed, or cut stalks according to buyer requirements.",
  "Diameter pangkal, panjang batang, kebersihan, kesegaran, dan kondisi daun.": "Base diameter, stalk length, cleanliness, freshness, and leaf condition.",
  "Diskusikan spesifikasi lada hitam / putih": "Discuss black / white pepper specifications",
  "Jenis produk": "Product type",
  "Lada hitam dan lada putih dipisahkan dalam spesifikasi serta penawaran.": "Black and white pepper are specified and quoted separately.",
  "Kadar air, densitas curah (g/l), benda asing, butiran ringan atau pecah, dan uji lain sesuai permintaan.": "Moisture, bulk density (g/l), foreign matter, light or broken grains, and other requested tests.",
  "Kunyit": "Turmeric",
  "Rimpang berwarna kuning untuk bumbu, minuman, dan bahan baku industri. Bentuk serta kondisi produk dibahas sesuai kebutuhan pembeli.": "A yellow rhizome for seasonings, beverages, and industrial ingredients. Product form and condition are discussed according to buyer requirements.",
  "Bentuk, kebersihan, kondisi rimpang*": "Form, cleanliness, rhizome condition*",
  "Minta penawaran kunyit": "Request a turmeric quote",
  "Serai": "Lemongrass",
  "Batang aromatik untuk bumbu masakan, minuman, dan bahan baku olahan. Ukuran, bentuk, serta kondisi produk disesuaikan dengan kebutuhan pengadaan.": "Aromatic stalks for cooking, beverages, and processing. Size, form, and product condition are tailored to sourcing requirements.",
  "Ukuran, kebersihan, kondisi batang*": "Size, cleanliness, stalk condition*",
  "Minta penawaran serai": "Request a lemongrass quote",
  "Lada Hitam / Putih": "Black / White Pepper",
  "Pilihan lada hitam dan lada putih untuk bumbu serta kebutuhan industri pangan. Jenis, ukuran butiran, dan kriteria sortasi dibahas saat permintaan penawaran.": "Black and white pepper for seasonings and food industry needs. Type, grain size, and sorting criteria are discussed when requesting a quote.",
  "Jenis lada, ukuran butiran, kadar air*": "Pepper type, grain size, moisture content*",
  "Minta penawaran lada hitam / putih": "Request a black / white pepper quote",
  'Galeri': 'Gallery',
  'GALERI FOTO': 'PHOTO GALLERY',
  'Lebih dekat dengan': 'A closer look at',
  'komoditas kami.': 'our commodities.',
  'Dokumentasi rempah dan bahan alam. Klik foto untuk melihat ukuran penuh.': 'Photos of spices and natural ingredients. Click a photo to view it in full size.',
  'Ragam rempah Nusantara': 'Spices of the Indonesian archipelago',
  'Detail bahan alam': 'Natural ingredients up close',
  'Rempah dalam bentuk bubuk': 'Spices in powdered form',
  'Warna alami rempah': 'The natural colors of spices',
  'Potongan bahan aromatik': 'Sliced aromatic ingredients',
  'Butiran rempah berwarna gelap dan terang di atas daun pisang': 'Dark and light spice grains on a banana leaf',
  'Detail butiran rempah dalam wadah': 'Close-up of spice grains in a container',
  'Bubuk rempah berwarna terang dengan irisan rimpang': 'Light-colored spice powder with sliced rhizomes',
  'Bubuk rempah berwarna kuning dengan irisan bahan kering': 'Yellow spice powder with sliced dried ingredients',
  'Potongan batang rempah di atas daun pisang': 'Sliced aromatic stalks on a banana leaf',
  'Tutup foto': 'Close photo',
  'PT. UNGKUL JAYA RAYA — Perdagangan Rempah Indonesia': 'PT. UNGKUL JAYA RAYA — Indonesian Spice Trading Company',
  'Komoditas Indonesia untuk pasar dunia.': 'Indonesian commodities for global markets.',
  'Tentang kami': 'About us',
  'Produk': 'Products',
  'Kualitas': 'Quality',
  'Ekspor': 'Exports',
  'Hubungi kami': 'Contact us',
  'PERDAGANGAN REMPAH. KEMITRAAN GLOBAL.': 'SPICE TRADING. GLOBAL PARTNERSHIPS.',
  'Kekayaan alam,': 'Natural abundance,',
  'kualitas yang': 'quality you',
  'Anda percaya.': 'can trust.',
  'Mitra perdagangan rempah untuk kebutuhan bisnis Anda. Kami membantu pengadaan kunyit, jahe, serai, serta lada hitam dan putih sesuai spesifikasi dan kebutuhan pembeli.': 'Your spice trading partner for business needs. We help source turmeric, ginger, lemongrass, black and white pepper according to buyer specifications and requirements.',
  'Jelajahi produk': 'Explore products',
  'Diskusikan kebutuhan Anda': 'Discuss your needs',
  'Komoditas pilihan': 'Selected commodities',
  'DARI BUMI NUSANTARA': 'FROM THE INDONESIAN ARCHIPELAGO',
  'Komoditas terpilih': 'Selected commodities',
  'Spesifikasi sesuai kebutuhan': 'Specifications to suit your needs',
  'Kemitraan berkelanjutan': 'Lasting partnerships',
  'Orientasi pasar ekspor': 'Export market focus',
  '01 / TENTANG KAMI': '01 / ABOUT US',
  'Tumbuh dari lokal.': 'Rooted locally.',
  'Melangkah': 'Reaching',
  'lebih jauh.': 'further.',
  'PT. UNGKUL JAYA RAYA merupakan perusahaan perdagangan rempah Indonesia (trading company) yang berfokus pada pengadaan kunyit, jahe, serai, serta lada hitam dan putih untuk kebutuhan bisnis.': 'PT. UNGKUL JAYA RAYA is an Indonesian spice trading company focused on sourcing turmeric, ginger, lemongrass, black and white pepper for business needs.',
  'Kami membantu pelaku usaha dan calon pembeli internasional membahas kebutuhan produk, mengonfirmasi ketersediaan dari pemasok, serta menyusun penawaran. Spesifikasi, volume, kemasan, dan rencana pengiriman disepakati sebelum pemesanan.': 'We help businesses and prospective international buyers define product requirements, confirm supplier availability, and prepare quotations. Specifications, volume, packaging, and delivery plans are agreed before ordering.',
  'Mari bangun kemitraan': 'Build a partnership with us',
  '02 / KOMODITAS KAMI': '02 / OUR COMMODITIES',
  'Hasil alam.': 'Natural produce.',
  'Nilai yang berarti.': 'Meaningful value.',
  'Rempah pilihan untuk kebutuhan kuliner, industri, perdagangan, dan pengembangan pasar ekspor.': 'Selected spices for culinary uses, industry, trade, and export market development.',
  'KOMODITAS UNGGULAN': 'FEATURED COMMODITY',
  'Jahe': 'Ginger',
  'Rimpang aromatik untuk kebutuhan kuliner, minuman, dan bahan baku industri. Jenis serta kondisi produk disepakati berdasarkan kebutuhan pembeli.': 'An aromatic rhizome for culinary uses, beverages, and industrial ingredients. Product variety and condition are agreed upon according to the buyer’s needs.',
  'Kriteria kualitas': 'Quality criteria',
  'Ukuran, kebersihan, kadar air*': 'Size, cleanliness, moisture content*',
  'Jenis, ukuran, kondisi rimpang*': 'Variety, size, rhizome condition*',
  'Pengemasan': 'Packaging',
  'Disesuaikan dengan pesanan*': 'Customized to your order*',
  'Minta penawaran jahe': 'Request a ginger quote',
  '* Spesifikasi, stok, jumlah minimum pesanan, dan kemasan perlu dikonfirmasi saat permintaan penawaran.': '* Specifications, stock, minimum order quantities, and packaging must be confirmed when requesting a quote.',
  '03 / KOMITMEN KUALITAS': '03 / OUR QUALITY COMMITMENT',
  'Kualitas dimulai dari': 'Quality starts with',
  'detail yang tepat.': 'the right details.',
  'Kriteria yang jelas membantu Anda memperoleh komoditas yang sesuai dengan tujuan penggunaan.': 'Clear criteria help you source commodities suited to your intended application.',
  'Spesifikasi terarah': 'Clear specifications',
  'Diskusikan jenis, ukuran, kondisi, dan parameter kualitas sebelum menyepakati pesanan.': 'Discuss variety, size, condition, and quality parameters before confirming an order.',
  'Pengemasan sesuai': 'Suitable packaging',
  'Tentukan pilihan kemasan berdasarkan karakter produk, volume, dan kebutuhan pengiriman.': 'Choose packaging based on product characteristics, volume, and shipping requirements.',
  'Komunikasi terbuka': 'Open communication',
  'Dapatkan konfirmasi ketersediaan dan penawaran agar perencanaan pengadaan lebih jelas.': 'Confirm availability and pricing to plan your sourcing with greater clarity.',
  '04 / PELUANG EKSPOR': '04 / EXPORT OPPORTUNITIES',
  'Dari Indonesia,': 'From Indonesia,',
  'menjangkau': 'reaching',
  'dunia.': 'the world.',
  'Kami membuka kerja sama perdagangan dan pengadaan rempah untuk pasar internasional. Mari diskusikan kebutuhan komoditas, negara tujuan, dan persyaratan impor untuk menyusun penawaran yang sesuai.': 'We welcome spice trading and sourcing partnerships for international markets. Discuss your commodity requirements, destination country, and import requirements with us to prepare a suitable offer.',
  'Bicarakan kebutuhan ekspor': 'Discuss export requirements',
  'LANGKAH MENUJU KERJA SAMA': 'STEPS TO WORKING TOGETHER',
  'Sampaikan kebutuhan': 'Share your requirements',
  'Produk, spesifikasi, volume, dan negara tujuan.': 'Product, specifications, volume, and destination country.',
  'Konfirmasi pasokan & penawaran': 'Supply confirmation & quotation',
  'Ketersediaan dari pemasok, harga, kemasan, dan ketentuan transaksi.': 'Supplier availability, pricing, packaging, and transaction terms.',
  'Rencanakan pengiriman': 'Plan delivery',
  'Jadwal, logistik, serta dokumen sesuai kesepakatan.': 'Schedule, logistics, and documentation as agreed.',
  'Pemenuhan ekspor mengikuti verifikasi persyaratan negara tujuan dan dokumen yang diperlukan.': 'Export fulfillment is subject to verification of destination country requirements and the necessary documentation.',
  '05 / HUBUNGI KAMI': '05 / CONTACT US',
  'Kemitraan yang baik': 'A strong partnership',
  'berawal dari': 'starts with',
  'percakapan.': 'a conversation.',
  'Ceritakan kebutuhan bisnis Anda. Hubungi tim kami untuk informasi produk dan permintaan penawaran.': 'Tell us about your business needs. Contact our team for product information and quotations.',
  'Mulai percakapan WhatsApp': 'Start a WhatsApp conversation',
  'TELEPON / WHATSAPP': 'PHONE / WHATSAPP',
  'Komoditas Nusantara.': 'Indonesian commodities.',
  'Untuk kemitraan yang tumbuh bersama.': 'For partnerships that grow together.',
  'Kembali ke atas ↑': 'Back to top ↑',
  'Navigasi utama': 'Main navigation',
  'PT. UNGKUL JAYA RAYA, beranda': 'PT. UNGKUL JAYA RAYA, home',
  'PT. UNGKUL JAYA RAYA, perusahaan perdagangan dan pemasok kunyit, jahe, serai, lada hitam dan putih untuk kebutuhan bisnis dan pasar ekspor.': 'PT. UNGKUL JAYA RAYA is a spice trading company supplying turmeric, ginger, lemongrass, black and white pepper for business needs and export markets.'
};

// Keep the original nodes so language changes preserve links, icons, and emphasis.
const translatedNodes = [];
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, style, select')) continue;
  const key = node.textContent.trim();
  if (Object.hasOwn(translations, key)) translatedNodes.push({ node, original: node.textContent, key });
}
const translatedAttributes = [];
document.querySelectorAll('[aria-label], [alt], meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[property="og:image:alt"], meta[name="twitter:title"], meta[name="twitter:description"], meta[name="twitter:image:alt"]').forEach(element => {
  const attribute = element.matches('meta') ? 'content' : element.hasAttribute('alt') ? 'alt' : 'aria-label';
  const original = element.getAttribute(attribute);
  if (Object.hasOwn(translations, original)) translatedAttributes.push({ element, attribute, original });
});
const whatsappLinks = Array.from(document.querySelectorAll('a[href^="https://wa.me/"]'), element => ({
  element, original: element.getAttribute('href')
}));

function updateMenuLabel() {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', document.documentElement.lang === 'en'
    ? (open ? 'Close navigation menu' : 'Open navigation menu')
    : (open ? 'Tutup menu navigasi' : 'Buka menu navigasi'));
}

function setLanguage(language) {
  const english = language === 'en';
  document.documentElement.lang = english ? 'en' : 'id';
  document.querySelector('meta[property="og:locale"]').setAttribute('content', english ? 'en_US' : 'id_ID');
  languageSelect.value = document.documentElement.lang;
  translatedNodes.forEach(({ node, original, key }) => {
    node.textContent = english ? original.replace(key, translations[key]) : original;
  });
  translatedAttributes.forEach(({ element, attribute, original }) => {
    element.setAttribute(attribute, english ? translations[original] : original);
  });
  whatsappLinks.forEach(({ element, original }) => {
    if (!english) {
      element.setAttribute('href', original);
      return;
    }
    const url = new URL(original);
    const product = element.dataset.product;
    const productName = translations[product] || product;
    url.searchParams.set('text', product
      ? (element.closest('.product-dialog')
        ? `Hello PT. UNGKUL JAYA RAYA, I would like a quote for ${productName.toLowerCase()} and to discuss product specifications and sourcing requirements.`
        : `Hello PT. UNGKUL JAYA RAYA, I would like information about your ${productName.toLowerCase()} products.`)
      : 'Hello PT. UNGKUL JAYA RAYA, I would like to discuss commodity sourcing.');
    element.setAttribute('href', url.href);
  });
  updateMenuLabel();
  try { localStorage.setItem('ujr-language', document.documentElement.lang); } catch { /* Storage may be unavailable. */ }
}

languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));
let savedLanguage = 'id';
try { savedLanguage = localStorage.getItem('ujr-language') || 'id'; } catch { /* Use Indonesian by default. */ }
setLanguage(savedLanguage);

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
  navigation.classList.toggle('is-open', open);
});

navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
document.querySelector('#year').textContent = String(new Date().getFullYear());

const photoDialog = document.querySelector('.photo-dialog');
const fullPhoto = photoDialog.querySelector('.photo-full');
const photoCaption = photoDialog.querySelector('#photo-caption');
document.querySelectorAll('.gallery-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    fullPhoto.src = link.href;
    fullPhoto.alt = link.querySelector('img').alt;
    photoCaption.textContent = link.closest('figure').querySelector('figcaption').textContent;
    photoDialog.showModal();
  });
});
photoDialog.querySelector('.photo-close').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('click', event => {
  if (event.target !== photoDialog) return;
  const bounds = photoDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) photoDialog.close();
});

// Native dialogs support keyboard focus, Escape, and returning focus to the opener.
document.querySelectorAll('[data-spec-open]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(`spec-${button.dataset.specOpen}`);
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});
document.querySelectorAll('.product-dialog').forEach(dialog => {
  dialog.querySelector('.spec-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
