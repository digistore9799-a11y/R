import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBRP3IVkuah0iJNESg3-qAZvFbQ66Mkvrs',
  authDomain: 'digistore4-fb4c7.firebaseapp.com',
  projectId: 'digistore4-fb4c7',
  storageBucket: 'digistore4-fb4c7.firebasestorage.app',
  messagingSenderId: '588882276640',
  appId: '1:588882276640:web:5604a41309726b79252745',
  measurementId: 'G-0QNQ3QF8WT'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const grid = document.querySelector('[data-products-grid]');
if (!grid) { console.warn('Product grid not found'); } else {

const fallback = [
  {name:'ریپورتر اینستاگرام',category:'instagram',description:'سرویس مدیریت گزارش تخلفات و ابزارهای مرتبط با اینستاگرام.',badge:'ویژه'},
  {name:'ممبر فیک تلگرام',category:'telegram',description:'افزایش ممبر کانال و گروه تلگرام با سرعت و تعرفه مناسب.',badge:'ویژه'},
  {name:'ری اکشن فیک تلگرام',category:'telegram',description:'ارسال واکنش‌های دلخواه به پست‌های تلگرام.',badge:'محبوب'},
  {name:'بازدید فیک تلگرام',category:'telegram',description:'افزایش بازدید پست‌های تلگرام.',badge:'آنی'},
  {name:'اسمس بمبر پر قدرت',category:'tools',description:'ابزار تست و ارسال پیامک در محیط‌های مجاز و کنترل‌شده.',badge:'ویژه'},
  {name:'کانفیگ ویتوری تضمینی',category:'tools',description:'کانفیگ‌های V2Ray با حجم و زمان دلخواه.',badge:'ویژه'},
  {name:'سفارش ساخت ربات تلگرام',category:'dev',description:'طراحی و برنامه‌نویسی ربات تلگرام مطابق نیاز شما.',badge:'سفارشی'},
  {name:'سفارش ساخت وب‌سایت',category:'dev',description:'طراحی وب‌سایت‌های مدرن و ریسپانسیو مطابق ایده شما.',badge:'سفارشی'}
];

const icons = {
  instagram:'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  telegram:'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.196 1.006.128.832.926z',
  tools:'M12 2L2 7l10 5 10-5-10-5zm-8 8.5v6.5l8 4.5 8-4.5V10.5l-8 4-8-4z',
  dev:'M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 4v12h16V7H4zm4.707 3.293a1 1 0 010 1.414L6.414 14l2.293 2.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm6.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L17.586 14l-2.293-2.293a1 1 0 01-1.414 0z'
};
const esc = s => String(s ?? '').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const iconFor = c => icons[c] || icons.dev;

function render(items) {
  grid.innerHTML = items.length ? items.map(p => {
    const category = p.category || 'dev';
    const title = esc(p.name || 'محصول');
    const desc = esc(p.description || 'برای دریافت اطلاعات بیشتر به ربات تلگرام مراجعه کنید.');
    const badge = esc(p.badge || 'ویژه');
    return `<div data-category="${esc(category)}" class="cyber-card p-6 flex flex-col justify-between cursor-pointer" onclick="openTelegramModal('${title.replace(/'/g,"\\'")}', '${desc.replace(/'/g,"\\'")}', '${esc(category)}')">
      <div>
        <div class="flex items-center justify-between mb-5">
          <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/10">
            <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="${iconFor(category)}"/></svg>
          </div>
          <span class="badge-cyan px-3 py-1 rounded-full text-xs font-bold">${badge}</span>
        </div>
        <h3 class="text-lg font-bold text-white mb-2">${title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${desc}</p>
      </div>
      <button type="button" class="w-full mt-2 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold transition-all border border-cyan-500/20 flex items-center justify-center gap-2">
        <span>دریافت و استعلام قیمت</span><span>→</span>
      </button>
    </div>`;
  }).join('') : '<div class="col-span-full text-center text-slate-400 py-12">محصول فعالی وجود ندارد.</div>';
}

async function loadProducts() {
  try {
    const snap = await getDocs(collection(db, 'products'));
    const items = snap.docs.map(d => ({id:d.id,...d.data()})).filter(p => p.active !== false).sort((a,b)=>(a.order ?? 999)-(b.order ?? 999));
    render(items.length ? items : fallback);
  } catch (e) {
    console.warn('Firebase products unavailable:', e);
    render(fallback);
  }
}

loadProducts();

}
