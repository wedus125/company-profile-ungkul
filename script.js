const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const languageSelect = document.querySelector('#language-select');
const translations = {
  "Pengelompokan ukuran": "Size classification",
  "Pengelompokan kualitas": "Quality classification",
  "Parameter spesifikasi": "Specification parameters",
  "Pilihan pengelompokan untuk diskusi pengadaan. Batas ukuran, toleransi, dan hasil uji disepakati per pesanan.": "Classification options for sourcing discussions. Size limits, tolerances, and test results are agreed for each order.",
  "Lihat spesifikasi & klasifikasi": "View specifications & classifications",
  "Tutup spesifikasi": "Close specifications",
  "SPESIFIKASI PRODUK": "PRODUCT SPECIFICATIONS",
  "Kelompok": "Group",
  "Kriteria pengelompokan": "Classification criteria",
  "Ketersediaan setiap kelompok, kemasan, dan jumlah minimum pesanan dikonfirmasi saat penawaran.": "Availability of each group, packaging, and minimum order quantities are confirmed when quoting.",
  "Diskusikan spesifikasi kunyit": "Discuss turmeric specifications",
  "Bentuk produk": "Product form",
  "Segar, kering, atau irisan dibahas sesuai kebutuhan.": "Fresh, dried, or sliced forms are discussed as required.",
  "Pemeriksaan mutu": "Quality checks",
  "Kebersihan, kondisi rimpang, kadar air untuk produk kering, dan parameter uji sesuai permintaan.": "Cleanliness, rhizome condition, moisture for dried products, and requested test parameters.",
  "Besar": "Large",
  "Rimpang utuh berukuran relatif besar; rentang diameter dan berat ditentukan bersama.": "Relatively large whole rhizomes; diameter and weight ranges are agreed together.",
  "Sedang": "Medium",
  "Rimpang berukuran sedang dengan rentang ukuran yang disepakati.": "Medium rhizomes within an agreed size range.",
  "Kecil / potongan": "Small / pieces",
  "Rimpang kecil atau potongan; ukuran dan proporsi potongan ditentukan sesuai penggunaan.": "Small rhizomes or pieces; size and proportion of pieces depend on the intended use.",
  "Sortasi pilihan": "Selected sorting",
  "Keseragaman ukuran, keutuhan rimpang, dan kebersihan menjadi fokus sortasi.": "Sorting focuses on size uniformity, whole rhizomes, and cleanliness.",
  "Sortasi standar": "Standard sorting",
  "Rentang ukuran lebih beragam; batas cacat fisik dan kebersihan disepakati.": "A wider size range; physical defect and cleanliness limits are agreed.",
  "Bahan olahan": "For processing",
  "Rimpang atau potongan untuk pengolahan; kondisi bahan dan kebersihan tetap diperiksa.": "Rhizomes or pieces for processing; condition and cleanliness are still checked.",
  "Diskusikan spesifikasi jahe": "Discuss ginger specifications",
  "Jenis & bentuk": "Variety & form",
  "Jenis jahe serta bentuk segar, kering, atau irisan dikonfirmasi sebelum pemesanan.": "Ginger variety and fresh, dried, or sliced form are confirmed before ordering.",
  "Kebersihan, kondisi rimpang, kadar air produk kering, dan toleransi kerusakan fisik.": "Cleanliness, rhizome condition, dried product moisture, and physical damage tolerances.",
  "Rimpang utuh dengan ukuran relatif besar; berat dan diameter menjadi dasar kesepakatan.": "Relatively large whole rhizomes; weight and diameter form the agreed criteria.",
  "Rimpang sedang dengan keseragaman ukuran sesuai pesanan.": "Medium rhizomes with size uniformity specified in the order.",
  "Rimpang kecil atau pecahan untuk kebutuhan pengolahan dengan ukuran yang disepakati.": "Small rhizomes or pieces for processing within an agreed size range.",
  "Rimpang utuh, ukuran lebih seragam, serta kebersihan dan kondisi permukaan diperhatikan.": "Whole rhizomes, more uniform sizes, and attention to cleanliness and surface condition.",
  "Ukuran dapat lebih beragam dengan toleransi kondisi fisik yang disepakati.": "Sizes may vary more, within agreed physical condition tolerances.",
  "Potongan atau rimpang untuk olahan; kesegaran dan kondisi bahan diperiksa.": "Pieces or rhizomes for processing; freshness and product condition are checked.",
  "Diskusikan spesifikasi serai": "Discuss lemongrass specifications",
  "Batang utuh, dipangkas, atau dipotong sesuai kebutuhan pembeli.": "Whole, trimmed, or cut stalks according to buyer requirements.",
  "Diameter pangkal, panjang batang, kebersihan, kesegaran, dan kondisi daun.": "Base diameter, stalk length, cleanliness, freshness, and leaf condition.",
  "Batang besar": "Large stalks",
  "Dikelompokkan menurut diameter pangkal dan panjang batang yang disepakati.": "Grouped by agreed base diameter and stalk length.",
  "Batang sedang": "Medium stalks",
  "Diameter pangkal dan panjang sedang dengan rentang ukuran sesuai pesanan.": "Medium base diameters and lengths within the ordered range.",
  "Batang kecil / potongan": "Small stalks / cut pieces",
  "Batang kecil atau potongan untuk pengolahan; panjang potongan disesuaikan.": "Small stalks or pieces for processing; cut length is tailored to requirements.",
  "Batang lebih seragam, pangkal utuh, bersih, dan kondisi segar diperiksa.": "More uniform stalks with intact bases; cleanliness and freshness are checked.",
  "Variasi ukuran lebih luas dengan kondisi batang dan kebersihan yang disepakati.": "A wider size range with agreed stalk condition and cleanliness.",
  "Potongan untuk bumbu atau pengolahan; kondisi bahan tetap menjadi kriteria penerimaan.": "Cut pieces for seasoning or processing; product condition remains an acceptance criterion.",
  "Diskusikan spesifikasi lada hitam / putih": "Discuss black / white pepper specifications",
  "Jenis produk": "Product type",
  "Lada hitam dan lada putih dipisahkan dalam spesifikasi serta penawaran.": "Black and white pepper are specified and quoted separately.",
  "Kadar air, densitas curah (g/l), benda asing, butiran ringan atau pecah, dan uji lain sesuai permintaan.": "Moisture, bulk density (g/l), foreign matter, light or broken grains, and other requested tests.",
  "Butiran besar": "Large grains",
  "Dikelompokkan menggunakan diameter butiran atau ukuran ayakan yang disepakati.": "Grouped using agreed grain diameter or sieve size.",
  "Butiran sedang": "Medium grains",
  "Rentang ukuran menengah dengan hasil pengayakan sesuai kebutuhan.": "A medium size range with sieving results tailored to requirements.",
  "Butiran kecil / pecah": "Small / broken grains",
  "Butiran kecil atau pecah dipisahkan; proporsinya ditentukan dalam spesifikasi.": "Small or broken grains are separated; their proportion is specified in the order.",
  "Fokus pada keseragaman butiran serta pembatasan benda asing dan butiran ringan.": "Focus on grain uniformity and limits for foreign matter and light grains.",
  "Rentang ukuran dan toleransi butiran pecah ditetapkan bersama pembeli.": "Size range and broken grain tolerances are agreed with the buyer.",
  "Bahan giling": "For grinding",
  "Butiran dengan ukuran lebih beragam untuk penggilingan; kriteria kebersihan tetap ditentukan.": "A wider grain size range for grinding; cleanliness criteria remain specified.",
  "Diskusikan spesifikasi arang kayu keras": "Discuss hardwood charcoal specifications",
  "Jenis bahan": "Material type",
  "Jenis kayu keras dan bentuk arang bongkahan dikonfirmasi pada penawaran.": "Hardwood type and lump charcoal form are confirmed in the quotation.",
  "Kadar air, kadar abu, karbon terikat, zat mudah menguap, nilai kalor, dan proporsi fines sesuai kesepakatan.": "Moisture, ash, fixed carbon, volatile matter, calorific value, and fines proportion as agreed.",
  "Bongkahan besar": "Large lumps",
  "Dikelompokkan berdasarkan rentang panjang atau diameter bongkahan yang disepakati.": "Grouped by an agreed lump length or diameter range.",
  "Bongkahan sedang": "Medium lumps",
  "Bongkahan dengan ukuran menengah; rentang ukuran disesuaikan dengan alat pembakaran.": "Medium lumps; size range is tailored to the combustion equipment.",
  "Bongkahan kecil / fines": "Small lumps / fines",
  "Bongkahan kecil dan partikel halus dipisahkan; batas ukuran serta proporsi fines ditentukan bersama.": "Small lumps and fines are separated; size limits and fines proportions are agreed together.",
  "Ukuran lebih seragam dengan batas partikel halus dan bahan asing yang disepakati.": "More uniform sizes with agreed limits on fines and foreign material.",
  "Campuran rentang ukuran sesuai kebutuhan pembakaran dan toleransi yang disepakati.": "A mix of size ranges suited to combustion needs and agreed tolerances.",
  "Kebutuhan industri": "Industrial requirements",
  "Kelas mutu ditentukan berdasarkan parameter uji dan kebutuhan proses pembeli.": "Quality class is determined by test parameters and the buyer's process requirements.",
  "Contoh visual produk \u2022 Dibuat dengan AI": "Product visual example \u2022 AI-generated",
  "Contoh visual rempah: kunyit, jahe, serai, dan lada": "Spice visual example: turmeric, ginger, lemongrass, and pepper",
  "Contoh visual kunyit dengan irisan berwarna jingga": "Turmeric visual example with orange slices",
  "Contoh visual jahe dengan irisan berwarna kuning muda": "Ginger visual example with pale yellow slices",
  "Contoh visual batang serai segar": "Fresh lemongrass stalk visual example",
  "Contoh visual lada hitam dan lada putih dalam wadah": "Black and white pepper visual example in bowls",
  "Contoh visual bongkahan arang kayu keras": "Hardwood lump charcoal visual example",
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
  "Arang Kayu Keras": "Hardwood Charcoal",
  "Arang berbahan kayu keras untuk kebutuhan bahan bakar usaha dan industri. Jenis kayu, ukuran, serta parameter kualitas dikonfirmasi sesuai tujuan penggunaan.": "Charcoal made from hardwood for commercial and industrial fuel needs. Wood type, size, and quality parameters are confirmed according to the intended use.",
  "Jenis kayu, ukuran, kadar air dan abu*": "Wood type, size, moisture and ash content*",
  "Minta penawaran arang kayu keras": "Request a hardwood charcoal quote",
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
  'Mitra distribusi kunyit, jahe, serai, lada hitam dan putih, serta arang kayu keras untuk kebutuhan bisnis Anda. Berbasis di Bojonegoro, kami menghubungkan komoditas Indonesia dengan peluang pasar dunia.': 'Your distribution partner for turmeric, ginger, lemongrass, black and white pepper, and hardwood charcoal. Based in Bojonegoro, we connect Indonesian commodities with opportunities in global markets.',
  'Jelajahi produk': 'Explore products',
  'Diskusikan kebutuhan Anda': 'Discuss your needs',
  'Jawa Timur, Indonesia': 'East Java, Indonesia',
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
  'PT. UNGKUL JAYA RAYA bergerak di bidang distribusi kunyit, jahe, serai, lada hitam dan putih, serta arang kayu keras, dengan basis operasional di Bojonegoro.': 'PT. UNGKUL JAYA RAYA distributes turmeric, ginger, lemongrass, black and white pepper, and hardwood charcoal, with operations based in Bojonegoro.',
  'Kami hadir untuk menjadi mitra pengadaan bagi pelaku usaha, distributor, dan calon pembeli internasional. Setiap kebutuhan dimulai dengan komunikasi yang jelas: jenis produk, kriteria kualitas, pengemasan, hingga rencana pengiriman.': 'We serve businesses, distributors, and prospective international buyers as a sourcing partner. Every inquiry starts with clear communication about product types, quality criteria, packaging, and delivery plans.',
  'Mari bangun kemitraan': 'Build a partnership with us',
  '02 / KOMODITAS KAMI': '02 / OUR COMMODITIES',
  'Hasil alam.': 'Natural produce.',
  'Nilai yang berarti.': 'Meaningful value.',
  'Rempah pilihan dan arang kayu keras untuk kebutuhan kuliner, industri, perdagangan, dan pengembangan pasar ekspor.': 'Selected spices and hardwood charcoal for culinary uses, industry, trade, and export market development.',
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
  'Dari Bojonegoro,': 'From Bojonegoro,',
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
  'Bojonegoro': 'Bojonegoro',
  'Lihat wilayah Bojonegoro': 'View the Bojonegoro area',
  'Komoditas Nusantara.': 'Indonesian commodities.',
  'Untuk kemitraan yang tumbuh bersama.': 'For partnerships that grow together.',
  'Kembali ke atas ↑': 'Back to top ↑',
  'Navigasi utama': 'Main navigation',
  'PT. UNGKUL JAYA RAYA, beranda': 'PT. UNGKUL JAYA RAYA, home',
  'PT. UNGKUL JAYA RAYA, distribusi kunyit, jahe, serai, lada hitam dan putih, serta arang kayu keras dari Bojonegoro untuk kebutuhan bisnis dan pasar ekspor.': 'PT. UNGKUL JAYA RAYA distributes turmeric, ginger, lemongrass, black and white pepper, and hardwood charcoal from Bojonegoro for business needs and export markets.'
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
    const productName = translations[product] || product;
    url.searchParams.set('text', product
      ? (element.closest('.product-dialog')
        ? `Hello PT. UNGKUL JAYA RAYA, I would like a quote for ${productName.toLowerCase()} and to discuss size and quality classifications.`
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
