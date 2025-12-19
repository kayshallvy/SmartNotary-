const categoryCatalog = [
  {
    value: 'peralihan',
    label: 'Peralihan Hak (Tanah/Bangunan)',
    details: [
      { value: 'jual-beli', label: 'Jual beli tanah/bangunan' },
      { value: 'hibah', label: 'Hibah tanah/bangunan' },
      { value: 'waris-tanah', label: 'Pembagian hak waris + balik nama' },
      { value: 'tukar-menukar', label: 'Akta tukar-menukar' },
      { value: 'pecah-sertifikat', label: 'Pemecahan sertifikat' },
      { value: 'gabung-sertifikat', label: 'Penggabungan sertifikat' },
      { value: 'peningkatan-hak', label: 'Peningkatan hak (HGB → SHM)' }
    ]
  },
  {
    value: 'badan',
    label: 'Pendirian / Perubahan Badan Hukum',
    details: [
      { value: 'pendirian-pt', label: 'Mendirikan PT' },
      { value: 'pendirian-cv', label: 'Mendirikan CV' },
      { value: 'pendirian-yayasan', label: 'Mendirikan Yayasan' },
      { value: 'perubahan-ad', label: 'Perubahan Anggaran Dasar PT' },
      { value: 'perubahan-pengurus', label: 'Perubahan pengurus/direksi' }
    ]
  },
  {
    value: 'perjanjian',
    label: 'Perjanjian / Pengikatan',
    details: [
      { value: 'perjanjian-hutang', label: 'Perjanjian hutang-piutang' },
      { value: 'perjanjian-kerjasama', label: 'Perjanjian kerja sama' },
      { value: 'pembagian-harta', label: 'Perjanjian pembagian harta bersama' },
      { value: 'lainnya-perjanjian', label: 'Perjanjian khusus lainnya' }
    ]
  },
  {
    value: 'waris',
    label: 'Waris / Hibah / Wasiat',
    details: [
      { value: 'akta-wasiat', label: 'Akta wasiat' },
      { value: 'hibah', label: 'Akta hibah' },
      { value: 'waris-tanah', label: 'Pembagian waris melibatkan tanah' }
    ]
  },
  {
    value: 'kredit',
    label: 'Kredit & Pembebanan',
    details: [
      { value: 'kpr', label: 'Kredit Pemilikan Rumah (KPR)' },
      { value: 'kredit-belum-cair', label: 'Kredit belum cair seluruhnya (SKMHT)' },
      { value: 'fidusia', label: 'Akta fidusia (jaminan bergerak)' }
    ]
  }
];

const objectTypes = [
  { value: 'tanah', label: 'Tanah' },
  { value: 'bangunan', label: 'Bangunan' },
  { value: 'apartemen', label: 'Apartemen' },
  { value: 'kavling', label: 'Kavling' }
];

const TOTAL_STEPS = 4;
const STORAGE_KEY = 'smartNotaryFormStateV2';

const documentLibrary = {
  notaris_general:
    'Dokumen umum notaris: KTP para pihak, KK, NPWP bila diperlukan, draft kesepakatan, dan data pendukung objek yang relevan.',
  company_detail:
    'Siapkan nama perusahaan, susunan pengurus, modal dasar/setor, bidang usaha, dan email perusahaan untuk pengajuan AHU.',
  agreement_detail:
    'Perjanjian membutuhkan KTP para pihak, dokumen objek perjanjian, nilai transaksi, ketentuan pembayaran, serta jangka waktu dan hak/kewajiban.',
  wasiat_detail:
    'Akta wasiat memerlukan KTP pemberi wasiat, data ahli waris, daftar harta, dan ketentuan pembagian ketika pewaris meninggal.',
  fidusia_detail:
    'Akta fidusia memerlukan KTP pemberi & penerima fidusia, data objek bergerak (nomor rangka/mesin atau detail aset), nilai perjanjian, dan klausul jaminan.',
  waris_docs:
    'Dokumen waris: KTP seluruh ahli waris, surat kematian, bukti hubungan keluarga (KK / akta kelahiran), serta surat kesepakatan pembagian bila lebih dari satu ahli waris.',
  ajb_docs:
    'Dokumen AJB: sertifikat asli, PBB & SPPT tahun berjalan, bukti lunas BPHTB, KTP para pihak, bukti lunas transaksi, dan IMB bila ada bangunan.',
  hibah_docs:
    'Dokumen hibah: sertifikat objek, KTP pemberi & penerima, bukti hubungan keluarga bila diperlukan, bukti lunas pajak, dan persetujuan pasangan bila menikah.',
  apht_docs:
    'Dokumen APHT/SKMHT: sertifikat, KTP debitur & kreditur, perjanjian kredit, nilai pinjaman, jangka waktu, serta cover note bank bila ada.',
  sertifikat_docs:
    'Pemecahan/penggabungan sertifikat memerlukan sertifikat induk, peta bidang/ukur, KTP pemohon, surat pernyataan batas tanah, dan bukti pembayaran PBB.',
  peningkatan_docs:
    'Peningkatan HGB ke SHM memerlukan sertifikat HGB, bukti perpanjangan, surat pernyataan penggunaan, dan bukti pembayaran kewajiban negara.',
  corporate_buyer_docs:
    'Apabila pembeli adalah badan hukum, siapkan AD/ART, SK Pengesahan AHU, SK pengangkatan pengurus terakhir, NIB, serta identitas direksi yang menandatangani.',
  pjb_docs:
    'Pengikatan Jual Beli (PJB) membutuhkan bukti pembayaran bertahap, jadwal pelunasan, dan surat kesepakatan harga/ketentuan denda.',
  skmht_docs:
    'SKMHT membutuhkan salinan perjanjian kredit, data objek agunan, dan pernyataan kesediaan debitur untuk menandatangani APHT setelah pencairan.',
  surat_waris_docs:
    'Surat waris sebelum AJB memerlukan data ahli waris, daftar aset warisan, dan berita acara kesepakatan pembagian.',
  surat_kuasa_docs:
    'Surat kuasa wajib bermeterai, memuat kuasa yang jelas, dilampiri KTP pemberi dan penerima kuasa, serta disertai bukti hubungan atau dasar pemberian kuasa.'
};

const partiesLibrary = {
  notaris_general:
    'Untuk layanan Notaris, seluruh para pihak dalam akta, saksi bila diperlukan, pengurus perusahaan (untuk akta perusahaan), dan pasangan suami/istri hadir bila terkait harta bersama.',
  ajb_parties:
    'AJB mewajibkan kehadiran penjual dan pembeli secara langsung. Jika menikah, pasangan wajib hadir kecuali ada perjanjian pisah harta. Saksi dan PPAT hadir sesuai ketentuan.',
  hibah_parties:
    'Akta hibah mengharuskan pemberi dan penerima hibah hadir, beserta pasangan jika objek merupakan harta bersama. Saksi minimal dua orang sesuai ketentuan PPAT.',
  waris_parties:
    'Pembagian hak waris mensyaratkan seluruh ahli waris atau kuasanya, saksi keluarga, dan PPAT. Bila ada kuasa, lampirkan surat kuasa bermeterai.',
  apht_parties:
    'APHT/SKMHT memerlukan debitur, kreditur (perwakilan bank), dan saksi PPAT. Jika tahapan berjenjang, bank hadir pada SKMHT maupun APHT.',
  sertifikat_parties:
    'Pemecahan/penggabungan sertifikat menghadirkan pemohon/pemilik, saksi batas tanah, dan dapat melibatkan petugas ukur BPN.',
  surat_kuasa_parties:
    'Jika menggunakan surat kuasa, pihak pemberi dan penerima kuasa harus hadir minimal saat penandatanganan kuasa untuk legalisasi.'
};

const flowLibrary = {
  pendirian_pt: [
    'Pengumpulan data pendiri, nama PT, dan bidang usaha.',
    'Penyusunan akta pendirian dan penandatanganan di hadapan Notaris.',
    'Pengajuan nama dan pengesahan ke AHU hingga terbit SK Kemenkumham.',
    'Pendaftaran NPWP, NIB, dan perizinan pendukung.',
    'Serah terima dokumen perusahaan kepada pendiri.'
  ],
  pendirian_cv: [
    'Mengumpulkan data sekutu aktif/pasif dan modal.',
    'Penyusunan akta pendirian CV dan penandatanganan.',
    'Pendaftaran ke pengadilan negeri setempat dan OSS bila diperlukan.',
    'Dokumentasi dan penyerahan salinan akta ke para sekutu.'
  ],
  pendirian_yayasan: [
    'Menyiapkan nama yayasan, tujuan, dan pembina/pengurus.',
    'Penyusunan akta pendirian, berita acara dan AD/ART.',
    'Permohonan pengesahan ke Kemenkumham dan pencatatan pajak.',
    'Pelaporan kegiatan awal sesuai tujuan yayasan.'
  ],
  perubahan_ad: [
    'Inventarisasi perubahan yang diminta pemegang saham.',
    'Rapat umum pemegang saham dan risalah keputusan.',
    'Pembuatan akta perubahan oleh Notaris.',
    'Penyampaian pemberitahuan/pengesahan ke AHU dan penerbitan SK.',
    'Distribusi salinan akta perubahan ke perusahaan.'
  ],
  perubahan_pengurus: [
    'RUPS atau rapat pemegang saham menunjuk pengurus baru.',
    'Notaris membuat akta perubahan pengurus.',
    'Pemberitahuan ke AHU dan instansi terkait.',
    'Perubahan data OSS, bank, dan internal perusahaan.'
  ],
  perjanjian: [
    'Identifikasi para pihak dan objek perjanjian.',
    'Draft klausul utama, pembayaran, hak, dan kewajiban.',
    'Review dan finalisasi isi perjanjian.',
    'Penandatanganan akta di hadapan Notaris dan distribusi salinan.'
  ],
  wasiat: [
    'Konsultasi kehendak pembuat wasiat dan daftar harta.',
    'Penyusunan akta wasiat tertutup/terbuka oleh Notaris.',
    'Penandatanganan dan penyimpanan akta secara rahasia.',
    'Pelaksanaan isi wasiat ketika pewaris meninggal.'
  ],
  fidusia: [
    'Identifikasi objek bergerak yang dijaminkan.',
    'Penyusunan akta fidusia dan penandatanganan.',
    'Pendaftaran fidusia elektronik hingga terbit sertifikat.',
    'Penyerahan sertifikat fidusia ke kreditur.'
  ],
  ajb_flow: [
    'Pemeriksaan awal dokumen penjual dan pembeli serta keabsahan sertifikat.',
    'Validasi data di BPN/PPAT dan perhitungan pajak (BPHTB, PPh).',
    'Pelunasan harga sesuai kesepakatan; buat PJB bila belum lunas.',
    'Penandatanganan AJB di hadapan PPAT dengan saksi.',
    'Balik nama sertifikat di BPN hingga terbit sertifikat baru.',
    'Serah terima sertifikat dan dokumen pendukung kepada pembeli.'
  ],
  hibah_flow: [
    'Pemeriksaan hubungan keluarga dan status kepemilikan.',
    'Penyusunan akta hibah beserta pajak terkait.',
    'Penandatanganan di PPAT dan pencatatan di BPN.',
    'Balik nama sertifikat ke penerima hibah.'
  ],
  waris_flow: [
    'Pendataan ahli waris dan objek warisan.',
    'Pembuatan surat waris/penetapan ahli waris.',
    'Penandatanganan APHB dan AJB bila dialihkan ke pihak lain.',
    'Balik nama sertifikat dan distribusi hasil ke ahli waris.'
  ],
  apht_flow: [
    'Review perjanjian kredit dan objek jaminan.',
    'Penandatanganan SKMHT jika kredit belum cair.',
    'Setelah pencairan, ajukan APHT di hadapan PPAT.',
    'Pendaftaran hak tanggungan ke BPN dan penerbitan sertifikat HT.',
    'Serah terima sertifikat HT ke bank.'
  ],
  sertifikat_flow: [
    'Pengukuran dan pemetaan bidang oleh pemohon/BPN.',
    'Pengajuan pemecahan/penggabungan ke BPN dengan lampiran lengkap.',
    'Penerbitan surat ukur baru dan sertifikat hasil pemecahan/penggabungan.',
    'Serah terima sertifikat ke pemohon.'
  ],
  peningkatan_flow: [
    'Pemeriksaan persyaratan perpanjangan HGB.',
    'Pengajuan peningkatan status hak ke BPN.',
    'Pembayaran kewajiban dan penerbitan sertifikat SHM.',
    'Serah terima sertifikat SHM kepada pemilik.'
  ]
};

const goalRules = {
  'pendirian-pt': {
    type: 'Notaris',
    service: 'Akta Pendirian PT',
    docKeys: ['notaris_general', 'company_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'pendirian_pt',
    notes: ['Meliputi pengajuan nama, AD/ART, dan pengesahan Kemenkumham.']
  },
  'pendirian-cv': {
    type: 'Notaris',
    service: 'Akta Pendirian CV',
    docKeys: ['notaris_general', 'company_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'pendirian_cv',
    notes: ['Mencakup pendaftaran ke pengadilan dan OSS bila diperlukan.']
  },
  'pendirian-yayasan': {
    type: 'Notaris',
    service: 'Akta Pendirian Yayasan',
    docKeys: ['notaris_general', 'company_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'pendirian_yayasan',
    notes: ['Perlu pembina, pengurus, pengawas, dan tujuan sosial yang jelas.']
  },
  'perubahan-ad': {
    type: 'Notaris',
    service: 'Perubahan Anggaran Dasar PT',
    docKeys: ['notaris_general', 'company_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'perubahan_ad',
    notes: ['Pastikan risalah RUPS disiapkan sebelum akta perubahan ditandatangani.']
  },
  'perubahan-pengurus': {
    type: 'Notaris',
    service: 'Akta Perubahan Pengurus PT',
    docKeys: ['notaris_general', 'company_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'perubahan_pengurus',
    notes: ['Laporkan perubahan ke AHU dan perbarui data perbankan/OSS.']
  },
  'perjanjian-hutang': {
    type: 'Notaris',
    service: 'Akta Perjanjian Hutang-Piutang',
    docKeys: ['notaris_general', 'agreement_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'perjanjian',
    notes: ['Cantumkan mekanisme pembayaran, denda, dan jaminan jika ada.']
  },
  'perjanjian-kerjasama': {
    type: 'Notaris',
    service: 'Akta Perjanjian Kerja Sama',
    docKeys: ['notaris_general', 'agreement_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'perjanjian',
    notes: ['Pastikan hak kekayaan intelektual dan pembagian hasil tertulis jelas.']
  },
  'akta-wasiat': {
    type: 'Notaris',
    service: 'Akta Wasiat',
    docKeys: ['notaris_general', 'wasiat_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'wasiat',
    notes: ['Wasiat baru dapat membatalkan yang lama; simpan dengan aman.']
  },
  'pembagian-harta': {
    type: 'Notaris',
    service: 'Perjanjian Pembagian Harta Bersama',
    docKeys: ['notaris_general', 'agreement_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'perjanjian',
    notes: ['Suami/istri wajib hadir kecuali ada perjanjian pisah harta.']
  },
  fidusia: {
    type: 'Notaris',
    service: 'Akta Fidusia',
    docKeys: ['notaris_general', 'fidusia_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'fidusia',
    notes: ['Segera daftar ke sistem fidusia elektronik untuk kekuatan hukum.']
  },
  'jual-beli': {
    type: 'PPAT',
    service: 'Akta Jual Beli (AJB)',
    docKeys: ['ajb_docs'],
    partiesKey: 'ajb_parties',
    flowKey: 'ajb_flow',
    notes: ['Penjual & pembeli wajib hadir, siapkan bukti lunas pajak dan BPHTB.']
  },
  hibah: {
    type: 'PPAT',
    service: 'Akta Hibah',
    docKeys: ['hibah_docs'],
    partiesKey: 'hibah_parties',
    flowKey: 'hibah_flow',
    notes: ['Pajak hibah mengikuti status hubungan keluarga dan regulasi daerah.']
  },
  'waris-tanah': {
    type: 'PPAT',
    service: 'Akta Pembagian Hak Waris + Balik Nama',
    docKeys: ['waris_docs', 'ajb_docs'],
    partiesKey: 'waris_parties',
    flowKey: 'waris_flow',
    notes: ['Seluruh ahli waris atau kuasanya wajib hadir untuk kesepakatan.']
  },
  'pecah-sertifikat': {
    type: 'PPAT',
    service: 'Pemecahan Sertifikat',
    docKeys: ['sertifikat_docs'],
    partiesKey: 'sertifikat_parties',
    flowKey: 'sertifikat_flow',
    notes: ['Pastikan peta bidang/ukur terbaru tersedia sebelum pengajuan.']
  },
  'gabung-sertifikat': {
    type: 'PPAT',
    service: 'Penggabungan Sertifikat',
    docKeys: ['sertifikat_docs'],
    partiesKey: 'sertifikat_parties',
    flowKey: 'sertifikat_flow',
    notes: ['Semua sertifikat yang digabung harus atas nama dan status yang sama.']
  },
  'peningkatan-hak': {
    type: 'PPAT',
    service: 'Peningkatan Hak (HGB ke SHM)',
    docKeys: ['peningkatan_docs'],
    partiesKey: 'sertifikat_parties',
    flowKey: 'peningkatan_flow',
    notes: ['Pastikan kewajiban pembayaran negara sudah lunas sebelum SHM terbit.']
  },
  'tukar-menukar': {
    type: 'PPAT',
    service: 'Akta Tukar-Menukar',
    docKeys: ['ajb_docs'],
    partiesKey: 'ajb_parties',
    flowKey: 'ajb_flow',
    notes: ['Pastikan nilai objek seimbang dan pajak tukar-menukar telah dihitung.']
  },
  kpr: {
    type: 'PPAT',
    service: 'Akta Pembebanan Hak Tanggungan (APHT)',
    docKeys: ['apht_docs'],
    partiesKey: 'apht_parties',
    flowKey: 'apht_flow',
    notes: ['Debitur dan bank wajib hadir, biasanya bersamaan dengan akad kredit.']
  },
  'kredit-belum-cair': {
    type: 'PPAT',
    service: 'Surat Kuasa Membebankan Hak Tanggungan (SKMHT)',
    docKeys: ['apht_docs'],
    partiesKey: 'apht_parties',
    flowKey: 'apht_flow',
    notes: ['SKMHT wajib ditingkatkan menjadi APHT setelah kredit cair.'],
    extraServices: ['APHT (setelah pencairan)']
  },
  'lainnya-perjanjian': {
    type: 'Notaris',
    service: 'Konsultasi Perjanjian Khusus',
    docKeys: ['notaris_general', 'agreement_detail'],
    partiesKey: 'notaris_general',
    flowKey: 'perjanjian',
    notes: ['Gunakan sesi ini untuk merumuskan kebutuhan khusus non-standar.']
  }
};

const conditionEffects = {
  'absent-party': {
    label: 'Surat Kuasa Khusus',
    docKeys: ['surat_kuasa_docs'],
    partiesKey: 'surat_kuasa_parties',
    additionalNotes: ['Jika pihak tak hadir, wajib ada surat kuasa bermeterai dan KTP pemberi kuasa.'],
    flowStep: 'Menyiapkan dan legalisasi surat kuasa sebelum akta utama.'
  },
  installment: {
    label: 'Pengikatan Jual Beli (PJB)',
    docKeys: ['pjb_docs'],
    additionalNotes: ['Pembayaran bertahap sebaiknya dituangkan dalam PJB lengkap dengan jadwal pelunasan.'],
    flowStep: 'Penyusunan dan penandatanganan PJB hingga pelunasan terpenuhi.'
  },
  mortgaged: {
    label: 'SKMHT → APHT',
    docKeys: ['skmht_docs'],
    partiesKey: 'apht_parties',
    additionalNotes: ['Karena objek diagunkan, wajib membuat SKMHT terlebih dulu kemudian APHT.'],
    flowStep: 'Pencabutan agunan lama / SKMHT awal sebelum APHT final.'
  },
  kpr: {
    label: 'APHT (KPR)',
    docKeys: ['apht_docs'],
    partiesKey: 'apht_parties',
    additionalNotes: ['Penggunaan KPR mengharuskan penandatanganan APHT dan kehadiran perwakilan bank.'],
    flowStep: 'Tanda tangan akad kredit dan APHT bersama bank.'
  },
  'waris-land': {
    label: 'Surat Waris sebelum AJB',
    docKeys: ['surat_waris_docs'],
    partiesKey: 'waris_parties',
    additionalNotes: ['Objek waris perlu surat waris/penetapan sebelum AJB dilanjutkan.'],
    flowStep: 'Pengurusan penetapan ahli waris di kelurahan/pengadilan.'
  },
  'corporate-buyer': {
    label: 'Verifikasi Legalitas Badan Hukum',
    docKeys: ['corporate_buyer_docs'],
    additionalNotes: ['Pastikan AD/ART, SK pengesahan, dan NIB pembeli badan hukum lengkap.']
  }
};

const initialFormState = {
  category: '',
  detail: '',
  objectType: '',
  isMortgaged: false,
  isNameMismatch: false,
  partyType: '',
  attendanceIssue: false,
  paymentType: '',
  bankPresence: '',
  notes: '',
  applicantName: '',
  applicantPhone: '',
  applicantEmail: ''
};

const formState = { ...initialFormState };
let currentStep = 1;
let dom = {};
let lastResult = null;

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  cacheDom();
  renderCategoryChoices();
  renderObjectChips();
  bindEvents();
  hydrateState();
  goToStep(currentStep);
  setView('view-home');
  updateYear();
  initAnimations();
}

function initAnimations() {
  // Intersection Observer for stat cards animation
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statCard = entry.target;
        const valueEl = statCard.querySelector('.stat-value');
        const target = valueEl?.getAttribute('data-target');
        
        if (target && !statCard.classList.contains('animated')) {
          statCard.classList.add('animated');
          animateCounter(valueEl, parseInt(target), 2000);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
  });

  // Add stagger animation to feature cards
  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;
      entry.target.style.setProperty('--stagger', `${index * 0.1}s`);
      entry.target.classList.add('animated');
      featureObserver.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.feature-card').forEach(card => {
    featureObserver.observe(card);
  });
}

function animateCounter(element, target, duration) {
  if (!element) return;
  
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = Math.floor(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

function cacheDom() {
  dom = {
    views: document.querySelectorAll('.view'),
    consultForm: document.getElementById('consultForm'),
    detailSelect: document.getElementById('detailSelect'),
    objectTypeGroup: document.getElementById('objectTypeGroup'),
    isMortgaged: document.getElementById('isMortgaged'),
    isNameMismatch: document.getElementById('isNameMismatch'),
    attendanceIssue: document.getElementById('attendanceIssue'),
    notesField: document.getElementById('notes'),
    applicantName: document.getElementById('applicantName'),
    applicantPhone: document.getElementById('applicantPhone'),
    applicantEmail: document.getElementById('applicantEmail'),
    progressBar: document.getElementById('progressBar'),
    bankPresenceGroup: document.getElementById('bankPresenceGroup'),
    resultMeta: document.getElementById('resultMeta'),
    resultSummary: document.getElementById('resultSummary'),
    documentsContent: document.getElementById('documentsContent'),
    partiesContent: document.getElementById('partiesContent'),
    notesContent: document.getElementById('notesContent'),
    flowContent: document.getElementById('flowContent'),
    fallbackMessage: document.getElementById('fallbackMessage'),
    toastStack: document.getElementById('toastStack'),
    guideModal: document.getElementById('guideModal')
  };
}

function updateYear() {
  const node = document.getElementById('copyrightYear');
  if (node) node.textContent = new Date().getFullYear();
}

function renderCategoryChoices() {
  const container = document.getElementById('categoryChoices');
  container.innerHTML = '';
  categoryCatalog.forEach(category => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-card';
    button.dataset.value = category.value;
    button.textContent = category.label;
    button.addEventListener('click', () => handleCategorySelect(category.value));
    container.appendChild(button);
  });
}

function renderObjectChips() {
  dom.objectTypeGroup.innerHTML = '';
  objectTypes.forEach(obj => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.dataset.value = obj.value;
    chip.textContent = obj.label;
    chip.addEventListener('click', () => handleObjectTypeSelect(obj.value));
    dom.objectTypeGroup.appendChild(chip);
  });
}

function bindEvents() {
  dom.detailSelect.addEventListener('change', e => {
    formState.detail = e.target.value;
    clearError('detail');
    persistState();
  });

  dom.isMortgaged.addEventListener('change', e => {
    formState.isMortgaged = e.target.checked;
    persistState();
  });

  dom.isNameMismatch.addEventListener('change', e => {
    formState.isNameMismatch = e.target.checked;
    persistState();
  });

  dom.attendanceIssue.addEventListener('change', e => {
    formState.attendanceIssue = e.target.checked;
    persistState();
  });

  dom.notesField.addEventListener('input', e => {
    formState.notes = e.target.value.trim();
    persistState();
  });

  dom.applicantName.addEventListener('input', e => {
    formState.applicantName = e.target.value.trim();
    clearError('applicantName');
    persistState();
  });

  dom.applicantPhone.addEventListener('input', e => {
    formState.applicantPhone = e.target.value.trim();
    clearError('applicantPhone');
    persistState();
  });

  dom.applicantEmail.addEventListener('input', e => {
    formState.applicantEmail = e.target.value.trim();
    clearError('applicantEmail');
    persistState();
  });

  document.querySelectorAll('input[name="partyType"]').forEach(input => {
    input.addEventListener('change', e => {
      formState.partyType = e.target.value;
      clearError('partyType');
      persistState();
    });
  });

  document.querySelectorAll('input[name="paymentType"]').forEach(input => {
    input.addEventListener('change', e => {
      formState.paymentType = e.target.value;
      clearError('paymentType');
      updateConditionalSections();
      persistState();
    });
  });

  document.querySelectorAll('input[name="bankPresence"]').forEach(input => {
    input.addEventListener('change', e => {
      formState.bankPresence = e.target.value;
      clearError('bankPresence');
      persistState();
    });
  });

  document.getElementById('prevStep').addEventListener('click', () => {
    if (currentStep > 1) goToStep(currentStep - 1);
  });

  document.getElementById('nextStep').addEventListener('click', () => {
    if (validateStep(currentStep)) goToStep(currentStep + 1);
  });

  dom.consultForm.addEventListener('submit', handleSubmit);

  document.getElementById('startWizard').addEventListener('click', () => {
    resetWizard();
    setView('view-consult');
  });

  document.getElementById('primaryCta').addEventListener('click', () => {
    resetWizard();
    setView('view-consult');
  });

  document.getElementById('backToHome').addEventListener('click', () => setView('view-home'));
  document.getElementById('restart').addEventListener('click', () => {
    resetWizard();
    setView('view-consult');
  });

  document.getElementById('printResult').addEventListener('click', () => window.print());
  document.getElementById('copySummary').addEventListener('click', copySummary);
  document.getElementById('shareWhatsapp').addEventListener('click', shareWhatsapp);
  document.getElementById('downloadChecklist').addEventListener('click', downloadChecklist);
  document.getElementById('contactAdmin').addEventListener('click', () => {
    window.open('https://wa.me/6282322789600', '_blank', 'noopener');
  });

  document.getElementById('openGuide').addEventListener('click', openGuideModal);
  document.getElementById('closeGuide').addEventListener('click', closeGuideModal);
  document.getElementById('guideToConsult').addEventListener('click', () => {
    closeGuideModal();
    setView('view-consult');
  });

  dom.toastStack.addEventListener('click', e => {
    if (e.target.classList.contains('toast')) e.target.remove();
  });

  document.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', e => {
      const target = e.currentTarget.dataset.go;
      if (target) setView(`view-${target}`);
    });
  });

  dom.guideModal.addEventListener('click', e => {
    if (e.target === dom.guideModal) closeGuideModal();
  });
}

function handleCategorySelect(value) {
  formState.category = value;
  formState.detail = '';
  updateCategoryUI();
  populateDetailOptions(value);
  clearError('category');
  clearError('detail');
  persistState();
}

function updateCategoryUI() {
  document.querySelectorAll('#categoryChoices .choice-card').forEach(card => {
    card.classList.toggle('active', card.dataset.value === formState.category);
  });
}

function populateDetailOptions(categoryValue) {
  dom.detailSelect.innerHTML = '<option value="">Pilih detail...</option>';
  dom.detailSelect.disabled = !categoryValue;
  const catalog = categoryCatalog.find(cat => cat.value === categoryValue);
  if (!catalog) return;
  catalog.details.forEach(detail => {
    const opt = document.createElement('option');
    opt.value = detail.value;
    opt.textContent = detail.label;
    dom.detailSelect.appendChild(opt);
  });
  dom.detailSelect.value = formState.detail;
}

function handleObjectTypeSelect(value) {
  formState.objectType = value;
  document.querySelectorAll('#objectTypeGroup .chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.value === value);
  });
  clearError('objectType');
  persistState();
}

function updateConditionalSections() {
  const showBank = formState.paymentType === 'kpr';
  dom.bankPresenceGroup.style.display = showBank ? 'block' : 'none';
  if (!showBank) {
    formState.bankPresence = '';
    document.querySelectorAll('input[name="bankPresence"]').forEach(input => {
      input.checked = false;
    });
    clearError('bankPresence');
  }
}

function goToStep(step) {
  currentStep = Math.max(1, Math.min(TOTAL_STEPS, step));
  document.querySelectorAll('.wizard-step').forEach(section => {
    section.classList.toggle('active', Number(section.dataset.step) === currentStep);
  });
  updateProgress();
  updateWizardButtons();
  persistState();
}

function updateProgress() {
  const percentage = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;
  dom.progressBar.style.width = `${percentage}%`;
  
  // Update step indicators
  document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
    const stepNum = index + 1;
    indicator.classList.remove('active', 'completed');
    
    if (stepNum < currentStep) {
      indicator.classList.add('completed');
    } else if (stepNum === currentStep) {
      indicator.classList.add('active');
    }
  });
  
  // Update step connectors
  document.querySelectorAll('.step-connector').forEach((connector, index) => {
    if (index + 1 < currentStep) {
      connector.classList.add('active');
    } else {
      connector.classList.remove('active');
    }
  });
  
  // Legacy support for old progress labels
  document.querySelectorAll('[data-step-label]').forEach(label => {
    const step = Number(label.dataset.stepLabel);
    label.style.color = step === currentStep ? 'var(--primary)' : 'var(--muted)';
    label.setAttribute('data-active', step === currentStep ? 'true' : 'false');
  });
}

function updateWizardButtons() {
  const prevBtn = document.getElementById('prevStep');
  const nextBtn = document.getElementById('nextStep');
  const processBtn = document.getElementById('processBtn');
  prevBtn.disabled = currentStep === 1;
  prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
  nextBtn.style.display = currentStep === TOTAL_STEPS ? 'none' : 'inline-flex';
  processBtn.style.display = currentStep === TOTAL_STEPS ? 'inline-flex' : 'none';
}

function handleSubmit(e) {
  e.preventDefault();
  if (currentStep !== TOTAL_STEPS) {
    if (validateStep(currentStep)) goToStep(currentStep + 1);
    return;
  }
  if (!validateStep(currentStep)) return;
  const conditions = collectConditions();
  const result = runInference(formState.detail, conditions);
  lastResult = {
    ...result,
    generatedAt: new Date(),
    applicantName: formState.applicantName,
    applicantPhone: formState.applicantPhone,
    applicantEmail: formState.applicantEmail,
    userNotes: formState.notes,
    objectType: formState.objectType
  };
  renderResult(lastResult);
  setView('view-result');
  showToast('Rekomendasi siap dibagikan.');
  clearPersistedState();
}

function validateStep(step) {
  let valid = true;
  if (step === 1 && !formState.category) {
    showError('category', 'Pilih kategori kebutuhan terlebih dahulu.');
    valid = false;
  }
  if (step === 2) {
    if (!formState.detail) {
      showError('detail', 'Pilih detail kebutuhan.');
      valid = false;
    }
    if (!formState.objectType) {
      showError('objectType', 'Pilih jenis objek.');
      valid = false;
    }
  }
  if (step === 3) {
    if (!formState.partyType) {
      showError('partyType', 'Pilih status pihak.');
      valid = false;
    }
    if (!formState.paymentType) {
      showError('paymentType', 'Pilih skema pembayaran.');
      valid = false;
    }
    if (formState.paymentType === 'kpr' && !formState.bankPresence) {
      showError('bankPresence', 'Tentukan apakah bank hadir.');
      valid = false;
    }
  }
  if (step === 4) {
    if (!formState.applicantName) {
      showError('applicantName', 'Nama pengaju wajib diisi.');
      valid = false;
    }
    if (!formState.applicantPhone) {
      showError('applicantPhone', 'Nomor HP wajib diisi.');
      valid = false;
    } else if (!/^[+0-9\s-]{8,}$/.test(formState.applicantPhone)) {
      showError('applicantPhone', 'Nomor HP tidak valid.');
      valid = false;
    }
    if (formState.applicantEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.applicantEmail)) {
      showError('applicantEmail', 'Format email tidak valid.');
      valid = false;
    }
  }
  return valid;
}

function showError(field, message) {
  const target = document.querySelector(`[data-error-for="${field}"]`);
  if (target) target.textContent = message;
}

function clearError(field) {
  const target = document.querySelector(`[data-error-for="${field}"]`);
  if (target) target.textContent = '';
}

function collectConditions() {
  const flags = [];
  if (formState.isMortgaged) flags.push('mortgaged');
  if (formState.isNameMismatch) flags.push('waris-land');
  if (formState.attendanceIssue) flags.push('absent-party');
  if (formState.partyType === 'badan') flags.push('corporate-buyer');
  if (formState.paymentType === 'bertahap') flags.push('installment');
  if (formState.paymentType === 'kpr') flags.push('kpr');
  return flags;
}

function runInference(goalId, conditions) {
  const rule = goalRules[goalId];
  if (!rule) {
    return {
      type: 'Tidak diketahui',
      service: 'Silakan konsultasi langsung',
      extras: [],
      notes: ['Tujuan belum tersedia, hubungi Notaris/PPAT untuk arahan lanjutan.'],
      documents: ['Data dasar identitas dan dokumen objek diperlukan.'],
      parties: 'Pastikan pihak terkait hadir atau memberikan kuasa tertulis.',
      flow: ['Identifikasi kebutuhan', 'Konsultasi profesional', 'Siapkan dokumen']
    };
  }

  const extras = new Set(rule.extraServices || []);
  const notes = [...(rule.notes || [])];
  const docKeys = [...(rule.docKeys || [])];
  const flowSteps = [...(flowLibrary[rule.flowKey] || [])];
  let partiesParagraph = partiesLibrary[rule.partiesKey] || partiesLibrary.notaris_general;

  conditions.forEach(condId => {
    const effect = conditionEffects[condId];
    if (!effect) return;
    if (effect.label) extras.add(effect.label);
    if (effect.docKeys) docKeys.push(...effect.docKeys);
    if (effect.additionalNotes) notes.push(...effect.additionalNotes);
    if (effect.flowStep) flowSteps.push(effect.flowStep);
    if (effect.partiesKey && partiesLibrary[effect.partiesKey]) {
      partiesParagraph += ` ${partiesLibrary[effect.partiesKey]}`;
    }
  });

  const documents = docKeys.map(key => documentLibrary[key]).filter(Boolean);

  return {
    type: rule.type,
    service: rule.service,
    extras: Array.from(extras),
    notes,
    documents,
    parties: partiesParagraph,
    flow: flowSteps
  };
}

function renderResult(result) {
  const hasFallback = result.type === 'Tidak diketahui';
  dom.fallbackMessage.hidden = !hasFallback;

  if (hasFallback) {
    dom.resultMeta.innerHTML = '';
    dom.resultSummary.innerHTML = '';
    dom.documentsContent.innerHTML = '';
    dom.partiesContent.innerHTML = '';
    dom.notesContent.innerHTML = '';
    dom.flowContent.innerHTML = '';
    return;
  }

  dom.resultMeta.innerHTML = `
    <span class="result-badge">${result.type}</span>
    <p>Analisis ${formatDate(result.generatedAt)}</p>
    <p>Pemohon: ${result.applicantName || '-'}</p>
    <p>Kontak: ${result.applicantPhone || '-'} ${result.applicantEmail ? `| ${result.applicantEmail}` : ''}</p>
  `;

  const extrasText = result.extras.length ? result.extras.join(', ') : 'Tidak ada';
  dom.resultSummary.innerHTML = `
    <div class="result-summary-grid">
      <div class="result-item">
        <strong>Jenis Layanan</strong>
        <p>${result.type}</p>
      </div>
      <div class="result-item">
        <strong>Layanan Utama</strong>
        <p>${result.service}</p>
      </div>
      <div class="result-item">
        <strong>Layanan Tambahan</strong>
        <p>${extrasText}</p>
      </div>
      <div class="result-item">
        <strong>Catatan Hukum</strong>
        <p>${result.notes.join(' ')}</p>
      </div>
    </div>
  `;

  dom.documentsContent.innerHTML = result.documents.map(text => `<p>${text}</p>`).join('');
  dom.partiesContent.innerHTML = `<p>${result.parties}</p>`;

  const noteList = [...result.notes];
  if (result.objectType) noteList.push(`Jenis objek: ${result.objectType}.`);
  if (result.userNotes) noteList.push(`Catatan pengaju: ${result.userNotes}.`);
  dom.notesContent.innerHTML = `<ul>${noteList.map(note => `<li>${note}</li>`).join('')}</ul>`;

  dom.flowContent.innerHTML = `
    <ol>
      ${result.flow.map(step => `<li>${step}</li>`).join('')}
    </ol>
  `;
}

function formatDate(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' });
}

function copySummary() {
  if (!lastResult) {
    showToast('Belum ada hasil untuk disalin.', true);
    return;
  }
  const text = generateShareText(lastResult);
  navigator.clipboard
    .writeText(text)
    .then(() => showToast('Hasil tersalin ke clipboard.'))
    .catch(() => showToast('Gagal menyalin ke clipboard.', true));
}

function shareWhatsapp() {
  if (!lastResult) {
    showToast('Belum ada hasil untuk dibagikan.', true);
    return;
  }
  const text = encodeURIComponent(generateShareText(lastResult));
  window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener');
}

function generateShareText(result) {
  return [
    '[SmartNotary] Rekomendasi layanan untuk kasus Anda:',
    `- Jenis layanan: ${result.type}`,
    `- Layanan utama: ${result.service}`,
    `- Layanan tambahan: ${result.extras.length ? result.extras.join(', ') : '-'}`,
    '- Dokumen:',
    ...result.documents.map(doc => `  • ${doc}`),
    `- Pihak hadir: ${result.parties}`,
    '- Catatan:',
    ...result.notes.map(note => `  • ${note}`),
    '- Alur:',
    ...result.flow.map((step, idx) => `  ${idx + 1}. ${step}`)
  ].join('\n');
}

function setView(viewId) {
  dom.views.forEach(view => {
    view.classList.toggle('active', view.id === viewId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message, isError = false) {
  const toast = document.createElement('div');
  toast.className = `toast${isError ? ' error' : ''}`;
  toast.textContent = message;
  dom.toastStack.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function openGuideModal() {
  dom.guideModal.classList.add('active');
  dom.guideModal.setAttribute('aria-hidden', 'false');
}

function closeGuideModal() {
  dom.guideModal.classList.remove('active');
  dom.guideModal.setAttribute('aria-hidden', 'true');
}

function downloadChecklist() {
  const content = lastResult
    ? ['Checklist Dokumen & Pihak:', ...lastResult.documents, '', 'Pihak Hadir:', lastResult.parties].join('\n')
    : 'Checklist umum:\n- KTP para pihak\n- KK\n- Sertifikat asli\n- SPPT/PBB\n- Bukti pembayaran';
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'checklist-smart-notary.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('Checklist berhasil diunduh.');
}

function resetWizard() {
  Object.assign(formState, initialFormState);
  currentStep = 1;
  dom.consultForm.reset();
  updateCategoryUI();
  populateDetailOptions('');
  document.querySelectorAll('#objectTypeGroup .chip').forEach(chip => chip.classList.remove('active'));
  updateConditionalSections();
  document.querySelectorAll('.error-text').forEach(el => (el.textContent = ''));
  persistState();
  goToStep(1);
}

function persistState() {
  const payload = {
    formState: { ...formState },
    currentStep
  };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function hydrateState() {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    Object.assign(formState, initialFormState, parsed.formState || {});
    currentStep = parsed.currentStep || 1;
    updateCategoryUI();
    populateDetailOptions(formState.category);
    dom.detailSelect.value = formState.detail;
    document.querySelectorAll('#objectTypeGroup .chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.value === formState.objectType);
    });
    dom.isMortgaged.checked = formState.isMortgaged;
    dom.isNameMismatch.checked = formState.isNameMismatch;
    dom.attendanceIssue.checked = formState.attendanceIssue;
    dom.notesField.value = formState.notes;
    dom.applicantName.value = formState.applicantName;
    dom.applicantPhone.value = formState.applicantPhone;
    dom.applicantEmail.value = formState.applicantEmail;
    document.querySelectorAll('input[name="partyType"]').forEach(input => {
      input.checked = input.value === formState.partyType;
    });
    document.querySelectorAll('input[name="paymentType"]').forEach(input => {
      input.checked = input.value === formState.paymentType;
    });
    document.querySelectorAll('input[name="bankPresence"]').forEach(input => {
      input.checked = input.value === formState.bankPresence;
    });
    updateConditionalSections();
  } catch (err) {
    console.error('Failed to hydrate form state', err);
    resetWizard();
  }
}

function clearPersistedState() {
  sessionStorage.removeItem(STORAGE_KEY);
}
