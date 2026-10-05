/* Configurações da Loja */
const WHATSAPP_NUMBER = "5521967693490";
const MINIMUM_ORDER = 40;
const SHIPPING_FEE = 5.00;

const products = [
  {
    id: "caixa-milk",
    name: "Caixa Milk personalizada",
    description: "Lembrancinha montada com seu nome, cores e tema favorito.",
    price: 7,
    tag: "R$ 7,00",
    variants: [
      { id: "mickey", name: "Mickey", image: "assets/caixa-milk-mickey.png" },
      { id: "alice", name: "Alice", image: "assets/caixa-milk-alice.png" },
      { id: "ursinho", name: "Ursinho", image: "assets/caixa-milk-ursinho.png" }
    ]
  },
  {
    id: "caixa-piramide",
    name: "Caixa Pirâmide",
    description: "Um formato encantador para lembrancinhas de festas temáticas.",
    price: 7,
    tag: "R$ 7,00",
    variants: [
      { id: "patrulha-canina", name: "Patrulha Canina", image: "assets/caixa-piramide-patrulha-canina.png" },
      { id: "aviao", name: "Avião", image: "assets/caixa-piramide-aviao.png" },
      { id: "princesas", name: "Princesas", image: "assets/caixa-piramide-princesas.png" }
    ]
  },
  {
    id: "caixa-maletinha-modelo-1",
    name: "Caixa Maletinha – Modelo 1",
    description: "Uma lembrancinha prática e charmosa para celebrar cada tema.",
    price: 8,
    tag: "R$ 8,00",
    variants: [
      { id: "fazendinha", name: "Fazendinha", image: "assets/caixa-maletinha-fazendinha.png" },
      { id: "gaby-animais", name: "Gaby / Animais", image: "assets/caixa-maletinha-gaby-animais.png" },
      { id: "lisa", name: "Lisa", image: "assets/caixa-maletinha-lisa.png" }
    ]
  },
  {
    id: "caixa-maletinha-modelo-2",
    name: "Caixa Maletinha – Modelo 2",
    description: "Lembrancinha divertida para montar uma festa cheia de personalidade.",
    price: 8,
    tag: "R$ 8,00",
    variants: [
      { id: "bluey", name: "Bluey", image: "assets/caixa-maletinha-2-bluey.png" },
      { id: "toy-story", name: "Toy Story", image: "assets/caixa-maletinha-2-toy-story.png" },
      { id: "sortidos", name: "Sortidos", image: "assets/caixa-maletinha-2-sortidos.png" }
    ]
  },
  {
    id: "caixa-canudo",
    name: "Caixa Canudo",
    description: "Um formato criativo para lembrancinhas cheias de cor e personalidade.",
    price: 7,
    tag: "R$ 7,00",
    variants: [
      { id: "fundo-do-mar", name: "Fundo do Mar", image: "assets/caixa-canudo-fundo-do-mar.png" },
      { id: "safari", name: "Safari", image: "assets/caixa-canudo-safari.png" },
      { id: "pernalonga", name: "Pernalonga", image: "assets/caixa-canudo-pernalonga.png" }
    ]
  },
  {
    id: "caixa-sushi",
    name: "Caixa Sushi",
    description: "Uma lembrancinha diferente e delicada para festas temáticas.",
    price: 7,
    tag: "R$ 7,00",
    variants: [
      { id: "ursinho-marinheiro", name: "Ursinho Marinheiro", image: "assets/caixa-sushi-ursinho-marinheiro.png" },
      { id: "branca-de-neve", name: "Branca de Neve", image: "assets/caixa-sushi-branca-de-neve.png" },
      { id: "patrulha-canina", name: "Patrulha Canina", image: "assets/caixa-sushi-patrulha-canina.png" }
    ]
  },
  {
    id: "caixa-bala",
    name: "Caixa Bala",
    description: "Uma lembrancinha colorida para completar a decoração da sua festa.",
    price: 7,
    tag: "R$ 7,00",
    variants: [
      { id: "galinha-pintadinha", name: "Galinha Pintadinha", image: "assets/caixa-bala-galinha-pintadinha.png" },
      { id: "minnie", name: "Minnie", image: "assets/caixa-bala-minnie.png" },
      { id: "borboleta", name: "Borboleta", image: "assets/caixa-bala-borboleta.png" }
    ]
  },
  {
    id: "caixa-almofada",
    name: "Caixa Almofada",
    description: "Uma lembrancinha delicada, com opção de alça para personalizar.",
    price: 7,
    tag: "R$ 7,00",
    options: ["Com alça", "Sem alça"],
    variants: [
      { id: "sortidos", name: "Sortidos", image: "assets/caixa-almofada-sortidos.png" },
      { id: "menina", name: "Menina", image: "assets/caixa-almofada-menina.png" },
      { id: "tigre", name: "Tigre", image: "assets/caixa-almofada-tigre.png" }
    ]
  },
  {
    id: "saco-zip-lock",
    name: "Saco Zip Lock personalizado",
    description: "Uma embalagem prática e personalizada para presentear com carinho.",
    price: 7.5,
    tag: "R$ 7,50",
    options: ["Com chaveiro", "Sem chaveiro"],
    optionPrices: { "Com chaveiro": 2.5, "Sem chaveiro": 0 },
    variants: [
      { id: "flores-helen", name: "Flores / Helen", image: "assets/saco-zip-lock-flores-helen.png" },
      { id: "stitch", name: "Stitch", image: "assets/saco-zip-lock-stitch.png" },
      { id: "sonic", name: "Sonic", image: "assets/saco-zip-lock-sonic.png" },
      { id: "marie", name: "Marie", image: "assets/saco-zip-lock-marie.png" },
      { id: "abelhinha-bella", name: "Abelhinha / Bella", image: "assets/saco-zip-lock-abelhinha-bella.png" },
      { id: "looney-tunes-alice", name: "Looney Tunes / Alice", image: "assets/saco-zip-lock-looney-tunes-alice.png" }
    ]
  },
  {
    id: "embalagem-cheetos",
    name: "Embalagem de Cheetos personalizada",
    description: "Uma embalagem divertida para deixar a comemoração ainda mais especial.",
    price: 5.5,
    tag: "R$ 5,50",
    variants: [
      { id: "daniel", name: "Daniel", image: "assets/embalagem-cheetos-daniel.png" },
      { id: "sonic", name: "Sonic", image: "assets/embalagem-cheetos-sonic.png" },
      { id: "minnie", name: "Minnie", image: "assets/embalagem-cheetos-minnie.png" },
      { id: "marquinhos-herois", name: "Marquinhos / Heróis", image: "assets/embalagem-cheetos-marquinhos-herois.png" }
    ]
  },
  {
    id: "embalagem-fini",
    name: "Embalagem de Fini personalizada",
    description: "Um mimo colorido para adoçar festas, presentes e celebrações.",
    price: 3,
    tag: "R$ 3,00",
    variants: [
      { id: "stitch", name: "Stitch", image: "assets/embalagem-fini-stitch.png" },
      { id: "toy-story", name: "Toy Story", image: "assets/embalagem-fini-toy-story.png" },
      { id: "menino-tiago", name: "Menino / Tiago", image: "assets/embalagem-fini-menino-tiago.png" }
    ]
  },
  {
    id: "convite-interativo",
    name: "Convite Interativo",
    description: "Um convite digital especial, com opção de incluir vídeo na experiência.",
    price: 39.99,
    tag: "R$ 39,99",
    options: ["Sem vídeo", "Com vídeo"],
    optionPrices: { "Sem vídeo": 0, "Com vídeo": 25 },
    variants: [
      { id: "pokemon-bruno", name: "Pokémon / Bruno", image: "assets/convite-interativo-pokemon-bruno.png" },
      { id: "safari-gabriel", name: "Safari / Gabriel", image: "assets/convite-interativo-safari-gabriel.png" },
      { id: "branca-neve-catarina", name: "Branca de Neve / Catarina", image: "assets/convite-interativo-branca-neve-catarina.png" }
    ]
  },
  {
    id: "cartela-adesivos",
    name: "Cartela de adesivos personalizados",
    description: "Adesivos para personalizar embalagens, presentes e cada detalhe da sua marca.",
    price: 20,
    tag: "R$ 20,00",
    variants: [
      { id: "doces", name: "Sua marca / Doces", image: "assets/adesivos-doces.png" },
      { id: "flores", name: "Ateliê / Flores", image: "assets/adesivos-flores.png" },
      { id: "alice", name: "Alice", image: "assets/adesivos-alice.png" }
    ]
  },
  {
    id: "adesivo-rotulo-garrafa",
    name: "Adesivo rótulo para garrafa",
    description: "Rótulo personalizado para garrafas de suco, água ou refrigerante.",
    price: 2.5,
    tag: "R$ 2,50",
    variants: [
      { id: "hotwheels", name: "Hot Wheels / Miguel", image: "assets/adesivo-garrafa-hotwheels.png" },
      { id: "ovelhinha", name: "Ovelhinha / Maysa", image: "assets/adesivo-garrafa-ovelhinha.png" }
    ]
  },
  {
    id: "etiqueta-escolar-cartela",
    name: "Etiqueta escolar — cartela",
    description: "Cartela de etiquetas para identificar materiais, cadernos e pertences.",
    price: 12,
    tag: "R$ 12,00",
    variants: [
      { id: "patrulha-canina", name: "Patrulha Canina / Arthur Miguel", image: "assets/etiqueta-escolar-patrulha-canina.png" },
      { id: "toy-story", name: "Toy Story", image: "assets/etiqueta-escolar-toy-story.png" },
      { id: "cartela-toy-story", name: "Cartela mini / Toy Story", image: "assets/etiqueta-escolar-cartela-toy-story.png" }
    ]
  },
  {
    id: "centro-de-mesa",
    name: "Centro de mesa",
    description: "Peça decorativa personalizada para completar a mesa da sua comemoração.",
    price: 12,
    tag: "R$ 12,00",
    variants: [
      { id: "homem-aranha", name: "Homem-Aranha / Théo", image: "assets/centro-de-mesa-homem-aranha.png" },
      { id: "bluey", name: "Bluey / Arthur", image: "assets/centro-de-mesa-bluey.png" },
      { id: "sonic", name: "Sonic / Téo", image: "assets/centro-de-mesa-sonic.png" }
    ]
  },
  {
    id: "plaquinha-centro-de-mesa",
    name: "Plaquinha de centro de mesa",
    description: "Plaquinha personalizada para completar a decoração da mesa.",
    price: 5,
    tag: "R$ 5,00",
    variants: [
      { id: "looney-tunes", name: "Looney Tunes / Henrique", image: "assets/plaquinha-mesa-looney-tunes.png" },
      { id: "homem-aranha", name: "Homem-Aranha / Eduardo", image: "assets/plaquinha-mesa-homem-aranha.png" },
      { id: "fazendinha", name: "Fazendinha", image: "assets/plaquinha-mesa-fazendinha.png" }
    ]
  },
  {
    id: "livrinho-colorir",
    name: "Livrinho de colorir personalizado",
    description: "Um livrinho divertido para as crianças criarem e brincarem.",
    price: 6.5,
    tag: "R$ 6,50",
    variants: [
      { id: "mickey", name: "Mickey / Alice", image: "assets/livrinho-colorir-mickey.png" },
      { id: "dinossauro", name: "Dinossauros / José Davi", image: "assets/livrinho-colorir-dinossauro.png" },
      { id: "turma-monica", name: "Turma da Mônica", image: "assets/livrinho-colorir-turma-monica.png" }
    ]
  },
  {
    id: "cards-colorir",
    name: "Cards de colorir",
    description: "Pacote com cards para colorir e deixar a brincadeira ainda mais divertida.",
    price: 7,
    tag: "R$ 7,00",
    variants: [
      { id: "fazendinha", name: "Fazendinha / Cristian", image: "assets/cards-colorir-fazendinha.png" },
      { id: "frozen", name: "Frozen / Laura Sofia", image: "assets/cards-colorir-frozen.png" },
      { id: "hello-kitty", name: "Hello Kitty", image: "assets/cards-colorir-hello-kitty.png" }
    ]
  },
  {
    id: "sacolinha-personalizada-g",
    name: "Sacolinha personalizada G",
    description: "Sacolinha grande personalizada para presentear com carinho.",
    price: 10,
    tag: "R$ 10,00",
    variants: [
      { id: "dino", name: "Dinossauros / Theo", image: "assets/sacolinha-g-dino.png" },
      { id: "safari-rosa", name: "Safari Rosa / Alice", image: "assets/sacolinha-g-safari-rosa.png" },
      { id: "homem-aranha", name: "Homem-Aranha / João Gabriel", image: "assets/sacolinha-g-homem-aranha.png" }
    ]
  },
  {
    id: "sacolinha-personalizada-p",
    name: "Sacolinha personalizada P",
    description: "Sacolinha pequena personalizada para lembrancinhas especiais.",
    price: 7,
    tag: "R$ 7,00",
    variants: [
      { id: "bolofofos", name: "Bolofofos / Arthur", image: "assets/sacolinha-p-bolofofos.png" },
      { id: "safari", name: "Safari / Emanuel", image: "assets/sacolinha-p-safari.png" },
      { id: "bluey", name: "Bluey / Valentin", image: "assets/sacolinha-p-bluey.png" }
    ]
  },
  {
    id: "foto-polaroid",
    name: "Foto Polaroid",
    description: "Fotos no estilo Polaroid para guardar memórias afetivas da sua festa.",
    price: 2.5,
    tag: "R$ 2,50",
    variants: [
      { id: "casal", name: "Casal / Pôr do sol", image: "assets/foto-polaroid-casal.png" },
      { id: "sortidas", name: "Várias fotos / Sortidas", image: "assets/foto-polaroid-sortidas.png" },
      { id: "iman", name: "Polaroid com ímã / Bebê", image: "assets/foto-polaroid-iman.png" }
    ]
  },
  {
    id: "foto-ima",
    name: "Foto com Ímã",
    description: "Lembrancinha fotográfica imantada para decorar a geladeira.",
    price: 4,
    tag: "R$ 4,00",
    variants: [
      { id: "mickey", name: "Mickey / Mateus", image: "assets/foto-ima-mickey.png" },
      { id: "safari", name: "Safari / Gael", image: "assets/foto-ima-safari.png" },
      { id: "borboleta", name: "Borboletas / Mavie", image: "assets/foto-ima-borboleta.png" }
    ]
  }
];

const money = value => Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const state = { cart: {}, featuredIndex: 0, currentModalProduct: null, currentModalVariantIndex: 0 };
const $ = selector => document.querySelector(selector);
const productById = id => products.find(product => product.id === id);

/* CRIAÇÃO DO CARD LIMPO (PREÇO ÚNICO + ZOOM) */
function createProductCard(product) {
  const variant = product.variants[0];
  return `
    <article class="modern-product-card" data-open-product="${product.id}">
      <div class="card-img-container">
        <img src="${variant.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-details-row">
        <span class="card-title-lbl">${product.name}</span>
        <span class="card-price-badge">${money(product.price)}</span>
      </div>
    </article>
  `;
}

function renderSite() {
  const grid = $("#product-grid");
  const feat = $("#featured-products");
  if (grid) grid.innerHTML = products.map(createProductCard).join("");
  if (feat) feat.innerHTML = products.map(createProductCard).join("");
}

/* INTERSECTION OBSERVER PARA O EFEITO DE SUBIDA (REVEAL) */
function setupScrollReveal() {
  const section = document.querySelector(".scroll-reveal-section");
  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("is-revealed");
        const cards = section.querySelectorAll(".modern-product-card");
        cards.forEach((card, i) => {
          card.style.transitionDelay = `${i * 0.08}s`;
        });
      }
    });
  }, { threshold: 0.15 });

  observer.observe(section);
}

/* LUPA DE PESQUISA EM TEMPO REAL */
function setupSearch() {
  const toggleSearchBtn = $("#toggle-search");
  const headerSearchBar = $("#header-search-bar");
  const searchInput = $("#product-search-input");
  const clearSearchBtn = $("#clear-search-btn");

  if (!toggleSearchBtn || !headerSearchBar || !searchInput) return;

  toggleSearchBtn.addEventListener("click", () => {
    const isHidden = headerSearchBar.hidden;
    headerSearchBar.hidden = !isHidden;
    toggleSearchBtn.classList.toggle("is-active", isHidden);
    if (isHidden) {
      setTimeout(() => searchInput.focus(), 100);
    } else {
      searchInput.value = "";
      filterProducts("");
    }
  });

  searchInput.addEventListener("input", e => {
    const term = e.target.value;
    clearSearchBtn.classList.toggle("is-visible", term.trim().length > 0);
    filterProducts(term);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.classList.remove("is-visible");
    filterProducts("");
    searchInput.focus();
  });
}

function filterProducts(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  const grid = $("#product-grid");
  if (!grid) return;

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.description.toLowerCase().includes(term)
  );

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-msg">
        <strong>Nenhum produto encontrado</strong>
        <p>Não encontramos nada com "<em>${searchTerm}</em>". Tente outro termo ou fale conosco no WhatsApp!</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(createProductCard).join("");
  }

  if (term.length > 0) {
    const catalogSection = $("#catalogo");
    if (catalogSection) {
      const offsetTop = catalogSection.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }
}

/* MODAL DE TELA CHEIA */
function openModal(productId) {
  const product = productById(productId);
  if (!product) return;

  state.currentModalProduct = product;
  state.currentModalVariantIndex = 0;

  const totalVariants = product.variants.length;
  const optionLabel = product.id === "saco-zip-lock" ? " do chaveiro" : product.id === "convite-interativo" ? " do vídeo" : " da alça";
  const optionsHtml = product.options ? `
    <div class="modal-form-group">
      <label for="modal-option-select">Opção${optionLabel}</label>
      <select id="modal-option-select">
        ${product.options.map(opt => `<option value="${opt}">${opt}${product.optionPrices?.[opt] ? ` (+ ${money(product.optionPrices[opt])})` : " (sem adicional)"}</option>`).join("")}
      </select>
    </div>` : "";

  const arrowsHtml = totalVariants > 1 ? `
    <button class="gallery-arrow prev" type="button" data-modal-arrow="-1">‹</button>
    <button class="gallery-arrow next" type="button" data-modal-arrow="1">›</button>
    <div class="gallery-dots">
      ${product.variants.map((_, i) => `<span class="g-dot ${i === 0 ? 'active' : ''}"></span>`).join("")}
    </div>` : "";

  $("#product-modal-body").innerHTML = `
    <div class="modal-gallery" id="modal-gallery-area">
      <img id="modal-main-img" src="${product.variants[0].image}" alt="${product.name}">
      ${arrowsHtml}
    </div>
    <div class="modal-info-body">
      <h2 class="modal-product-title">${product.name}</h2>
      <p class="modal-product-desc">${product.description}</p>
      
      ${optionsHtml}

      <div class="modal-form-group">
        <label for="modal-theme-input">Qual tema você deseja?</label>
        <input type="text" id="modal-theme-input" placeholder="Ex.: Patrulha Canina, Toy Story, Safari..." required>
      </div>

      <div class="modal-action-bar">
        <span class="price" id="modal-item-price">${money(product.price)}</span>
        <div class="qty-picker">
          <button type="button" data-modal-qty="-1">−</button>
          <input type="number" id="modal-qty-val" value="1" min="1" readonly>
          <button type="button" data-modal-qty="1">+</button>
        </div>
        <button class="btn-add-cart-large" id="modal-confirm-add" type="button">
          Adicionar
        </button>
      </div>
    </div>
  `;

  $("#product-modal").classList.add("is-open");
  $("#product-modal-backdrop").hidden = false;
  setupGallerySwipe();
}

function closeModal() {
  $("#product-modal").classList.remove("is-open");
  $("#product-modal-backdrop").hidden = true;
  state.currentModalProduct = null;
}

function updateModalGalleryImage(index) {
  const product = state.currentModalProduct;
  if (!product) return;
  state.currentModalVariantIndex = index;
  const img = $("#modal-main-img");
  if (img) img.src = product.variants[index].image;

  document.querySelectorAll(".gallery-dots .g-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

function setupGallerySwipe() {
  const area = $("#modal-gallery-area");
  if (!area) return;
  let startX = 0;
  area.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  area.addEventListener("touchend", e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 35) {
      const product = state.currentModalProduct;
      const total = product.variants.length;
      let next = diff > 0 ? (state.currentModalVariantIndex + 1) % total : (state.currentModalVariantIndex - 1 + total) % total;
      updateModalGalleryImage(next);
    }
  }, { passive: true });
}

/* CARROSSEL DE MAIS VENDIDOS */
let autoPlayTimer = null;

function startInfiniteCarousel() {
  stopInfiniteCarousel();
  autoPlayTimer = setInterval(() => {
    moveCarousel(1);
  }, 3500);
}

function stopInfiniteCarousel() {
  if (autoPlayTimer) clearInterval(autoPlayTimer);
}

function moveCarousel(direction) {
  const track = $("#featured-products");
  if (!track) return;
  const cards = track.querySelectorAll(".modern-product-card");
  if (!cards.length) return;

  const cardWidth = cards[0].offsetWidth + 16;
  const visible = Math.floor(track.parentElement.offsetWidth / cardWidth) || 1;
  const max = Math.max(0, cards.length - visible);

  state.featuredIndex += direction;
  if (state.featuredIndex > max) state.featuredIndex = 0;
  if (state.featuredIndex < 0) state.featuredIndex = max;

  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${state.featuredIndex * cardWidth}px)`;
}

function setupCarouselSwipe() {
  const container = document.getElementById("carousel-container");
  const track = document.getElementById("featured-products");
  if (!container || !track) return;

  let startX = 0;
  let currentX = 0;
  let isSwiping = false;

  container.addEventListener("touchstart", e => {
    stopInfiniteCarousel();
    startX = e.touches[0].clientX;
    currentX = startX;
    isSwiping = true;
    track.style.transition = "none";
  }, { passive: true });

  container.addEventListener("touchmove", e => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
    const cards = track.querySelectorAll(".modern-product-card");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 16;
    const currentOffset = -state.featuredIndex * cardWidth;
    const delta = currentX - startX;
    track.style.transform = `translateX(${currentOffset + delta}px)`;
  }, { passive: true });

  container.addEventListener("touchend", () => {
    if (!isSwiping) return;
    isSwiping = false;
    const diff = startX - currentX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) moveCarousel(1);
      else moveCarousel(-1);
    } else {
      moveCarousel(0);
    }
    setTimeout(startInfiniteCarousel, 2500);
  }, { passive: true });

  container.addEventListener("mouseenter", stopInfiniteCarousel);
  container.addEventListener("mouseleave", startInfiniteCarousel);
}

/* CARRINHO E WHATSAPP */
function cartItems() {
  return Object.entries(state.cart).map(([key, quantity]) => {
    const [productId, variantIndexStr, option, encodedTheme] = key.split(":");
    const itemProduct = productById(productId);
    const variantIndex = parseInt(variantIndexStr || "0", 10);
    const currentVariant = itemProduct && itemProduct.variants[variantIndex] ? itemProduct.variants[variantIndex] : itemProduct?.variants[0];
    return { key, product: itemProduct, variant: currentVariant, option, theme: decodeURIComponent(encodedTheme || ""), quantity };
  }).filter(item => item.product && item.variant);
}

function cartCount() { return cartItems().reduce((sum, item) => sum + item.quantity, 0); }
function optionPrice(item) { return item.product.optionPrices?.[item.option] || 0; }
function itemUnitTotal(item) { return item.product.price + optionPrice(item); }
function itemTotal(item) { return itemUnitTotal(item) * item.quantity; }

function renderCart() {
  const items = cartItems();
  const subtotal = items.reduce((sum, item) => sum + itemTotal(item), 0);
  const shippingMode = $("#order-shipping") ? $("#order-shipping").value : "Recolha no local";
  const shippingFee = shippingMode === "Envio" ? SHIPPING_FEE : 0;
  const grandTotal = subtotal + shippingFee;
  const missing = Math.max(0, MINIMUM_ORDER - subtotal);

  $("#cart-count").textContent = cartCount();
  const fields = $("#cart-checkout-fields");
  if (fields) fields.style.display = items.length ? "block" : "none";

  $("#cart-content").innerHTML = items.length ? items.map(item => `
    <div class="cart-item">
      <img src="${item.variant.image}" alt="">
      <div class="cart-item-info">
        <strong>${item.product.name}</strong>
        <small>Tema: <strong>${item.theme}</strong>${item.option ? ` · ${item.option}` : ""}<br>
        Unit.: ${money(itemUnitTotal(item))} · Subtotal: ${money(itemTotal(item))}</small>
        <div style="display:flex; gap:6px; margin-top:4px;">
          <button type="button" data-decrease="${item.key}" style="width:24px; height:24px;">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-increase="${item.key}" style="width:24px; height:24px;">+</button>
        </div>
      </div>
      <button type="button" data-remove="${item.key}" style="background:none; border:none; color:#999; font-size:18px;">✕</button>
    </div>
  `).join("") : `<div style="text-align:center; color:var(--muted); padding:30px 0;">Seu carrinho está vazio</div>`;

  $("#cart-footer").innerHTML = `
    <div class="subtotal-row"><span>Itens:</span><span>${money(subtotal)}</span></div>
    ${shippingFee > 0 ? `<div class="fee-row" style="color:var(--deep-cherry);"><span>Entrega:</span><span>+ ${money(shippingFee)}</span></div>` : ""}
    <div class="total-final-row"><span>Total:</span><span>${money(grandTotal)}</span></div>
    <div class="minimum-order ${missing ? 'is-pending' : 'is-met'}">
      ${missing ? `Faltam ${money(missing)} para o mínimo de ${money(MINIMUM_ORDER)}` : "Pedido mínimo atingido!"}
    </div>
    <button class="whatsapp-button" id="send-whatsapp" type="button" ${subtotal >= MINIMUM_ORDER ? "" : "disabled"}>
      ${subtotal >= MINIMUM_ORDER ? "Finalizar no WhatsApp ↗" : `Adicione mais ${money(missing)}`}
    </button>
  `;
}

function showToast(message) { 
  const toast = $("#toast"); 
  if (!toast) return;
  toast.textContent = message; 
  toast.classList.add("show"); 
  setTimeout(() => toast.classList.remove("show"), 2200); 
}

function toggleCart(open) {
  const drawer = $("#cart-drawer");
  if (!drawer) return;
  drawer.classList.toggle("is-open", open);
  $("#cart-backdrop").hidden = !open;
}

function sendToWhatsApp() {
  // 1. URL do seu Google Apps Script 
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyjp-xpuBGplJ0hCBHDfDzMdAALymWIeBK6DZQDP6VAsVUnZRMAo6tkzfRQoYMiMYM8EA/exec";

  // 2. Monta os dados dos itens que estão no carrinho (state.cart ou similar)
  // Caso seu state tenha os itens, formatamos como texto:
  const itensCarrinho = (state.cart || []).map(item => `${item.qty || 1}x ${item.title || item.name}`).join(", ");

  const dadosParaPlanilha = {
    origem: "Site (Carrinho)",
    itens: itensCarrinho || "Itens do carrinho",
    // Se você tiver campos no modal/carrinho para nome e tema, pode pegar aqui:
    // nome: document.getElementById("nome-cliente")?.value || "",
    // dataFesta: document.getElementById("data-festa")?.value || ""
  };

  // 3. Envia para a planilha em segundo plano (não trava o clique)
if (GOOGLE_SCRIPT_URL) {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosParaPlanilha)
    }).catch(err => console.error("Erro ao salvar na planilha:", err));
  }

  // 4. Sua mensagem original do WhatsApp que já estava aí:
  const message = `Olá, Raquel! Vim pelo site e montei o seguinte pedido:

${itensCarrinho ? itensCarrinho + "\n\n" : ""}Gostaria de confirmar a encomenda! ✨`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

/* EVENTOS DE CLIQUE */
document.addEventListener("click", e => {
  const cardTrigger = e.target.closest("[data-open-product]");
  if (cardTrigger) {
    openModal(cardTrigger.dataset.openProduct);
    return;
  }

  if (e.target.id === "close-product-modal" || e.target.id === "product-modal-backdrop") {
    closeModal();
    return;
  }

  if (e.target.dataset.modalArrow) {
    const delta = parseInt(e.target.dataset.modalArrow, 10);
    const product = state.currentModalProduct;
    const total = product.variants.length;
    let next = (state.currentModalVariantIndex + delta + total) % total;
    updateModalGalleryImage(next);
    return;
  }

  if (e.target.dataset.modalQty) {
    const input = $("#modal-qty-val");
    let val = parseInt(input.value || "1", 10) + parseInt(e.target.dataset.modalQty, 10);
    if (val < 1) val = 1;
    input.value = val;
    return;
  }

  if (e.target.id === "modal-confirm-add") {
    const product = state.currentModalProduct;
    const themeInput = $("#modal-theme-input");
    const theme = themeInput ? themeInput.value.trim() : "";
    if (!theme) {
      themeInput.focus();
      showToast("Informe o tema desejado!");
      return;
    }

    const qty = parseInt($("#modal-qty-val").value || "1", 10);
    const option = $("#modal-option-select")?.value || "";
    const key = `${product.id}:${state.currentModalVariantIndex}:${option}:${encodeURIComponent(theme)}`;

    state.cart[key] = (state.cart[key] || 0) + qty;
    showToast(`${qty}x ${product.name} adicionado!`);
    renderCart();
    closeModal();
    return;
  }

  if (e.target.dataset.increase) { state.cart[e.target.dataset.increase] += 1; renderCart(); }
  if (e.target.dataset.decrease) {
    state.cart[e.target.dataset.decrease] -= 1;
    if (state.cart[e.target.dataset.decrease] <= 0) delete state.cart[e.target.dataset.decrease];
    renderCart();
  }
  if (e.target.dataset.remove) { delete state.cart[e.target.dataset.remove]; renderCart(); }

  if (e.target.id === "open-cart") toggleCart(true);
  if (e.target.id === "close-cart" || e.target.id === "cart-backdrop") toggleCart(false);
  if (e.target.id === "send-whatsapp") sendToWhatsApp();
});

document.addEventListener("change", e => {
  if (e.target.id === "order-shipping") renderCart();
});

/* INICIALIZAÇÃO */
renderSite();
renderCart();
startInfiniteCarousel();
setupCarouselSwipe();
setupScrollReveal();
setupSearch();
$("#current-year").textContent = new Date().getFullYear();