/* Edite este bloco para atualizar preços, variantes ou o número do WhatsApp. */
const WHATSAPP_NUMBER = "5511999999999";
const MINIMUM_ORDER = 40;
const products = [
  {
    id: "caixa-milk", name: "Caixa Milk personalizada",
    description: "Lembrancinha montada com seu nome, cores e tema favorito.",
    price: 7, tag: "R$ 7,00",
    variants: [
      { id: "mickey", name: "Mickey", image: "assets/caixa-milk-mickey.png" },
      { id: "cerejas-alice", name: "Cerejas / Alice", image: "assets/caixa-milk-cerejas-alice.png" },
      { id: "ursinho", name: "Ursinho", image: "assets/caixa-milk-ursinho.png" }
    ]
  },
  {
    id: "caixa-piramide", name: "Caixa Pirâmide",
    description: "Um formato encantador para lembrancinhas de festas temáticas.",
    price: 7, tag: "R$ 7,00",
    variants: [
      { id: "patrulha-canina", name: "Patrulha Canina", image: "assets/caixa-piramide-patrulha-canina.png" },
      { id: "aviao", name: "Avião", image: "assets/caixa-piramide-aviao.png" },
      { id: "princesas", name: "Princesas", image: "assets/caixa-piramide-princesas.png" }
    ]
  },
  {
    id: "caixa-maletinha-modelo-1", name: "Caixa Maletinha – Modelo 1",
    description: "Uma lembrancinha prática e charmosa para celebrar cada tema.",
    price: 8, tag: "R$ 8,00",
    variants: [
      { id: "fazendinha", name: "Fazendinha", image: "assets/caixa-maletinha-fazendinha.png" },
      { id: "gaby-animais", name: "Gaby / Animais", image: "assets/caixa-maletinha-gaby-animais.png" },
      { id: "lisa", name: "Lisa", image: "assets/caixa-maletinha-lisa.png" }
    ]
  },
  {
    id: "caixa-maletinha-modelo-2", name: "Caixa Maletinha – Modelo 2",
    description: "Lembrancinha divertida para montar uma festa cheia de personalidade.",
    price: 8, tag: "R$ 8,00",
    variants: [
      { id: "bluey", name: "Bluey", image: "assets/caixa-maletinha-2-bluey.png" },
      { id: "toy-story", name: "Toy Story", image: "assets/caixa-maletinha-2-toy-story.png" },
      { id: "sortidos", name: "Sortidos", image: "assets/caixa-maletinha-2-sortidos.png" }
    ]
  },
  {
    id: "caixa-canudo", name: "Caixa Canudo",
    description: "Um formato criativo para lembrancinhas cheias de cor e personalidade.",
    price: 7, tag: "R$ 7,00",
    variants: [
      { id: "fundo-do-mar", name: "Fundo do Mar", image: "assets/caixa-canudo-fundo-do-mar.png" },
      { id: "safari", name: "Safari", image: "assets/caixa-canudo-safari.png" },
      { id: "pernalonga", name: "Pernalonga", image: "assets/caixa-canudo-pernalonga.png" }
    ]
  },
  {
    id: "caixa-sushi", name: "Caixa Sushi",
    description: "Uma lembrancinha diferente e delicada para festas temáticas.",
    price: 7, tag: "R$ 7,00",
    variants: [
      { id: "ursinho-marinheiro", name: "Ursinho Marinheiro", image: "assets/caixa-sushi-ursinho-marinheiro.png" },
      { id: "branca-de-neve", name: "Branca de Neve", image: "assets/caixa-sushi-branca-de-neve.png" },
      { id: "patrulha-canina", name: "Patrulha Canina", image: "assets/caixa-sushi-patrulha-canina.png" }
    ]
  },
  {
    id: "caixa-bala", name: "Caixa Bala",
    description: "Uma lembrancinha colorida para completar a decoração da sua festa.",
    price: 7, tag: "R$ 7,00",
    variants: [
      { id: "galinha-pintadinha", name: "Galinha Pintadinha", image: "assets/caixa-bala-galinha-pintadinha.png" },
      { id: "minnie", name: "Minnie", image: "assets/caixa-bala-minnie.png" },
      { id: "borboleta", name: "Borboleta", image: "assets/caixa-bala-borboleta.png" }
    ]
  },
  {
    id: "caixa-almofada", name: "Caixa Almofada",
    description: "Uma lembrancinha delicada, com opção de alça para personalizar.",
    price: 7, tag: "R$ 7,00", options: ["Com alça", "Sem alça"],
    variants: [
      { id: "sortidos", name: "Sortidos", image: "assets/caixa-almofada-sortidos.png" },
      { id: "menina", name: "Menina", image: "assets/caixa-almofada-menina.png" },
      { id: "tigre", name: "Tigre", image: "assets/caixa-almofada-tigre.png" }
    ]
  },
  {
    id: "saco-zip-lock", name: "Saco Zip Lock personalizado",
    description: "Uma embalagem prática e personalizada para presentear com carinho.",
    price: 7.5, tag: "R$ 7,50", options: ["Com chaveiro", "Sem chaveiro"],
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
    id: "embalagem-cheetos", name: "Embalagem de Cheetos personalizada",
    description: "Uma embalagem divertida para deixar a comemoração ainda mais especial.",
    price: 5.5, tag: "R$ 5,50",
    variants: [
      { id: "daniel", name: "Daniel", image: "assets/embalagem-cheetos-daniel.png" },
      { id: "sonic", name: "Sonic", image: "assets/embalagem-cheetos-sonic.png" },
      { id: "minnie", name: "Minnie", image: "assets/embalagem-cheetos-minnie.png" },
      { id: "marquinhos-herois", name: "Marquinhos / Heróis", image: "assets/embalagem-cheetos-marquinhos-herois.png" }
    ]
  },
  {
    id: "embalagem-fini", name: "Embalagem de Fini personalizada",
    description: "Um mimo colorido para adoçar festas, presentes e celebrações.",
    price: 3, tag: "R$ 3,00",
    variants: [
      { id: "stitch", name: "Stitch", image: "assets/embalagem-fini-stitch.png" },
      { id: "toy-story", name: "Toy Story", image: "assets/embalagem-fini-toy-story.png" },
      { id: "menino-tiago", name: "Menino / Tiago", image: "assets/embalagem-fini-menino-tiago.png" }
    ]
  },
  {
    id: "convite-interativo", name: "Convite Interativo",
    description: "Um convite digital especial, com opção de incluir vídeo na experiência.",
    price: 39.99, tag: "R$ 39,99",
    options: ["Sem vídeo", "Com vídeo"],
    optionPrices: { "Sem vídeo": 0, "Com vídeo": 25 },
    variants: [
      { id: "pokemon-bruno", name: "Pokémon / Bruno", image: "assets/convite-interativo-pokemon-bruno.png" },
      { id: "safari-gabriel", name: "Safari / Gabriel", image: "assets/convite-interativo-safari-gabriel.png" },
      { id: "branca-neve-catarina", name: "Branca de Neve / Catarina", image: "assets/convite-interativo-branca-neve-catarina.png" }
    ]
  },
  {
    id: "cartela-adesivos", name: "Cartela de adesivos personalizados",
    description: "Adesivos para personalizar embalagens, presentes e cada detalhe da sua marca.",
    price: 20, tag: "R$ 20,00",
    variants: [
      { id: "sua-marca", name: "Sua marca", image: "assets/cartela-adesivos-sua-marca.png" },
      { id: "atelie-haste", name: "Ateliê / haste", image: "assets/cartela-adesivos-atelie-haste.png" },
      { id: "alice", name: "Alice", image: "assets/cartela-adesivos-alice.png" }
    ]
  },
  {
    id: "adesivo-rotulo-garrafa", name: "Adesivo rótulo para garrafa",
    description: "Rótulo personalizado para garrafas de suco, água ou refrigerante.",
    price: 2.5, tag: "R$ 2,50",
    variants: [
      { id: "hot-wheels-miguel", name: "Hot Wheels / Miguel", image: "assets/adesivo-rotulo-hot-wheels-miguel.png" },
      { id: "ursinhos-maysa", name: "Ursinhos / Maysa", image: "assets/adesivo-rotulo-ursinhos-maysa.png" }
    ]
  },
  {
    id: "etiqueta-escolar-cartela", name: "Etiqueta escolar — cartela",
    description: "Cartela de etiquetas para identificar materiais, cadernos e pertences.",
    price: 12, tag: "R$ 12,00",
    variants: [
      { id: "patrulha-canina-arthur-miguel", name: "Patrulha Canina / Arthur Miguel", image: "assets/etiqueta-escolar-patrulha-canina-arthur-miguel.png" },
      { id: "toy-story", name: "Toy Story", image: "assets/etiqueta-escolar-toy-story.png" },
      { id: "sortida", name: "Cartela sortida", image: "assets/etiqueta-escolar-sortida.png" }
    ]
  },
  {
    id: "centro-de-mesa", name: "Centro de mesa",
    description: "Peça decorativa personalizada para completar a mesa da sua comemoração.",
    price: 12, tag: "R$ 12,00",
    variants: [
      { id: "homem-aranha-theo", name: "Homem-Aranha / Théo", image: "assets/centro-de-mesa-homem-aranha-theo.png" },
      { id: "bluey-arthur", name: "Bluey / Arthur", image: "assets/centro-de-mesa-bluey-arthur.png" },
      { id: "sonic-teo", name: "Sonic / Téo", image: "assets/centro-de-mesa-sonic-teo.png" }
    ]
  },
  {
    id: "plaquinha-centro-de-mesa", name: "Plaquinha de centro de mesa",
    description: "Plaquinha personalizada para completar a decoração da mesa.",
    price: 5, tag: "R$ 5,00",
    variants: [
      { id: "safari-henrique", name: "Safari / Henrique", image: "assets/plaquinha-centro-safari-henrique.png" },
      { id: "homem-aranha-eduardo", name: "Homem-Aranha / Eduardo", image: "assets/plaquinha-centro-homem-aranha-eduardo.png" },
      { id: "fazendinha", name: "Fazendinha", image: "assets/plaquinha-centro-fazendinha.png" }
    ]
  },
  {
    id: "livrinho-colorir", name: "Livrinho de colorir personalizado",
    description: "Um livrinho divertido para as crianças criarem e brincarem.",
    price: 6.5, tag: "R$ 6,50",
    variants: [
      { id: "alice", name: "Alice", image: "assets/livrinho-colorir-alice.png" },
      { id: "dinossauros", name: "Dinossauros", image: "assets/livrinho-colorir-dinossauros.png" },
      { id: "turma-monica", name: "Turma da Mônica", image: "assets/livrinho-colorir-turma-monica.png" }
    ]
  },
  {
    id: "cards-colorir", name: "Cards de colorir",
    description: "Pacote com 3 cards para colorir e deixar a brincadeira ainda mais divertida.",
    price: 7, tag: "R$ 7,00",
    variants: [
      { id: "fazendinha", name: "Fazendinha", image: "assets/cards-colorir-fazendinha.png" },
      { id: "frozen", name: "Frozen", image: "assets/cards-colorir-frozen.png" },
      { id: "hello-kitty", name: "Hello Kitty", image: "assets/cards-colorir-hello-kitty.png" }
    ]
  },
  {
    id: "sacolinha-personalizada-g", name: "Sacolinha personalizada G",
    description: "Sacolinha grande personalizada para presentear com carinho.",
    price: 10, tag: "R$ 10,00",
    variants: [
      { id: "dinossauros-theo", name: "Dinossauros / Theo", image: "assets/sacolinha-g-dinossauros-theo.png" },
      { id: "alice", name: "Alice", image: "assets/sacolinha-g-alice.png" },
      { id: "homem-aranha-joao", name: "Homem-Aranha / João Gabriel", image: "assets/sacolinha-g-homem-aranha-joao.png" }
    ]
  },
  {
    id: "sacolinha-personalizada-p", name: "Sacolinha personalizada P",
    description: "Sacolinha pequena personalizada para lembrancinhas especiais.",
    price: 7, tag: "R$ 7,00",
    variants: [
      { id: "arthur", name: "Arthur", image: "assets/sacolinha-p-arthur.png" },
      { id: "safari-emanuel", name: "Safari / Emanuel", image: "assets/sacolinha-p-safari-emanuel.png" },
      { id: "bluey-valentina", name: "Bluey / Valentina", image: "assets/sacolinha-p-bluey-valentina.png" }
    ]
  }
];
const money = value => value ? value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "Preço sob consulta";
const state = { cart: {}, featuredIndex: 0 };
const $ = selector => document.querySelector(selector);
const productById = id => products.find(product => product.id === id);
const variantById = (product, id) => product.variants.find(variant => variant.id === id);

function productCard(product, suffix) {
  const variant = product.variants[0];
  const optionLabel = product.id === "saco-zip-lock" ? " do chaveiro" : product.id === "convite-interativo" ? " do vídeo" : " da alça";
  const options = product.options ? `<label class="variant-label" for="option-${product.id}-${suffix}">Opção${optionLabel}</label><select class="variant-select" id="option-${product.id}-${suffix}" data-option-select>${product.options.map(option => `<option value="${option}">${option}${product.optionPrices ? (product.optionPrices[option] ? ` (+ ${money(product.optionPrices[option])})` : " (sem adicional)") : ""}</option>`).join("")}</select>` : "";
  return `<article class="product-card" data-product-id="${product.id}"><div class="product-image"><span class="product-tag">${product.tag}</span><img class="product-photo" src="${variant.image}" alt="${product.name} - ${variant.name} (tema ilustrativo)" loading="lazy"></div><div class="product-body"><h3>${product.name}</h3><p>${product.description}</p><span class="illustrative-note">Temas ilustrativos — personalize como quiser</span><label class="variant-label" for="variant-${product.id}-${suffix}">Referência visual</label><select class="variant-select" id="variant-${product.id}-${suffix}" data-variant-select>${product.variants.map(item => `<option value="${item.id}">${item.name} (ilustrativo)</option>`).join("")}</select>${options}<label class="variant-label theme-label" for="theme-${product.id}-${suffix}">Qual tema você deseja?</label><input class="theme-input" id="theme-${product.id}-${suffix}" data-theme-input type="text" required placeholder="Ex.: Patrulha Canina, floral, safari..."><div class="product-meta"><span class="price">${money(product.price)}</span><button class="add-button" type="button" data-add="${product.id}" aria-label="Adicionar ${product.name} ao carrinho">+</button></div></div></article>`;
}
function renderProducts() {
  $("#product-grid").innerHTML = products.map((item, index) => productCard(item, `catalog-${index}`)).join("");
  $("#featured-products").innerHTML = products.map((item, index) => productCard(item, `featured-${index}`)).join("");
}
function cartItems() {
  return Object.entries(state.cart).map(([key, quantity]) => {
    const [productId, variantId, option, encodedTheme] = key.split(":");
    const itemProduct = productById(productId);
    return { key, product: itemProduct, variant: itemProduct && variantById(itemProduct, variantId), option, theme: decodeURIComponent(encodedTheme || ""), quantity };
  }).filter(item => item.product && item.variant);
}
function cartCount() { return cartItems().reduce((sum, item) => sum + item.quantity, 0); }
function cartTotal() { return cartItems().reduce((sum, item) => sum + item.product.price * item.quantity, 0); }
function optionPrice(item) { return item.product.optionPrices?.[item.option] || 0; }
function itemUnitTotal(item) { return item.product.price + optionPrice(item); }
function itemTotal(item) { return itemUnitTotal(item) * item.quantity; }
function renderCart() {
  const items = cartItems();
  const total = items.reduce((sum, item) => sum + itemTotal(item), 0);
  const missing = Math.max(0, MINIMUM_ORDER - total);
  $("#cart-count").textContent = cartCount();
  $("#cart-count").setAttribute("aria-label", `${cartCount()} ${cartCount() === 1 ? "item" : "itens"}`);
  $("#cart-content").innerHTML = items.length ? items.map(item => `<div class="cart-item"><img src="${item.variant.image}" alt=""><div class="cart-item-info"><strong>${item.product.name}</strong><small>Referência: ${item.variant.name} · Tema: ${item.theme}${item.option ? ` · ${item.option}` : ""}<br>Base: ${money(item.product.price)}${optionPrice(item) ? ` + adicional: ${money(optionPrice(item))}` : ""}<br><strong>Total unitário: ${money(itemUnitTotal(item))}</strong></small><div class="quantity-control"><button type="button" data-decrease="${item.key}" aria-label="Diminuir quantidade">−</button><span>${item.quantity}</span><button type="button" data-increase="${item.key}" aria-label="Aumentar quantidade">+</button></div></div><button class="remove-item" type="button" data-remove="${item.key}" aria-label="Remover ${item.variant.name}">×</button></div>`).join("") : `<div class="empty-cart"><strong>Seu carrinho está vazio</strong><p>Escolha um modelo para começar seu pedido.</p></div>`;
  $("#cart-footer").innerHTML = `<div class="subtotal"><span>Subtotal</span><span>${money(total)}</span></div><div class="minimum-order ${missing ? "is-pending" : "is-met"}">${missing ? `Faltam ${money(missing)} para liberar o pedido` : "Pedido mínimo atingido — você pode enviar!"}</div><button class="whatsapp-button" id="send-whatsapp" type="button" ${total >= MINIMUM_ORDER ? "" : "disabled"}>${total >= MINIMUM_ORDER ? "Finalizar pelo WhatsApp ↗" : `Adicione mais ${money(missing)}`}</button>`;
}
function changeQuantity(key, delta) { state.cart[key] = (state.cart[key] || 0) + delta; if (state.cart[key] <= 0) delete state.cart[key]; renderCart(); }
function updateCardImage(select) {
  const card = select.closest(".product-card");
  const itemProduct = productById(card.dataset.productId);
  const variant = variantById(itemProduct, select.value);
  const image = card.querySelector(".product-photo");
  image.src = variant.image; image.alt = `${itemProduct.name} - ${variant.name}`;
}
function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200); }
function toggleCart(open) { const drawer = $("#cart-drawer"); drawer.classList.toggle("is-open", open); drawer.setAttribute("aria-hidden", String(!open)); $("#open-cart").setAttribute("aria-expanded", String(open)); $("#cart-backdrop").hidden = !open; if (open) $("#close-cart").focus(); }
function sendToWhatsApp() {
  const totalValue = cartItems().reduce((sum, item) => sum + itemTotal(item), 0);
  if (totalValue < MINIMUM_ORDER) {
    showToast(`O pedido mínimo é ${money(MINIMUM_ORDER)}`);
    return;
  }
  const lines = cartItems().map(item => `• ${item.quantity}x ${item.product.name} (tema: ${item.theme}; referência: ${item.variant.name}${item.option ? `; ${item.option}` : ""}) — base ${money(item.product.price)}${optionPrice(item) ? ` + adicional ${money(optionPrice(item))}` : ""} = ${money(itemTotal(item))}`);
  const total = totalValue ? money(totalValue) : "Preço sob consulta";
  const message = `Olá, Studio Raquel! Quero fazer um pedido:\n\n${lines.join("\n")}\n\nTotal: ${total}\n\nPodemos conversar sobre a personalização e o valor?`;
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
  if (target.dataset.add) {
    const card = target.closest(".product-card");
    const itemProduct = productById(target.dataset.add);
    const variant = variantById(itemProduct, card.querySelector("[data-variant-select]").value);
    const themeInput = card.querySelector("[data-theme-input]");
    const theme = themeInput.value.trim();
    if (!theme) {
      themeInput.focus();
      showToast("Informe o tema desejado para adicionar");
      return;
    }
    const option = card.querySelector("[data-option-select]")?.value;
    changeQuantity(`${itemProduct.id}:${variant.id}:${option || ""}:${encodeURIComponent(theme)}`, 1);
    showToast(`${itemProduct.name} adicionado ao carrinho`);
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
document.addEventListener("change", event => { if (event.target.matches("[data-variant-select]")) updateCardImage(event.target); });
$("#cart-backdrop").addEventListener("click", () => toggleCart(false));
renderProducts(); renderCart(); $("#current-year").textContent = new Date().getFullYear();
window.addEventListener("resize", () => { state.featuredIndex = 0; moveCarousel(0); });
