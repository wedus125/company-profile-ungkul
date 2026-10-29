const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const languageSelect = document.querySelector('#language-select');
const translations = {
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
  'PT. UNGKUL JAYA RAYA — Komoditas Nusantara': 'PT. UNGKUL JAYA RAYA — Indonesian Commodities',
  'Dari Bojonegoro, untuk pasar dunia.': 'From Bojonegoro to the world.',
  'Tentang kami': 'About us',
  'Produk': 'Products',
  'Kualitas': 'Quality',
  'Ekspor': 'Exports',
  'Hubungi kami': 'Contact us',
  'SUMBER DAYA LOKAL. JANGKAUAN GLOBAL.': 'LOCAL RESOURCES. GLOBAL REACH.',
  'Kekayaan alam,': 'Natural abundance,',
  'kualitas yang': 'quality you',
  'Anda percaya.': 'can trust.',
  'Mitra distribusi kemiri dan jahe untuk kebutuhan bisnis Anda. Berakar di Kedewan, Bojonegoro, kami menghubungkan komoditas Indonesia dengan peluang pasar dunia.': 'Your distribution partner for candlenuts and ginger. Based in Kedewan, Bojonegoro, we connect Indonesian commodities with opportunities in global markets.',
  'Jelajahi produk': 'Explore products',
  'Diskusikan kebutuhan Anda': 'Discuss your needs',
  'Jawa Timur, Indonesia': 'East Java, Indonesia',
  'Ilustrasi kemiri dan jahe dengan latar perbukitan hijau': 'Illustration of candlenuts and ginger against green hills',
  'Komoditas pilihan': 'Selected commodities',
  'DARI BUMI NUSANTARA': 'FROM THE INDONESIAN ARCHIPELAGO',
  'Ilustrasi produk • Kemiri & Jahe': 'Product illustration • Candlenuts & Ginger',
  'Komoditas terpilih': 'Selected commodities',
  'Spesifikasi sesuai kebutuhan': 'Specifications to suit your needs',
  'Kemitraan berkelanjutan': 'Lasting partnerships',
  'Orientasi pasar ekspor': 'Export market focus',
  '01 / TENTANG KAMI': '01 / ABOUT US',
  'Tumbuh dari lokal.': 'Rooted locally.',
  'Melangkah': 'Reaching',
  'lebih jauh.': 'further.',
  'PT. UNGKUL JAYA RAYA bergerak di bidang distribusi komoditas kemiri dan jahe, beroperasi di Kecamatan Kedewan, Kabupaten Bojonegoro, Jawa Timur.': 'PT. UNGKUL JAYA RAYA distributes candlenuts and ginger, operating in Kedewan District, Bojonegoro Regency, East Java, Indonesia.',
  'Kami hadir untuk menjadi mitra pengadaan bagi pelaku usaha, distributor, dan calon pembeli internasional. Setiap kebutuhan dimulai dengan komunikasi yang jelas: jenis produk, kriteria kualitas, pengemasan, hingga rencana pengiriman.': 'We serve businesses, distributors, and prospective international buyers as a sourcing partner. Every inquiry starts with clear communication about product types, quality criteria, packaging, and delivery plans.',
  'Mari bangun kemitraan': 'Build a partnership with us',
  '02 / KOMODITAS KAMI': '02 / OUR COMMODITIES',
  'Hasil alam.': 'Natural produce.',
  'Nilai yang berarti.': 'Meaningful value.',
  'Dua komoditas andalan untuk kebutuhan industri, perdagangan, dan pengembangan pasar ekspor.': 'Two core commodities for industry, trade, and export market development.',
  'KOMODITAS UNGGULAN': 'FEATURED COMMODITY',
  'Kemiri': 'Candlenuts',
  'Jahe': 'Ginger',
  'Komoditas serbaguna untuk bahan pangan dan kebutuhan industri. Kriteria sortasi serta bentuk produk dapat dibahas sesuai penggunaan Anda.': 'A versatile commodity for food and industrial applications. Sorting criteria and product form can be discussed to suit your intended use.',
  'Rimpang aromatik untuk kebutuhan kuliner, minuman, dan bahan baku industri. Jenis serta kondisi produk disepakati berdasarkan kebutuhan pembeli.': 'An aromatic rhizome for culinary uses, beverages, and industrial ingredients. Product variety and condition are agreed upon according to the buyer’s needs.',
  'Kriteria kualitas': 'Quality criteria',
  'Ukuran, kebersihan, kadar air*': 'Size, cleanliness, moisture content*',
  'Jenis, ukuran, kondisi rimpang*': 'Variety, size, rhizome condition*',
  'Pengemasan': 'Packaging',
  'Disesuaikan dengan pesanan*': 'Customized to your order*',
  'Minta penawaran kemiri': 'Request a candlenut quote',
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
  'Dari Kedewan,': 'From Kedewan,',
  'menjangkau': 'reaching',
  'dunia.': 'the world.',
  'Kami membuka kerja sama distribusi untuk pasar internasional. Mari diskusikan kebutuhan komoditas, negara tujuan, dan persyaratan impor untuk menyusun penawaran yang sesuai.': 'We welcome distribution partnerships for international markets. Discuss your commodity requirements, destination country, and import requirements with us to prepare a suitable offer.',
  'Bicarakan kebutuhan ekspor': 'Discuss export requirements',
  'LANGKAH MENUJU KERJA SAMA': 'STEPS TO WORKING TOGETHER',
  'Sampaikan kebutuhan': 'Share your requirements',
  'Produk, spesifikasi, volume, dan negara tujuan.': 'Product, specifications, volume, and destination country.',
  'Konfirmasi & penawaran': 'Confirmation & quotation',
  'Ketersediaan, harga, kemasan, dan ketentuan transaksi.': 'Availability, pricing, packaging, and transaction terms.',
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
  'LOKASI OPERASIONAL': 'OPERATING LOCATION',
  'Kecamatan Kedewan, Kabupaten Bojonegoro': 'Kedewan District, Bojonegoro Regency',
  'Lihat wilayah Kedewan': 'View the Kedewan area',
  'Komoditas Nusantara.': 'Indonesian commodities.',
  'Untuk kemitraan yang tumbuh bersama.': 'For partnerships that grow together.',
  'Kembali ke atas ↑': 'Back to top ↑',
  'Navigasi utama': 'Main navigation',
  'PT. UNGKUL JAYA RAYA, beranda': 'PT. UNGKUL JAYA RAYA, home',
  'Ilustrasi biji kemiri': 'Illustration of candlenuts',
  'Ilustrasi rimpang jahe': 'Illustration of ginger',
  'PT. UNGKUL JAYA RAYA, distribusi kemiri dan jahe dari Kedewan, Bojonegoro, Jawa Timur untuk kebutuhan bisnis dan pasar ekspor.': 'PT. UNGKUL JAYA RAYA distributes candlenuts and ginger from Kedewan, Bojonegoro, East Java for business needs and export markets.'
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
document.querySelectorAll('[aria-label], [alt], meta[name="description"]').forEach(element => {
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
    url.searchParams.set('text', product
      ? `Hello PT. UNGKUL JAYA RAYA, I would like information about your ${product === 'Kemiri' ? 'candlenut' : 'ginger'} products.`
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
