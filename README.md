Studio Raquel — papelaria personalizada

Catálogo estático, responsivo e mobile-first para Caixa Milk, Caixa Pirâmide, Caixa Maletinha – Modelo 1, Caixa Maletinha – Modelo 2, Caixa Canudo, Caixa Sushi, Caixa Bala, Caixa Almofada, Saco Zip Lock personalizado, Embalagem de Cheetos personalizada, Embalagem de Fini personalizada, Convite Interativo, Cartela de adesivos personalizados, Adesivo rótulo para garrafa, Etiqueta escolar — cartela, Centro de mesa, Plaquinha de centro de mesa, Livrinho de colorir personalizado, Cards de colorir, Sacolinha personalizada G e Sacolinha personalizada P, com destaques, seleção de modelo, opções extras, carrinho lateral e finalização do pedido pelo WhatsApp. A implementação usa apenas HTML, CSS e JavaScript, sem build ou dependências externas.

Personalização

Os produtos e suas variantes estão no início de script.js, no array products. Todas as fotos e nomes de variantes são referências ilustrativas: o cliente pode pedir qualquer tema. Cada card exige o preenchimento de “Qual tema você deseja?” antes de adicionar, e o tema informado é levado ao carrinho e ao WhatsApp. A Caixa Almofada exige “Com alça” ou “Sem alça”. O Saco Zip Lock tem preço base de R$ 7,50 e oferece “Sem chaveiro” (sem adicional) ou “Com chaveiro” (+ R$ 2,50), totalizando R$ 10,00 com chaveiro. A Embalagem de Cheetos custa R$ 5,50, a Embalagem de Fini custa R$ 3,00, o Convite Interativo tem base de R$ 39,99 e oferece “Sem vídeo” ou “Com vídeo” (+ R$ 25,00), a Cartela de adesivos custa R$ 20,00, o Adesivo rótulo para garrafa custa R$ 2,50, a Etiqueta escolar — cartela custa R$ 12,00, o Centro de mesa custa R$ 12,00, a Plaquinha de centro de mesa custa R$ 5,00, o Livrinho de colorir custa R$ 6,50, o pacote de Cards de colorir custa R$ 7,00 e contém 3 cards para colorir, a Sacolinha personalizada G custa R$ 10,00 e a Sacolinha personalizada P custa R$ 7,00. O rótulo é indicado para garrafas de suco, água ou refrigerante. O carrinho e o WhatsApp mostram base, adicional e total separadamente quando aplicável. Os demais preços permanecem: Caixa Milk, Caixa Pirâmide, Caixa Canudo, Caixa Sushi, Caixa Bala e Caixa Almofada por R$ 7,00; Caixa Maletinha – Modelo 1 e Modelo 2 por R$ 8,00. Substitua nomes, imagens e o valor de price em reais (por exemplo, 12.5) quando necessário. Com price: 0, a interface exibe “Preço sob consulta”.

O número usado pelo botão do WhatsApp está na constante WHATSAPP_NUMBER (formato internacional, apenas números).

Pedido mínimo

O envio pelo WhatsApp é liberado quando o subtotal do carrinho chega a R$ 40,00. Abaixo desse valor, o carrinho informa quanto falta e mantém o botão desabilitado; qualquer combinação de produtos é aceita, desde que o mínimo seja atingido.

As imagens enviadas pela cliente estão em assets/: logo-banner.png, três imagens de cada produto. A logo é exibida no hero sem distorção.

Publicação no GitHub Pages

Envie os arquivos para um repositório no GitHub.
Em Settings → Pages, escolha Deploy from a branch, selecione main e a pasta / (root).
Salve e aguarde a publicação. O arquivo index.html será usado como entrada.

Não é necessário Azure para esta versão estática. O site também pode ser publicado em qualquer hospedagem de arquivos estáticos.
