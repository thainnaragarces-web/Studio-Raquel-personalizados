/* Configurações da Loja */
const WHATSAPP_NUMBER = "5521967693490";
const MINIMUM_ORDER = 40;
const SHIPPING_FEE = 5.00;
const GOOGLE_SCRIPT_URL = "https://n8n.raquelpersonalizados.studio/webhook/studio-raquel-pedido";

// Link do Mercado Pago
const MERCADO_PAGO_LINK = "https://link.mercadopago.com.br/raquelpersonalizadoo"; 

const products = [
  {
    id: "caneca-acrilica-350ml",
    name: "Caneca Acrílica 350ml Rosqueável",
    description: "Caneca acrílica rosqueável personalizada no tema da sua festa.",
    price: 9.90,
    tag: "A partir de R$ 7,90",
    minQuantity: 20,
    priceTiers: [
      { min: 50, price: 7.90 },
      { min: 30, price: 8.90 },
      { min: 20, price: 9.90 }
    ],
    presetKits: [20, 30, 50],
    variants: [
      { id: "fazendinha-pedro", name: "Fazendinha do Pedro", image: "assets/caneca-acrilica-350ml-rosqueavel-fazendinha-do-pedro.png" },
      { id: "para-colorir", name: "Para Colorir", image: "assets/caneca-acrilica-350ml-rosqueavel-para-colorir.png" },
      { id: "tabela-cores", name: "Tabela de Cores", image: "assets/caneca-acrilica-350ml-rosqueavel-tabela-de-cores.png" },
      { id: "medidas", name: "Medidas / Dimensões", image: "assets/caneca-acrilica-350ml-rosqueavel-medidas-dimensoes.png" }
    ]
  },
  {
    id: "copo-long-drink-350ml",
    name: "Copo Long Drink 350ml",
    description: "Copo Long Drink personalizado DTF UV em alta resolução.",
    price: 7.50,
    tag: "A partir de R$ 5,50",
    minQuantity: 20,
    priceTiers: [
      { min: 100, price: 5.50 },
      { min: 50, price: 6.50 },
      { min: 20, price: 7.50 }
    ],
    presetKits: [20, 50, 100],
    variants: [
      { id: "maria-clara", name: "Maria Clara 13 anos", image: "assets/copo-long-drink-350ml-dtf-uv-maria-clara-13-anos.png" },
      { id: "boteco-vagner", name: "Boteco do Vagner", image: "assets/copo-long-drink-350ml-dtf-uv-boteco-do-vagner.png" },
      { id: "minnie-mario", name: "Minnie / Kalzone / Mario", image: "assets/copo-long-drink-350ml-dtf-uv-minnie-kalzone-mario.png" }
    ]
  },
  {
    id: "copo-twister-300ml",
    name: "Copo Twister 300ml",
    description: "Copo Twister personalizado com tampa e canudo.",
    price: 8.00,
    tag: "A partir de R$ 6,00",
    minQuantity: 20,
    priceTiers: [
      { min: 100, price: 6.00 },
      { min: 50, price: 7.00 },
      { min: 20, price: 8.00 }
    ],
    presetKits: [20, 50, 100],
    variants: [
      { id: "baby-looney-levi", name: "Baby Looney Tunes / Levi", image: "assets/copo-twister-300ml-dtf-uv-baby-looney-tunes-levi.png" },
      { id: "baby-looney-davi", name: "Baby Looney Tunes / Davi", image: "assets/copo-twister-300ml-dtf-uv-baby-looney-tunes-davi.png" },
      { id: "baby-looney-mariah", name: "Baby Looney Tunes / Mariah", image: "assets/copo-twister-300ml-dtf-uv-baby-looney-tunes-mariah.png" }
    ]
  },
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
    id: "adesivo-cofrinho",
    name: "Adesivo para Cofrinho personalizado",
    description: "Rótulo adesivo fotográfico em alta resolução para cofrinhos de papelão ou plástico (tamanho padrão 20x9,5cm).",
    price: 3,
    tag: "R$ 3,00",
    variants: [
      { id: "minions", name: "Minions / Beatriz", image: "assets/adesivo-cofrinho-minions.png" },
      { id: "safari", name: "Safari / Arthur", image: "assets/adesivo-cofrinho-safari.png" },
      { id: "patrulha-canina", name: "Patrulha Canina", image: "assets/adesivo-cofrinho-patrulha-canina.png" }
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
    id: "bolinha-natal-personalizada",
    name: "Bolinha de Natal Personalizada",
    description: "Bolinha acrílica transparente (7cm) personalizada com foto em papel fotográfico, laço vermelho com dourado e acabamento interno com efeito neve.",
    price: 9.9,
    tag: "R$ 9,90",
    options: ["1 Unidade (Avulsa)", "Kit com 4 Unidades", "Kit com 6 Unidades", "Kit com 10 Unidades"],
    optionPrices: {
      "1 Unidade (Avulsa)": 0,
      "Kit com 4 Unidades": 28.1,
      "Kit com 6 Unidades": 40.1,
      "Kit com 10 Unidades": 65.1
    },
    variants: [
      { id: "kit-arvore", name: "Kit Árvore de Natal", image: "assets/bolinha-natal-kit.png" },
      { id: "cenario-presente", name: "Cenário Natalino", image: "assets/bolinha-natal-cenario.png" }
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
      { id: "safari", name: "Safari / Emanuel", image: "assets/safari-p-safari.png" },
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

// LISTA ESPECÍFICA PARA A SEÇÃO MAIS VENDIDOS (Apenas 4 itens)
const FEATURED_IDS = [
  "caneca-acrilica-350ml",
  "copo-long-drink-350ml",
  "copo-twister-300ml",
  "sacolinha-personalizada-p"
];

const money = value => Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const state = { cart: {}, featuredIndex: 0, currentModalProduct: null, currentModalVariantIndex: 0, currentModalSelectedQty: 1 };
const $ = selector => document.querySelector(selector);
const productById = id => products.find(product => product.id === id);

// FUNÇÃO PARA CALCULAR O PREÇO UNITÁRIO CONFORME A QUANTIDADE
function getUnitPrice(product, qty) {
  if (product.priceTiers && product.priceTiers.length > 0) {
    for (const tier of product.priceTiers) {
      if (qty >= tier.min) {
        return tier.price;
      }
    }
  }
  return product.price;
}

/* CRIAÇÃO DO CARD */
function createProductCard(product) {
  const variant = product.variants[0];
  return `
    <article class="modern-product-card" data-open-product="${product.id}">
      <div class="card-img-container">
        <img src="${variant.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-details-row">
        <span class="card-title-lbl">${product.name}</span>
        <span class="card-price-badge">${product.tag || money(product.price)}</span>
      </div>
    </article>
  `;
}

function renderSite() {
  const grid = $("#product-grid");
  const feat = $("#featured-products");
  
  if (grid) grid.innerHTML = products.map(createProductCard).join("");
  
  if (feat) {
    const featuredList = products.filter(p => FEATURED_IDS.includes(p.id));
    feat.innerHTML = featuredList.map(createProductCard).join("");
  }
}

/* INTERSECTION OBSERVER PARA O EFEITO DE SUBIDA */
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

/* MODAL DO PRODUTO COM SELETOR TIPO MERCADO LIVRE */
function openModal(productId) {
  const product = productById(productId);
  if (!product) return;

  state.currentModalProduct = product;
  state.currentModalVariantIndex = 0;
  state.currentModalSelectedQty = product.minQuantity || 1;

  const totalVariants = product.variants.length;
  const optionLabel = product.id === "saco-zip-lock" ? " do chaveiro" : product.id === "convite-interativo" ? " do vídeo" : product.id === "bolinha-natal-personalizada" ? " da quantidade" : " da alça";
  
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

  // SELETOR DE QUANTIDADE
  let qtySelectorHtml = "";
  if (product.priceTiers && product.priceTiers.length > 0) {
    const minQtd = product.minQuantity || 20;
    const maxPreset = product.presetKits ? Math.max(...product.presetKits) : 50;

    let dropdownItems = "";
    if (product.presetKits) {
      product.presetKits.forEach(kitQtd => {
        const uPrice = getUnitPrice(product, kitQtd);
        dropdownItems += `<div class="qty-dropdown-item" data-select-qty="${kitQtd}">${kitQtd} unidades <small style="color:#666; font-size:11px;">(${money(uPrice)} un.)</small></div>`;
      });
    }
    dropdownItems += `<div class="qty-dropdown-item custom-trigger" id="trigger-custom-qty">Mais de ${maxPreset} unidades</div>`;

    qtySelectorHtml = `
      <div class="qty-picker-container" style="margin: 15px 0;">
        <label style="font-weight: bold; font-size: 13px; display: block; margin-bottom: 5px;">Quantidade (Pedido mínimo: ${minQtd} un.):</label>
        
        <div class="custom-qty-dropdown" style="position: relative; width: 100%;">
          <button type="button" id="qty-dropdown-btn" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; background: #fff; text-align: left; font-weight: bold; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
            <span id="qty-btn-label">${state.currentModalSelectedQty} unidades</span>
            <span style="font-size: 10px; color: #666;">▼</span>
          </button>

          <div id="qty-dropdown-menu" class="qty-dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; right: 0; background: #fff; border: 1px solid #ccc; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 100; margin-top: 4px; padding: 6px 0;">
            ${dropdownItems}
            
            <div id="custom-qty-box" style="display: none; padding: 10px; border-top: 1px solid #eee; background: #f9f9f9;">
              <label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 4px;">Digite a quantidade desejada:</label>
              <div style="display: flex; gap: 6px;">
                <input type="number" id="input-custom-qty-val" min="${minQtd}" value="${state.currentModalSelectedQty}" style="flex: 1; padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
                <button type="button" id="btn-apply-custom-qty" style="background: #8a2be2; color: #fff; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer;">Aplicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    qtySelectorHtml = `
      <div class="qty-picker" style="display:inline-flex; align-items:center; border:1px solid #ccc; border-radius:6px; overflow:hidden;">
        <button type="button" data-modal-qty="-1" style="padding:6px 12px; border:none; background:#eee;">−</button>
        <input type="number" id="modal-qty-val" value="1" min="1" readonly style="width:40px; text-align:center; border:none;">
        <button type="button" data-modal-qty="1" style="padding:6px 12px; border:none; background:#eee;">+</button>
      </div>
    `;
  }

  const initialUnitPrice = getUnitPrice(product, state.currentModalSelectedQty);
  const initialTotal = initialUnitPrice * state.currentModalSelectedQty;

  $("#product-modal-body").innerHTML = `
    <div class="modal-gallery" id="modal-gallery-area">
      <img id="modal-main-img" src="${product.variants[0].image}" alt="${product.name}">
      ${arrowsHtml}
    </div>
    <div class="modal-info-body">
      <h2 class="modal-product-title">${product.name}</h2>
      <p class="modal-product-desc">${product.description}</p>
      
      ${optionsHtml}
      ${qtySelectorHtml}

      <div class="modal-action-bar" style="margin-top: 15px;">
        <div class="price-display-box">
          <span class="price" id="modal-item-price" style="font-size: 18px; font-weight: bold; color: #8a2be2;">${money(initialTotal)}</span>
          <small id="modal-unit-price-lbl" style="display: block; font-size: 11px; color: #666;">(${money(initialUnitPrice)} a unidade)</small>
        </div>

        <button class="btn-add-cart-large" id="modal-confirm-add" type="button" style="padding: 10px 20px; background: #8a2be2; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
          Adicionar
        </button>
      </div>

      <div class="share-product-container" style="margin-top: 15px; text-align: center;">
        <button type="button" id="share-product-btn" class="btn-share-product" style="background: transparent; border: 1px solid #128c7e; color: #128c7e; padding: 8px 16px; border-radius: 20px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
          📲 Compartilhar este produto no WhatsApp
        </button>
      </div>
    </div>
  `;

  $("#product-modal").classList.add("is-open");
  $("#product-modal-backdrop").hidden = false;
  setupGallerySwipe();
  setupDropdownEvents();
}

function updateModalPrice() {
  const product = state.currentModalProduct;
  if (!product) return;

  const qty = state.currentModalSelectedQty;
  const unitPrice = getUnitPrice(product, qty);
  const total = unitPrice * qty;

  const priceEl = $("#modal-item-price");
  const unitLblEl = $("#modal-unit-price-lbl");

  if (priceEl) priceEl.textContent = money(total);
  if (unitLblEl) unitLblEl.textContent = `(${money(unitPrice)} a unidade)`;
}

function setupDropdownEvents() {
  const btn = $("#qty-dropdown-btn");
  const menu = $("#qty-dropdown-menu");
  const customTrigger = $("#trigger-custom-qty");
  const customBox = $("#custom-qty-box");
  const applyBtn = $("#btn-apply-custom-qty");
  const customInput = $("#input-custom-qty-val");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  });

  document.querySelectorAll(".qty-dropdown-item[data-select-qty]").forEach(item => {
    item.addEventListener("click", e => {
      const qty = parseInt(e.currentTarget.dataset.selectQty, 10);
      state.currentModalSelectedQty = qty;
      $("#qty-btn-label").textContent = `${qty} unidades`;
      menu.style.display = "none";
      if (customBox) customBox.style.display = "none";
      updateModalPrice();
    });
  });

  if (customTrigger && customBox) {
    customTrigger.addEventListener("click", () => {
      customBox.style.display = "block";
    });
  }

  if (applyBtn && customInput) {
    applyBtn.addEventListener("click", () => {
      const product = state.currentModalProduct;
      const minQtd = product ? (product.minQuantity || 20) : 20;
      let val = parseInt(customInput.value, 10);

      if (isNaN(val) || val < minQtd) {
        showToast(`O pedido mínimo para este produto é de ${minQtd} unidades.`);
        val = minQtd;
        customInput.value = minQtd;
      }

      state.currentModalSelectedQty = val;
      $("#qty-btn-label").textContent = `${val} unidades`;
      menu.style.display = "none";
      updateModalPrice();
    });
  }
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

/* COMPARTILHAMENTO DE PRODUTO ISOLADO */
function shareProductWhatsApp() {
  const product = state.currentModalProduct;
  if (!product) return;

  const productUrl = `${window.location.origin}${window.location.pathname}?produto=${product.id}`;
  const shareText = `Olha esse item incrível do Studio Raquel Personalizados ✨:\n\n*${product.name}*\n${product.description}\n\nConfira aqui: ${productUrl}`;

  if (navigator.share) {
    navigator.share({
      title: product.name,
      text: shareText,
      url: productUrl
    }).catch(() => {});
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  }
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

/* CARRINHO, CHECKOUT E MERCADO PAGO */
function cartItems() {
  return Object.entries(state.cart).map(([key, quantity]) => {
    const [productId, variantIndexStr, option] = key.split(":");
    const itemProduct = productById(productId);
    const variantIndex = parseInt(variantIndexStr || "0", 10);
    const currentVariant = itemProduct && itemProduct.variants[variantIndex] ? itemProduct.variants[variantIndex] : itemProduct?.variants[0];
    return { key, product: itemProduct, variant: currentVariant, option, quantity };
  }).filter(item => item.product && item.variant);
}

function cartCount() { return cartItems().reduce((sum, item) => sum + item.quantity, 0); }
function optionPrice(item) { return item.product.optionPrices?.[item.option] || 0; }
function itemUnitTotal(item) { return getUnitPrice(item.product, item.quantity) + optionPrice(item); }
function itemTotal(item) { return itemUnitTotal(item) * item.quantity; }

function renderCart() {
  const items = cartItems();
  const subtotal = items.reduce((sum, item) => sum + itemTotal(item), 0);
  const shippingMode = $("#order-shipping") ? $("#order-shipping").value : "Retirada no Local";
  const shippingFee = shippingMode === "Envio" ? SHIPPING_FEE : 0;
  const grandTotal = subtotal + shippingFee;
  const missing = Math.max(0, MINIMUM_ORDER - subtotal);

  $("#cart-count").textContent = cartCount();

  $("#cart-content").innerHTML = items.length ? items.map(item => `
    <div class="cart-item">
      <img src="${item.variant.image}" alt="">
      <div class="cart-item-info">
        <strong>${item.product.name}</strong>
        <small>${item.option ? `Opção: ${item.option}<br>` : ""}
        Unit.: ${money(itemUnitTotal(item))} · Subtotal: ${money(itemTotal(item))}</small>
        <div style="display:flex; gap:6px; margin-top:4px; align-items:center;">
          <button type="button" data-decrease="${item.key}" style="width:24px; height:24px;">−</button>
          <span>${item.quantity} un.</span>
          <button type="button" data-increase="${item.key}" style="width:24px; height:24px;">+</button>
        </div>
      </div>
      <button type="button" data-remove="${item.key}" style="background:none; border:none; color:#999; font-size:18px;">✕</button>
    </div>
  `).join("") : `<div style="text-align:center; color:var(--muted); padding:30px 0;">Seu carrinho está vazio</div>`;

  const checkoutFieldsContainer = $("#cart-checkout-fields");
  if (checkoutFieldsContainer) {
    if (items.length > 0) {
      checkoutFieldsContainer.style.display = "block";
      checkoutFieldsContainer.innerHTML = `
        <div class="checkout-form-box" style="margin-top: 15px; padding: 12px; background: #fdf8f8; border-radius: 8px; border: 1px solid #f2e2e2;">
          <h3 style="font-size: 14px; margin-bottom: 10px; color: #8a2be2;">Dados para Personalização & Envio</h3>
          
          <div class="cart-field" style="margin-bottom: 8px;">
            <label style="font-size: 12px; font-weight: bold;">Seu Nome Completo *</label>
            <input type="text" id="cust-name" placeholder="Ex: Gabriela Souza" required style="width:100%; padding:6px; border:1px solid #ccc; border-radius:4px;">
          </div>

          <div class="cart-field" style="margin-bottom: 8px;">
            <label style="font-size: 12px; font-weight: bold;">WhatsApp / Telefone *</label>
            <input type="tel" id="cust-phone" placeholder="Ex: 21988887777" required style="width:100%; padding:6px; border:1px solid #ccc; border-radius:4px;">
          </div>

          <div class="cart-field" style="margin-bottom: 8px;">
            <label style="font-size: 12px; font-weight: bold;">Tema escolhido *</label>
            <input type="text" id="cust-theme" placeholder="Ex: Patrulha Canina, Minnie Rosa..." required style="width:100%; padding:6px; border:1px solid #ccc; border-radius:4px;">
          </div>

          <div class="cart-field" style="margin-bottom: 8px;">
            <label style="font-size: 12px; font-weight: bold;">Nome e/ou Idade do Aniversariante *</label>
            <input type="text" id="cust-child" placeholder="Ex: Gabi, 2 anos" required style="width:100%; padding:6px; border:1px solid #ccc; border-radius:4px;">
          </div>

          <div class="cart-field" style="margin-bottom: 8px;">
            <label style="font-size: 12px; font-weight: bold;">Data do Pedido/Festa/ Evento *</label>
            <input type="date" id="cust-event-date" required style="width:100%; padding:6px; border:1px solid #ccc; border-radius:4px;">
          </div>

          <div class="cart-field" style="margin-bottom: 8px;">
            <label style="font-size: 12px; font-weight: bold;">Forma de Entrega *</label>
            <select id="order-shipping" style="width:100%; padding:6px; border:1px solid #ccc; border-radius:4px;">
              <option value="Retirada no Local">Retirada no Local (Grátis)</option>
              <option value="Envio">Envio / Correios (+ R$ 5,00)</option>
            </select>
          </div>

          <div class="cart-field" style="margin-bottom: 8px;">
            <label style="font-size: 12px; font-weight: bold;">Forma de Pagamento *</label>
            <select id="pay-method" style="width:100%; padding:6px; border:1px solid #ccc; border-radius:4px;">
              <option value="Pix (Mercado Pago)">⚡ Pix </option>
              <option value="Cartão de Crédito (até 12x)">💳 Cartão de Crédito (até 12x)</option>
              <option value="Finalizar no WhatsApp">💬 Combinar/Finalizar no WhatsApp</option>
            </select>
          </div>

          <div class="checkout-summary-card" style="margin-top: 12px; padding: 10px; background: #fff; border-radius: 6px; border: 1px dashed #b81b37;">
            <div style="display:flex; justify-content:space-between; font-size:12px;">
              <span>Subtotal dos Itens:</span>
              <span>${money(subtotal)}</span>
            </div>
            ${shippingFee > 0 ? `
            <div style="display:flex; justify-content:space-between; font-size:12px; color:#b81b37;">
              <span>Taxa de Entrega:</span>
              <span>+ ${money(shippingFee)}</span>
            </div>` : ''}
            <div style="display:flex; justify-content:space-between; font-size:14px; font-weight:bold; color:#b81b37; margin-top:4px; border-top:1px solid #eee; padding-top:4px;">
              <span>TOTAL DO PEDIDO:</span>
              <span>${money(grandTotal)}</span>
            </div>
          </div>
        </div>
      `;
    } else {
      checkoutFieldsContainer.style.display = "none";
    }
  }

  $("#cart-footer").innerHTML = `
    <div class="minimum-order ${missing ? 'is-pending' : 'is-met'}" style="text-align:center; margin-bottom:8px;">
      ${missing ? `Faltam ${money(missing)} para o mínimo de ${money(MINIMUM_ORDER)}` : "Pedido mínimo atingido!"}
    </div>
    <button class="whatsapp-button" id="process-checkout-btn" type="button" ${subtotal >= MINIMUM_ORDER ? "" : "disabled"}>
      ${subtotal >= MINIMUM_ORDER ? `PAGAR / FINALIZAR PEDIDO (${money(grandTotal)})` : `Adicione mais ${money(missing)}`}
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

/* PROCESSAMENTO DO CHECKOUT (PLANILHA + DIRECIONAMENTO) */
function processCheckout() {
  const custName = $("#cust-name")?.value.trim();
  const custPhone = $("#cust-phone")?.value.trim();
  const custTheme = $("#cust-theme")?.value.trim();
  const custChild = $("#cust-child")?.value.trim();
  const custDate = $("#cust-event-date")?.value;
  const shippingMode = $("#order-shipping")?.value || "Retirada no Local";
  const payMethod = $("#pay-method")?.value || "Finalizar no WhatsApp";

  if (!custName || !custPhone || !custTheme || !custChild || !custDate) {
    showToast("Por favor, preencha todos os campos do checkout!");
    return;
  }

  const items = cartItems();
  const subtotal = items.reduce((sum, item) => sum + itemTotal(item), 0);
  const shippingFee = shippingMode === "Envio" ? SHIPPING_FEE : 0;
  const grandTotal = subtotal + shippingFee;

  const itensFormatados = items.map(item => 
    `• ${item.quantity}x ${item.product.name}${item.option ? ` (${item.option})` : ""} - Unit: ${money(itemUnitTotal(item))}`
  ).join("\n");

  const dadosParaPlanilha = {
    origem: "Site (Carrinho)",
    nome: custName,
    whatsapp: custPhone,
    dataEvento: custDate,
    produtos: itensFormatados || "Nenhum item informado",
    quantidadeItens: cartCount(),
    tema: custTheme,
    nomeIdade: custChild,
    formaEntrega: shippingMode,
    formaPagamento: payMethod,
    total: money(grandTotal)
  };

  // Dispara o envio dos dados para a planilha / n8n
  if (GOOGLE_SCRIPT_URL) {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosParaPlanilha)
    }).catch(err => console.error("Erro ao salvar na planilha:", err));
  }

  showToast("Pedido registrado com sucesso!");

  // REGRA DE DIRECCIONAMENTO SEGUNDO A FORMA DE PAGAMENTO
  if (payMethod.includes("Pix") || payMethod.includes("Cartão")) {
    // Abre APENAS a tela de pagamento do Mercado Pago
    window.open(MERCADO_PAGO_LINK, "_blank");
  } else {
    // Abre APENAS a conversa no WhatsApp para combinar diretamente
    const message = `Olá, Raquel! Fiz um pedido pelo site:

*Cliente:* ${custName}
*WhatsApp:* ${custPhone}
*Aniversariante:* ${custChild}
*Tema da Festa:* ${custTheme}
*Data do Evento:* ${custDate}

*Itens do Pedido:*
${itensFormatados}

*Forma de Entrega:* ${shippingMode}
*Forma de Pagamento:* ${payMethod}
*Total:* ${money(grandTotal)}

Gostaria de confirmar a encomenda e andamento! ✨`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  }
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
    if (input) {
      let val = parseInt(input.value || "1", 10) + parseInt(e.target.dataset.modalQty, 10);
      if (val < 1) val = 1;
      input.value = val;
      state.currentModalSelectedQty = val;
      updateModalPrice();
    }
    return;
  }

  if (e.target.id === "modal-confirm-add") {
    const product = state.currentModalProduct;
    const qty = state.currentModalSelectedQty || parseInt($("#modal-qty-val")?.value || "1", 10);
    const option = $("#modal-option-select")?.value || "";
    const key = `${product.id}:${state.currentModalVariantIndex}:${option}`;

    state.cart[key] = (state.cart[key] || 0) + qty;
    showToast(`${qty}x ${product.name} adicionado!`);
    renderCart();
    closeModal();
    return;
  }

  if (e.target.id === "share-product-btn") {
    shareProductWhatsApp();
    return;
  }

  if (e.target.dataset.increase) {
    const key = e.target.dataset.increase;
    state.cart[key] += 1;
    renderCart();
  }
  if (e.target.dataset.decrease) {
    const key = e.target.dataset.decrease;
    state.cart[key] -= 1;
    if (state.cart[key] <= 0) delete state.cart[key];
    renderCart();
  }
  if (e.target.dataset.remove) {
    delete state.cart[e.target.dataset.remove];
    renderCart();
  }

  if (e.target.id === "open-cart") toggleCart(true);
  if (e.target.id === "close-cart" || e.target.id === "cart-backdrop") toggleCart(false);
  if (e.target.id === "process-checkout-btn") processCheckout();
});

document.addEventListener("change", e => {
  if (e.target.id === "order-shipping") renderCart();
});

/* INICIALIZAÇÃO DA PÁGINA */
renderSite();
renderCart();
startInfiniteCarousel();
setupCarouselSwipe();
setupScrollReveal();
setupSearch();
$("#current-year").textContent = new Date().getFullYear();

const urlParams = new URLSearchParams(window.location.search);
const directProduct = urlParams.get("produto");
if (directProduct && productById(directProduct)) {
  openModal(directProduct);
}