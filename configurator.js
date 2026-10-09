(() => {
  "use strict";

  const spriteX = ["0%", "33.333%", "66.667%", "100%"];
  const spriteY = ["0%", "50%", "100%"];
  const positionStorageKey = "nootechFoodEquipmentPositionsV2";
  const layoutStorageKey = "solutionMapCustomLayoutV1";
  const priceStorageKey = "solutionMapPricesV1";
  const priceVisibilityStorageKey = "solutionMapPricesVisibleV1";
  const savedScenarioStorageKey = "solutionMapSavedScenariosV1";
  const sideMenuStorageKey = "solutionMapSideMenuCollapsedV1";
  const customProductStorageKey = "solutionMapCustomProductsV1";
  const maximumQuantity = 99;
  const defaultBasePrice = 34;
  const includedUserQuantity = 1;
  const defaultAdditionalUserPrice = 15;
  const defaultUnlimitedUserPrice = 37;
  const unlimitedUserStartQuantity = 4;
  const maximumUserQuantity = 99;

  const products = [
    {
      id: "pedenoo",
      number: "01",
      name: "Pedenoo — QR Code na mesa",
      location: "Mesas · pedido pelo celular",
      platform: "Browser no celular do cliente",
      defaultPrice: 40,
      billingGroup: "pedenoo-delivery",
      strengths: ["Não exige instalação de aplicativo", "Pedido direto da mesa", "Reduz espera e chamadas ao garçom"],
      sprite: [1, 1],
      position: { x: 34, y: 61, size: 4.8 }
    },
    {
      id: "meuchef-consumo",
      number: "02",
      name: "MeuChef Consumo",
      location: "Mesas · consulta pelo QR Code",
      platform: "Browser no celular do cliente",
      defaultPrice: 15,
      strengths: ["Consulta o consumo pelo QR Code", "Mostra itens e valores da comanda", "Dá autonomia e transparência ao cliente"],
      sprite: [1, 1],
      position: { x: 42, y: 69, size: 4.8 }
    },
    {
      id: "pedenoo-delivery",
      number: "03",
      name: "Pedenoo.delivery",
      location: "Balcão · pedidos de delivery",
      platform: "Browser",
      maximumQuantity: 1,
      defaultPrice: 40,
      billingGroup: "pedenoo-delivery",
      strengths: ["Canal próprio de delivery", "Pedido chega direto ao balcão", "Reduz dependência de marketplaces"],
      gallery: [
        { src: "assets/telas-produtos/pedenoo.png", alt: "Cardápio online do Pedenoo.delivery" },
        { src: "assets/telas-produtos/pedenoo2.png", alt: "Seleção de produto e adicionais no Pedenoo.delivery" },
        { src: "assets/telas-produtos/pedenoo3.png", alt: "Fechamento e pagamento do pedido no Pedenoo.delivery" }
      ],
      sprite: [1, 0],
      position: { x: 75, y: 49, size: 6.5 }
    },
    {
      id: "meuchef-pedido",
      number: "04",
      name: "MeuChef Pedido",
      location: "Salão · lançamento de pedidos",
      platform: "Browser",
      defaultPrice: 21,
      strengths: ["Pedido móvel no salão", "Consulta mesas e comandas", "Envia o pedido direto para produção"],
      gallery: [
        { src: "assets/telas-produtos/Meuchef pedido.png", alt: "Visão das comandas no MeuChef Pedido" },
        { src: "assets/telas-produtos/Meuchef pedido1.png", alt: "MeuChef Pedido em navegador no celular" },
        { src: "assets/telas-produtos/Meuchef pedido2.png", alt: "Seleção de mercadorias no MeuChef Pedido" }
      ],
      sprite: [2, 2],
      position: { x: 56, y: 65, size: 5.2 }
    },
    {
      id: "meuchef-android",
      number: "05",
      name: "MeuChef Android",
      location: "Salão · venda e atendimento completos",
      platform: "Android",
      defaultPrice: 8,
      billingGroup: "meuchef-android",
      priceCap: 32,
      strengths: ["Venda completa no dispositivo", "Recebimento integrado ao atendimento", "Opera caixa, comandas e fechamento"],
      sprite: [2, 2],
      position: { x: 65, y: 69, size: 5.2 }
    },
    {
      id: "impressao-cozinha",
      number: "06",
      name: "Impressão Produção",
      location: "Produção · pedidos endereçados",
      platform: "Windows",
      hidePrice: true,
      strengths: ["Direciona pedidos por setor", "Identifica mesa e comanda", "Agiliza a produção da cozinha"],
      sprite: [2, 0],
      position: { x: 55, y: 28, size: 6.5 }
    },
    {
      id: "autopesagem",
      number: "07",
      name: "MeuChef Autopesagem",
      location: "Buffet · pesagem integrada",
      platform: "Android",
      defaultPrice: 32,
      strengths: ["Registra o peso automaticamente", "Vincula o consumo à mesa ou comanda", "Reduz erros de digitação"],
      sprite: [3, 0],
      position: { x: 60, y: 42, size: 7 }
    },
    {
      id: "meuchef-windows",
      number: "08",
      name: "MeuChef Windows",
      location: "Caixa · venda e gestão",
      platform: "Windows",
      defaultPrice: 16,
      strengths: ["Centraliza caixa, mesas e comandas", "Integra pagamento e produção", "Controle completo da operação"],
      gallery: [
        { src: "assets/telas-produtos/meuchef windows.png", alt: "Acesso ao MeuChef Windows" },
        { src: "assets/telas-produtos/meuchef windows2.png", alt: "Gestão de comandas no MeuChef Windows" },
        { src: "assets/telas-produtos/meuchef windows3.png", alt: "Venda de balcão no MeuChef Windows" },
        { src: "assets/telas-produtos/meuchef windows4.png", alt: "Gestão de delivery no MeuChef Windows" }
      ],
      sprite: [0, 0],
      position: { x: 83, y: 57, size: 9 }
    },
    {
      id: "tablet-mesa",
      number: "10",
      name: "Tablet de mesa",
      location: "Mesas · autoatendimento",
      platform: "Android",
      defaultPrice: 7,
      priceCap: 70,
      strengths: ["Cliente faz o pedido na mesa", "Cardápio visual e sempre atualizado", "Estimula adicionais e novas vendas"],
      sprite: [1, 0],
      position: { x: 47, y: 61, size: 7 }
    },
    {
      id: "pixei-tef",
      number: "09",
      name: "Pixei Pagamentos / SmartTEF",
      location: "Caixa · pagamento integrado",
      platform: "Windows e Android",
      defaultPrice: 28,
      includedQuantity: 2,
      additionalPrice: 12,
      strengths: ["Pix e cartão integrados à venda", "Evita digitação manual de valores", "Facilita conferência e conciliação"],
      sprite: [0, 1],
      position: { x: 87, y: 57, size: 5.2 }
    },
    {
      id: "autoatendimento",
      number: "11",
      name: "MeuChef Autoatendimento",
      location: "Balcão · pedido autônomo",
      platform: "Android e Windows",
      defaultPrice: 50,
      strengths: ["Cliente monta o próprio pedido", "Diminui filas no balcão", "Cardápio e adicionais configuráveis"],
      sprite: [2, 1],
      position: { x: 83, y: 43, size: 7.5 }
    },
    {
      id: "reserva-mesas",
      number: "12",
      name: "Reserva de mesa",
      location: "Recepção · consulta e reserva",
      platform: "Browser",
      defaultPrice: 10,
      strengths: ["Organiza agenda e disponibilidade", "Facilita a consulta na recepção", "Melhora o planejamento do salão"],
      gallery: [
        { src: "assets/telas-produtos/Reserva.png", alt: "Mapa de disponibilidade do MeuChef Reserva de Mesas" },
        { src: "assets/telas-produtos/Reserva1.png", alt: "Configuração do MeuChef Reserva de Mesas" }
      ],
      sprite: [1, 0],
      screenType: "reservation",
      position: { x: 19, y: 76, size: 6.5 }
    },
    {
      id: "autopagamento",
      number: "13",
      name: "MeuChef Autopagamento",
      location: "Próximo ao caixa · pagamento autônomo",
      platform: "Android",
      defaultPrice: 32,
      strengths: ["Cliente consulta e paga o consumo", "Aceita Pix e cartão integrados", "Reduz filas no fechamento"],
      sprite: [2, 1],
      screenType: "payment",
      position: { x: 79, y: 69, size: 7.5 }
    },
    {
      id: "integracao-catraca",
      number: "14",
      name: "Integração com catracas",
      location: "Entrada e saída · controle de acesso",
      platform: "Windows com integração ao equipamento",
      defaultPrice: 15,
      strengths: ["Libera entrada e saída automaticamente", "Valida pagamento e consumo", "Integra o controle de acesso à operação"],
      sprite: [1, 2],
      position: { x: 10, y: 84, size: 9 }
    },
    {
      id: "kds",
      number: "15",
      name: "KDS na cozinha",
      location: "Cozinha · produção visual",
      platform: "Browser",
      defaultPrice: 21,
      strengths: ["Pedidos em tempo real na cozinha", "Organiza prioridade e andamento", "Reduz papel e falhas de comunicação"],
      gallery: [
        { src: "assets/telas-produtos/KDS.png", alt: "Painel de produção do KDS" },
        { src: "assets/telas-produtos/KDS1.png", alt: "Configuração do painel KDS" }
      ],
      sprite: [3, 1],
      position: { x: 64, y: 15, size: 9.5 }
    },
    {
      id: "terminal-senhas",
      number: "16",
      name: "Terminal de senhas",
      location: "Retirada · chamada de pedidos",
      platform: "Browser",
      defaultPrice: 21,
      strengths: ["Chamada visual de pedidos prontos", "Organiza fila e retirada", "Integra atendimento e produção"],
      gallery: [
        { src: "assets/telas-produtos/Teminal de senha.png", alt: "Painel do Terminal de Senhas com pedidos preparando e concluídos" }
      ],
      sprite: [0, 2],
      position: { x: 90, y: 31, size: 8 }
    }
  ];

  const foodProductOrder = [
    "meuchef-windows",
    "meuchef-android",
    "meuchef-pedido",
    "impressao-cozinha",
    "meuchef-consumo",
    "tablet-mesa",
    "pedenoo-delivery",
    "pedenoo",
    "pixei-tef",
    "autoatendimento",
    "autopagamento",
    "autopesagem",
    "reserva-mesas",
    "terminal-senhas",
    "kds",
    "integracao-catraca"
  ];

  const foodProductIds = new Set(foodProductOrder);
  for (let index = products.length - 1; index >= 0; index -= 1) {
    if (!foodProductIds.has(products[index].id)) products.splice(index, 1);
  }
  products.sort((first, second) => foodProductOrder.indexOf(first.id) - foodProductOrder.indexOf(second.id));
  products.forEach((product, index) => { product.number = String(index + 1).padStart(2, "0"); });

  products.forEach((product) => { product.category = "food"; });
  const integrationGroupOrder = ["Delivery", "Marketplaces", "Benefícios", "E-Commerce", "Tributação", "Boleto/Pix", "Automação", "Farmácia", "Contábil"];
  const integrationGroupColumns = [
    ["Delivery", "Marketplaces", "Benefícios"],
    ["E-Commerce", "Tributação", "Boleto/Pix"],
    ["Automação", "Farmácia", "Contábil", "Outras"]
  ];
  const integrationDefinitions = [
    ["ifood-restaurante", "iFood Restaurante", "Delivery", 15],
    ["aiqfome", "AiQFome", "Delivery", 15],
    ["deliv", "Deliv", "Delivery", 15],
    ["99-food", "99 Food", "Delivery", 15],
    ["anota-ai", "Anota Ai", "Delivery", 15],
    ["keeta", "Keeta", "Delivery", 15],
    ["delivery-vip", "Delivery Vip", "Delivery", 15],
    ["delivery-direto", "Delivery Direto", "Delivery", 15],
    ["ifood-mercado", "iFood Mercado", "Marketplaces", 0],
    ["mercado-livre", "Mercado Livre", "Marketplaces", 0],
    ["rappi", "Rappi", "Marketplaces", 0],
    ["shopee", "Shopee", "Marketplaces", 0],
    ["bayer", "Bayer", "Benefícios", 15],
    ["kiskadi", "Kiskadi", "Benefícios", 15],
    ["mercafacil", "Mercafácil", "Benefícios", 15],
    ["scanntech", "Scanntech", "Benefícios", 0],
    ["moovin", "Moovin", "E-Commerce", 15],
    ["woocommerce", "WooCommerce", "E-Commerce", 0],
    ["bw-commerce", "BW Commerce", "E-Commerce", 15],
    ["nuvemshop", "Nuvemshop", "E-Commerce", 0],
    ["instabuy", "Instabuy", "E-Commerce", 15],
    ["tray", "Tray", "E-Commerce", 0],
    ["loja-integrada", "Loja Integrada", "E-Commerce", 15],
    ["imendes", "Imendes", "Tributação", 0],
    ["it-works", "IT Works", "Tributação", 10],
    ["asaas", "Asaas", "Boleto/Pix", 0],
    ["pixei-boleto", "Pixei boleto", "Boleto/Pix", 20, "por conta", true],
    ["plugboleto", "PlugBoleto", "Boleto/Pix", 0.75, "por boleto", true],
    ["pixei-pix-dinamico", "Pixei Pix Dinâmico", "Boleto/Pix", 20, "por CNPJ/chave", true],
    ["api-placas", "API Placas", "Automação", 5],
    ["skymix", "Skymix", "Automação", 15],
    ["google-calendario", "Google Calendário", "Automação", 7],
    ["whatsapp-wapi", "WhatsApp", "Automação", 10, "+ custo WAPI"],
    ["atm", "AT&M", "Automação", 15],
    ["bookinfo", "BookInfo", "Automação", 15],
    ["serpro", "Serpro", "Automação", 5],
    ["napp-solutions", "Napp Solutions", "Automação", 15],
    ["conciflex", "Conciflex", "Automação", 15],
    ["solid-gate", "Solid Gate", "Automação", 15],
    ["abc-farma", "ABC Farma", "Farmácia", 0],
    ["sngpc", "SNGPC", "Farmácia", 0],
    ["dominio-sistemas", "Domínio Sistemas", "Contábil", 15],
    ["sieg", "SIEG", "Contábil", 15]
  ];
  products.push(
    {
      id: "db-online-meuchef-android", number: "17", name: "DB Online MeuChef Android", category: "food",
      location: "Dispositivo Android · banco de dados online", platform: "Android", defaultPrice: 5,
      strengths: ["Banco de dados online para o MeuChef Android", "Licença vinculada por dispositivo", "Mantém a operação conectada e sincronizada"],
      showOnMap: false, sprite: [2, 2], position: { x: 50, y: 50, size: 5.5 }
    },
    {
      id: "meumarket-windows", number: "01", name: "MeuMarket Windows", category: "retail",
      location: "Caixa · operação de varejo", platform: "Windows", defaultPrice: 16,
      strengths: ["Venda de balcão e frente de caixa", "Integra estoque, pagamentos e emissão", "Operação completa para o varejo"],
      sprite: [0, 0], position: { x: 79, y: 78, size: 10 }
    },
    {
      id: "meumarket-android", number: "02", name: "MeuMarket Android", category: "retail",
      location: "Atendimento móvel · venda e consulta", platform: "Android", defaultPrice: 16,
      strengths: ["Atendimento móvel dentro da loja", "Consulta produtos e estoque", "Leva a operação até o cliente"],
      sprite: [2, 2], position: { x: 56, y: 56, size: 5.5 }
    },
    {
      id: "meuposshop", number: "03", name: "MeuPosShop", category: "retail",
      location: "Caixa · PDV no computador", platform: "Windows", defaultPrice: 16,
      strengths: ["PDV completo executado no computador", "Integra produtos e recebimentos", "Interface preparada para operação rápida"],
      sprite: [0, 0], position: { x: 72, y: 72, size: 9 }
    },
    {
      id: "consulta-preco", number: "04", name: "Consulta preço", category: "retail",
      location: "Corredores · consulta pelo cliente", platform: "Browser", defaultPrice: 10,
      strengths: ["Consulta rápida de preço", "Reduz dúvidas no atendimento", "Pode ser posicionado em pontos estratégicos"],
      sprite: [3, 1], position: { x: 42, y: 48, size: 7 }
    },
    {
      id: "painel-preco", number: "05", name: "Painel de Preço", category: "retail",
      location: "Área de vendas · comunicação visual", platform: "Browser", defaultPrice: 10,
      strengths: ["Destaca ofertas e produtos", "Atualização centralizada", "Comunicação clara no ponto de venda"],
      sprite: [0, 2], position: { x: 68, y: 30, size: 8 }
    },
    {
      id: "varejo-autoatendimento", number: "06", name: "Autoatendimento", category: "retail",
      location: "Área de vendas · compra autônoma", platform: "Android e Windows", defaultPrice: 50,
      strengths: ["Cliente realiza a compra com autonomia", "Diminui filas no caixa", "Produtos e adicionais configuráveis"],
      sprite: [2, 1], position: { x: 75, y: 60, size: 7.5 }
    },
    {
      id: "noostock", number: "07", name: "NooStock — Contagem de estoque", category: "retail",
      location: "Estoque e corredores · inventário", platform: "Browser", defaultPrice: 16,
      strengths: ["Contagem de estoque pelo navegador", "Agiliza inventários e conferências", "Centraliza as quantidades contadas"],
      gallery: [
        { src: "assets/telas-produtos/Noostock6.png", alt: "Tela de acesso ao inventário do NooStock" },
        { src: "assets/telas-produtos/Noostock4.png", alt: "Menu principal do NooStock com opções de inventário e auditoria" },
        { src: "assets/telas-produtos/Noostock.jpeg", alt: "Busca de mercadoria para ajuste de estoque no NooStock" },
        { src: "assets/telas-produtos/Noostock2.png", alt: "Leitura de código de barras pela câmera no NooStock" },
        { src: "assets/telas-produtos/Noostock3.png", alt: "Ajuste do saldo de uma mercadoria no NooStock" },
        { src: "assets/telas-produtos/Noostock5.png", alt: "Retorno de falha ao salvar uma alteração no NooStock" }
      ],
      sprite: [2, 2], position: { x: 38, y: 54, size: 5.5 }
    },
    {
      id: "adicional-ie", number: "08", name: "Adicional de IE", category: "retail",
      location: "Cadastro · inscrição estadual adicional", platform: "Serviço", defaultPrice: 15,
      strengths: ["Inclui uma inscrição estadual adicional", "Amplia a operação fiscal cadastrada", "Cobrança por adicional contratado"],
      showOnMap: false, sprite: [0, 2], position: { x: 50, y: 50, size: 7 }
    },
    {
      id: "consulta-cashback", number: "09", name: "Consulta cashback", category: "retail",
      location: "Cliente · consulta de saldo e benefícios", platform: "Browser", defaultPrice: 15,
      strengths: ["Consulta de cashback pelo navegador", "Facilita a conferência do saldo", "Acesso simples para o cliente"],
      showOnMap: false, sprite: [3, 1], position: { x: 50, y: 50, size: 7 }
    },
    {
      id: "emissao-boleto-api", number: "01", name: "Emissão boleto API", category: "general",
      location: "Financeiro · emissão integrada de boletos", platform: "API", defaultPrice: 20,
      strengths: ["Emissão de boleto por API", "Automatiza a cobrança", "Integra o financeiro a outros sistemas"],
      showOnMap: false, singleCharge: true, sprite: [0, 2], position: { x: 50, y: 50, size: 7 }
    },
    {
      id: "pix-dinamico-api", number: "02", name: "Pix Dinâmico API", category: "general",
      location: "Financeiro · cobrança Pix integrada", platform: "API", defaultPrice: 20,
      strengths: ["Gera cobranças Pix dinâmicas", "Confirma pagamentos pela integração", "Reduz conferências manuais"],
      showOnMap: false, singleCharge: true, sprite: [0, 1], position: { x: 50, y: 50, size: 7 }
    },
    {
      id: "portal-contador", number: "03", name: "Portal do contador", category: "general",
      location: "Contabilidade · documentos e informações", platform: "Browser", defaultPrice: 15,
      strengths: ["Centraliza documentos para o contador", "Facilita o acesso às informações", "Reduz troca manual de arquivos"],
      showOnMap: false, singleCharge: true, sprite: [0, 0], position: { x: 50, y: 50, size: 7 }
    },
    ...integrationDefinitions.map(([id, name, integrationGroup, defaultPrice, customBillingRule, variableQuantity]) => ({
      id: "integration-" + id,
      number: "00",
      name,
      category: "integration",
      integrationGroup,
      location: integrationGroup + " · integração disponível",
      platform: "Integração",
      defaultPrice,
      customBillingRule,
      maximumQuantity: variableQuantity ? maximumQuantity : 1,
      singleCharge: !variableQuantity,
      strengths: ["Integra " + name + " à operação", "Centraliza o fluxo de informações", "Reduz atividades manuais"],
      showOnMap: false,
      sprite: [0, 1],
      position: { x: 50, y: 50, size: 7 }
    }))
  );

  function loadCustomProducts() {
    try {
      const savedValue = window.localStorage.getItem(customProductStorageKey);
      const parsedValue = savedValue ? JSON.parse(savedValue) : [];
      if (!Array.isArray(parsedValue)) return [];
      return parsedValue.flatMap((product) => {
        const id = typeof product?.id === "string" && (product.id.startsWith("custom-product-") || product.id.startsWith("custom-integration-")) ? product.id : "";
        const name = typeof product?.name === "string" ? product.name.trim().slice(0, 80) : "";
        if (!id || !name) return [];
        const allowedCategories = new Set(["food", "retail", "general", "integration"]);
        const category = allowedCategories.has(product.category) ? product.category : "food";
        const sprite = Array.isArray(product.sprite)
          && Number.isInteger(product.sprite[0]) && product.sprite[0] >= 0 && product.sprite[0] < spriteX.length
          && Number.isInteger(product.sprite[1]) && product.sprite[1] >= 0 && product.sprite[1] < spriteY.length
          ? product.sprite : [0, 0];
        const customIcon = typeof product.customIcon === "string" && /^data:image\/(png|jpeg|webp);base64,/.test(product.customIcon)
          ? product.customIcon : undefined;
        return [{
          id,
          number: "00",
          name,
          category,
          integrationGroup: category === "integration" && integrationGroupOrder.includes(product.integrationGroup)
            ? product.integrationGroup
            : category === "integration" ? "Outras" : undefined,
          location: typeof product.location === "string" ? product.location.trim().slice(0, 120) : "Solução personalizada",
          platform: typeof product.platform === "string" ? product.platform.trim().slice(0, 60) || "Serviço" : "Serviço",
          defaultPrice: Number.isFinite(product.defaultPrice) && product.defaultPrice >= 0 ? product.defaultPrice : null,
          strengths: Array.isArray(product.strengths) ? product.strengths.filter((item) => typeof item === "string").slice(0, 3) : ["Solução personalizada"],
          sprite,
          customIcon,
          showOnMap: product.showOnMap !== false,
          singleCharge: product.singleCharge !== false,
          customBillingRule: typeof product.customBillingRule === "string" ? product.customBillingRule.slice(0, 60) : undefined,
          position: { x: 50, y: 50, size: 7 },
          isCustomProduct: true
        }];
      });
    } catch {
      return [];
    }
  }

  function persistCustomProducts() {
    const customProducts = products
      .filter((product) => product.isCustomProduct)
      .map((product) => ({
        id: product.id,
        name: defaultProductNames[product.id] || product.name,
        category: product.category,
        integrationGroup: product.integrationGroup,
        location: product.location,
        platform: product.platform,
        defaultPrice: product.defaultPrice,
        strengths: product.strengths,
        sprite: product.sprite,
        customIcon: product.customIcon,
        showOnMap: product.showOnMap,
        singleCharge: product.singleCharge,
        customBillingRule: product.customBillingRule
      }));
    window.localStorage.setItem(customProductStorageKey, JSON.stringify(customProducts));
  }

  function renumberProducts() {
    ["food", "retail", "general", "integration"].forEach((category) => {
      products.filter((product) => product.category === category).forEach((product, index) => {
        product.number = String(index + 1 + (category === "general" ? 1 : 0)).padStart(2, "0");
      });
    });
  }

  products.push(...loadCustomProducts());
  renumberProducts();

  const defaultProductNames = Object.fromEntries(products.map((product) => [product.id, product.name]));

  const builtInScenarios = [
    { id: "restaurante", category: "food", name: "Restaurante", image: "assets/restaurante-base-interativo-v2.png", alt: "Planta superior de restaurante com salão, buffet, cozinha, bar, balcão e entrada." },
    { id: "sorveteria", category: "food", name: "Sorveteria", image: "assets/cenarios/sorveteria-v1.png", alt: "Planta superior de sorveteria com vitrine, produção, caixa e mesas." },
    { id: "pizzaria", category: "food", name: "Pizzaria", image: "assets/cenarios/pizzaria-v1.png", alt: "Planta superior de pizzaria com forno, cozinha, caixa e salão." },
    { id: "delivery", category: "food", name: "Apenas delivery", image: "assets/cenarios/delivery-v1.png", alt: "Planta superior de cozinha para delivery com expedição e motocicletas." },
    { id: "fast-food-shopping", category: "food", name: "Fast food de shopping", image: "assets/cenarios/fast-food-shopping-v1.png", alt: "Planta superior de fast food em praça de alimentação com mesas e área para terminais." },
    { id: "mercado", category: "retail", name: "Mercado", image: "assets/cenarios/mercado-v1.png", alt: "Planta superior de mercado com gôndolas, setores e caixas." },
    { id: "acougue", category: "retail", name: "Açougue", image: "assets/cenarios/acougue-v1.png", alt: "Planta superior de açougue com balcão refrigerado, preparo e caixa." },
    { id: "padaria", category: "retail", name: "Padaria", image: "assets/cenarios/padaria-v1.png", alt: "Planta superior de padaria com produção, balcões, caixa e mesas." },
    { id: "loja-roupa", category: "retail", name: "Loja de roupa", image: "assets/cenarios/loja-roupa-v1.png", alt: "Planta superior de loja de roupas com araras, provadores e caixas." },
    { id: "farmacia", category: "retail", name: "Farmácia", image: "assets/cenarios/farmacia-v1.png", alt: "Planta superior de farmácia com gôndolas, atendimento e caixas." },
    { id: "autopeca", category: "retail", name: "Autopeça", image: "assets/cenarios/autopeca-v1.png", alt: "Planta superior de loja de autopeças com prateleiras, balcão e caixas." },
    { id: "mecanica", category: "retail", name: "Mecânica", image: "assets/cenarios/mecanica-v1.png", alt: "Planta superior de oficina mecânica com boxes, recepção e estoque." },
    { id: "personalizado", category: "custom", name: "Cenário personalizado", image: "assets/cenarios/piso-personalizado-v2.png", alt: "Piso vazio em porcelanato para montar um cenário personalizado." }
  ];

  const layoutPieces = [
    { type: "mesa-redonda", group: "mesas", name: "Mesa redonda", sprite: [0, 0], width: 7.5, height: 18 },
    { type: "mesa-quadrada", group: "mesas", name: "Mesa quadrada", sprite: [1, 0], width: 7.5, height: 18 },
    { type: "mesa-grande", group: "mesas", name: "Mesa grande", sprite: [2, 0], width: 10, height: 24 },
    { type: "cabine", group: "mesas", name: "Cabine", sprite: [3, 0], width: 8.5, height: 20 },
    { type: "balcao-reto", group: "balcoes", name: "Balcão reto", image: "assets/cenarios/balcao-reto-neutro-v2.png", width: 14, height: 12 },
    { type: "balcao-industrial-azul", group: "balcoes", name: "Balcão industrial azul", image: "assets/cenarios/balcao-industrial-azul-v1.png", width: 14, height: 12 },
    { type: "balcao-madeira-escura", group: "balcoes", name: "Balcão madeira escura", image: "assets/cenarios/balcao-madeira-escura-v1.png", width: 14, height: 12 },
    { type: "balcao-l", group: "balcoes", name: "Balcão em L claro", image: "assets/cenarios/balcao-l-sem-pdv-v1.png", width: 15, height: 18 },
    { type: "balcao-l-industrial-azul", group: "balcoes", name: "Balcão em L industrial azul", image: "assets/cenarios/balcao-l-sem-pdv-v1.png", imageFilter: "hue-rotate(155deg) saturate(1.25) brightness(.72)", width: 15, height: 18 },
    { type: "balcao-l-madeira-escura", group: "balcoes", name: "Balcão em L madeira escura", image: "assets/cenarios/balcao-l-sem-pdv-v1.png", imageFilter: "grayscale(.7) brightness(.46) contrast(1.35)", width: 15, height: 18 },
    { type: "cozinha", group: "cozinha", name: "Linha de cozinha", image: "assets/cenarios/cozinha-v3.png", width: 12, height: 11 },
    { type: "buffet", group: "cozinha", name: "Buffet", sprite: [3, 1], width: 10, height: 24 },
    { type: "parede-reta", group: "paredes", name: "Parede reta", image: "assets/cenarios/parede-reta-v3.png", width: 15, height: 6 },
    { type: "parede-l", group: "paredes", name: "Parede em L", image: "assets/cenarios/parede-l-v3.png", backgroundSize: "175%", width: 12, height: 21 },
    { type: "moto", group: "veiculos", name: "Moto delivery", sprite: [2, 2], width: 6.5, height: 15.5 },
    { type: "carro", group: "veiculos", name: "Carro", image: "assets/cenarios/carro-v1.png", width: 5.5, height: 15 },
    { type: "caminhao", group: "veiculos", name: "Caminhão", image: "assets/cenarios/caminhao-v1.png", width: 6.5, height: 18 },
    { type: "gondola-mercado", group: "expositores", name: "Gôndola de mercado", image: "assets/cenarios/gondola-mercado-v1.png", width: 15, height: 8 },
    { type: "estante-farmacia", group: "expositores", name: "Estante de farmácia", image: "assets/cenarios/estante-farmacia-v1.png", width: 15, height: 6 },
    { type: "balcao-acougue", group: "expositores", name: "Balcão de açougue", image: "assets/cenarios/balcao-acougue-v1.png", width: 15, height: 7 },
    { type: "elevador-mecanica", group: "servicos", name: "Elevador automotivo", image: "assets/cenarios/elevador-mecanica-v1.png", width: 12, height: 20 },
    { type: "estacao-petshop", group: "servicos", name: "Estação de pet shop", image: "assets/cenarios/estacao-petshop-v1.png", width: 12, height: 18 }
  ];

  const layoutGroups = [
    { id: "mesas", name: "Mesas" },
    { id: "balcoes", name: "Balcões" },
    { id: "paredes", name: "Paredes" },
    { id: "cozinha", name: "Cozinha" },
    { id: "veiculos", name: "Veículos" },
    { id: "expositores", name: "Expositores" },
    { id: "servicos", name: "Serviços" }
  ];

  const scenarios = [...builtInScenarios, ...loadSavedScenarios()];
  const editorScenarioIndex = scenarios.findIndex((scenario) => scenario.category === "custom");

  const elements = {
    configurator: document.querySelector(".configurator"),
    productPanel: document.querySelector("#productPanel"),
    sideMenuToggle: document.querySelector("#sideMenuToggle"),
    productList: document.querySelector("#productList"),
    equipmentLayer: document.querySelector("#equipmentLayer"),
    layoutLayer: document.querySelector("#layoutLayer"),
    layoutBuilder: document.querySelector("#layoutBuilder"),
    layoutPalette: document.querySelector("#layoutPalette"),
    clearLayoutButton: document.querySelector("#clearLayoutButton"),
    layoutModeButton: document.querySelector("#layoutModeButton"),
    decreaseLayoutSizeButton: document.querySelector("#decreaseLayoutSizeButton"),
    increaseLayoutSizeButton: document.querySelector("#increaseLayoutSizeButton"),
    selectedLayoutCount: document.querySelector("#selectedLayoutCount"),
    layoutShortcutsButton: document.querySelector("#layoutShortcutsButton"),
    layoutShortcutsModal: document.querySelector("#layoutShortcutsModal"),
    layoutShortcutsClose: document.querySelector("#layoutShortcutsClose"),
    saveLayoutButton: document.querySelector("#saveLayoutButton"),
    deleteLayoutButton: document.querySelector("#deleteLayoutButton"),
    restaurantMap: document.querySelector("#restaurantMap"),
    scenarioImage: document.querySelector("#scenarioImage"),
    scenarioName: document.querySelector("#scenarioName"),
    scenarioCategory: document.querySelector("#scenarioCategory"),
    scenarioStatusLabel: document.querySelector("#scenarioStatusLabel"),
    previousScenarioButton: document.querySelector("#previousScenarioButton"),
    nextScenarioButton: document.querySelector("#nextScenarioButton"),
    customScenarioButton: document.querySelector("#customScenarioButton"),
    catalogButtons: Array.from(document.querySelectorAll("[data-catalog]")),
    activeCount: document.querySelector("#activeCount"),
    totalCount: document.querySelector("#totalCount"),
    userLicenseTitle: document.querySelector("#userLicenseTitle"),
    userQuantity: document.querySelector("#userQuantity"),
    decreaseUsersButton: document.querySelector("#decreaseUsersButton"),
    increaseUsersButton: document.querySelector("#increaseUsersButton"),
    userLicenseRule: document.querySelector("#userLicenseRule"),
    accessExplanationButton: document.querySelector("#accessExplanationButton"),
    accessExplanationModal: document.querySelector("#accessExplanationModal"),
    accessModalClose: document.querySelector("#accessModalClose"),
    solutionPreview: document.querySelector("#solutionPreview"),
    solutionPreviewTitle: document.querySelector("#solutionPreviewTitle"),
    solutionPreviewList: document.querySelector("#solutionPreviewList"),
    solutionPreviewClose: document.querySelector("#solutionPreviewClose"),
    solutionGallery: document.querySelector(".solution-gallery"),
    solutionGalleryCount: document.querySelector("#solutionGalleryCount"),
    solutionGalleryImage: document.querySelector("#solutionGalleryImage"),
    solutionGalleryEmpty: document.querySelector("#solutionGalleryEmpty"),
    solutionGalleryPrevious: document.querySelector("#solutionGalleryPrevious"),
    solutionGalleryNext: document.querySelector("#solutionGalleryNext"),
    solutionGalleryDots: document.querySelector("#solutionGalleryDots"),
    clearButton: document.querySelector("#clearButton"),
    showAllButton: document.querySelector("#showAllButton"),
    fullscreenButton: document.querySelector("#fullscreenButton"),
    resetPositionsButton: document.querySelector("#resetPositionsButton"),
    basePriceDisplay: document.querySelector("#basePriceDisplay"),
    priceSettingsButton: document.querySelector("#priceSettingsButton"),
    priceSettingsModal: document.querySelector("#priceSettingsModal"),
    priceModalClose: document.querySelector("#priceModalClose"),
    priceVisibilityButton: document.querySelector("#priceVisibilityButton"),
    priceVisibilityLabel: document.querySelector("#priceVisibilityLabel"),
    mainPriceList: document.querySelector("#mainPriceList"),
    foodPriceList: document.querySelector("#foodPriceList"),
    retailPriceList: document.querySelector("#retailPriceList"),
    generalPriceList: document.querySelector("#generalPriceList"),
    integrationPriceSummary: document.querySelector("#integrationPriceSummary"),
    integrationSettingsModal: document.querySelector("#integrationSettingsModal"),
    integrationSettingsClose: document.querySelector("#integrationSettingsClose"),
    integrationSettingsForm: document.querySelector("#integrationSettingsForm"),
    integrationSettingsList: document.querySelector("#integrationSettingsList"),
    newIntegrationName: document.querySelector("#newIntegrationName"),
    newIntegrationGroup: document.querySelector("#newIntegrationGroup"),
    newIntegrationPrice: document.querySelector("#newIntegrationPrice"),
    applyIntegrationSettingsButton: document.querySelector("#applyIntegrationSettingsButton"),
    integrationsModal: document.querySelector("#integrationsModal"),
    integrationsModalClose: document.querySelector("#integrationsModalClose"),
    integrationList: document.querySelector("#integrationList"),
    integrationEmptyState: document.querySelector("#integrationEmptyState"),
    resetPricesButton: document.querySelector("#resetPricesButton"),
    applyPricesButton: document.querySelector("#applyPricesButton"),
    toggleCustomSolutionFormButton: document.querySelector("#toggleCustomSolutionFormButton"),
    customSolutionForm: document.querySelector("#customSolutionForm"),
    customSolutionName: document.querySelector("#customSolutionName"),
    customSolutionCategory: document.querySelector("#customSolutionCategory"),
    customSolutionPrice: document.querySelector("#customSolutionPrice"),
    customSolutionPlatform: document.querySelector("#customSolutionPlatform"),
    customSolutionDescription: document.querySelector("#customSolutionDescription"),
    customSolutionShowOnMap: document.querySelector("#customSolutionShowOnMap"),
    customSolutionSingleCharge: document.querySelector("#customSolutionSingleCharge"),
    customIconList: document.querySelector("#customIconList"),
    customIconUpload: document.querySelector("#customIconUpload"),
    customIconPreview: document.querySelector("#customIconPreview"),
    customIconStatus: document.querySelector("#customIconStatus"),
    clearCustomIconButton: document.querySelector("#clearCustomIconButton"),
    totalPrice: document.querySelector("#totalPrice"),
    totalPriceDetails: document.querySelector("#totalPriceDetails"),
    announcement: document.querySelector("#announcement")
  };

  const activeProducts = new Set();
  const productQuantities = new Map();
  const productButtons = new Map();
  const integrationButtons = new Map();
  const productOverlays = new Map();
  let savedPositions = loadSavedPositions();
  let draftCustomLayout = loadCustomLayout();
  let customLayout = cloneLayout(draftCustomLayout);
  let priceSettings = loadPriceSettings();
  applyConfiguredProductNames();
  let pricesVisible = loadPriceVisibility();
  let dragState;
  let layoutDragState;
  let layoutSelectionState;
  const selectedLayoutIds = new Set();
  let isLayoutEditing = true;
  let editingSavedScenarioId;
  let announcementTimer;
  let previewAnchor;
  let previewProduct;
  let activeGallery = [];
  let galleryIndex = 0;
  let userQuantity = includedUserQuantity;
  let accessModalPreviousFocus;
  let priceModalPreviousFocus;
  let integrationsModalPreviousFocus;
  let integrationSettingsPreviousFocus;
  let shortcutsModalPreviousFocus;
  let activeCatalog = "food";
  let activeScenarioIndex = 0;
  let isSideMenuCollapsed = loadSideMenuState();
  let selectedCustomIcon = [0, 0];
  let uploadedCustomIcon;

  function loadSideMenuState() {
    try {
      return window.localStorage.getItem(sideMenuStorageKey) === "true";
    } catch {
      return false;
    }
  }

  function updateSideMenu() {
    elements.configurator.classList.toggle("is-side-menu-collapsed", isSideMenuCollapsed);
    elements.sideMenuToggle.setAttribute("aria-expanded", String(!isSideMenuCollapsed));

    const actionLabel = isSideMenuCollapsed ? "Expandir menu de soluções" : "Recolher menu de soluções";
    elements.sideMenuToggle.setAttribute("aria-label", actionLabel);
    elements.sideMenuToggle.title = actionLabel;

    Array.from(elements.productPanel.children).forEach((child) => {
      if (child === elements.sideMenuToggle) return;
      child.setAttribute("aria-hidden", String(isSideMenuCollapsed));
      if (isSideMenuCollapsed) child.setAttribute("inert", "");
      else child.removeAttribute("inert");
    });

    try {
      window.localStorage.setItem(sideMenuStorageKey, String(isSideMenuCollapsed));
    } catch {
      // A apresentação continua funcional quando o armazenamento do navegador está bloqueado.
    }

    window.requestAnimationFrame(positionSolutionPreview);
  }

  function toggleSideMenu() {
    isSideMenuCollapsed = !isSideMenuCollapsed;
    updateSideMenu();
  }

  function catalogProducts(category = activeCatalog) {
    return products.filter((product) => product.category === category);
  }

  function scenarioPositionKey(instanceId) {
    return currentScenario().id + "::" + instanceId;
  }

  function normalizedEquipmentRotation(value) {
    const rotation = Number(value) || 0;
    return ((rotation % 360) + 360) % 360;
  }

  function loadSavedPositions() {
    try {
      const savedValue = window.localStorage.getItem(positionStorageKey);
      const parsedValue = savedValue ? JSON.parse(savedValue) : {};
      return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
    } catch {
      return {};
    }
  }

  function persistPositions() {
    try {
      window.localStorage.setItem(positionStorageKey, JSON.stringify(savedPositions));
    } catch {
      showAnnouncement("A posição foi alterada, mas não pôde ser salva neste navegador.");
    }
  }

  function defaultPriceSettings() {
    const productPrices = {};
    const additionalPrices = {};
    const priceCaps = {};
    const productNames = {};
    products.forEach((product) => {
      productPrices[product.id] = Number.isFinite(product.defaultPrice) && product.defaultPrice >= 0
        ? product.defaultPrice
        : null;
      additionalPrices[product.id] = Number.isFinite(product.additionalPrice) && product.additionalPrice >= 0
        ? product.additionalPrice
        : null;
      priceCaps[product.id] = Number.isFinite(product.priceCap) && product.priceCap >= 0
        ? product.priceCap
        : null;
      productNames[product.id] = defaultProductNames[product.id];
    });
    return {
      base: defaultBasePrice,
      additionalUser: defaultAdditionalUserPrice,
      unlimitedUsers: defaultUnlimitedUserPrice,
      products: productPrices,
      additionalPrices,
      priceCaps,
      productNames,
      productScreens: {}
    };
  }

  function normalizePrice(value, fallback = null) {
    if (value === null || value === undefined || value === "") return fallback;
    const parsedValue = Number(value);
    return Number.isFinite(parsedValue) && parsedValue >= 0 ? parsedValue : fallback;
  }

  function loadPriceSettings() {
    const defaults = defaultPriceSettings();
    try {
      const savedValue = window.localStorage.getItem(priceStorageKey);
      if (!savedValue) return defaults;
      const parsedValue = JSON.parse(savedValue);
      const productPrices = { ...defaults.products };
      const additionalPrices = { ...defaults.additionalPrices };
      const priceCaps = { ...defaults.priceCaps };
      const productNames = { ...defaults.productNames };
      const productScreens = {};
      products.forEach((product) => {
        if (Object.prototype.hasOwnProperty.call(parsedValue?.products || {}, product.id)) {
          productPrices[product.id] = normalizePrice(parsedValue.products[product.id], defaults.products[product.id]);
        }
        if (Object.prototype.hasOwnProperty.call(parsedValue?.additionalPrices || {}, product.id)) {
          additionalPrices[product.id] = normalizePrice(parsedValue.additionalPrices[product.id], defaults.additionalPrices[product.id]);
        }
        if (Object.prototype.hasOwnProperty.call(parsedValue?.priceCaps || {}, product.id)) {
          priceCaps[product.id] = normalizePrice(parsedValue.priceCaps[product.id], defaults.priceCaps[product.id]);
        }
        const savedName = parsedValue?.productNames?.[product.id];
        if (typeof savedName === "string" && savedName.trim()) {
          const normalizedName = savedName.trim().slice(0, 80);
          productNames[product.id] = product.id === "pixei-tef" && normalizedName === "Pixei Pagamentos / TEF"
            ? defaults.productNames[product.id]
            : normalizedName;
        }
        const savedScreen = parsedValue?.productScreens?.[product.id];
        if (typeof savedScreen === "string"
          && savedScreen.length <= 600000
          && /^data:image\/(png|jpeg|webp);base64,/.test(savedScreen)) {
          productScreens[product.id] = savedScreen;
        }
      });
      return {
        base: normalizePrice(parsedValue?.base, defaults.base),
        additionalUser: normalizePrice(parsedValue?.additionalUser, defaults.additionalUser),
        unlimitedUsers: normalizePrice(parsedValue?.unlimitedUsers, defaults.unlimitedUsers),
        products: productPrices,
        additionalPrices,
        priceCaps,
        productNames,
        productScreens
      };
    } catch {
      return defaults;
    }
  }

  function persistPriceSettings() {
    try {
      window.localStorage.setItem(priceStorageKey, JSON.stringify(priceSettings));
      return true;
    } catch {
      showAnnouncement("As alterações foram aplicadas, mas não puderam ser salvas neste navegador.");
      return false;
    }
  }

  function applyConfiguredProductNames() {
    products.forEach((product) => {
      product.name = priceSettings?.productNames?.[product.id] || defaultProductNames[product.id];
    });
  }

  function loadPriceVisibility() {
    try {
      return window.localStorage.getItem(priceVisibilityStorageKey) !== "false";
    } catch {
      return true;
    }
  }

  function persistPriceVisibility() {
    try {
      window.localStorage.setItem(priceVisibilityStorageKey, String(pricesVisible));
    } catch {
      showAnnouncement("A visibilidade foi alterada, mas não pôde ser salva neste navegador.");
    }
  }

  function loadCustomLayout() {
    try {
      const savedValue = window.localStorage.getItem(layoutStorageKey);
      const parsedValue = savedValue ? JSON.parse(savedValue) : [];
      return Array.isArray(parsedValue) ? parsedValue.filter((item) => layoutPieces.some((piece) => piece.type === item.type)) : [];
    } catch {
      return [];
    }
  }

  function cloneLayout(layout) {
    return Array.isArray(layout) ? layout.map((item) => ({ ...item })) : [];
  }

  function loadSavedScenarios() {
    try {
      const savedValue = window.localStorage.getItem(savedScenarioStorageKey);
      const parsedValue = savedValue ? JSON.parse(savedValue) : [];
      if (!Array.isArray(parsedValue)) return [];
      return parsedValue
        .filter((scenario) => scenario && typeof scenario.name === "string" && Array.isArray(scenario.layout))
        .map((scenario) => ({
          id: String(scenario.id || ("custom-saved-" + Date.now() + "-" + Math.random().toString(16).slice(2))),
          category: "custom-saved",
          name: scenario.name.trim() || "Modelo personalizado",
          image: "assets/cenarios/piso-personalizado-v2.png",
          alt: "Modelo personalizado " + (scenario.name.trim() || "salvo"),
          layout: cloneLayout(scenario.layout).filter((item) => layoutPieces.some((piece) => piece.type === item.type))
        }));
    } catch {
      return [];
    }
  }

  function currentScenario() {
    return scenarios[activeScenarioIndex];
  }

  function isCustomScenario(scenario = currentScenario()) {
    return scenario?.category === "custom" || scenario?.category === "custom-saved";
  }

  function persistSavedScenarios() {
    const savedScenarios = scenarios
      .filter((scenario) => scenario.category === "custom-saved")
      .map((scenario) => ({ id: scenario.id, name: scenario.name, layout: cloneLayout(scenario.layout) }));
    try {
      window.localStorage.setItem(savedScenarioStorageKey, JSON.stringify(savedScenarios));
    } catch {
      showAnnouncement("O modelo foi alterado, mas não pôde ser salvo neste navegador.");
    }
  }

  function persistCustomLayout() {
    const scenario = currentScenario();
    if (scenario?.category === "custom-saved") {
      scenario.layout = cloneLayout(customLayout);
      persistSavedScenarios();
      return;
    }
    if (editingSavedScenarioId) return;
    draftCustomLayout = cloneLayout(customLayout);
    try {
      window.localStorage.setItem(layoutStorageKey, JSON.stringify(draftCustomLayout));
    } catch {
      showAnnouncement("O desenho foi alterado, mas não pôde ser salvo neste navegador.");
    }
  }

  function productPrice(product) {
    return Object.prototype.hasOwnProperty.call(priceSettings.products, product.id)
      ? priceSettings.products[product.id]
      : null;
  }

  function productAdditionalPrice(product) {
    return Object.prototype.hasOwnProperty.call(priceSettings.additionalPrices, product.id)
      ? priceSettings.additionalPrices[product.id]
      : null;
  }

  function productPriceCap(product) {
    return Object.prototype.hasOwnProperty.call(priceSettings.priceCaps, product.id)
      ? priceSettings.priceCaps[product.id]
      : null;
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  }

  function userLicensePrice() {
    if (userQuantity <= includedUserQuantity) return 0;
    if (userQuantity >= unlimitedUserStartQuantity) return priceSettings.unlimitedUsers;
    return (userQuantity - includedUserQuantity) * priceSettings.additionalUser;
  }

  function userLicenseDescription() {
    if (userQuantity === includedUserQuantity) return "1 usuário incluso";
    if (!pricesVisible) return userQuantity + " usuários";
    return userQuantity + " usuários (" + formatCurrency(userLicensePrice()) + ")";
  }

  function userLicenseRuleDescription() {
    if (userQuantity === includedUserQuantity) return "1 incluso na retaguarda";
    if (!pricesVisible) return userQuantity >= unlimitedUserStartQuantity ? "Licença ilimitada" : "Usuário adicional";
    if (userQuantity >= unlimitedUserStartQuantity) return "Limite " + formatCurrency(priceSettings.unlimitedUsers);
    return formatCurrency(priceSettings.additionalUser) + " por usuário adicional";
  }

  function updateUserLicenses(requestedQuantity, announce = true) {
    const previousQuantity = userQuantity;
    userQuantity = Math.min(maximumUserQuantity, Math.max(includedUserQuantity, requestedQuantity));
    elements.userLicenseTitle.textContent = userLicenseDescription();
    elements.userLicenseRule.textContent = userLicenseRuleDescription();
    elements.userQuantity.textContent = String(userQuantity);
    elements.decreaseUsersButton.disabled = userQuantity === includedUserQuantity;
    elements.increaseUsersButton.disabled = userQuantity === maximumUserQuantity;

    updateTotalPrice();
    if (announce && userQuantity !== previousQuantity) {
      const message = userQuantity >= unlimitedUserStartQuantity
        ? userQuantity + " usuários: " + (pricesVisible ? "limite de " + formatCurrency(priceSettings.unlimitedUsers) : "licença ilimitada") + "."
        : userQuantity + (userQuantity === 1 ? " usuário incluso." : pricesVisible ? " usuários: " + formatCurrency(userLicensePrice()) + "." : " usuários selecionados.");
      showAnnouncement(message);
    }
  }

  function isSingleChargeProduct(product) {
    return product.singleCharge === true || product.platform.toLocaleLowerCase("pt-BR").includes("browser");
  }

  function billingRuleText(product) {
    if (product.customBillingRule) return product.customBillingRule;
    const additionalPrice = productAdditionalPrice(product);
    const priceCap = productPriceCap(product);
    if (product.includedQuantity && additionalPrice !== null) {
      return "inclui " + product.includedQuantity + "; + " + formatCurrency(additionalPrice) + " extra";
    }
    if (priceCap !== null) return "por unidade · teto " + formatCurrency(priceCap);
    if (isSingleChargeProduct(product)) return "por CNPJ";
    return "por unidade";
  }

  function equipmentInstanceId(productId, instanceIndex) {
    return productId + "::" + instanceIndex;
  }

  function productPosition(product, instanceIndex) {
    const instanceId = equipmentInstanceId(product.id, instanceIndex);
    const savedPosition = savedPositions[scenarioPositionKey(instanceId)];
    if (savedPosition && Number.isFinite(savedPosition.x) && Number.isFinite(savedPosition.y)) {
      return savedPosition;
    }

    const ring = instanceIndex === 0 ? 0 : Math.ceil(instanceIndex / 8);
    const angle = ((instanceIndex - 1) % 8) * (Math.PI / 4);
    const distance = ring * 12;
    const columnOffset = Math.cos(angle) * distance;
    const rowOffset = Math.sin(angle) * distance;
    const halfSize = product.position.size / 2;
    return {
      x: Math.min(100 - halfSize, Math.max(halfSize, product.position.x + columnOffset)),
      y: Math.min(100 - halfSize, Math.max(halfSize, product.position.y + rowOffset))
    };
  }

  function applyOverlayPosition(overlay, position) {
    overlay.style.setProperty("--left", position.x + "%");
    overlay.style.setProperty("--top", position.y + "%");
    overlay.style.setProperty("--equipment-rotation", normalizedEquipmentRotation(position.rotation) + "deg");
  }

  function renderProductPreviewChecklist(product) {
    const itemFragment = document.createDocumentFragment();
    const previewItems = ["Sistema operacional: " + product.platform, ...product.strengths];

    previewItems.forEach((previewText, index) => {
      const item = document.createElement("li");
      if (index === 0) item.className = "is-platform";

      const check = document.createElement("span");
      check.setAttribute("aria-hidden", "true");
      check.textContent = "✓";

      const text = document.createElement("span");
      text.textContent = previewText;
      item.append(check, text);
      itemFragment.appendChild(item);
    });

    elements.solutionPreviewList.replaceChildren(itemFragment);
  }

  function updateGalleryImage() {
    const hasImages = activeGallery.length > 0;
    elements.solutionGalleryImage.hidden = !hasImages;
    elements.solutionGalleryEmpty.hidden = hasImages;
    elements.solutionGalleryPrevious.disabled = activeGallery.length < 2;
    elements.solutionGalleryNext.disabled = activeGallery.length < 2;

    if (!hasImages) {
      elements.solutionGalleryImage.removeAttribute("src");
      elements.solutionGalleryImage.alt = "";
      elements.solutionGalleryCount.textContent = "0 imagens";
      elements.solutionGalleryDots.replaceChildren();
      return;
    }

    const galleryItem = activeGallery[galleryIndex];
    elements.solutionGalleryImage.src = galleryItem.src;
    elements.solutionGalleryImage.alt = galleryItem.alt || ("Tela de " + previewProduct.name);
    elements.solutionGalleryCount.textContent = (galleryIndex + 1) + " de " + activeGallery.length;

    const dotsFragment = document.createDocumentFragment();
    activeGallery.forEach((unusedItem, index) => {
      const dot = document.createElement("span");
      if (index === galleryIndex) dot.className = "is-active";
      dotsFragment.appendChild(dot);
    });
    elements.solutionGalleryDots.replaceChildren(dotsFragment);
  }

  function renderProductGallery(product) {
    const customScreen = priceSettings.productScreens?.[product.id];
    activeGallery = customScreen
      ? [{ src: customScreen, alt: "Print personalizado de " + product.name }]
      : Array.isArray(product.gallery) ? product.gallery : [];
    galleryIndex = 0;
    const hasImages = activeGallery.length > 0;
    elements.solutionPreview.classList.toggle("has-gallery", hasImages);
    elements.solutionGallery.hidden = !hasImages;
    updateGalleryImage();
  }

  function changeGalleryImage(direction) {
    if (activeGallery.length < 2) return;
    galleryIndex = (galleryIndex + direction + activeGallery.length) % activeGallery.length;
    updateGalleryImage();
  }

  function positionSolutionPreview() {
    if (!previewAnchor || !elements.solutionPreview.classList.contains("is-visible")) return;

    const anchorRect = previewAnchor.getBoundingClientRect();
    const previewWidth = elements.solutionPreview.offsetWidth;
    const previewHeight = elements.solutionPreview.offsetHeight;
    const viewportMargin = 12;
    const anchorGap = 10;
    let left = anchorRect.left - previewWidth - anchorGap;

    if (left < viewportMargin) left = anchorRect.right + anchorGap;
    left = Math.min(Math.max(viewportMargin, left), window.innerWidth - previewWidth - viewportMargin);

    const top = Math.min(
      Math.max(viewportMargin, anchorRect.top),
      window.innerHeight - previewHeight - viewportMargin
    );

    elements.solutionPreview.style.left = left + "px";
    elements.solutionPreview.style.top = Math.max(viewportMargin, top) + "px";
  }

  function showProductPreview(product, anchor) {
    productOverlays.forEach((overlay) => overlay.classList.remove("is-selected"));
    previewProduct = product;
    previewAnchor = anchor;
    previewAnchor.classList.add("is-selected");
    elements.solutionPreviewTitle.textContent = product.name;
    renderProductPreviewChecklist(product);
    renderProductGallery(product);
    elements.solutionPreview.dataset.productId = product.id;
    elements.solutionPreview.setAttribute("aria-hidden", "false");
    elements.solutionPreview.removeAttribute("inert");
    elements.solutionPreview.classList.add("is-visible");
    window.requestAnimationFrame(positionSolutionPreview);
  }

  function toggleProductPreview(product, anchor) {
    const isSameProductVisible = elements.solutionPreview.classList.contains("is-visible")
      && previewAnchor === anchor;
    if (isSameProductVisible) {
      hideProductPreview(product.id);
      return;
    }

    showProductPreview(product, anchor);
  }

  function hideProductPreview(productId) {
    if (elements.solutionPreview.dataset.productId !== productId) return;
    previewAnchor?.classList.remove("is-selected");
    elements.solutionPreview.classList.remove("is-visible");
    elements.solutionPreview.setAttribute("aria-hidden", "true");
    elements.solutionPreview.setAttribute("inert", "");
    previewAnchor = undefined;
    previewProduct = undefined;
  }

  function rotateProductOverlay(product, overlay, instanceId) {
    const instanceIndex = Number(instanceId.split("::")[1]) || 0;
    const currentPosition = productPosition(product, instanceIndex);
    const nextPosition = {
      ...currentPosition,
      rotation: (normalizedEquipmentRotation(currentPosition.rotation) + 90) % 360
    };

    savedPositions[scenarioPositionKey(instanceId)] = nextPosition;
    persistPositions();
    applyOverlayPosition(overlay, nextPosition);
    if (previewAnchor === overlay) positionSolutionPreview();
  }

  function openAccessExplanation() {
    if (elements.solutionPreview.classList.contains("is-visible")) {
      hideProductPreview(elements.solutionPreview.dataset.productId);
    }

    accessModalPreviousFocus = document.activeElement;
    elements.accessExplanationModal.removeAttribute("inert");
    elements.accessExplanationModal.setAttribute("aria-hidden", "false");
    elements.accessExplanationModal.classList.add("is-visible");
    elements.accessExplanationButton.setAttribute("aria-expanded", "true");
    window.setTimeout(() => elements.accessModalClose.focus(), 0);
  }

  function closeAccessExplanation() {
    if (!elements.accessExplanationModal.classList.contains("is-visible")) return;
    elements.accessExplanationModal.classList.remove("is-visible");
    elements.accessExplanationModal.setAttribute("aria-hidden", "true");
    elements.accessExplanationModal.setAttribute("inert", "");
    elements.accessExplanationButton.setAttribute("aria-expanded", "false");
    if (accessModalPreviousFocus instanceof HTMLElement) accessModalPreviousFocus.focus();
  }

  function openLayoutShortcuts() {
    shortcutsModalPreviousFocus = document.activeElement;
    elements.layoutShortcutsModal.removeAttribute("inert");
    elements.layoutShortcutsModal.setAttribute("aria-hidden", "false");
    elements.layoutShortcutsModal.classList.add("is-visible");
    window.setTimeout(() => elements.layoutShortcutsClose.focus(), 0);
  }

  function closeLayoutShortcuts() {
    if (!elements.layoutShortcutsModal.classList.contains("is-visible")) return;
    elements.layoutShortcutsModal.classList.remove("is-visible");
    elements.layoutShortcutsModal.setAttribute("aria-hidden", "true");
    elements.layoutShortcutsModal.setAttribute("inert", "");
    if (shortcutsModalPreviousFocus instanceof HTMLElement) shortcutsModalPreviousFocus.focus();
  }

  function createPriceField(labelText, key, value, helpText = "Valor mensal") {
    const field = document.createElement("label");
    field.className = "price-config-field";

    const label = document.createElement("span");
    label.textContent = labelText;
    const help = document.createElement("small");
    help.textContent = helpText;

    const group = document.createElement("span");
    group.className = "price-input-group";
    const prefix = document.createElement("span");
    prefix.textContent = "R$";
    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.step = "0.01";
    input.inputMode = "decimal";
    input.dataset.priceKey = key;
    input.value = value === null ? "" : String(value);
    input.placeholder = "Sem valor";
    input.setAttribute("aria-label", "Preço de " + labelText);
    group.append(prefix, input);
    field.append(label, help, group);
    return field;
  }

  function createSolutionEditField(product) {
    const field = document.createElement("div");
    field.className = "price-config-field solution-edit-field";
    const nameGroup = document.createElement("label");
    nameGroup.className = "solution-name-group";
    const nameLabel = document.createElement("small");
    nameLabel.textContent = "Nome da solução";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.maxLength = 80;
    nameInput.value = product.name;
    nameInput.dataset.productName = product.id;
    nameInput.setAttribute("aria-label", "Nome da solução " + product.name);
    nameGroup.append(nameLabel, nameInput);

    const help = document.createElement("small");
    help.textContent = billingRuleText(product);
    const priceGroup = document.createElement("label");
    priceGroup.className = "price-input-group";
    const prefix = document.createElement("span");
    prefix.textContent = "R$";
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.min = "0";
    priceInput.step = "0.01";
    priceInput.inputMode = "decimal";
    priceInput.dataset.priceKey = "product:" + product.id;
    const price = productPrice(product);
    priceInput.value = price === null ? "" : String(price);
    priceInput.placeholder = "Sem valor";
    priceInput.setAttribute("aria-label", "Preço de " + product.name);
    priceGroup.append(prefix, priceInput);
    field.append(nameGroup, help, priceGroup, createSolutionPrintControl(product));
    if (product.isCustomProduct) {
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "custom-solution-delete";
      removeButton.textContent = "Excluir";
      removeButton.setAttribute("aria-label", "Excluir solução personalizada " + product.name);
      removeButton.addEventListener("click", () => deleteCustomProduct(product.id));
      field.appendChild(removeButton);
    }
    return field;
  }

  function createSolutionPrintControl(product) {
    const storedScreen = priceSettings.productScreens?.[product.id];
    const control = document.createElement("div");
    control.className = "solution-print-control";

    const preview = document.createElement("img");
    preview.className = "solution-print-preview";
    preview.alt = "Print personalizado de " + product.name;
    preview.classList.toggle("is-empty", !storedScreen);
    if (storedScreen) preview.src = storedScreen;

    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = "Print do sistema";
    const status = document.createElement("small");
    status.textContent = storedScreen ? "Print personalizado ativo" : "Usando as imagens padrão";
    copy.append(title, status);

    const uploadLabel = document.createElement("label");
    uploadLabel.className = "solution-print-upload";
    const uploadText = document.createElement("span");
    uploadText.textContent = storedScreen ? "Trocar print" : "Subir print";
    const uploadInput = document.createElement("input");
    uploadInput.type = "file";
    uploadInput.accept = "image/png,image/jpeg,image/webp";
    uploadInput.setAttribute("aria-label", "Subir print de " + product.name);
    uploadLabel.append(uploadText, uploadInput);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "solution-print-remove";
    removeButton.textContent = "Remover print";
    removeButton.hidden = !storedScreen;
    removeButton.addEventListener("click", () => {
      delete priceSettings.productScreens[product.id];
      persistPriceSettings();
      preview.classList.add("is-empty");
      preview.removeAttribute("src");
      removeButton.hidden = true;
      uploadText.textContent = "Subir print";
      status.textContent = "Usando as imagens padrão";
    });

    uploadInput.addEventListener("change", async () => {
      const file = uploadInput.files?.[0];
      if (!file) return;
      status.textContent = "Ajustando print...";
      try {
        const resizedScreen = await resizeProductScreenshot(file);
        const previousScreen = priceSettings.productScreens[product.id];
        priceSettings.productScreens[product.id] = resizedScreen;
        if (!persistPriceSettings()) {
          if (previousScreen) priceSettings.productScreens[product.id] = previousScreen;
          else delete priceSettings.productScreens[product.id];
          throw new Error("O navegador ficou sem espaço. Remova outro print ou escolha uma imagem menor.");
        }
        preview.src = resizedScreen;
        preview.classList.remove("is-empty");
        removeButton.hidden = false;
        uploadText.textContent = "Trocar print";
        status.textContent = "Print personalizado ativo";
      } catch (error) {
        status.textContent = error.message;
      } finally {
        uploadInput.value = "";
      }
    });

    control.append(preview, copy, uploadLabel, removeButton);
    return control;
  }

  function resizeProductScreenshot(file) {
    return new Promise((resolve, reject) => {
      if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
        reject(new Error("Use um print PNG, JPG ou WebP."));
        return;
      }
      if (file.size > 12 * 1024 * 1024) {
        reject(new Error("O print deve ter no máximo 12 MB."));
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Não foi possível ler este print."));
      reader.onload = () => {
        const image = new Image();
        image.onerror = () => reject(new Error("Formato de imagem não reconhecido."));
        image.onload = () => {
          const ratio = Math.min(960 / image.naturalWidth, 540 / image.naturalHeight, 1);
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
          canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
          const context = canvas.getContext("2d");
          context.imageSmoothingEnabled = true;
          context.imageSmoothingQuality = "high";
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          let dataUrl = canvas.toDataURL("image/webp", .8);
          if (dataUrl.length > 450000) dataUrl = canvas.toDataURL("image/webp", .58);
          if (dataUrl.length > 600000) {
            reject(new Error("Este print ainda ficou muito grande após o ajuste."));
            return;
          }
          resolve(dataUrl);
        };
        image.src = String(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  function renderCustomIconList() {
    const fragment = document.createDocumentFragment();
    spriteY.forEach((unusedY, y) => {
      spriteX.forEach((unusedX, x) => {
        const button = document.createElement("button");
        const icon = document.createElement("span");
        const isSelected = !uploadedCustomIcon && selectedCustomIcon[0] === x && selectedCustomIcon[1] === y;
        button.type = "button";
        button.className = "custom-icon-option";
        button.setAttribute("role", "option");
        button.setAttribute("aria-selected", String(isSelected));
        button.setAttribute("aria-label", "Usar ícone " + (y * spriteX.length + x + 1));
        button.classList.toggle("is-selected", isSelected);
        icon.className = "equipment-sprite";
        icon.style.setProperty("--sprite-x", spriteX[x]);
        icon.style.setProperty("--sprite-y", spriteY[y]);
        button.appendChild(icon);
        button.addEventListener("click", () => {
          selectedCustomIcon = [x, y];
          uploadedCustomIcon = undefined;
          elements.customIconUpload.value = "";
          elements.customIconPreview.hidden = true;
          elements.customIconStatus.textContent = "Ícone existente selecionado.";
          renderCustomIconList();
        });
        fragment.appendChild(button);
      });
    });
    elements.customIconList.replaceChildren(fragment);
  }

  function resizeCustomIcon(file) {
    return new Promise((resolve, reject) => {
      if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
        reject(new Error("Use uma imagem PNG, JPG ou WebP."));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        reject(new Error("A imagem deve ter no máximo 10 MB."));
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Não foi possível ler esta imagem."));
      reader.onload = () => {
        const image = new Image();
        image.onerror = () => reject(new Error("Formato de imagem não reconhecido."));
        image.onload = () => {
          const maximumSide = 384;
          const ratio = Math.min(maximumSide / image.naturalWidth, maximumSide / image.naturalHeight, 1);
          const width = Math.max(1, Math.round(image.naturalWidth * ratio));
          const height = Math.max(1, Math.round(image.naturalHeight * ratio));
          const canvas = document.createElement("canvas");
          canvas.width = maximumSide;
          canvas.height = maximumSide;
          const context = canvas.getContext("2d");
          context.imageSmoothingEnabled = true;
          context.imageSmoothingQuality = "high";
          context.drawImage(image, Math.round((maximumSide - width) / 2), Math.round((maximumSide - height) / 2), width, height);
          let dataUrl = canvas.toDataURL("image/png");
          if (dataUrl.length > 500000) dataUrl = canvas.toDataURL("image/webp", .86);
          resolve(dataUrl);
        };
        image.src = String(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  async function handleCustomIconUpload() {
    const file = elements.customIconUpload.files?.[0];
    if (!file) return;
    elements.customIconStatus.textContent = "Ajustando imagem...";
    try {
      uploadedCustomIcon = await resizeCustomIcon(file);
      const previewImage = elements.customIconPreview.querySelector("img");
      previewImage.src = uploadedCustomIcon;
      elements.customIconPreview.hidden = false;
      elements.customIconStatus.textContent = "Imagem ajustada automaticamente para 384 × 384 px.";
      renderCustomIconList();
    } catch (error) {
      uploadedCustomIcon = undefined;
      elements.customIconUpload.value = "";
      elements.customIconPreview.hidden = true;
      elements.customIconStatus.textContent = error.message;
    }
  }

  function resetCustomSolutionForm() {
    elements.customSolutionForm.reset();
    elements.customSolutionShowOnMap.checked = true;
    elements.customSolutionShowOnMap.disabled = false;
    elements.customSolutionSingleCharge.checked = true;
    selectedCustomIcon = [0, 0];
    uploadedCustomIcon = undefined;
    elements.customIconPreview.hidden = true;
    elements.customIconStatus.textContent = "A imagem será ajustada automaticamente.";
    renderCustomIconList();
  }

  function toggleCustomSolutionForm() {
    const willOpen = elements.customSolutionForm.hidden;
    elements.customSolutionForm.hidden = !willOpen;
    elements.toggleCustomSolutionFormButton.setAttribute("aria-expanded", String(willOpen));
    elements.toggleCustomSolutionFormButton.textContent = willOpen ? "Fechar cadastro" : "+ Nova solução";
    if (willOpen) window.setTimeout(() => elements.customSolutionName.focus(), 0);
  }

  function updateCustomSolutionCategoryState() {
    elements.customSolutionShowOnMap.disabled = false;
  }

  function addCustomProduct(event) {
    event.preventDefault();
    const name = elements.customSolutionName.value.trim().slice(0, 80);
    if (!name) {
      elements.customSolutionName.focus();
      return;
    }
    const priceText = elements.customSolutionPrice.value.trim();
    const defaultPrice = priceText === "" ? null : normalizePrice(priceText, null);
    const description = elements.customSolutionDescription.value.trim().slice(0, 120) || "Solução personalizada";
    const selectedCategory = ["food", "retail", "general"].includes(elements.customSolutionCategory.value)
      ? elements.customSolutionCategory.value
      : "food";
    const product = {
      id: "custom-product-" + Date.now() + "-" + Math.random().toString(16).slice(2),
      number: "00",
      name,
      category: selectedCategory,
      integrationGroup: undefined,
      location: description,
      platform: elements.customSolutionPlatform.value.trim().slice(0, 60) || "Serviço",
      defaultPrice,
      strengths: [description],
      sprite: [...selectedCustomIcon],
      customIcon: uploadedCustomIcon,
      showOnMap: elements.customSolutionShowOnMap.checked,
      singleCharge: elements.customSolutionSingleCharge.checked,
      position: { x: 50, y: 50, size: 7 },
      isCustomProduct: true
    };
    products.push(product);
    defaultProductNames[product.id] = name;
    priceSettings.products[product.id] = defaultPrice;
    priceSettings.additionalPrices[product.id] = null;
    priceSettings.priceCaps[product.id] = null;
    priceSettings.productNames[product.id] = name;
    productQuantities.set(product.id, 0);
    renumberProducts();
    try {
      persistCustomProducts();
      persistPriceSettings();
    } catch {
      products.splice(products.indexOf(product), 1);
      delete defaultProductNames[product.id];
      delete priceSettings.products[product.id];
      delete priceSettings.additionalPrices[product.id];
      delete priceSettings.priceCaps[product.id];
      delete priceSettings.productNames[product.id];
      productQuantities.delete(product.id);
      elements.customIconStatus.textContent = "Não foi possível salvar. Tente uma imagem menor.";
      return;
    }
    resetCustomSolutionForm();
    elements.customSolutionForm.hidden = true;
    elements.toggleCustomSolutionFormButton.setAttribute("aria-expanded", "false");
    elements.toggleCustomSolutionFormButton.textContent = "+ Nova solução";
    renderPriceSettings();
    renderProductList();
    showAnnouncement(name + " adicionada às licenças.");
  }

  function deleteCustomProduct(productId) {
    const productIndex = products.findIndex((product) => product.id === productId && product.isCustomProduct);
    if (productIndex < 0) return;
    const product = products[productIndex];
    if (!window.confirm("Excluir a solução personalizada ‘" + product.name + "’?")) return;
    setProductQuantity(productId, 0, false);
    products.splice(productIndex, 1);
    productQuantities.delete(productId);
    productButtons.delete(productId);
    delete defaultProductNames[productId];
    delete priceSettings.products[productId];
    delete priceSettings.additionalPrices[productId];
    delete priceSettings.priceCaps[productId];
    delete priceSettings.productNames[productId];
    delete priceSettings.productScreens[productId];
    renumberProducts();
    try {
      persistCustomProducts();
      persistPriceSettings();
    } catch {
      showAnnouncement("A solução foi removida, mas a alteração não pôde ser salva.");
    }
    renderPriceSettings();
    renderProductList();
    if (elements.integrationSettingsModal.classList.contains("is-visible")) renderIntegrationSettings();
  }

  function renderIntegrationPriceSummary() {
    const integrationProducts = catalogProducts("integration");
    const card = document.createElement("div");
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    const detail = document.createElement("small");
    const editButton = document.createElement("button");
    card.className = "integration-settings-summary";
    title.textContent = "Integrações";
    detail.textContent = integrationProducts.length + (integrationProducts.length === 1 ? " integração cadastrada" : " integrações cadastradas");
    editButton.type = "button";
    editButton.textContent = "Editar";
    editButton.addEventListener("click", openIntegrationSettings);
    copy.append(title, detail);
    card.append(copy, editButton);
    elements.integrationPriceSummary.replaceChildren(card);
  }

  function createIntegrationSettingsField(product) {
    const field = document.createElement("div");
    const identity = document.createElement("div");
    const nameInput = document.createElement("input");
    const group = document.createElement("small");
    const priceGroup = document.createElement("label");
    const prefix = document.createElement("span");
    const priceInput = document.createElement("input");
    field.className = "integration-settings-field";
    identity.className = "integration-settings-identity";
    nameInput.type = "text";
    nameInput.maxLength = 80;
    nameInput.value = product.name;
    nameInput.dataset.integrationName = product.id;
    nameInput.setAttribute("aria-label", "Nome da integração " + product.name);
    group.textContent = product.integrationGroup || "Outras";
    identity.append(nameInput, group);
    priceGroup.className = "price-input-group";
    prefix.textContent = "R$";
    priceInput.type = "number";
    priceInput.min = "0";
    priceInput.step = "0.01";
    priceInput.inputMode = "decimal";
    priceInput.dataset.integrationPrice = product.id;
    const price = productPrice(product);
    priceInput.value = price === null ? "" : String(price);
    priceInput.placeholder = "Sem valor";
    priceInput.setAttribute("aria-label", "Preço de " + product.name);
    priceGroup.append(prefix, priceInput);
    field.append(identity, priceGroup);
    if (product.isCustomProduct) {
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "custom-solution-delete";
      removeButton.textContent = "Excluir";
      removeButton.addEventListener("click", () => deleteCustomProduct(product.id));
      field.appendChild(removeButton);
    }
    return field;
  }

  function renderIntegrationSettings() {
    const fragment = document.createDocumentFragment();
    [...integrationGroupOrder, "Outras"].forEach((groupName) => {
      const groupedProducts = catalogProducts("integration").filter((product) => (product.integrationGroup || "Outras") === groupName);
      if (groupedProducts.length === 0) return;
      const section = document.createElement("section");
      const title = document.createElement("h3");
      const list = document.createElement("div");
      section.className = "integration-settings-group";
      title.textContent = groupName;
      list.className = "integration-settings-group-list";
      groupedProducts.forEach((product) => list.appendChild(createIntegrationSettingsField(product)));
      section.append(title, list);
      fragment.appendChild(section);
    });
    elements.integrationSettingsList.replaceChildren(fragment);
  }

  function openIntegrationSettings() {
    renderIntegrationSettings();
    integrationSettingsPreviousFocus = document.activeElement;
    elements.priceSettingsModal.setAttribute("inert", "");
    elements.integrationSettingsModal.removeAttribute("inert");
    elements.integrationSettingsModal.setAttribute("aria-hidden", "false");
    elements.integrationSettingsModal.classList.add("is-visible");
    window.setTimeout(() => elements.newIntegrationName.focus(), 0);
  }

  function closeIntegrationSettings() {
    if (!elements.integrationSettingsModal.classList.contains("is-visible")) return;
    elements.integrationSettingsModal.classList.remove("is-visible");
    elements.integrationSettingsModal.setAttribute("aria-hidden", "true");
    elements.integrationSettingsModal.setAttribute("inert", "");
    if (elements.priceSettingsModal.classList.contains("is-visible")) elements.priceSettingsModal.removeAttribute("inert");
    renderIntegrationPriceSummary();
    if (integrationSettingsPreviousFocus instanceof HTMLElement) integrationSettingsPreviousFocus.focus();
  }

  function addCustomIntegration(event) {
    event.preventDefault();
    const name = elements.newIntegrationName.value.trim().slice(0, 80);
    if (!name) return elements.newIntegrationName.focus();
    const priceText = elements.newIntegrationPrice.value.trim();
    const defaultPrice = priceText === "" ? null : normalizePrice(priceText, null);
    const product = {
      id: "custom-integration-" + Date.now() + "-" + Math.random().toString(16).slice(2),
      number: "00",
      name,
      category: "integration",
      integrationGroup: elements.newIntegrationGroup.value || "Outras",
      location: "Integração disponível",
      platform: "Integração",
      defaultPrice,
      strengths: ["Integração disponível para a operação"],
      sprite: [0, 0],
      showOnMap: false,
      singleCharge: true,
      customBillingRule: "por CNPJ",
      position: { x: 50, y: 50, size: 7 },
      isCustomProduct: true
    };
    products.push(product);
    defaultProductNames[product.id] = name;
    priceSettings.products[product.id] = defaultPrice;
    priceSettings.additionalPrices[product.id] = null;
    priceSettings.priceCaps[product.id] = null;
    priceSettings.productNames[product.id] = name;
    productQuantities.set(product.id, 0);
    renumberProducts();
    persistCustomProducts();
    persistPriceSettings();
    elements.integrationSettingsForm.reset();
    renderIntegrationSettings();
    renderIntegrationPriceSummary();
    showAnnouncement(name + " adicionada às integrações.");
  }

  function applyIntegrationSettings() {
    elements.integrationSettingsModal.querySelectorAll("[data-integration-name]").forEach((input) => {
      const productId = input.dataset.integrationName;
      priceSettings.productNames[productId] = input.value.trim().slice(0, 80) || defaultProductNames[productId];
    });
    elements.integrationSettingsModal.querySelectorAll("[data-integration-price]").forEach((input) => {
      priceSettings.products[input.dataset.integrationPrice] = input.value.trim() === "" ? null : normalizePrice(input.value, null);
    });
    applyConfiguredProductNames();
    persistPriceSettings();
    refreshPricingDisplay();
    renderPriceSettings();
    closeIntegrationSettings();
    showAnnouncement("Integrações atualizadas.");
  }

  function renderPriceSettings() {
    elements.mainPriceList.replaceChildren(
      createPriceField("Retaguarda", "base", priceSettings.base, "Licença base mensal"),
      createPriceField("Usuário adicional", "additionalUser", priceSettings.additionalUser, "Cobrado no 2º e 3º usuário"),
      createPriceField("Usuários ilimitados", "unlimitedUsers", priceSettings.unlimitedUsers, "Valor total a partir de 4 usuários")
    );

    const foodFragment = document.createDocumentFragment();
    catalogProducts("food").forEach((product) => {
      foodFragment.appendChild(createSolutionEditField(product));
      if (Number.isFinite(product.additionalPrice)) {
        foodFragment.appendChild(createPriceField(product.name + " — unidade extra", "additional:" + product.id, productAdditionalPrice(product), "Valor após a quantidade incluída"));
      }
      if (Number.isFinite(product.priceCap)) {
        foodFragment.appendChild(createPriceField(product.name + " — teto", "cap:" + product.id, productPriceCap(product), "Limite máximo mensal"));
      }
    });
    elements.foodPriceList.replaceChildren(foodFragment);

    const retailFragment = document.createDocumentFragment();
    catalogProducts("retail").forEach((product) => {
      retailFragment.appendChild(createSolutionEditField(product));
      if (Number.isFinite(product.additionalPrice)) {
        retailFragment.appendChild(createPriceField(product.name + " — unidade extra", "additional:" + product.id, productAdditionalPrice(product), "Valor após a quantidade incluída"));
      }
      if (Number.isFinite(product.priceCap)) {
        retailFragment.appendChild(createPriceField(product.name + " — teto", "cap:" + product.id, productPriceCap(product), "Limite máximo mensal"));
      }
    });
    elements.retailPriceList.replaceChildren(retailFragment);

    const generalFragment = document.createDocumentFragment();
    catalogProducts("general").forEach((product) => {
      generalFragment.appendChild(createSolutionEditField(product));
    });
    elements.generalPriceList.replaceChildren(generalFragment);

    renderIntegrationPriceSummary();
  }

  function refreshPricingDisplay() {
    elements.basePriceDisplay.hidden = !pricesVisible;
    elements.basePriceDisplay.textContent = pricesVisible ? formatCurrency(priceSettings.base) : "";
    document.body.classList.toggle("prices-hidden", !pricesVisible);
    elements.priceVisibilityButton.setAttribute("aria-pressed", String(pricesVisible));
    elements.priceVisibilityButton.setAttribute("aria-label", pricesVisible ? "Desativar exibição de preços" : "Ativar exibição de preços");
    elements.priceVisibilityButton.classList.toggle("is-hidden", !pricesVisible);
    elements.priceVisibilityLabel.textContent = pricesVisible ? "Ativo" : "Inativo";
    renderProductList();
    productOverlays.forEach((overlay, instanceId) => {
      const product = products.find((candidate) => candidate.id === overlay.dataset.productId);
      if (!product) return;
      const instanceIndex = Number(instanceId.split("::")[1]);
      const tag = overlay.querySelector(".equipment-tag");
      if (tag) tag.textContent = product.name + (productQuantity(product.id) > 1 ? " " + (instanceIndex + 1) : "");
      overlay.setAttribute("aria-label", "Ver detalhes de " + product.name + ", unidade " + (instanceIndex + 1));
    });
    updateUserLicenses(userQuantity, false);
    if (elements.integrationsModal.classList.contains("is-visible")) renderIntegrationList();
  }

  function renderIntegrationList() {
    const integrationProducts = catalogProducts("integration");
    const fragment = document.createDocumentFragment();
    integrationButtons.clear();
    integrationGroupColumns.forEach((columnGroups) => {
      const column = document.createElement("div");
      column.className = "integration-column";
      columnGroups.forEach((groupName) => {
        const groupedProducts = integrationProducts.filter((product) => (product.integrationGroup || "Outras") === groupName);
        if (groupedProducts.length === 0) return;
        const group = document.createElement("section");
        const title = document.createElement("h3");
        const list = document.createElement("div");
        group.className = "integration-group";
        title.textContent = groupName;
        list.className = "integration-group-list";
        groupedProducts.forEach((product) => list.appendChild(createProductButton(product, integrationButtons)));
        group.append(title, list);
        column.appendChild(group);
      });
      if (column.childElementCount > 0) fragment.appendChild(column);
    });
    elements.integrationList.replaceChildren(fragment);
    integrationProducts.forEach((product) => syncProductButton(product));
    elements.integrationEmptyState.hidden = integrationProducts.length > 0;
  }

  function openIntegrationsModal() {
    if (elements.solutionPreview.classList.contains("is-visible")) {
      hideProductPreview(elements.solutionPreview.dataset.productId);
    }
    closeAccessExplanation();
    closePriceSettings();
    renderIntegrationList();
    integrationsModalPreviousFocus = document.activeElement;
    elements.integrationsModal.removeAttribute("inert");
    elements.integrationsModal.setAttribute("aria-hidden", "false");
    elements.integrationsModal.classList.add("is-visible");
    window.setTimeout(() => {
      elements.integrationsModal.querySelector("button:not([hidden])")?.focus();
    }, 0);
  }

  function closeIntegrationsModal() {
    if (!elements.integrationsModal.classList.contains("is-visible")) return;
    elements.integrationsModal.classList.remove("is-visible");
    elements.integrationsModal.setAttribute("aria-hidden", "true");
    elements.integrationsModal.setAttribute("inert", "");
    if (integrationsModalPreviousFocus instanceof HTMLElement) integrationsModalPreviousFocus.focus();
  }

  function openPriceSettings() {
    if (elements.solutionPreview.classList.contains("is-visible")) {
      hideProductPreview(elements.solutionPreview.dataset.productId);
    }
    closeAccessExplanation();
    closeIntegrationsModal();
    renderPriceSettings();
    renderCustomIconList();
    priceModalPreviousFocus = document.activeElement;
    elements.priceSettingsModal.removeAttribute("inert");
    elements.priceSettingsModal.setAttribute("aria-hidden", "false");
    elements.priceSettingsModal.classList.add("is-visible");
    elements.priceSettingsButton.setAttribute("aria-expanded", "true");
    window.setTimeout(() => elements.priceSettingsModal.querySelector("[data-product-name]")?.focus(), 0);
  }

  function closePriceSettings() {
    if (elements.integrationSettingsModal.classList.contains("is-visible")) closeIntegrationSettings();
    if (!elements.priceSettingsModal.classList.contains("is-visible")) return;
    elements.priceSettingsModal.classList.remove("is-visible");
    elements.priceSettingsModal.setAttribute("aria-hidden", "true");
    elements.priceSettingsModal.setAttribute("inert", "");
    elements.priceSettingsButton.setAttribute("aria-expanded", "false");
    if (priceModalPreviousFocus instanceof HTMLElement) priceModalPreviousFocus.focus();
  }

  function applyPriceSettings() {
    elements.priceSettingsModal.querySelectorAll("[data-product-name]").forEach((input) => {
      const productId = input.dataset.productName;
      const defaultName = defaultProductNames[productId];
      priceSettings.productNames[productId] = input.value.trim().slice(0, 80) || defaultName;
    });
    elements.priceSettingsModal.querySelectorAll("[data-price-key]").forEach((input) => {
      const value = input.value.trim() === "" ? null : normalizePrice(input.value, null);
      const key = input.dataset.priceKey;
      if (key.startsWith("product:")) priceSettings.products[key.slice(8)] = value;
      else if (key.startsWith("additional:")) priceSettings.additionalPrices[key.slice(11)] = value;
      else if (key.startsWith("cap:")) priceSettings.priceCaps[key.slice(4)] = value;
      else priceSettings[key] = value ?? 0;
    });
    applyConfiguredProductNames();
    persistPriceSettings();
    refreshPricingDisplay();
    closePriceSettings();
    showAnnouncement("Nomes e preços atualizados para esta apresentação.");
  }

  function resetPriceSettings() {
    priceSettings = defaultPriceSettings();
    applyConfiguredProductNames();
    persistPriceSettings();
    renderPriceSettings();
    refreshPricingDisplay();
    showAnnouncement("Nomes e preços padrão restaurados.");
  }

  function togglePriceVisibility() {
    pricesVisible = !pricesVisible;
    persistPriceVisibility();
    refreshPricingDisplay();
    renderPriceSettings();
    showAnnouncement(pricesVisible ? "Exibição de preços ativada." : "Exibição de preços desativada.");
  }

  function normalizedLayoutRotation(layoutItem) {
    return ((Number(layoutItem.rotation) || 0) % 360 + 360) % 360;
  }

  function layoutGeometry(piece, layoutItem, mapRect = elements.restaurantMap.getBoundingClientRect()) {
    const scale = Math.min(2.5, Math.max(.5, Number(layoutItem.scale) || 1));
    const scaleX = Number(layoutItem.scaleX) || 1;
    const isVertical = normalizedLayoutRotation(layoutItem) % 180 !== 0;
    if (!isVertical) {
      return {
        isVertical,
        halfWidth: piece.width * scaleX * scale / 2,
        halfHeight: piece.height * scale / 2,
        halfLength: piece.width * scaleX * scale / 2
      };
    }
    const widthToHeightRatio = mapRect.width / mapRect.height;
    const heightToWidthRatio = mapRect.height / mapRect.width;
    return {
      isVertical,
      halfWidth: piece.height * scale * heightToWidthRatio / 2,
      halfHeight: piece.width * scaleX * scale * widthToHeightRatio / 2,
      halfLength: piece.width * scaleX * scale * widthToHeightRatio / 2
    };
  }

  function layoutPositionForPointer(event, piece, layoutItem = {}) {
    const mapRect = elements.restaurantMap.getBoundingClientRect();
    const geometry = layoutGeometry(piece, layoutItem, mapRect);
    return {
      x: Math.min(100 - geometry.halfWidth, Math.max(geometry.halfWidth, ((event.clientX - mapRect.left) / mapRect.width) * 100)),
      y: Math.min(100 - geometry.halfHeight, Math.max(geometry.halfHeight, ((event.clientY - mapRect.top) / mapRect.height) * 100))
    };
  }

  function applyLayoutVisual(visual, piece) {
    if (piece.composite === "l") {
      visual.classList.add("uses-composite-l");
      visual.style.backgroundImage = 'url("' + piece.image + '")';
      visual.style.setProperty("--composite-thickness", piece.compositeThickness || "50%");
      return;
    }
    if (piece.image) {
      visual.classList.add("uses-image");
      visual.style.backgroundImage = 'url("' + piece.image + '")';
      visual.style.backgroundPosition = "center";
      visual.style.backgroundSize = piece.backgroundSize || "contain";
      if (piece.imageFilter) visual.style.filter = piece.imageFilter;
      return;
    }
    visual.style.setProperty("--layout-sprite-x", spriteX[piece.sprite[0]]);
    visual.style.setProperty("--layout-sprite-y", spriteY[piece.sprite[1]]);
  }

  function updateLayoutSelectionControls() {
    const selectedCount = selectedLayoutIds.size;
    elements.selectedLayoutCount.textContent = "Tamanho";
    elements.decreaseLayoutSizeButton.disabled = selectedCount === 0 || !isLayoutEditing;
    elements.increaseLayoutSizeButton.disabled = selectedCount === 0 || !isLayoutEditing;
  }

  function focusLayoutCanvas() {
    if (!isLayoutEditing || !isEditableScenario()) return;
    elements.layoutLayer.focus();
  }

  function refreshLayoutSelection() {
    elements.layoutLayer.querySelectorAll(".layout-object").forEach((object) => {
      const isSelected = selectedLayoutIds.has(object.dataset.layoutId);
      object.classList.toggle("is-selected", isSelected);
      object.setAttribute("aria-pressed", String(isSelected));
    });
    updateLayoutSelectionControls();
  }

  function selectLayoutItem(layoutId, toggle = false) {
    if (!layoutId) selectedLayoutIds.clear();
    else if (toggle) {
      if (selectedLayoutIds.has(layoutId)) selectedLayoutIds.delete(layoutId);
      else selectedLayoutIds.add(layoutId);
    } else {
      selectedLayoutIds.clear();
      selectedLayoutIds.add(layoutId);
    }
    refreshLayoutSelection();
  }

  function removeLayoutItem(layoutId) {
    if (!isLayoutEditing) return;
    const idsToRemove = layoutId ? new Set([layoutId]) : new Set(selectedLayoutIds);
    if (idsToRemove.size === 0) return;
    const removedCount = customLayout.filter((item) => idsToRemove.has(item.id)).length;
    customLayout = customLayout.filter((item) => !idsToRemove.has(item.id));
    idsToRemove.forEach((id) => selectedLayoutIds.delete(id));
    persistCustomLayout();
    renderCustomLayout();
    if (removedCount > 0) showAnnouncement(removedCount === 1 ? "Elemento removido do cenário." : removedCount + " elementos removidos do cenário.");
  }

  function resizeSelectedLayoutItems(change) {
    if (!isLayoutEditing || selectedLayoutIds.size === 0) return;
    const mapRect = elements.restaurantMap.getBoundingClientRect();
    customLayout.forEach((layoutItem) => {
      if (!selectedLayoutIds.has(layoutItem.id)) return;
      layoutItem.scale = Math.min(2.5, Math.max(.5, Math.round(((Number(layoutItem.scale) || 1) + change) * 10) / 10));
      const piece = layoutPieces.find((candidate) => candidate.type === layoutItem.type);
      if (!piece) return;
      const geometry = layoutGeometry(piece, layoutItem, mapRect);
      layoutItem.x = Math.min(100 - geometry.halfWidth, Math.max(geometry.halfWidth, layoutItem.x));
      layoutItem.y = Math.min(100 - geometry.halfHeight, Math.max(geometry.halfHeight, layoutItem.y));
    });
    persistCustomLayout();
    renderCustomLayout();
  }

  function moveSelectedLayoutItems(requestedX, requestedY) {
    if (!isLayoutEditing || selectedLayoutIds.size === 0) return;
    const mapRect = elements.restaurantMap.getBoundingClientRect();
    const selectedItems = customLayout.filter((layoutItem) => selectedLayoutIds.has(layoutItem.id));
    let minimumX = -Infinity;
    let maximumX = Infinity;
    let minimumY = -Infinity;
    let maximumY = Infinity;

    selectedItems.forEach((layoutItem) => {
      const piece = layoutPieces.find((candidate) => candidate.type === layoutItem.type);
      if (!piece) return;
      const geometry = layoutGeometry(piece, layoutItem, mapRect);
      minimumX = Math.max(minimumX, geometry.halfWidth - layoutItem.x);
      maximumX = Math.min(maximumX, 100 - geometry.halfWidth - layoutItem.x);
      minimumY = Math.max(minimumY, geometry.halfHeight - layoutItem.y);
      maximumY = Math.min(maximumY, 100 - geometry.halfHeight - layoutItem.y);
    });

    const deltaX = Math.min(maximumX, Math.max(minimumX, requestedX));
    const deltaY = Math.min(maximumY, Math.max(minimumY, requestedY));
    const objectById = new Map(Array.from(elements.layoutLayer.querySelectorAll(".layout-object"), (object) => [object.dataset.layoutId, object]));
    selectedItems.forEach((layoutItem) => {
      layoutItem.x = Math.round((layoutItem.x + deltaX) * 10) / 10;
      layoutItem.y = Math.round((layoutItem.y + deltaY) * 10) / 10;
      const object = objectById.get(layoutItem.id);
      object?.style.setProperty("--left", layoutItem.x + "%");
      object?.style.setProperty("--top", layoutItem.y + "%");
    });
    persistCustomLayout();
  }

  function duplicateSelectedLayoutItems() {
    if (!isLayoutEditing || selectedLayoutIds.size === 0) return;
    const mapRect = elements.restaurantMap.getBoundingClientRect();
    const copies = customLayout
      .filter((layoutItem) => selectedLayoutIds.has(layoutItem.id))
      .map((layoutItem, index) => {
        const copy = {
          ...layoutItem,
          id: layoutItem.type + "-copy-" + Date.now() + "-" + index + "-" + Math.random().toString(16).slice(2)
        };
        const piece = layoutPieces.find((candidate) => candidate.type === copy.type);
        if (piece) {
          const geometry = layoutGeometry(piece, copy, mapRect);
          copy.x = Math.min(100 - geometry.halfWidth, Math.max(geometry.halfWidth, copy.x + 3));
          copy.y = Math.min(100 - geometry.halfHeight, Math.max(geometry.halfHeight, copy.y + 3));
        }
        return copy;
      });
    customLayout.push(...copies);
    selectedLayoutIds.clear();
    copies.forEach((copy) => selectedLayoutIds.add(copy.id));
    persistCustomLayout();
    renderCustomLayout();
    showAnnouncement(copies.length === 1 ? "Elemento duplicado." : copies.length + " elementos duplicados.");
  }

  function updateLayoutSelectionBox(event) {
    if (!layoutSelectionState || layoutSelectionState.pointerId !== event.pointerId) return;
    event.preventDefault();
    layoutSelectionState.currentX = event.clientX;
    layoutSelectionState.currentY = event.clientY;
    const mapRect = elements.restaurantMap.getBoundingClientRect();
    const left = Math.max(0, Math.min(layoutSelectionState.startX, event.clientX) - mapRect.left);
    const top = Math.max(0, Math.min(layoutSelectionState.startY, event.clientY) - mapRect.top);
    const right = Math.min(mapRect.width, Math.max(layoutSelectionState.startX, event.clientX) - mapRect.left);
    const bottom = Math.min(mapRect.height, Math.max(layoutSelectionState.startY, event.clientY) - mapRect.top);
    layoutSelectionState.box.style.left = left + "px";
    layoutSelectionState.box.style.top = top + "px";
    layoutSelectionState.box.style.width = Math.max(0, right - left) + "px";
    layoutSelectionState.box.style.height = Math.max(0, bottom - top) + "px";
  }

  function startLayoutSelection(event) {
    if (!isLayoutEditing || event.target !== elements.layoutLayer) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    focusLayoutCanvas();
    if (!event.shiftKey) selectedLayoutIds.clear();
    refreshLayoutSelection();
    const box = document.createElement("div");
    box.className = "layout-selection-box";
    elements.layoutLayer.appendChild(box);
    elements.layoutLayer.setPointerCapture(event.pointerId);
    layoutSelectionState = {
      pointerId: event.pointerId,
      capture: elements.layoutLayer,
      box,
      startX: event.clientX,
      startY: event.clientY,
      currentX: event.clientX,
      currentY: event.clientY
    };
    updateLayoutSelectionBox(event);
  }

  function finishLayoutSelection(event) {
    if (!layoutSelectionState || layoutSelectionState.pointerId !== event.pointerId) return;
    updateLayoutSelectionBox(event);
    const completedSelection = layoutSelectionState;
    layoutSelectionState = undefined;
    if (completedSelection.capture.hasPointerCapture(event.pointerId)) completedSelection.capture.releasePointerCapture(event.pointerId);
    const selectionRect = {
      left: Math.min(completedSelection.startX, completedSelection.currentX),
      right: Math.max(completedSelection.startX, completedSelection.currentX),
      top: Math.min(completedSelection.startY, completedSelection.currentY),
      bottom: Math.max(completedSelection.startY, completedSelection.currentY)
    };
    const hasArea = selectionRect.right - selectionRect.left >= 4 || selectionRect.bottom - selectionRect.top >= 4;
    if (hasArea) {
      elements.layoutLayer.querySelectorAll(".layout-object").forEach((object) => {
        const objectRect = object.getBoundingClientRect();
        const intersects = objectRect.right >= selectionRect.left && objectRect.left <= selectionRect.right
          && objectRect.bottom >= selectionRect.top && objectRect.top <= selectionRect.bottom;
        if (intersects) selectedLayoutIds.add(object.dataset.layoutId);
      });
    }
    completedSelection.box.remove();
    refreshLayoutSelection();
  }

  function snapLayoutPosition(position, layoutItem, piece) {
    const snapped = { x: Math.round(position.x * 2) / 2, y: Math.round(position.y * 2) / 2 };
    if (piece.group !== "paredes") return snapped;
    const mapRect = elements.restaurantMap.getBoundingClientRect();
    const currentGeometry = layoutGeometry(piece, layoutItem, mapRect);
    const sameDirection = normalizedLayoutRotation(layoutItem) % 180;
    const alignmentLimit = 3.5;
    const joinLimit = 5;
    let bestDistance = alignmentLimit;
    customLayout.forEach((other) => {
      if (other.id === layoutItem.id) return;
      const otherPiece = layoutPieces.find((candidate) => candidate.type === other.type);
      if (otherPiece?.group !== "paredes" || normalizedLayoutRotation(other) % 180 !== sameDirection) return;
      const alignmentDistance = sameDirection === 0 ? Math.abs(other.y - snapped.y) : Math.abs(other.x - snapped.x);
      if (alignmentDistance < bestDistance) {
        bestDistance = alignmentDistance;
        if (sameDirection === 0) snapped.y = other.y;
        else snapped.x = other.x;
      }
      if (piece.type === "parede-reta" && otherPiece.type === "parede-reta") {
        const otherGeometry = layoutGeometry(otherPiece, other, mapRect);
        const joinDistance = currentGeometry.halfLength + otherGeometry.halfLength;
        if (!currentGeometry.isVertical && Math.abs(other.y - snapped.y) < alignmentLimit) {
          const candidates = [other.x - joinDistance, other.x + joinDistance];
          const nearest = candidates.reduce((best, candidate) => Math.abs(candidate - snapped.x) < Math.abs(best - snapped.x) ? candidate : best);
          if (Math.abs(nearest - snapped.x) < joinLimit) snapped.x = nearest;
        } else if (currentGeometry.isVertical && Math.abs(other.x - snapped.x) < alignmentLimit) {
          const candidates = [other.y - joinDistance, other.y + joinDistance];
          const nearest = candidates.reduce((best, candidate) => Math.abs(candidate - snapped.y) < Math.abs(best - snapped.y) ? candidate : best);
          if (Math.abs(nearest - snapped.y) < joinLimit) snapped.y = nearest;
        }
      }
    });
    snapped.x = Math.min(100 - currentGeometry.halfWidth, Math.max(currentGeometry.halfWidth, snapped.x));
    snapped.y = Math.min(100 - currentGeometry.halfHeight, Math.max(currentGeometry.halfHeight, snapped.y));
    return snapped;
  }

  function createLayoutObjectElement(layoutItem) {
    const piece = layoutPieces.find((candidate) => candidate.type === layoutItem.type);
    if (!piece) return null;
    const scale = Math.min(2.5, Math.max(.5, Number(layoutItem.scale) || 1));
    const object = document.createElement("div");
    object.className = "layout-object layout-object-" + piece.type;
    object.dataset.layoutId = layoutItem.id;
    object.style.setProperty("--left", layoutItem.x + "%");
    object.style.setProperty("--top", layoutItem.y + "%");
    object.style.setProperty("--layout-width", (piece.width * (Number(layoutItem.scaleX) || 1) * scale) + "%");
    object.style.setProperty("--layout-height", (piece.height * scale) + "%");
    object.setAttribute("role", "button");
    object.setAttribute("aria-label", piece.name + (isLayoutEditing ? ". Arraste ou use as setas para reposicionar. Use Shift mais clique para selecionar vários." : "."));
    object.setAttribute("aria-pressed", String(selectedLayoutIds.has(layoutItem.id)));
    object.classList.toggle("is-selected", selectedLayoutIds.has(layoutItem.id));
    object.classList.toggle("is-layout-vertical", normalizedLayoutRotation(layoutItem) % 180 !== 0);
    object.tabIndex = 0;

    const visual = document.createElement("span");
    visual.className = "layout-object-visual";
    applyLayoutVisual(visual, piece);
    visual.style.setProperty("--layout-rotation", (Number(layoutItem.rotation) || 0) + "deg");

    const label = document.createElement("span");
    label.className = "layout-object-label";
    label.textContent = piece.name;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "layout-object-remove";
    remove.textContent = "×";
    remove.setAttribute("aria-label", "Remover " + piece.name);
    remove.addEventListener("click", (event) => {
      event.stopPropagation();
      removeLayoutItem(layoutItem.id);
    });
    const rotate = document.createElement("button");
    rotate.type = "button";
    rotate.className = "layout-object-rotate";
    rotate.textContent = "↻";
    rotate.setAttribute("aria-label", "Girar " + piece.name + " em 90 graus");
    rotate.title = "Girar 90°";
    rotate.addEventListener("click", (event) => {
      event.stopPropagation();
      layoutItem.rotation = ((Number(layoutItem.rotation) || 0) + 90) % 360;
      visual.style.setProperty("--layout-rotation", layoutItem.rotation + "deg");
      object.classList.toggle("is-layout-vertical", normalizedLayoutRotation(layoutItem) % 180 !== 0);
      persistCustomLayout();
      showAnnouncement(piece.name + " girado em 90°.");
    });
    object.append(visual, label, rotate, remove);
    object.addEventListener("click", (event) => {
      if (isLayoutEditing) selectLayoutItem(layoutItem.id, event.shiftKey);
    });
    object.addEventListener("keydown", (event) => {
      if (!isLayoutEditing || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      selectLayoutItem(layoutItem.id, event.shiftKey);
    });
    object.addEventListener("pointerdown", (event) => startLayoutObjectDrag(event, layoutItem, piece, object));
    return object;
  }

  function renderCustomLayout() {
    const fragment = document.createDocumentFragment();
    customLayout.forEach((layoutItem) => {
      const object = createLayoutObjectElement(layoutItem);
      if (object) fragment.appendChild(object);
    });
    elements.layoutLayer.replaceChildren(fragment);
    updateLayoutSelectionControls();
  }

  function addLayoutItem(piece, position) {
    const layoutItem = {
      id: piece.type + "-" + Date.now() + "-" + Math.random().toString(16).slice(2),
      type: piece.type,
      x: position.x,
      y: position.y,
      rotation: 0,
      scale: 1,
      scaleX: 1
    };
    customLayout.push(layoutItem);
    const object = createLayoutObjectElement(layoutItem);
    if (object) elements.layoutLayer.appendChild(object);
    return { layoutItem, object };
  }

  function startLayoutPaletteDrag(event, piece, button) {
    if (!isLayoutEditing) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    button.setPointerCapture(event.pointerId);
    layoutDragState = {
      mode: "new",
      pointerId: event.pointerId,
      piece,
      capture: button,
      startClientX: event.clientX,
      startClientY: event.clientY
    };
  }

  function startLayoutObjectDrag(event, layoutItem, piece, object) {
    if (!isLayoutEditing) return;
    if (event.shiftKey) return;
    if (event.target.closest(".layout-object-remove, .layout-object-rotate")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    selectLayoutItem(layoutItem.id);
    object.focus({ preventScroll: true });
    object.setPointerCapture(event.pointerId);
    object.classList.add("is-dragging");
    layoutDragState = { mode: "existing", pointerId: event.pointerId, piece, capture: object, layoutItem, object };
  }

  function moveLayoutItem(event) {
    if (!layoutDragState || layoutDragState.pointerId !== event.pointerId) return;
    event.preventDefault();
    if (layoutDragState.mode === "new" && !layoutDragState.layoutItem) {
      const distance = Math.hypot(event.clientX - layoutDragState.startClientX, event.clientY - layoutDragState.startClientY);
      if (distance < 4) return;
      const created = addLayoutItem(layoutDragState.piece, layoutPositionForPointer(event, layoutDragState.piece));
      layoutDragState.layoutItem = created.layoutItem;
      layoutDragState.object = created.object;
      created.object?.classList.add("is-dragging");
    }
    if (!layoutDragState.layoutItem || !layoutDragState.object) return;
    const position = snapLayoutPosition(
      layoutPositionForPointer(event, layoutDragState.piece, layoutDragState.layoutItem),
      layoutDragState.layoutItem,
      layoutDragState.piece
    );
    layoutDragState.layoutItem.x = position.x;
    layoutDragState.layoutItem.y = position.y;
    layoutDragState.object.style.setProperty("--left", position.x + "%");
    layoutDragState.object.style.setProperty("--top", position.y + "%");
  }

  function finishLayoutItem(event) {
    if (!layoutDragState || layoutDragState.pointerId !== event.pointerId) return;
    const completedDrag = layoutDragState;
    layoutDragState = undefined;
    if (completedDrag.capture.hasPointerCapture(event.pointerId)) completedDrag.capture.releasePointerCapture(event.pointerId);
    if (!completedDrag.layoutItem) {
      const offset = (customLayout.length % 5) * 4;
      const created = addLayoutItem(completedDrag.piece, { x: 42 + offset, y: 43 + offset });
      completedDrag.layoutItem = created.layoutItem;
      completedDrag.object = created.object;
    }
    completedDrag.object?.classList.remove("is-dragging");
    if (completedDrag.layoutItem) {
      selectLayoutItem(completedDrag.layoutItem.id);
      completedDrag.object?.focus();
    }
    persistCustomLayout();
  }

  function renderLayoutPalette() {
    const fragment = document.createDocumentFragment();
    layoutGroups.forEach((group) => {
      const groupElement = document.createElement("section");
      groupElement.className = "layout-palette-group";
      const groupButton = document.createElement("button");
      groupButton.type = "button";
      groupButton.className = "layout-palette-group-button";
      groupButton.setAttribute("aria-expanded", "false");
      groupButton.innerHTML = "<span>" + group.name + "</span><b aria-hidden=\"true\">⌃</b>";
      const groupItems = document.createElement("div");
      groupItems.className = "layout-palette-group-items";
      groupItems.hidden = true;
      layoutPieces.filter((piece) => piece.group === group.id).forEach((piece) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "layout-palette-button layout-palette-" + piece.type;
        const thumbnail = document.createElement("span");
        thumbnail.className = "layout-palette-thumbnail";
        applyLayoutVisual(thumbnail, piece);
        const label = document.createElement("span");
        label.textContent = piece.name;
        button.append(thumbnail, label);
        button.addEventListener("pointerdown", (event) => startLayoutPaletteDrag(event, piece, button));
        button.addEventListener("click", (event) => {
          if (event.detail !== 0 || !isLayoutEditing) return;
          const offset = (customLayout.length % 5) * 4;
          const created = addLayoutItem(piece, { x: 42 + offset, y: 43 + offset });
          persistCustomLayout();
          selectLayoutItem(created.layoutItem.id);
        });
        groupItems.appendChild(button);
      });
      groupButton.addEventListener("click", () => {
        const willOpen = groupItems.hidden;
        elements.layoutPalette.querySelectorAll(".layout-palette-group-items").forEach((items) => { items.hidden = true; });
        elements.layoutPalette.querySelectorAll(".layout-palette-group-button").forEach((button) => button.setAttribute("aria-expanded", "false"));
        groupItems.hidden = !willOpen;
        groupButton.setAttribute("aria-expanded", String(willOpen));
      });
      groupElement.append(groupButton, groupItems);
      fragment.appendChild(groupElement);
    });
    elements.layoutPalette.replaceChildren(fragment);
  }

  function clearCustomLayout() {
    customLayout = [];
    selectedLayoutIds.clear();
    persistCustomLayout();
    renderCustomLayout();
    showAnnouncement("Desenho personalizado limpo.");
  }

  function isEditableScenario(scenario = currentScenario()) {
    return scenario?.category === "custom";
  }

  function updateLayoutEditorState() {
    const scenario = currentScenario();
    const isEditor = isEditableScenario(scenario);
    const hasCustomLayout = isEditor || scenario?.category === "custom-saved";
    elements.layoutBuilder.hidden = !isEditor;
    elements.layoutLayer.classList.toggle("is-visible", hasCustomLayout);
    elements.layoutLayer.classList.toggle("is-view-mode", hasCustomLayout && (!isEditor || !isLayoutEditing));
    elements.layoutPalette.hidden = !isEditor || !isLayoutEditing;
    elements.clearLayoutButton.hidden = !isEditor || !isLayoutEditing;
    elements.saveLayoutButton.hidden = !isEditor || !isLayoutEditing;
    elements.decreaseLayoutSizeButton.closest(".layout-size-control").hidden = !isEditor || !isLayoutEditing;
    elements.layoutModeButton.textContent = isLayoutEditing ? "Visualizar" : "Editar";
    elements.layoutModeButton.setAttribute("aria-pressed", String(!isLayoutEditing));
    elements.saveLayoutButton.textContent = editingSavedScenarioId ? "Salvar alterações" : "Salvar modelo";
    elements.deleteLayoutButton.hidden = !isEditor || !editingSavedScenarioId;
    if (!isLayoutEditing) {
      selectedLayoutIds.clear();
    }
    renderCustomLayout();
  }

  function openScenarioEditor() {
    const scenario = currentScenario();
    if (isEditableScenario(scenario)) {
      window.setTimeout(focusLayoutCanvas, 0);
      return;
    }
    editingSavedScenarioId = scenario?.category === "custom-saved" ? scenario.id : undefined;
    if (editingSavedScenarioId) customLayout = cloneLayout(scenario.layout);
    else customLayout = cloneLayout(draftCustomLayout);
    selectedLayoutIds.clear();
    setScenario(editorScenarioIndex);
    window.setTimeout(focusLayoutCanvas, 0);
  }

  function toggleLayoutMode() {
    if (!isEditableScenario()) return;
    if (isLayoutEditing) persistCustomLayout();
    isLayoutEditing = !isLayoutEditing;
    updateLayoutEditorState();
    if (isLayoutEditing) window.setTimeout(focusLayoutCanvas, 0);
    showAnnouncement(isLayoutEditing ? "Modo de edição ativado." : "Modo de visualização ativado.");
  }

  function saveCustomScenario() {
    if (editingSavedScenarioId) {
      const savedScenarioIndex = scenarios.findIndex((scenario) => scenario.id === editingSavedScenarioId);
      if (savedScenarioIndex < 0) return;
      scenarios[savedScenarioIndex].layout = cloneLayout(customLayout);
      persistSavedScenarios();
      editingSavedScenarioId = undefined;
      isLayoutEditing = false;
      setScenario(savedScenarioIndex);
      showAnnouncement("Alterações do modelo salvas.");
      return;
    }
    const suggestedName = "Meu cenário " + (scenarios.filter((item) => item.category === "custom-saved").length + 1);
    const chosenName = window.prompt("Nome do modelo personalizado:", suggestedName);
    if (chosenName === null) return;
    const name = chosenName.trim() || suggestedName;
    const savedScenario = {
      id: "custom-saved-" + Date.now(),
      category: "custom-saved",
      name,
      image: "assets/cenarios/piso-personalizado-v2.png",
      alt: "Modelo personalizado " + name,
      layout: cloneLayout(customLayout)
    };
    scenarios.push(savedScenario);
    persistSavedScenarios();
    draftCustomLayout = [];
    try {
      window.localStorage.setItem(layoutStorageKey, "[]");
    } catch {
      // O modelo salvo permanece disponível mesmo sem a limpeza do rascunho local.
    }
    setScenario(scenarios.length - 1);
    showAnnouncement("Modelo " + name + " salvo.");
  }

  function deleteSavedScenario() {
    const savedScenarioIndex = scenarios.findIndex((scenario) => scenario.id === editingSavedScenarioId);
    const scenario = scenarios[savedScenarioIndex];
    if (savedScenarioIndex < 0 || scenario?.category !== "custom-saved") return;
    if (!window.confirm("Excluir o modelo personalizado ‘" + scenario.name + "’?")) return;
    scenarios.splice(savedScenarioIndex, 1);
    persistSavedScenarios();
    editingSavedScenarioId = undefined;
    setScenario(0);
    showAnnouncement("Modelo personalizado excluído.");
  }

  function createProductButton(product, registry = productButtons) {
    const item = document.createElement("div");
    item.className = "product-item";
    item.dataset.productId = product.id;

    const selectButton = document.createElement("button");
    selectButton.type = "button";
    selectButton.className = "product-select";
    selectButton.setAttribute("aria-pressed", "false");
    selectButton.setAttribute("aria-label", "Adicionar " + product.name);

    const number = document.createElement("span");
    number.className = "product-number";
    number.textContent = product.number;

    const copy = document.createElement("span");
    copy.className = "product-copy";
    const name = document.createElement("strong");
    name.textContent = product.name;
    const location = document.createElement("small");
    location.textContent = product.location;
    copy.append(name, location);

    selectButton.append(number, copy);
    selectButton.addEventListener("click", () => {
      if (productQuantity(product.id) === 0) setProductQuantity(product.id, 1);
      else highlightProduct(product.id);
    });
    selectButton.addEventListener("mouseenter", () => highlightProduct(product.id));
    selectButton.addEventListener("mouseleave", () => {
      overlaysForProduct(product.id).forEach((overlay) => overlay.classList.remove("is-highlighted"));
    });

    const priceLine = document.createElement("span");
    priceLine.className = "product-price-line";
    const configuredProductPrice = productPrice(product);
    if (configuredProductPrice === null) {
      priceLine.hidden = true;
    } else {
      const priceValue = document.createElement("strong");
      priceValue.className = "product-price";
      priceValue.textContent = product.category === "integration" && configuredProductPrice === 0
        ? "Grátis"
        : formatCurrency(configuredProductPrice);
      const billingRule = document.createElement("small");
      billingRule.className = "billing-rule";
      billingRule.textContent = billingRuleText(product);
      billingRule.title = billingRule.textContent;
      priceLine.append(priceValue, billingRule);
    }

    const quantity = document.createElement("div");
    quantity.className = "quantity-control";
    quantity.setAttribute("role", "group");
    quantity.setAttribute("aria-label", "Quantidade de " + product.name);

    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.className = "quantity-button quantity-decrease";
    decrease.setAttribute("aria-label", "Diminuir quantidade de " + product.name);
    decrease.textContent = "−";
    decrease.addEventListener("click", () => setProductQuantity(product.id, productQuantity(product.id) - 1));

    const quantityValue = document.createElement("span");
    quantityValue.className = "quantity-value";
    quantityValue.textContent = "0";

    const increase = document.createElement("button");
    increase.type = "button";
    increase.className = "quantity-button quantity-increase";
    increase.setAttribute("aria-label", "Aumentar quantidade de " + product.name);
    increase.textContent = "+";
    increase.addEventListener("click", () => setProductQuantity(product.id, productQuantity(product.id) + 1));
    if (product.maximumQuantity === 1) increase.title = "Este módulo pode ser incluído somente uma vez";

    quantity.append(decrease, quantityValue, increase);
    item.append(selectButton, priceLine, quantity);
    registry.set(product.id, item);
    return item;
  }

  function createIntegrationsButton() {
    const button = document.createElement("button");
    const number = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const summary = document.createElement("small");
    const value = document.createElement("strong");
    const action = document.createElement("span");
    button.type = "button";
    button.className = "integrations-launch-button";
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", "integrationsModal");
    number.className = "product-number";
    number.textContent = "01";
    copy.className = "integrations-launch-copy";
    title.textContent = "Integrações";
    summary.className = "integrations-launch-summary";
    value.className = "integrations-launch-value";
    action.className = "integrations-launch-action";
    action.textContent = "Incluir";
    copy.append(title, summary);
    button.append(number, copy, value, action);
    button.addEventListener("click", openIntegrationsModal);
    syncIntegrationsButton(button);
    return button;
  }

  function integrationSelectionTotal() {
    return catalogProducts("integration").reduce((total, product) => {
      const quantity = productQuantity(product.id);
      const price = productPrice(product);
      if (quantity === 0 || price === null) return total;
      const additionalPrice = productAdditionalPrice(product);
      const priceCap = productPriceCap(product);
      let subtotal = product.includedQuantity && additionalPrice !== null
        ? price + Math.max(0, quantity - product.includedQuantity) * additionalPrice
        : price * (isSingleChargeProduct(product) ? 1 : quantity);
      if (priceCap !== null) subtotal = Math.min(subtotal, priceCap);
      return total + subtotal;
    }, 0);
  }

  function syncIntegrationsButton(button = elements.productList.querySelector(".integrations-launch-button")) {
    if (!button) return;
    const selected = catalogProducts("integration").filter((product) => productQuantity(product.id) > 0).length;
    const summary = button.querySelector(".integrations-launch-summary");
    const value = button.querySelector(".integrations-launch-value");
    if (summary) summary.textContent = selected === 0 ? "Nenhuma incluída" : selected + (selected === 1 ? " incluída" : " incluídas");
    if (value) value.textContent = pricesVisible ? formatCurrency(integrationSelectionTotal()) : "";
    button.classList.toggle("is-active", selected > 0);
  }

  function createProductOverlay(product, instanceIndex) {
    const instanceId = equipmentInstanceId(product.id, instanceIndex);
    const overlay = document.createElement("div");
    overlay.className = "equipment-overlay";
    overlay.dataset.productId = product.id;
    overlay.dataset.instanceId = instanceId;
    applyOverlayPosition(overlay, productPosition(product, instanceIndex));
    overlay.style.setProperty("--size", product.position.size + "%");
    overlay.style.setProperty("--sprite-x", spriteX[product.sprite[0]]);
    overlay.style.setProperty("--sprite-y", spriteY[product.sprite[1]]);
    overlay.setAttribute("role", "group");
    overlay.setAttribute("aria-label", product.name + ", unidade " + (instanceIndex + 1) + ". Pressione Enter para ver detalhes.");
    overlay.tabIndex = 0;

    const sprite = document.createElement("span");
    sprite.className = "equipment-sprite";
    if (product.customIcon) {
      sprite.classList.add("uses-custom-icon");
      sprite.style.backgroundImage = 'url("' + product.customIcon + '")';
    } else if (product.screenType) {
      sprite.classList.add("has-screen-overlay", "has-screen-" + product.screenType);
      sprite.appendChild(createEquipmentScreen(product.screenType));
    }
    const tag = document.createElement("span");
    tag.className = "equipment-tag";
    tag.textContent = product.name + (productQuantity(product.id) > 1 ? " " + (instanceIndex + 1) : "");

    const rotate = document.createElement("button");
    rotate.type = "button";
    rotate.className = "equipment-overlay-rotate";
    rotate.setAttribute("aria-label", "Girar " + product.name + ", unidade " + (instanceIndex + 1) + ", em 90 graus");
    rotate.title = "Girar 90°";
    rotate.textContent = "↻";
    rotate.addEventListener("pointerdown", (event) => event.stopPropagation());
    rotate.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      rotateProductOverlay(product, overlay, instanceId);
    });

    overlay.append(sprite, rotate, tag);
    overlay.addEventListener("pointerdown", (event) => startDragging(event, product, instanceId));
    overlay.addEventListener("pointermove", moveDraggedProduct);
    overlay.addEventListener("pointerup", finishDragging);
    overlay.addEventListener("pointercancel", finishDragging);
    overlay.addEventListener("keydown", (event) => {
      if (event.target !== overlay) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleProductPreview(product, overlay);
    });
    productOverlays.set(instanceId, overlay);
    return overlay;
  }

  function createEquipmentScreen(screenType) {
    const screen = document.createElement("span");
    screen.className = "equipment-screen equipment-screen-" + screenType;
    screen.setAttribute("aria-hidden", "true");
    if (screenType === "payment") {
      const total = document.createElement("b");
      const methods = document.createElement("span");
      const action = document.createElement("i");
      total.textContent = "R$";
      methods.textContent = "PIX  ▪  CARTÃO";
      action.textContent = "PAGAR";
      screen.append(total, methods, action);
    } else {
      const calendar = document.createElement("b");
      const slots = document.createElement("span");
      calendar.textContent = "RESERVAS";
      for (let index = 0; index < 6; index += 1) {
        const slot = document.createElement("i");
        slot.className = index === 1 || index === 4 ? "is-busy" : "is-free";
        slots.appendChild(slot);
      }
      screen.append(calendar, slots);
    }
    return screen;
  }

  function overlaysForProduct(productId) {
    return Array.from(productOverlays.values()).filter((overlay) => overlay.dataset.productId === productId);
  }

  function startDragging(event, product, instanceId) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const overlay = productOverlays.get(instanceId);
    if (!overlay || !activeProducts.has(product.id)) return;

    event.preventDefault();
    overlay.setPointerCapture(event.pointerId);
    productOverlays.forEach((candidate) => candidate.classList.remove("is-highlighted"));
    overlay.classList.add("is-dragging", "is-highlighted");
    dragState = {
      pointerId: event.pointerId,
      product,
      instanceId,
      overlay,
      position: productPosition(product, Number(instanceId.split("::")[1])),
      startClientX: event.clientX,
      startClientY: event.clientY,
      moved: false
    };
  }

  function moveDraggedProduct(event) {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    event.preventDefault();

    if (Math.hypot(event.clientX - dragState.startClientX, event.clientY - dragState.startClientY) > 4) {
      dragState.moved = true;
    }

    const mapRect = elements.restaurantMap.getBoundingClientRect();
    const halfSize = dragState.product.position.size / 2;
    const position = {
      x: Math.min(100 - halfSize, Math.max(halfSize, ((event.clientX - mapRect.left) / mapRect.width) * 100)),
      y: Math.min(100 - halfSize, Math.max(halfSize, ((event.clientY - mapRect.top) / mapRect.height) * 100)),
      rotation: normalizedEquipmentRotation(dragState.position.rotation)
    };

    dragState.position = position;
    applyOverlayPosition(dragState.overlay, position);
    positionSolutionPreview();
  }

  function finishDragging(event) {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const completedDrag = dragState;
    dragState = undefined;

    if (completedDrag.overlay.hasPointerCapture(event.pointerId)) {
      completedDrag.overlay.releasePointerCapture(event.pointerId);
    }
    completedDrag.overlay.classList.remove("is-dragging");
    if (completedDrag.moved) {
      savedPositions[scenarioPositionKey(completedDrag.instanceId)] = completedDrag.position;
      persistPositions();
      showAnnouncement(completedDrag.product.name + " reposicionado e salvo.");
      return;
    }

    toggleProductPreview(completedDrag.product, completedDrag.overlay);
  }

  function resetPositions() {
    const scenarioPrefix = currentScenario().id + "::";
    Object.keys(savedPositions).forEach((key) => {
      if (key.startsWith(scenarioPrefix)) delete savedPositions[key];
    });
    persistPositions();

    productOverlays.forEach((overlay, instanceId) => {
      const product = products.find((candidate) => candidate.id === overlay.dataset.productId);
      const instanceIndex = Number(instanceId.split("::")[1]);
      if (product) applyOverlayPosition(overlay, productPosition(product, instanceIndex));
    });
    showAnnouncement("Posições originais deste cenário restauradas.");
  }

  function productQuantity(productId) {
    return productQuantities.get(productId) || 0;
  }

  function updateTotalPrice() {
    let total = priceSettings.base + userLicensePrice();
    let totalUnits = 0;
    let missingPrices = 0;
    const billableGroups = new Map();

    products.forEach((product) => {
      const quantity = productQuantity(product.id);
      if (quantity === 0) return;

      totalUnits += quantity;
      const price = productPrice(product);
      if (price === null) {
        if (!product.hidePrice) missingPrices += 1;
        return;
      }

      const billingKey = product.billingGroup || product.id;
      const existingGroup = billableGroups.get(billingKey);
      if (existingGroup) {
        existingGroup.quantity += quantity;
      } else {
        billableGroups.set(billingKey, { product, quantity, price });
      }
    });

    billableGroups.forEach(({ product, quantity, price }) => {
      let subtotal;
      const additionalPrice = productAdditionalPrice(product);
      const priceCap = productPriceCap(product);
      if (product.includedQuantity && additionalPrice !== null) {
        subtotal = price + Math.max(0, quantity - product.includedQuantity) * additionalPrice;
      } else {
        const billableQuantity = isSingleChargeProduct(product) ? 1 : quantity;
        subtotal = price * billableQuantity;
      }

      if (priceCap !== null) subtotal = Math.min(subtotal, priceCap);
      total += subtotal;
    });

    elements.totalPrice.textContent = pricesVisible ? formatCurrency(total) : "";
    if (!pricesVisible) {
      elements.totalPriceDetails.textContent = "";
      return;
    }
    if (totalUnits === 0) {
      elements.totalPriceDetails.textContent = "Retaguarda · " + userLicenseDescription();
      return;
    }

    const activeModules = products.filter((product) => activeProducts.has(product.id)).length;
    const moduleText = activeModules + (activeModules === 1 ? " módulo" : " módulos");
    const unitText = totalUnits + (totalUnits === 1 ? " unidade" : " unidades");
    const missingText = missingPrices > 0
      ? " · " + missingPrices + (missingPrices === 1 ? " valor a definir" : " valores a definir")
      : "";
    elements.totalPriceDetails.textContent = "Retaguarda + " + userLicenseDescription() + " · " + moduleText + " · " + unitText + missingText;
  }

  function renderProductList() {
    const buttonFragment = document.createDocumentFragment();
    productButtons.clear();
    if (activeCatalog === "general") buttonFragment.appendChild(createIntegrationsButton());
    catalogProducts().forEach((product) => {
      buttonFragment.appendChild(createProductButton(product));
    });
    elements.productList.replaceChildren(buttonFragment);
    catalogProducts().forEach((product) => syncProductButton(product));
    elements.totalCount.textContent = String(products.length);
    updateTotalPrice();
  }

  function initializeProducts() {
    products.forEach((product) => productQuantities.set(product.id, 0));
    elements.equipmentLayer.replaceChildren();
    renderProductList();
  }

  function syncProductButton(product) {
    const item = productButtons.get(product.id) || integrationButtons.get(product.id);
    if (!item) return;
    const quantity = productQuantity(product.id);
    const isActive = quantity > 0;
    const productMaximumQuantity = product.maximumQuantity || maximumQuantity;
    item.classList.toggle("is-active", isActive);
    item.querySelector(".product-select")?.setAttribute("aria-pressed", String(isActive));
    item.querySelector(".product-select")?.setAttribute("aria-label", (isActive ? (product.showOnMap === false ? "Solução incluída: " : "Destacar ") : "Adicionar ") + product.name + (isActive && product.showOnMap !== false ? " no mapa" : ""));
    const quantityValue = item.querySelector(".quantity-value");
    const decreaseButton = item.querySelector(".quantity-decrease");
    const increaseButton = item.querySelector(".quantity-increase");
    if (quantityValue) quantityValue.textContent = String(quantity);
    if (decreaseButton) decreaseButton.disabled = quantity === 0;
    if (increaseButton) increaseButton.disabled = quantity >= productMaximumQuantity;
  }

  function highlightProduct(productId) {
    if (!activeProducts.has(productId)) return;
    productOverlays.forEach((overlay) => overlay.classList.remove("is-highlighted"));
    overlaysForProduct(productId).forEach((overlay) => overlay.classList.add("is-highlighted"));
  }

  function setProductQuantity(productId, requestedQuantity, announce = true, highlight = true) {
    const product = products.find((candidate) => candidate.id === productId);
    const item = productButtons.get(productId);
    if (!product) return;

    const previousQuantity = productQuantity(productId);
    const productMaximumQuantity = product.maximumQuantity || maximumQuantity;
    const quantity = Math.min(productMaximumQuantity, Math.max(0, requestedQuantity));
    const isActive = quantity > 0;
    productQuantities.set(productId, quantity);

    if (quantity > previousQuantity && product.showOnMap !== false) {
      for (let instanceIndex = previousQuantity; instanceIndex < quantity; instanceIndex += 1) {
        const overlay = createProductOverlay(product, instanceIndex);
        elements.equipmentLayer.appendChild(overlay);
        window.requestAnimationFrame(() => {
          overlay.classList.add("is-visible");
          if (highlight) overlay.classList.add("is-highlighted");
        });
      }
    } else if (quantity < previousQuantity && product.showOnMap !== false) {
      for (let instanceIndex = previousQuantity - 1; instanceIndex >= quantity; instanceIndex -= 1) {
        const instanceId = equipmentInstanceId(productId, instanceIndex);
        const overlay = productOverlays.get(instanceId);
        if (previewAnchor === overlay) hideProductPreview(productId);
        overlay?.remove();
        productOverlays.delete(instanceId);
      }
    }

    if (isActive) {
      activeProducts.add(productId);
    } else {
      activeProducts.delete(productId);
      if (elements.solutionPreview.dataset.productId === productId) hideProductPreview(productId);
    }
    syncProductButton(product);
    overlaysForProduct(productId).forEach((overlay, instanceIndex) => {
      const tag = overlay.querySelector(".equipment-tag");
      if (tag) tag.textContent = product.name + (quantity > 1 ? " " + (instanceIndex + 1) : "");
    });

    refreshCategoryState();
    updateTotalPrice();
    syncIntegrationsButton();

    if (announce && quantity !== previousQuantity) {
      if (quantity === 0) showAnnouncement(product.name + " removido do cenário.");
      else {
        showAnnouncement(product.name + ": " + quantity + (quantity === 1 ? " unidade adicionada." : " unidades adicionadas."));
      }
    }
  }

  function showAllProducts() {
    catalogProducts().forEach((product) => setProductQuantity(product.id, Math.max(1, productQuantity(product.id)), false, false));
    productOverlays.forEach((overlay) => overlay.classList.remove("is-highlighted"));
    const catalogLabels = { food: "Food", retail: "Varejo", general: "Gerais" };
    showAnnouncement("Todas as soluções " + (catalogLabels[activeCatalog] || "") + " foram adicionadas.");
  }

  function clearProducts() {
    products.forEach((product) => setProductQuantity(product.id, 0, false));
    updateUserLicenses(includedUserQuantity, false);
    showAnnouncement("Cenário limpo para uma nova apresentação.");
  }

  function refreshCategoryState() {
    elements.activeCount.textContent = String(activeProducts.size);
  }

  function navigableScenarios() {
    return scenarios.filter((scenario) => scenario.category !== "custom");
  }

  function navigateScenario(direction) {
    const availableScenarios = navigableScenarios();
    const currentIndex = availableScenarios.findIndex((scenario) => scenario.id === currentScenario()?.id);
    const nextIndex = currentIndex < 0
      ? 0
      : (currentIndex + direction + availableScenarios.length) % availableScenarios.length;
    setScenario(scenarios.indexOf(availableScenarios[nextIndex]));
  }

  function setScenario(index) {
    activeScenarioIndex = (index + scenarios.length) % scenarios.length;
    const scenario = scenarios[activeScenarioIndex];
    const isEditor = isEditableScenario(scenario);
    const isCustom = isCustomScenario(scenario);
    const scenarioBeingEdited = editingSavedScenarioId
      ? scenarios.find((candidate) => candidate.id === editingSavedScenarioId)
      : undefined;
    if (scenario.category !== "custom") editingSavedScenarioId = undefined;
    elements.scenarioImage.classList.add("is-changing");
    elements.scenarioImage.src = scenario.image;
    elements.scenarioImage.alt = scenario.alt;
    elements.scenarioName.textContent = isEditor ? (scenarioBeingEdited?.name || "Novo cenário") : scenario.name;
    elements.scenarioStatusLabel.textContent = isCustom ? (scenario.category === "custom-saved" ? "Modelo salvo" : "Editor de cenário") : scenario.name + " conectado";
    if (isEditor) {
      elements.scenarioCategory.textContent = editingSavedScenarioId ? "Personalizado · editar modelo" : "Personalizado · novo modelo";
      if (!editingSavedScenarioId) customLayout = cloneLayout(draftCustomLayout);
      selectedLayoutIds.clear();
      isLayoutEditing = true;
    } else if (scenario.category === "custom-saved") {
      elements.scenarioCategory.textContent = "Personalizado · modelo salvo";
      customLayout = cloneLayout(scenario.layout);
      selectedLayoutIds.clear();
      isLayoutEditing = false;
    } else {
      const availableScenarios = navigableScenarios();
      const scenarioIndex = availableScenarios.findIndex((candidate) => candidate.id === scenario.id) + 1;
      elements.scenarioCategory.textContent = "Cenário " + scenarioIndex + " de " + availableScenarios.length;
    }
    updateLayoutEditorState();
    elements.customScenarioButton.classList.toggle("is-active", isEditor);
    productOverlays.forEach((overlay, instanceId) => {
      const product = products.find((candidate) => candidate.id === overlay.dataset.productId);
      const instanceIndex = Number(instanceId.split("::")[1]);
      if (product) applyOverlayPosition(overlay, productPosition(product, instanceIndex));
    });
    setCatalog(activeCatalog);
  }

  function setCatalog(category) {
    if (!["food", "retail", "general"].includes(category)) return;
    activeCatalog = category;
    elements.catalogButtons.forEach((button) => {
      const isActive = button.dataset.catalog === category;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    renderProductList();
    refreshCategoryState();
    updateTotalPrice();
  }

  function showAnnouncement(message) {
    window.clearTimeout(announcementTimer);
    elements.announcement.textContent = message;
    elements.announcement.classList.add("is-visible");
    announcementTimer = window.setTimeout(() => {
      elements.announcement.classList.remove("is-visible");
    }, 1800);
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement && document.fullscreenEnabled) {
        await document.documentElement.requestFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        document.body.classList.toggle("presentation-mode");
      }
    } catch {
      document.body.classList.toggle("presentation-mode");
    }
  }

  initializeProducts();
  updateSideMenu();
  renderLayoutPalette();
  renderCustomLayout();
  refreshPricingDisplay();
  updateUserLicenses(includedUserQuantity, false);
  setScenario(0);
  elements.clearButton.addEventListener("click", clearProducts);
  elements.showAllButton.addEventListener("click", showAllProducts);
  elements.fullscreenButton.addEventListener("click", toggleFullscreen);
  elements.sideMenuToggle.addEventListener("click", toggleSideMenu);
  elements.configurator.addEventListener("transitionend", (event) => {
    if (event.propertyName === "grid-template-columns" || event.propertyName === "grid-template-rows") {
      positionSolutionPreview();
    }
  });
  elements.resetPositionsButton?.addEventListener("click", resetPositions);
  elements.previousScenarioButton.addEventListener("click", () => navigateScenario(-1));
  elements.nextScenarioButton.addEventListener("click", () => navigateScenario(1));
  elements.customScenarioButton.addEventListener("click", openScenarioEditor);
  elements.catalogButtons.forEach((button) => button.addEventListener("click", () => setCatalog(button.dataset.catalog)));
  elements.scenarioImage.addEventListener("load", () => elements.scenarioImage.classList.remove("is-changing"));
  elements.decreaseUsersButton.addEventListener("click", () => updateUserLicenses(userQuantity - 1));
  elements.increaseUsersButton.addEventListener("click", () => updateUserLicenses(userQuantity + 1));
  elements.accessExplanationButton.addEventListener("click", openAccessExplanation);
  elements.accessModalClose.addEventListener("click", closeAccessExplanation);
  elements.accessExplanationModal.querySelector("[data-access-close]").addEventListener("click", closeAccessExplanation);
  elements.priceSettingsButton.addEventListener("click", openPriceSettings);
  elements.priceModalClose.addEventListener("click", closePriceSettings);
  elements.priceSettingsModal.querySelectorAll("[data-price-close]").forEach((button) => button.addEventListener("click", closePriceSettings));
  elements.integrationSettingsClose.addEventListener("click", closeIntegrationSettings);
  elements.integrationSettingsModal.querySelectorAll("[data-integration-settings-close]").forEach((button) => button.addEventListener("click", closeIntegrationSettings));
  elements.integrationSettingsForm.addEventListener("submit", addCustomIntegration);
  elements.applyIntegrationSettingsButton.addEventListener("click", applyIntegrationSettings);
  elements.integrationsModalClose.addEventListener("click", closeIntegrationsModal);
  elements.integrationsModal.querySelectorAll("[data-integrations-close]").forEach((button) => button.addEventListener("click", closeIntegrationsModal));
  elements.priceVisibilityButton.addEventListener("click", togglePriceVisibility);
  elements.applyPricesButton.addEventListener("click", applyPriceSettings);
  elements.resetPricesButton.addEventListener("click", resetPriceSettings);
  elements.clearLayoutButton.addEventListener("click", clearCustomLayout);
  elements.layoutModeButton.addEventListener("click", toggleLayoutMode);
  elements.decreaseLayoutSizeButton.addEventListener("click", () => resizeSelectedLayoutItems(-.1));
  elements.increaseLayoutSizeButton.addEventListener("click", () => resizeSelectedLayoutItems(.1));
  elements.layoutShortcutsButton.addEventListener("click", openLayoutShortcuts);
  elements.layoutShortcutsClose.addEventListener("click", closeLayoutShortcuts);
  elements.layoutShortcutsModal.querySelectorAll("[data-shortcuts-close]").forEach((button) => button.addEventListener("click", closeLayoutShortcuts));
  elements.layoutLayer.addEventListener("pointerdown", startLayoutSelection);
  elements.toggleCustomSolutionFormButton.addEventListener("click", toggleCustomSolutionForm);
  elements.customSolutionForm.addEventListener("submit", addCustomProduct);
  elements.customSolutionCategory.addEventListener("change", updateCustomSolutionCategoryState);
  elements.customIconUpload.addEventListener("change", handleCustomIconUpload);
  elements.clearCustomIconButton.addEventListener("click", () => {
    uploadedCustomIcon = undefined;
    elements.customIconUpload.value = "";
    elements.customIconPreview.hidden = true;
    elements.customIconStatus.textContent = "Ícone existente selecionado.";
    renderCustomIconList();
  });
  elements.saveLayoutButton.addEventListener("click", saveCustomScenario);
  elements.deleteLayoutButton.addEventListener("click", deleteSavedScenario);
  elements.solutionPreviewClose.addEventListener("click", () => {
    hideProductPreview(elements.solutionPreview.dataset.productId);
  });
  elements.solutionGalleryPrevious.addEventListener("click", () => changeGalleryImage(-1));
  elements.solutionGalleryNext.addEventListener("click", () => changeGalleryImage(1));
  elements.productList.addEventListener("scroll", positionSolutionPreview, { passive: true });
  window.addEventListener("resize", positionSolutionPreview);
  document.addEventListener("pointermove", moveLayoutItem);
  document.addEventListener("pointermove", updateLayoutSelectionBox);
  document.addEventListener("pointerup", finishLayoutItem);
  document.addEventListener("pointerup", finishLayoutSelection);
  document.addEventListener("pointercancel", finishLayoutItem);
  document.addEventListener("pointercancel", finishLayoutSelection);
  document.addEventListener("keydown", (event) => {
    const isTextEntry = Boolean(event.target.closest("input, textarea, select, [contenteditable='true']"));
    const hasOpenDialog = elements.priceSettingsModal.classList.contains("is-visible")
      || elements.integrationSettingsModal.classList.contains("is-visible")
      || elements.accessExplanationModal.classList.contains("is-visible")
      || elements.layoutShortcutsModal.classList.contains("is-visible")
      || elements.integrationsModal.classList.contains("is-visible");
    const blocksEditorShortcut = isTextEntry || hasOpenDialog;
    const arrowDirections = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1]
    };
    if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase("pt-BR") === "d" && isLayoutEditing && selectedLayoutIds.size > 0 && !blocksEditorShortcut) {
      event.preventDefault();
      duplicateSelectedLayoutItems();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase("pt-BR") === "a" && isLayoutEditing && customLayout.length > 0 && !blocksEditorShortcut) {
      event.preventDefault();
      selectedLayoutIds.clear();
      customLayout.forEach((layoutItem) => selectedLayoutIds.add(layoutItem.id));
      refreshLayoutSelection();
      return;
    }
    if (arrowDirections[event.key] && isLayoutEditing && selectedLayoutIds.size > 0 && !blocksEditorShortcut) {
      event.preventDefault();
      const step = event.shiftKey ? 2 : .5;
      moveSelectedLayoutItems(arrowDirections[event.key][0] * step, arrowDirections[event.key][1] * step);
      return;
    }
    if ((event.key === "Delete" || event.key === "Backspace") && isLayoutEditing && selectedLayoutIds.size > 0 && !blocksEditorShortcut) {
      event.preventDefault();
      removeLayoutItem();
      return;
    }
    if (event.key === "Escape") {
      closeLayoutShortcuts();
      closeIntegrationSettings();
      closePriceSettings();
      closeAccessExplanation();
      closeIntegrationsModal();
      selectLayoutItem(undefined);
    }
  });
  document.addEventListener("fullscreenchange", () => {
    document.body.classList.toggle("presentation-mode", Boolean(document.fullscreenElement));
    window.requestAnimationFrame(positionSolutionPreview);
  });
})();
