/* Base de Datos de Sistemas & Proyectos Reales con Galería de Fotos y Videos - Portfolio Desarrollador */

export const PROJECTS = [
  {
    id: "estudio-arca",
    category: "facturacion",
    categoryLabel: "Facturación & ARCA",
    title: "Gestor Contable & Facturación ARCA / AFIP",
    subtitle: "Sistema integral de emisión de comprobantes fiscales, gestión de clientes y cuentas corrientes",
    thumb: "assets/images/estudio_proyecto.jpeg",
    mediaCount: "📸 3 Capturas",
    tags: ["PHP 8", "MySQL", "API ARCA / AFIP", "Facturación Electrónica", "PDFs"],
    demoUrl: "#contacto",
    gallery: [
      { type: "image", src: "assets/images/estudio_proyecto.jpeg", title: "Gestión de Comprobantes & AFIP" },
      { type: "image", src: "assets/images/estudio_proyecto1.jpeg", title: "Estado de Cuenta de Clientes" },
      { type: "image", src: "assets/images/estudio_proyecto2.jpeg", title: "Panel de Liquidación & Caja" }
    ],
    features: [
      "Integración directa con API oficial de ARCA/AFIP sin abonos mensuales.",
      "Módulo de facturación A, B y C con generación de PDF y QR fiscal.",
      "Control de caja diaria y estado de cuenta de clientes detallado.",
      "Arquitectura cliente SOAP/REST desarrollada en PHP nativo."
    ],
    demoPath: "demos/arca/index.html"
  },
  {
    id: "las-piedritas-pos",
    category: "pos",
    categoryLabel: "TPV Gastronómico & PWA",
    title: "Las Piedritas - TPV Gastronómico & PWA",
    subtitle: "Sistema POS para salones, control de mesas, cocina, arqueo de caja y app PWA para delivery",
    thumb: "assets/images/laspiedritas.jpeg",
    mediaCount: "📸 4 Fotos • 🎥 7 Videos Demos",
    tags: ["Fullstack JS/PHP", "PWA", "TPV Touch", "Comandas & Tickets", "Control de Mesas"],
    demoUrl: "#contacto",
    gallery: [
      { type: "image", src: "assets/images/laspiedritas.jpeg", title: "Panel General TPV Gastronómico" },
      { type: "image", src: "assets/images/laspiedritas1.jpeg", title: "Mapa Interactivo de Mesas" },
      { type: "image", src: "assets/images/laspiedritas2.jpeg", title: "Módulo de Toma de Pedidos & Mozos" },
      { type: "image", src: "assets/images/laspiedritas3.jpeg", title: "Arqueo de Caja & Reportes" },
      { type: "video", src: "VIDEOS/mesas.mp4", title: "Demo Video: Control de Mesas en Tiempo Real" },
      { type: "video", src: "VIDEOS/caja.mp4", title: "Demo Video: Gestión de Caja & Cobros" },
      { type: "video", src: "VIDEOS/arqueo.mp4", title: "Demo Video: Arqueo de Caja por Turnos" },
      { type: "video", src: "VIDEOS/delivery.mp4", title: "Demo Video: Módulo de Delivery & Pedidos" },
      { type: "video", src: "VIDEOS/delivery cocina.mp4", title: "Demo Video: Integración con Pantalla de Cocina" },
      { type: "video", src: "VIDEOS/productos.mp4", title: "Demo Video: Gestión de Productos & Precios" },
      { type: "video", src: "VIDEOS/control de usuarios.mp4", title: "Demo Video: Permisos & Roles de Empleados" }
    ],
    features: [
      "Panel interactivo de mesas en tiempo real (Libre, Ocupada, Reservada).",
      "Módulo de comandas compatible con impresoras térmicas de cocina.",
      "Gestión de arqueo de caja por turnos y control de mozos.",
      "Plataforma optimizada para pantallas táctiles y dispositivos móviles."
    ],
    demoPath: "demos/piedritas/index.html"
  },
  {
    id: "queempa-delivery",
    category: "ecommerce",
    categoryLabel: "E-commerce & WhatsApp",
    title: "QUEEMPA - App de Pedidos estilo PedidosYa",
    subtitle: "Web app interactiva de pedidos en línea con carrito flotante, selección de gustos y checkout por WhatsApp",
    thumb: "assets/images/queempa.jpeg",
    mediaCount: "📸 3 Fotos • 🎥 2 Videos Demos",
    tags: ["Vanilla JS", "UX PedidosYa", "WhatsApp API", "Carrito Flotante", "Panel Admin"],
    demoUrl: "#contacto",
    gallery: [
      { type: "image", src: "assets/images/queempa.jpeg", title: "Menú Interactivo estilo PedidosYa" },
      { type: "image", src: "assets/images/queempa1.jpeg", title: "Modal de Selección de Gustos & Opciones" },
      { type: "image", src: "assets/images/queempa2.jpeg", title: "Carrito Flotante & Checkout WhatsApp" },
      { type: "video", src: "VIDEOS/QEEMPA - Empanadas & Pizzas.mp4", title: "Demo Video: Experiencia de Pedido del Cliente" },
      { type: "video", src: "VIDEOS/QEEMPA - Panel de Administrador.mp4", title: "Demo Video: Panel de Control del Administrador" }
    ],
    features: [
      "Catálogo digital interactivo estilo app nativa (cero comisiones).",
      "Selección dinámica de gustos, tamaños y extras por producto.",
      "Carrito de compras flotante con cálculo de totales en tiempo real.",
      "Checkout directo integrando la orden formateada vía WhatsApp."
    ],
    demoPath: "demos/delivery/index.html"
  },
  {
    id: "metalmim-industrial",
    category: "ecommerce",
    categoryLabel: "Catálogo & Cotizador",
    title: "Metalmim - Catálogo Industrial & Cotizador Web",
    subtitle: "Plataforma de exhibición de productos metalúrgicos, cotización en línea y administración de contenidos",
    thumb: "assets/images/metalmim.jpeg",
    mediaCount: "📸 2 Fotos • 🌐 Sitio Web Activo",
    tags: ["PHP/MySQL", "CMS a Medida", "Catálogo Digital", "Cotizaciones", "Sitio Web Activo"],
    demoUrl: "https://metalmim.is-great.net/",
    liveUrl: "https://metalmim.is-great.net/",
    gallery: [
      { type: "image", src: "assets/images/metalmim.jpeg", title: "Vista del Catálogo Industrial (Home)" },
      { type: "image", src: "assets/images/metalmim1.jpeg", title: "Detalle de Productos" }
    ],
    features: [
      "Catálogo industrial estructurado con fichas técnicas detalladas.",
      "Panel administrador (CMS) a medida para actualización de productos.",
      "Buscador en tiempo real optimizado para grandes inventarios.",
      "Cotizador en línea integrado para solicitud de presupuestos formales."
    ]
  },
  {
    id: "kiosco-pos",
    category: "pos",
    categoryLabel: "POS & Comercio Minorista",
    title: "Kiosco POS & Control de Cuentas Corrientes",
    subtitle: "Sistema de punto de venta para minimarkets, gestión de fiado (cuentas corrientes), stock y ventas",
    thumb: "assets/images/kisoco.jpeg",
    mediaCount: "📸 5 Fotos • 🎥 1 Video Demo",
    tags: ["PHP", "MySQL", "Cuentas Corrientes", "Control de Stock", "Reportes"],
    demoUrl: "#contacto",
    gallery: [
      { type: "image", src: "assets/images/kisoco4.jpeg", title: "Pantalla de Acceso Seguro (Login)" },
      { type: "image", src: "assets/images/kisoco.jpeg", title: "Dashboard Principal KiSoCo POS" },
      { type: "image", src: "assets/images/kisoco1.jpeg", title: "Módulo de Cuentas Corrientes (Fiado)" },
      { type: "image", src: "assets/images/kisoco2.jpeg", title: "Control de Inventario & Stock" },
      { type: "image", src: "assets/images/kisoco3.jpeg", title: "Pantalla de Cobro Rápido & Tickets" },
      { type: "video", src: "VIDEOS/KiSoCo - Dashboard - Google Chrome 2026-06-30 17-03-51.mp4", title: "Demo Video: Recorrido Completo del Sistema KiSoCo" }
    ],
    features: [
      "Punto de venta (POS) ágil con soporte para lectores de código de barras.",
      "Módulo exclusivo de cuentas corrientes (fiado) con historial detallado.",
      "Control de inventario automatizado con alertas de stock bajo.",
      "Reportes de ventas diarios y gestión de caja centralizada."
    ],
    demoPath: "demos/pos/index.html"
  }
];
