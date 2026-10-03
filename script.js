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
    description: "Fotos no estilo Polaroid para guardar memórias afetivas da sua festa ou evento.",
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
    description: "Lembrancinha fotográfica imantada, perfeita para decorar a geladeira com muito afeto.",
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
const state = { cart: {}, featuredIndex: 0 };
const $ = selector => document.querySelector(selector);
const productById = id => products.find(product => product.id === id);

function productCard(product, suffix) {
  const variant = product.variants[0];
  const totalVariants = product.variants.length;
  const optionLabel = product.id === "saco-zip-lock" ? " do chaveiro" : product.id === "convite-interativo" ? " do vídeo" : " da alça";
  const options = product.options ? `
    <div class="option-wrap">
      <label class="variant-label" for="option-${product.id}-${suffix}">Opção${optionLabel}</label>
      <select class="variant-select" id="option-${product.id}-${suffix}" data-option-select>
        ${product.options.map(option => `<option value="${option}">${option}${product.optionPrices ? (product.optionPrices[option] ? ` (+ ${money(product.optionPrices[option])})` : " (sem adicional)") : ""}</option>`).join("")}
      </select>
    </div>` : "";

  // Setas e bolinhas do carrossel na foto
  const carouselControls = totalVariants > 1 ? `
    <button class="card-arrow prev" type="button" data-nav-variant="-1" aria-label="Foto anterior">‹</button>
    <button class="card-arrow next" type="button" data-nav-variant="1" aria-label="Próxima foto">›</button>
    <div class="carousel-dots">
      ${product.variants.map((_, i) => `<span class="dot ${i === 0 ? "active" : ""}"></span>`).join("")}
    </div>
  ` : "";

  return `
    <article class="product-card" data-product-id="${product.id}" data-current-index="0">
      <div class="product-image">
        <span class="product-tag">${product.tag}</span>
        <img class="product-photo" src="${variant.image}" alt="${product.name}" loading="lazy">
        ${carouselControls}
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <span class="illustrative-note">Passe as fotos para ver modelos · Personalize como quiser</span>
        ${options}
        <div class="theme-field-wrap">
          <label class="variant-label" for="theme-${product.id}-${suffix}">Qual tema você deseja?</label>
          <input class="theme-input" id="theme-${product.id}-${suffix}" data-theme-input type="text" required placeholder="Ex.: Patrulha Canina, floral, safari...">
        </div>
        
        <div class="product-meta">
          <span class="price">${money(product.price)}</span>
          <div class="card-action-group">
            <div class="card-qty-control">
              <button type="button" class="btn-qty-mini" data-card-qty-btn="-1" aria-label="Diminuir">−</button>
              <input type="number" class="card-qty-input" data-card-qty-input value="1" min="1" max="999" aria-label="Quantidade">
              <button type="button" class="btn-qty-mini" data-card-qty-btn="1" aria-label="Aumentar">+</button>
            </div>
            <button class="add-button" type="button" data-add="${product.id}" aria-label="Adicionar ${product.name} ao carrinho">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  $("#product-grid").innerHTML = products.map((item, index) => productCard(item, `catalog-${index}`)).join("");
  $("#featured-products").innerHTML = products.map((item, index) => productCard(item, `featured-${index}`)).join("");
}

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
  $("#cart-count").setAttribute("aria-label", `${cartCount()} itens`);

  const fieldsSection = $("#cart-checkout-fields");
  if (fieldsSection) {
    fieldsSection.style.display = items.length ? "block" : "none";
  }

  $("#cart-content").innerHTML = items.length ? items.map(item => `
    <div class="cart-item">
      <img src="${item.variant.image}" alt="">
      <div class="cart-item-info">
        <strong>${item.product.name}</strong>
        <small>Tema escolhido: <strong>${item.theme}</strong>${item.option ? ` · ${item.option}` : ""}<br>
        Unitário: ${money(itemUnitTotal(item))} · <strong>Subtotal: ${money(itemTotal(item))}</strong></small>
        <div class="quantity-control">
          <button type="button" data-decrease="${item.key}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-increase="${item.key}">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove="${item.key}">×</button>
    </div>
  `).join("") : `<div class="empty-cart" style="text-align: center; color: var(--muted); padding: 30px 0;"><strong>Seu carrinho está vazio</strong><p>Escolha um modelo para começar seu pedido.</p></div>`;

  $("#cart-footer").innerHTML = `
    <div class="subtotal-row"><span>Subtotal dos Itens:</span><span>${money(subtotal)}</span></div>
    ${shippingFee > 0 ? `<div class="fee-row" style="color: var(--deep-cherry);"><span>Taxa de Entrega:</span><span>+ ${money(shippingFee)}</span></div>` : ""}
    <div class="total-final-row"><span>Total com Entrega:</span><span>${money(grandTotal)}</span></div>
    <div class="minimum-order ${missing ? "is-pending" : "is-met"}">
      ${missing ? `Faltam ${money(missing)} em produtos para atingir o mínimo de ${money(MINIMUM_ORDER)}` : "Pedido mínimo atingido — preencha os dados e envie!"}
    </div>
    <button class="whatsapp-button" id="send-whatsapp" type="button" ${subtotal >= MINIMUM_ORDER ? "" : "disabled"}>
      ${subtotal >= MINIMUM_ORDER ? "Finalizar pelo WhatsApp ↗" : `Adicione mais ${money(missing)}`}
    </button>
  `;
}

function changeQuantity(key, delta) { 
  state.cart[key] = (state.cart[key] || 0) + delta; 
  if (state.cart[key] <= 0) delete state.cart[key]; 
  renderCart(); 
}

function updateCardImage(card, nextIndex) {
  const itemProduct = productById(card.dataset.productId);
  card.dataset.currentIndex = nextIndex;
  
  const currentVariant = itemProduct.variants[nextIndex];
  const image = card.querySelector(".product-photo");
  image.src = currentVariant.image; 
  image.alt = `${itemProduct.name} - foto ${nextIndex + 1}`;

  const dots = card.querySelectorAll(".carousel-dots .dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === nextIndex);
  });
}

function showToast(message) { 
  const toast = $("#toast"); 
  toast.textContent = message; 
  toast.classList.add("show"); 
  setTimeout(() => toast.classList.remove("show"), 2500); 
}

function toggleCart(open) { 
  const drawer = $("#cart-drawer"); 
  drawer.classList.toggle("is-open", open); 
  drawer.setAttribute("aria-hidden", String(!open)); 
  $("#open-cart").setAttribute("aria-expanded", String(open)); 
  $("#cart-backdrop").hidden = !open; 
}

function sendToWhatsApp() {
  const items = cartItems();
  const subtotal = items.reduce((sum, item) => sum + itemTotal(item), 0);

  if (subtotal < MINIMUM_ORDER) {
    showToast(`O pedido mínimo em itens é ${money(MINIMUM_ORDER)}`);
    return;
  }

  const themeInput = $("#order-theme");
  const childInput = $("#order-child");
  const shippingSelect = $("#order-shipping");

  const orderTheme = themeInput ? themeInput.value.trim() : "";
  const orderChild = childInput ? childInput.value.trim() : "";
  const orderShipping = shippingSelect ? shippingSelect.value : "Recolha no local";

  if (!orderTheme) {
    themeInput.focus();
    showToast("Por favor, preencha o tema da festa no carrinho!");
    return;
  }

  if (!orderChild) {
    childInput.focus();
    showToast("Por favor, preencha o nome e idade no carrinho!");
    return;
  }

  const shippingFee = orderShipping === "Envio" ? SHIPPING_FEE : 0;
  const grandTotal = subtotal + shippingFee;

  const lines = items.map(item => `• ${item.quantity}x ${item.product.name}${item.option ? ` (${item.option})` : ""} - ${money(itemTotal(item))}`);
  const deliveryText = orderShipping === "Envio" ? `Envio (+ ${money(SHIPPING_FEE)} de taxa de entrega)` : `Recolha no local (Sem taxa)`;

  const message = `Olá, Raquel! Vim pelo site e montei o meu pedido com os seguintes itens:

🛍️ Itens Escolhidos:
${lines.join("\n")}

💰 Subtotal Estimado: ${money(grandTotal)}

🎈 Dados da Personalização:
• Tema da festa: ${orderTheme}
• Nome e idade: ${orderChild}
• Opção de entrega: ${deliveryText}

Gostaria de confirmar a disponibilidade da data e tirar algumas dúvidas para fechar o pedido! ✨`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function moveCarousel(direction) {
  const track = $("#featured-products");
  const cards = track.querySelectorAll(".product-card");
  if (!cards.length) return;
  const visible = window.innerWidth <= 600 ? 1 : window.innerWidth <= 800 ? 2 : 3;
  const max = Math.max(0, cards.length - visible);
  state.featuredIndex = Math.min(max, Math.max(0, state.featuredIndex + direction));
  track.style.transform = `translateX(-${state.featuredIndex * (cards[0].offsetWidth + 20)}px)`;
}

document.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;

  // Botões de quantidade no card (+ e -)
  if (target.dataset.cardQtyBtn) {
    const card = target.closest(".product-card");
    const qtyInput = card.querySelector("[data-card-qty-input]");
    const delta = parseInt(target.dataset.cardQtyBtn, 10);
    let val = parseInt(qtyInput.value || "1", 10) + delta;
    if (isNaN(val) || val < 1) val = 1;
    qtyInput.value = val;
    return;
  }

  // Passar fotos no card (‹ e ›)
  if (target.dataset.navVariant) {
    const card = target.closest(".product-card");
    const itemProduct = productById(card.dataset.productId);
    const currentIndex = parseInt(card.dataset.currentIndex || "0", 10);
    const delta = parseInt(target.dataset.navVariant, 10);
    const totalVariants = itemProduct.variants.length;
    let nextIndex = (currentIndex + delta) % totalVariants;
    if (nextIndex < 0) nextIndex = totalVariants - 1;
    updateCardImage(card, nextIndex);
    return;
  }

  // Adicionar ao carrinho
  if (target.dataset.add) {
    const card = target.closest(".product-card");
    const itemProduct = productById(target.dataset.add);
    const currentIndex = card.dataset.currentIndex || "0";
    const themeInput = card.querySelector("[data-theme-input]");
    const theme = themeInput.value.trim();
    if (!theme) {
      themeInput.focus();
      showToast("Informe o tema desejado para adicionar");
      return;
    }

    const qtyInput = card.querySelector("[data-card-qty-input]");
    let quantityToAdd = parseInt(qtyInput ? qtyInput.value : "1", 10);
    if (isNaN(quantityToAdd) || quantityToAdd < 1) quantityToAdd = 1;

    const option = card.querySelector("[data-option-select]")?.value;
    changeQuantity(`${itemProduct.id}:${currentIndex}:${option || ""}:${encodeURIComponent(theme)}`, quantityToAdd);
    showToast(`${quantityToAdd}x ${itemProduct.name} adicionado(s)`);
    if (qtyInput) qtyInput.value = 1;
  }

  if (target.dataset.increase) changeQuantity(target.dataset.increase, 1);
  if (target.dataset.decrease) changeQuantity(target.dataset.decrease, -1);
  if (target.dataset.remove) { delete state.cart[target.dataset.remove]; renderCart(); }
  if (target.id === "open-cart") toggleCart(true);
  if (target.id === "close-cart") toggleCart(false);
  if (target.id === "send-whatsapp") sendToWhatsApp();
  if (target.id === "carousel-next") moveCarousel(1);
  if (target.id === "carousel-prev") moveCarousel(-1);
});

document.addEventListener("change", event => {
  if (event.target.matches("[data-card-qty-input]")) {
    let val = parseInt(event.target.value, 10);
    if (isNaN(val) || val < 1) event.target.value = 1;
  }
  if (event.target.id === "order-shipping") renderCart();
});

$("#cart-backdrop").addEventListener("click", () => toggleCart(false));
renderProducts(); 
renderCart(); 
$("#current-year").textContent = new Date().getFullYear();
window.addEventListener("resize", () => { state.featuredIndex = 0; moveCarousel(0); });