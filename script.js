/* AURA LUXE ATELIER — interactions */
const galleryItems = [
  {
    "title": "THE NOCCE BOUCLE ARMCHAIR",
    "tag": "Chairs & Lounges",
    "img": "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
    "desc": "Meticulously steam-bent solid American walnut contours enveloped in heavy nubby bouclé fabric. Designed for deep ergonomic rest and sculptural spatial presence."
  },
  {
    "title": "KIYOTO LOWLINE COFFEE PLINTH",
    "tag": "Living Room",
    "img": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80",
    "desc": "A low-slung architectural monolith crafted from smoked ash wood. Features an integrated recessed brass reveal that produces an elegant floating illusion."
  },
  {
    "title": "AALTO MINIMALIST BEDSTEAD",
    "tag": "Bedrooms",
    "img": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "desc": "Platform bed with cantilevered oak frame, integrated warm LED perimeter backlighting, and a hand-stitched aniline suede headboard."
  },
  {
    "title": "THE SOLSTICE ELLIPTICAL TABLE",
    "tag": "Dining & Bars",
    "img": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
    "desc": "Honed Roman Travertine stone slab resting on dual sculpted solid walnut fluted pedestals. Comfortably hosts 8 to 10 dinner patrons."
  },
  {
    "title": "VERVE FLUTED CREDENZA",
    "tag": "Living Room",
    "img": "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=900&q=80",
    "desc": "Continuous vertical tambour louvers gliding around rounded corners. Features solid brass turned legs and soft-touch velvet interior linings."
  },
  {
    "title": "LUMINA CERAMIC PENDANTS",
    "tag": "Accent & Lighting",
    "img": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
    "desc": "Hand-thrown unglazed terracotta clay bells with brushed champagne brass fittings. Emits a comforting, warm 2700K downward pool of light."
  },
  {
    "title": "ARCUS CURVED VELVET SETTEE",
    "tag": "Chairs & Lounges",
    "img": "https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=900&q=80",
    "desc": "Curvilinear two-seater settee swathed in muted olive Belgian velvet, supported by recessed dark walnut plinth architecture."
  },
  {
    "title": "BRONTE LEATHER ACCENT CHAIR",
    "tag": "Living Room",
    "img": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80",
    "desc": "Hand-stitched vegetable-tanned saddle leather sling chair with blackened forged steel framing and hand-turned brass finials."
  },
  {
    "title": "NARA SMOKED OAK TABLE",
    "tag": "Dining & Bars",
    "img": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80",
    "desc": "Architectural dining centerpiece with beveled chamfers, traditional Japanese mortise & tenon joints, and hardwax oil finish."
  },
  {
    "title": "KYOTO WALNUT NIGHTSTAND",
    "tag": "Bedrooms",
    "img": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=900&q=80",
    "desc": "Minimalist cantilever bedside plinth crafted from prime kiln-dried walnut featuring soft-closing felt-lined interior compartments."
  },
  {
    "title": "AURELIA ALABASTER SCONCE",
    "tag": "Accent & Lighting",
    "img": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    "desc": "Naturally veined Spanish alabaster luminaire emitting a soft diffuse halo with antique burnished bronze wall mounting."
  },
  {
    "title": "VALENTINA UPHOLSTERED BED",
    "tag": "Bedrooms",
    "img": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
    "desc": "Generously cushioned bedstead enveloped in tactile Belgian bouclé. Engineered with reinforced internal beech slats for silent structural support."
  },
  {
    "title": "SERAPHINA TALLBOY CHEST",
    "tag": "Bedrooms",
    "img": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
    "desc": "Solid smoked oak tallboy chest boasting 6 soft-touch dovetail drawers and solid cold-cast patinated bronze hardware."
  },
  {
    "title": "ZENITH LOW PLATFORM BED",
    "tag": "Bedrooms",
    "img": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80",
    "desc": "Japandi-inspired low-profile bed plinth with seamless perimeter ledge and integrated touch-sensitive LED reading sconces."
  },
  {
    "title": "SOLACE ANILINE LEATHER BED",
    "tag": "Bedrooms",
    "img": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=900&q=80",
    "desc": "Channel-tufted Italian semi-aniline leather bed frame anchored by brushed champagne brass cylinder footings."
  }
];
const services = [
  {
    "title": "BESPOKE FURNITURE DESIGN",
    "icon": "ruler",
    "summary": "Tailor-made structural pieces molded to exact interior floor plans with artisanal wood cuts, custom proportions, and distinctive silhouette identity.",
    "steps": [
      "Private spatial dimension survey & client lifestyle consultation.",
      "Hand-drawn exploratory joinery sketches and isometric concepts.",
      "Material timber slab curation at our Chandigarh workshop.",
      "Precision joinery assembly, botanical oil seal, and final inspection."
    ],
    "time": "4 to 6 Weeks",
    "grade": "Sovereign American Walnut & French Oak"
  },
  {
    "title": "ERGONOMIC LOUNGING",
    "icon": "armchair",
    "summary": "Anatomically engineered recliners, lounge chairs, and modular sofas delivering pristine postural support without compromising visual poetry.",
    "steps": [
      "Lumbar angle calibration tailored to patron seating preferences.",
      "High-resilience latex and multi-density foam layering.",
      "Feather-down core topping for cloud-like tactile envelopment.",
      "Hand-tensioned spring framing tested for decades of durability."
    ],
    "time": "3 to 5 Weeks",
    "grade": "Italian Semi-Aniline Leather & Wool Bouclé"
  },
  {
    "title": "ARCHITECTURAL PLANNING",
    "icon": "layout-grid",
    "summary": "Comprehensive volumetric space planning ensuring circulation, natural day-lighting, and silhouette balance throughout residential suites.",
    "steps": [
      "CAD & BIM volumetric residential layout translation.",
      "Natural light path mapping and circulation heatmapping.",
      "Furniture footprint scale balancing to prevent room congestion.",
      "Full elevation schedule and material finish board presentation."
    ],
    "time": "2 to 3 Weeks",
    "grade": "Architectural Dossier & CAD Standards"
  },
  {
    "title": "SUSTAINABLE TIMBER FSC",
    "icon": "trees",
    "summary": "FSC-certified European Oak, reclaimed American Walnut, and kiln-dried Teak harvested conscientiously to honor environmental harmony.",
    "steps": [
      "Direct chain-of-custody verification from certified sustainable forests.",
      "Slow 90-day vacuum kiln seasoning to guarantee moisture balance below 8%.",
      "Bark preservation and grain orientation matching across adjacent surfaces.",
      "Zero-waste timber sawdust reclamation for clean workshop heating."
    ],
    "time": "Immediate Availability",
    "grade": "100% FSC-Certified Hardwoods"
  },
  {
    "title": "HAUTE UPHOLSTERY",
    "icon": "layers",
    "summary": "Sumptuous bouclé, natural top-grain Italian leathers, and woven linen fabrics hand-stitched with double-piped borders and feather-down cores.",
    "steps": [
      "Fabric swatching and tactile touch review in studio.",
      "Pattern matching across organic textures and weave directions.",
      "Double-stitched concealed seams with marine-grade tensile thread.",
      "Stain-resistant botanical nano-coating application."
    ],
    "time": "3 to 4 Weeks",
    "grade": "Textured Bouclé, Belgian Linen & Nubuck"
  },
  {
    "title": "3D PHOTOREAL RENDERING",
    "icon": "box",
    "summary": "Precision ray-traced spatial simulations allowing our patrons to inspect lighting angles, material grain, and proportions before crafting begins.",
    "steps": [
      "Millimeter-accurate 3D digital model creation of customized pieces.",
      "Photometric sunlight and artificial luminaire simulation.",
      "8K ray-traced render generation across daytime and evening moods.",
      "Virtual material swapping for real-time client approval."
    ],
    "time": "5 to 7 Business Days",
    "grade": "Ray-Traced 8K Photorealistic Renderings"
  },
  {
    "title": "HERITAGE RESTORATION",
    "icon": "sparkles",
    "summary": "Dedicated conservation of mid-century classics and ancestral furniture utilizing cold-pressed botanical oils, joinery preservation, and French polish.",
    "steps": [
      "Microscopic patina and wood age assessment.",
      "Gentle stripping of degraded varnishes without harming underlying grain.",
      "Re-gluing mortise and tenon joints with historical animal hide glue.",
      "Multi-layered French polish rubbing with natural shellac flakes."
    ],
    "time": "4 to 8 Weeks",
    "grade": "Museum-Standard Conservation Grade"
  },
  {
    "title": "WHITE-GLOVE INSTALLATION",
    "icon": "shield-check",
    "summary": "Unblemished on-site delivery, leveling, architectural assembly, and post-installation placement handled exclusively by our certified atelier crew.",
    "steps": [
      "Climate-controlled padded blanket transit directly to site.",
      "Protective floor coverings laid across interior thresholds.",
      "Precision spirit leveling and floor glide attachment.",
      "Packaging disposal and final micro-fiber buffing before handover."
    ],
    "time": "Scheduled at Client Convenience",
    "grade": "Dedicated Atelier Delivery Crew"
  }
];
const showcase = {
  "all": [
    "MASTERPIECE ARCHIVE",
    "Comprehensive Atelier Division",
    "ALL MASTERPIECES",
    "& ARCHITECTURAL FORMS",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=82",
    "Our complete repository of handcrafted residential monoliths. Each piece unites aged European timber, cold-rolled brass accents, and minimalist geometry.",
    "Mortise & Tenon",
    "90-Day Kiln Aged"
  ],
  "living": [
    "LIVING COLLECTION",
    "Residential Furniture",
    "QUIET LIVING",
    "WITH MATERIAL DEPTH",
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80",
    "Low-slung silhouettes, tactile upholstery and warm timber create a calm architectural foundation for contemporary living.",
    "Dovetail Joinery",
    "Kiln Aged Walnut"
  ],
  "dining": [
    "DINING COLLECTION",
    "Dining & Hospitality",
    "THE ART OF",
    "GATHERING",
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
    "Sculptural tables and refined surfaces designed to make everyday gathering feel considered, intimate and enduring.",
    "Mortise & Tenon",
    "Hardwax Oil Finish"
  ],
  "lounge": [
    "LOUNGE COLLECTION",
    "Chairs & Lounges",
    "SCULPTED",
    "COMFORT",
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
    "Ergonomic forms meet tactile bouclé, velvet and leather for seating that feels as good as it looks.",
    "Steam-Bent Frame",
    "Natural Bouclé"
  ],
  "bedroom": [
    "BEDROOM COLLECTION",
    "Private Retreats",
    "REST IN",
    "ARCHITECTURAL CALM",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    "Low profiles, warm timber and softly integrated lighting turn the bedroom into a quiet private sanctuary.",
    "Floating Joinery",
    "Silent Close Hardware"
  ],
  "lighting": [
    "LIGHTING COLLECTION",
    "Accent & Lighting",
    "LIGHT AS",
    "MATERIAL",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
    "Hand-finished lighting pieces that add a measured glow without competing with the architecture.",
    "Hand Finished",
    "2700K Warm Light"
  ]
};
const heroSlides = [
  {
    "tag": "CURATED ARCHITECTURAL COLLECTION",
    "title": "SCULPTED HARMONY",
    "accent": "FOR MINDFUL SPACES",
    "desc": "Handcrafted furniture designed with timeless organic textures, raw American walnut timber, and bespoke Italian upholstery for discerning residential estates.",
    "img": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=82"
  },
  {
    "tag": "NORDIC PURITY & HONED TEXTURES",
    "title": "RAW TIMBER",
    "accent": "MEETS STRUCTURAL POETRY",
    "desc": "Kiln-aged European white oak and unlacquered champagne brass silhouettes engineered for enduring architectural calm and quiet luxury.",
    "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2200&q=82"
  },
  {
    "tag": "MONUMENTAL PRIVATE COMMISSIONS",
    "title": "BESPOKE FORMS",
    "accent": "CRAFTED WITHOUT COMPROMISE",
    "desc": "Each dining monolith and sculpted chaise is tailored to millimeter tolerances in our Chandigarh atelier for sovereign private residences.",
    "img": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=82"
  }
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  initHeader();
  initMenu();
  initHero();
  initCollections();
  initServices();
  initGallery();
  initReviews();
  initForms();
  initReveal();
  initCursor();
});

function initHeader(){
  const header = $("#siteHeader");
  const update = () => header.classList.toggle("scrolled", window.scrollY > 25);
  update();
  window.addEventListener("scroll", update, {passive:true});
}

function initMenu(){
  const btn = $("#menuToggle"), menu = $("#mobileMenu");
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
    btn.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
    lucide.createIcons();
  });
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded","false");
    btn.innerHTML = `<i data-lucide="menu"></i>`;
    lucide.createIcons();
  }));
}

let heroIndex = 0;
let heroTimer;
function initHero(){
  const slides = $$(".hero-slide"), title=$("#heroTitle"), accent=$("#heroAccent"), desc=$("#heroDesc"), tag=$("#heroTag");
  const buttons = $$(".slide-btn");
  function render(index){
    heroIndex = (index + slides.length) % slides.length;
    slides.forEach((s,i)=>s.classList.toggle("is-active",i===heroIndex));
    buttons.forEach((b,i)=>b.classList.toggle("is-active",i===heroIndex));
    const data=heroSlides[heroIndex];
    title.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:500});
    setTimeout(()=>{title.textContent=data.title;accent.textContent=data.accent;desc.textContent=data.desc;tag.textContent=data.tag;},120);
  }
  const restart=()=>{clearInterval(heroTimer);heroTimer=setInterval(()=>render(heroIndex+1),6500)};
  buttons.forEach(b=>b.addEventListener("click",()=>{render(+b.dataset.slide);restart()}));
  $("#prevHero").addEventListener("click",()=>{render(heroIndex-1);restart()});
  $("#nextHero").addEventListener("click",()=>{render(heroIndex+1);restart()});
  restart();
}

function initCollections(){
  const tabs=$$(".collection-tab");
  const img=$("#showcaseImage"),badge=$("#showcaseBadge"),meta=$("#showcaseMeta"),title=$("#showcaseTitle"),accent=$("#showcaseAccent"),text=$("#showcaseText"),one=$("#specOne"),two=$("#specTwo");
  tabs.forEach(tab=>tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("is-active"));tab.classList.add("is-active");
    const d=showcase[tab.dataset.category];
    img.style.opacity="0";
    setTimeout(()=>{
      img.src=d[4]; badge.textContent=d[0]; meta.textContent=d[1]; title.textContent=d[2]; accent.textContent=d[3]; text.textContent=d[5]; one.textContent=d[6]; two.textContent=d[7]; img.style.opacity="1";
    },160);
  }));
}

function initServices(){
  $$(".service-card").forEach(card=>{
    const open=()=>openService(+card.dataset.service);
    card.addEventListener("click",open);
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
  });
}

function initGallery(){
  $$(".gallery-card").forEach(card=>card.addEventListener("click",()=>openProduct(+card.dataset.index)));
}

function filterGallery(category){
  $$(".gallery-card").forEach(card=>{
    card.classList.toggle("is-hidden", category!=="all" && card.dataset.category!==category);
  });
}

function openProduct(index){
  const item=galleryItems[index]; if(!item) return;
  $("#productImage").src=item.img; $("#productImage").alt=item.title;
  $("#productTag").textContent=item.tag;
  $("#productTitle").textContent=item.title;
  $("#productDesc").textContent=item.desc;
  $("#productEdition").textContent=`Edition ${String(index+1).padStart(2,"0")} · Private commission`;
  openModal("productModal");
}

function openService(index){
  const s=services[index]; if(!s) return;
  $("#serviceTitle").textContent=s.title;
  $("#serviceSummary").textContent=s.summary;
  $("#serviceTime").textContent=s.time;
  $("#serviceGrade").textContent=s.grade;
  $("#serviceModalIcon").innerHTML=`<i data-lucide="${s.icon}"></i>`;
  $("#serviceSteps").innerHTML=s.steps.map(step=>`<li>${step}</li>`).join("");
  lucide.createIcons();
  openModal("serviceModal");
}

function openModal(id){
  const modal=$("#"+id); modal.classList.add("is-open"); modal.setAttribute("aria-hidden","false"); document.body.classList.add("modal-open");
}
function closeModal(type){
  const id=type==="product"?"productModal":"serviceModal";
  const modal=$("#"+id); modal.classList.remove("is-open"); modal.setAttribute("aria-hidden","true");
  if(!$(".modal.is-open")) document.body.classList.remove("modal-open");
}
$$("[data-close]").forEach(el=>el.addEventListener("click",()=>closeModal(el.dataset.close)));
document.addEventListener("keydown",e=>{if(e.key==="Escape") $$(".modal.is-open").forEach(m=>closeModal(m.id==="productModal"?"product":"service"));});

let reviewIndex=0, reviewTimer;
function initReviews(){
  const slides=$$(".review-slide"), dots=$("#reviewDots");
  slides.forEach((_,i)=>{const b=document.createElement("button");b.type="button";b.setAttribute("aria-label",`Review ${i+1}`);b.addEventListener("click",()=>showReview(i));dots.appendChild(b)});
  const show=(i)=>{
    reviewIndex=(i+slides.length)%slides.length;
    slides.forEach((s,j)=>{s.classList.toggle("is-active",j===reviewIndex);s.setAttribute("aria-hidden",String(j!==reviewIndex))});
    $$("button",dots).forEach((b,j)=>b.classList.toggle("is-active",j===reviewIndex));
  };
  window.showReview=show;
  $("#prevReview").addEventListener("click",()=>{show(reviewIndex-1);restart()});
  $("#nextReview").addEventListener("click",()=>{show(reviewIndex+1);restart()});
  function restart(){clearInterval(reviewTimer);reviewTimer=setInterval(()=>show(reviewIndex+1),7000)}
  show(0);restart();
}

function initForms(){
  $("#contactForm").addEventListener("submit",e=>{
    e.preventDefault(); e.target.reset(); showToast("Inquiry received","Your local demo form is working. Connect a backend to receive real inquiries.");
  });
  $("#newsletterForm").addEventListener("submit",e=>{
    e.preventDefault(); e.target.reset(); showToast("Subscribed","The private atelier dispatch demo is active.");
  });
}

let toastTimer;
function showToast(title,text){
  $("#toastTitle").textContent=title;$("#toastText").textContent=text;
  const toast=$("#toast");toast.classList.add("is-visible");clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove("is-visible"),4200);
}

function initReveal(){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target)}}),{threshold:.12});
  $$(".reveal").forEach(el=>observer.observe(el));
}

function initCursor(){
  const glow=$(".cursor-glow");
  if(!glow || matchMedia("(pointer:coarse)").matches) return;
  window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});
}
