/* ═══════════════════════════════════════════════════════════════
   LYMFOSUR - contenido y comportamiento
   Todo el contenido editable vive en el bloque CONFIG de abajo.
   Para actualizar la página no hace falta tocar el HTML ni el CSS.
   ═══════════════════════════════════════════════════════════════ */

/* ── 1. Contacto ─────────────────────────────────────────────── */
const CONTACTO = {
  telefono: '+56 9 9178 1613',
  whatsapp: '56991781613',               // solo dígitos, con código país
  mensaje: 'Hola Lymfosur, necesito limpieza de fosa séptica. ¿Me pueden cotizar?',
  mensajeEmergencia: 'Hola Lymfosur, tengo una EMERGENCIA con mi fosa séptica y necesito atención a la brevedad.',
  linkResenas: 'https://maps.app.goo.gl/qigc386w6nMbwCec7'
};

/* ── 2. Barra de confianza ───────────────────────────────────── */
const CONFIANZA = [
  { n: '+16 años', l: 'en el rubro' },
  { n: '21',      l: 'comunas de Ñuble cubiertas' },
  { n: '5,0',     l: 'estrellas en Google' },
  { n: 'Rápido',  l: 'servicio rápido y responsable' }
];

/* ── 3. Servicios ────────────────────────────────────────────── */
/* imagen: ruta dentro de assets/. Si el archivo no existe, queda el
   fondo azul de respaldo y no se rompe nada. */
const SERVICIOS = [
  {
    destacado: true,
    titulo: 'Limpieza de fosas sépticas',
    texto: 'Extracción de los residuos de tu fosa séptica con camión limpiafosas, cámaras desgrasadoras y residuos industriales no peligrosos. Domicilios, parcelas, cabañas y obras.',
    imagen: 'assets/servicio-fosa.jpg',
    alt: 'Camión limpiafosas de Lymfosur en un camino rural nevado del sur de Ñuble',
    icono: 'gota'
  },
  {
    titulo: 'Destape de ductos y cañerías',
    texto: 'Cuando el problema no es la fosa sino la línea. Destapamos matriz y líneas de aguas negras.',
    imagen: 'assets/servicio-destape.jpg',
    alt: 'Dos operarios de Lymfosur trabajando con la manguera junto al camión en el patio de una casa',
    icono: 'tuberia'
  },
  {
    titulo: 'Mantención programada',
    texto: 'Te asesoramos para tu próxima mantención y limpieza según el uso y el tamaño de tu fosa.',
    imagen: 'assets/servicio-mantencion.jpg',
    alt: 'Camión de Lymfosur estacionado en la entrada de una vivienda para una mantención programada',
    icono: 'calendario'
  }
];

/* ── 4. Por qué elegirnos ────────────────────────────────────── */
const RAZONES = [
  {
    titulo: 'Evaluación a terreno',
    texto: 'Si lo necesitas, te visitamos para evaluar tu servicio antes de contratarnos.'
  },
  {
    titulo: '+16 años prestando servicios en Ñuble',
    texto: 'Desde 2009 limpiando fosas en la región. Conocemos los terrenos, los accesos difíciles y qué hacer cuando la fosa lleva años sin mantención.'
  },
  {
    titulo: 'Camión propio, no subcontratamos',
    texto: 'El equipo que llega a tu casa es el nuestro. Por eso podemos responder por el trabajo y por la hora comprometida.'
  },
  {
    titulo: 'Trabajamos con constructoras',
    texto: 'Faenas y obras en Ñuble nos llaman de forma recurrente. Emitimos documentación y cumplimos plazos de obra.'
  },
  {
    titulo: 'Disposición donde corresponde',
    texto: 'Los residuos van a un punto autorizado. No descargamos en el camino ni en predios de terceros.'
  }
];

/* ── 5. Cómo funciona ────────────────────────────────────────── */
const PASOS = [
  { titulo: 'Nos contactas', texto: 'Un mensaje por WhatsApp con tu comuna y, si sabes, el tamaño de la fosa.' },
  { titulo: 'Cotizamos',     texto: 'Evaluamos y cotizamos tu requerimiento.' },
  { titulo: 'Agendamos',     texto: 'Confirmas día y hora. Llegamos, hacemos el trabajo y te dejamos el sector limpio.' }
];

/* ── 6. Reseñas (Google Business Profile) ────────────────────── */
/* Para actualizar: agrega o edita objetos en este arreglo. El layout
   se adapta solo, no hay que tocar el HTML. */
const RESENAS = [
  {
    nombre: 'Cristian Fuentealba Campos',
    estrellas: 5,
    localGuide: false,
    texto: 'Excelente servicio, precios acorde al mercado, muy buena atención, responsabilidad y cumplimiento.'
  },
  {
    nombre: 'Comercial Serpa Ltda.',
    estrellas: 5,
    localGuide: false,
    texto: 'Excelente empresa. Muy responsable y eficientes.'
  },
  {
    nombre: 'Matias Cifuentes Cifuentes',
    estrellas: 5,
    localGuide: false,
    texto: 'Excelente atención y servicio, muy responsables, he trabajado con ellos en varias obras y totalmente recomendable.'
  }
];

/* ── 7. Zona de cobertura ────────────────────────────────────── */
/* Coordenadas geográficas reales de cada capital comunal.
   El mapa se proyecta solo a partir de estos valores. */
const COMUNAS = [
  { n: 'Chillán',       lat: -36.606, lon: -72.103 },
  { n: 'Chillán Viejo', lat: -36.625, lon: -72.133 },
  { n: 'Bulnes',        lat: -36.742, lon: -72.298 },
  { n: 'Cobquecura',    lat: -36.133, lon: -72.795 },
  { n: 'Coelemu',       lat: -36.487, lon: -72.703 },
  { n: 'Coihueco',      lat: -36.626, lon: -71.833 },
  { n: 'El Carmen',     lat: -36.898, lon: -72.028 },
  { n: 'Ninhué',        lat: -36.397, lon: -72.400 },
  { n: 'Ñiquén',        lat: -36.283, lon: -71.900 },
  { n: 'Pemuco',        lat: -36.977, lon: -72.100 },
  { n: 'Pinto',         lat: -36.700, lon: -71.893 },
  { n: 'Portezuelo',    lat: -36.533, lon: -72.433 },
  { n: 'Quillón',       lat: -36.740, lon: -72.470 },
  { n: 'Quirihue',      lat: -36.283, lon: -72.542 },
  { n: 'Ránquil',       lat: -36.650, lon: -72.560 },
  { n: 'San Carlos',    lat: -36.424, lon: -71.958 },
  { n: 'San Fabián',    lat: -36.556, lon: -71.552 },
  { n: 'San Ignacio',   lat: -36.802, lon: -72.033 },
  { n: 'San Nicolás',   lat: -36.500, lon: -72.217 },
  { n: 'Treguaco',      lat: -36.428, lon: -72.665 },
  { n: 'Yungay',        lat: -37.117, lon: -72.017 }
];

/* Marcada aparte: fuera del polígono regional (Región del Maule). */
const FUERA_REGION = [
  { n: 'Parral', lat: -36.143, lon: -71.826 }
];

/* Contorno referencial de la Región de Ñuble (lon, lat).
   Simplificado a mano para lectura, no es cartografía oficial. */
const CONTORNO = [
  [-72.86,-36.05],[-72.62,-36.10],[-72.44,-36.13],[-72.20,-36.13],[-71.98,-36.10],
  [-71.72,-36.15],[-71.42,-36.28],[-71.22,-36.44],[-71.16,-36.62],[-71.22,-36.80],
  [-71.36,-36.96],[-71.52,-37.10],[-71.66,-37.22],[-71.86,-37.30],[-72.06,-37.28],
  [-72.20,-37.14],[-72.36,-37.02],[-72.52,-36.92],[-72.66,-36.80],[-72.74,-36.66],
  [-72.80,-36.50],[-72.86,-36.34],[-72.92,-36.18],[-72.86,-36.05]
];

/* ── 8. Galería ──────────────────────────────────────────────── */
/* min: miniatura de la tira. full: la que se abre al hacer clic. */
const GALERIA = [
  { min: 'assets/galeria/g1-min.jpg', full: 'assets/galeria/g1.jpg', alt: 'Camión de Lymfosur estacionado frente a una planta industrial' },
  { min: 'assets/galeria/g2-min.jpg', full: 'assets/galeria/g2.jpg', alt: 'Frontal del camión limpiafosas de Lymfosur bajo un pino' },
  { min: 'assets/galeria/g3-min.jpg', full: 'assets/galeria/g3.jpg', alt: 'Estanque y mangueras del camión de Lymfosur listos para operar' },
  { min: 'assets/galeria/g4-min.jpg', full: 'assets/galeria/g4.jpg', alt: 'Camión de Lymfosur trabajando en el acceso de una vivienda' },
  { min: 'assets/galeria/g5-min.jpg', full: 'assets/galeria/g5.jpg', alt: 'Camión de Lymfosur operando en un sector nevado de la cordillera' },
  { min: 'assets/galeria/g6-min.jpg', full: 'assets/galeria/g6.jpg', alt: 'Equipo de Lymfosur extrayendo residuos en el patio de una casa de campo' },
  { min: 'assets/galeria/g7-min.jpg', full: 'assets/galeria/g7.jpg', alt: 'Camión limpiafosas de Lymfosur con las mangueras montadas en una mañana de escarcha' }
];

/* ═══════════════════════════════════════════════════════════════
   A partir de aquí: render. No hace falta editar para cambiar contenido.
   ═══════════════════════════════════════════════════════════════ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const SVGNS = 'http://www.w3.org/2000/svg';
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Iconos: trazos tomados de Phosphor Icons (MIT). */
const ICONOS = {
  gota:       'M174 47.75a254.19 254.19 0 0 0-41.45-38.3 8 8 0 0 0-9.18 0A254.19 254.19 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25Z',
  tuberia:    'M232 96h-24V72a32 32 0 0 0-32-32H80a32 32 0 0 0-32 32v24H24a8 8 0 0 0 0 16h24v32H24a8 8 0 0 0 0 16h24v24a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32v-24h24a8 8 0 0 0 0-16h-24v-32h24a8 8 0 0 0 0-16Zm-40 88a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16Z',
  calendario: 'M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Z'
};

const icono = (nombre) => {
  const svg = document.createElementNS(SVGNS, 'svg');
  svg.setAttribute('viewBox', '0 0 256 256');
  svg.setAttribute('class', 'svc__ic');
  svg.setAttribute('aria-hidden', 'true');
  const p = document.createElementNS(SVGNS, 'path');
  p.setAttribute('fill', 'currentColor');
  p.setAttribute('d', ICONOS[nombre] || ICONOS.gota);
  svg.append(p);
  return svg;
};

const estrella = () =>
  `<svg viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" d="m234.5 114.4-45.1 39.5 13.5 58.2a16 16 0 0 1-23.8 17.3L128 198.5l-51.1 30.9a16 16 0 0 1-23.8-17.3l13.5-58.2-45.1-39.5A16 16 0 0 1 30.6 86.5l59.4-5.1 23.2-55.1a16 16 0 0 1 29.6 0l23.2 55.1 59.4 5.1a16 16 0 0 1 9.1 28Z"/></svg>`;

const iniciales = (nombre) =>
  nombre.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

/* ── Enlaces de contacto ─────────────────────────────────────── */
function enlazarContacto() {
  const wa = `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(CONTACTO.mensaje)}`;
  $$('[data-wa]').forEach(a => { a.href = wa; a.target = '_blank'; });

  // La emergencia abre el chat con su propio mensaje, para que llegue etiquetada.
  const urgente = `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(CONTACTO.mensajeEmergencia)}`;
  $$('[data-wa-emergencia]').forEach(a => { a.href = urgente; a.target = '_blank'; });
  $$('[data-tel]').forEach(a => { a.href = `tel:${CONTACTO.telefono.replace(/\s/g, '')}`; });
  const t = $('#telText'); if (t) t.textContent = CONTACTO.telefono;
  const r = $('#reviewLink'); if (r) r.href = CONTACTO.linkResenas;
  $('#year').textContent = new Date().getFullYear();
}

/* ── Barra de confianza ──────────────────────────────────────── */
function renderConfianza() {
  $('#trustGrid').innerHTML = CONFIANZA.map(d => `
    <div class="trust__cell">
      <p class="trust__n">${d.n}</p>
      <p class="trust__l">${d.l}</p>
    </div>`).join('');
}

/* ── Servicios ───────────────────────────────────────────────── */
function renderServicios() {
  const cont = $('#serviciosGrid');
  SERVICIOS.forEach(s => {
    const art = document.createElement('article');
    art.className = 'svc rv' + (s.destacado ? ' svc--lead' : '');
    art.innerHTML = `
      <div class="svc__ph">${s.imagen ? `<img src="${s.imagen}" alt="${s.alt || ''}" loading="lazy" decoding="async" onerror="this.remove()">` : ''}</div>
      <div class="svc__body">
        <h3>${s.titulo}</h3>
        <p>${s.texto}</p>
      </div>`;
    art.querySelector('.svc__body').prepend(icono(s.icono));
    cont.append(art);
  });
}

/* ── Por qué elegirnos ───────────────────────────────────────── */
function renderRazones() {
  $('#reasonsList').innerHTML = RAZONES.map((r, i) => `
    <li class="reason rv">
      <span class="reason__n">0${i + 1}</span>
      <div>
        <h3>${r.titulo}</h3>
        <p>${r.texto}</p>
      </div>
    </li>`).join('');
}

/* ── Cómo funciona ───────────────────────────────────────────── */
function renderPasos() {
  $('#stepsGrid').classList.add('rv');
  $('#stepsGrid').innerHTML = PASOS.map((p, i) => `
    <div class="step rv" style="--i:${i}">
      <div class="step__dot">${i + 1}</div>
      <h3>${p.titulo}</h3>
      <p>${p.texto}</p>
    </div>`).join('');
}

/* ── Reseñas ─────────────────────────────────────────────────── */
function renderResenas() {
  $('#reviewsGrid').innerHTML = RESENAS.map((r, i) => `
    <figure class="rev rv" style="--i:${i}">
      <div class="rev__stars" role="img" aria-label="${r.estrellas} de 5 estrellas">
        ${estrella().repeat(r.estrellas)}
      </div>
      <blockquote class="rev__q">${r.texto}</blockquote>
      <figcaption class="rev__who">
        <span class="rev__av" aria-hidden="true">${iniciales(r.nombre)}</span>
        <span>
          <span class="rev__name">${r.nombre}</span><br>
          <span class="rev__meta">${r.localGuide ? 'Local Guide en Google' : 'Reseña en Google'}</span>
        </span>
      </figcaption>
    </figure>`).join('');
}

/* ── Mapa de cobertura (Leaflet + OpenStreetMap) ─────────────── */
function renderMapa() {
  const cont = $('#mapa');
  if (!cont || typeof L === 'undefined') return;

  const enMovil = L.Browser.mobile;

  const mapa = L.map(cont, {
    scrollWheelZoom: false,   // en escritorio la rueda no secuestra el scroll
    dragging: !enMovil,       // en móvil el dedo desliza la página, no el mapa
    tap: !enMovil,
    zoomControl: true,
    attributionControl: true
  });

  // En móvil el mapa se activa con un toque en el botón de abajo.
  if (enMovil) {
    const activar = L.control({ position: 'bottomleft' });
    activar.onAdd = () => {
      const b = L.DomUtil.create('button', 'mp-activar');
      b.type = 'button';
      b.textContent = 'Mover el mapa';
      L.DomEvent.on(b, 'click', (e) => {
        L.DomEvent.stop(e);
        mapa.dragging.enable();
        b.remove();
      });
      return b;
    };
    activar.addTo(mapa);
  }

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    minZoom: 6,
    attribution: '&copy; colaboradores de <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mapa);

  const marcar = ({ n, lat, lon }, fuera) => {
    const m = L.circleMarker([lat, lon], {
      radius: 7,
      color: '#ffffff',
      weight: 2,
      fillColor: fuera ? '#64748b' : '#0d58a2',
      fillOpacity: 1,
      className: 'mp-marker'
    }).addTo(mapa);

    m.bindTooltip(n, { direction: 'top', offset: [0, -8], className: 'mp-tip' });

    // En móvil el hover no existe: el toque muestra la etiqueta.
    m.on('click', () => m.openTooltip());
    m.on('mouseover', () => m.setStyle({ radius: 10 }));
    m.on('mouseout',  () => m.setStyle({ radius: 7 }));
    return m;
  };

  const puntos = [
    ...COMUNAS.map(c => marcar(c, false)),
    ...FUERA_REGION.map(c => marcar(c, true))
  ];

  mapa.fitBounds(L.featureGroup(puntos).getBounds(), { padding: [34, 34] });

  // El scroll con rueda se habilita solo si el visitante hace clic en el mapa.
  mapa.on('click', () => mapa.scrollWheelZoom.enable());
  mapa.on('mouseout', () => mapa.scrollWheelZoom.disable());
}


/* ── Galería: tira horizontal con visor para ampliar ─────────── */
function renderGaleria() {
  const tira = $('#galeriaTira');
  const visor = $('#visor');
  const img = $('#visorImg');
  if (!tira || !visor) return;

  tira.innerHTML = GALERIA.map((g, i) => `
    <li class="gal__item">
      <button class="gal__btn" type="button" data-i="${i}" aria-label="Ampliar: ${g.alt}">
        <img src="${g.min}" alt="${g.alt}" loading="lazy" decoding="async">
      </button>
    </li>`).join('');

  let actual = 0;
  const mostrar = (i) => {
    actual = (i + GALERIA.length) % GALERIA.length;   // se cicla en los extremos
    img.src = GALERIA[actual].full;
    img.alt = GALERIA[actual].alt;
  };

  tira.addEventListener('click', (e) => {
    const b = e.target.closest('.gal__btn');
    if (!b) return;
    mostrar(Number(b.dataset.i));
    visor.showModal();
  });

  visor.addEventListener('click', (e) => {
    const paso = e.target.closest('[data-paso]');
    if (paso) { mostrar(actual + Number(paso.dataset.paso)); return; }
    // clic fuera de la imagen o en la equis: cerrar
    if (e.target.closest('[data-cerrar]') || e.target === visor) visor.close();
  });

  visor.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') mostrar(actual + 1);
    if (e.key === 'ArrowLeft')  mostrar(actual - 1);
  });
}

/* ── Nav pegajosa ────────────────────────────────────────────── */
function navSticky() {
  const nav = $('#nav');
  const centinela = document.createElement('div');
  centinela.style.cssText = 'position:absolute;top:0;height:1px;width:1px';
  document.body.prepend(centinela);
  new IntersectionObserver(([e]) => {
    nav.dataset.stuck = String(!e.isIntersecting);
  }).observe(centinela);
}

/* ── Reveal en scroll ────────────────────────────────────────── */
function reveal() {
  if (reduce) { $$('.rv').forEach(el => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  $$('.rv').forEach(el => io.observe(el));
}

/* ── Video del hero ──────────────────────────────────────────────
   El archivo de assets/ ya viene recortado a 5 segundos, así que se
   reproduce completo en loop nativo. Si algún día cargas un clip largo
   sin recortar, pon aquí los segundos finales que quieres dejar en loop
   y el JS hace el recorte en reproducción. */
const SEGUNDOS_LOOP = 0;

function heroVideo() {
  const v = $('#heroVideo');
  if (!v) return;

  if (SEGUNDOS_LOOP > 0) {
    v.removeAttribute('loop');
    const alInicio = () => {
      const inicio = Math.max(0, (v.duration || 0) - SEGUNDOS_LOOP);
      if (v.currentTime < inicio - 0.1) v.currentTime = inicio;
    };
    v.addEventListener('loadedmetadata', alInicio);
    v.addEventListener('ended', () => { alInicio(); v.play().catch(() => {}); });
  }

  const ahorro = navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ''));
  if (reduce || ahorro) { v.removeAttribute('autoplay'); v.pause(); return; }
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return;
    v.preload = 'auto';
    v.load();
    v.play().catch(() => {});   // si el navegador lo bloquea queda el poster
    obs.disconnect();
  }, { rootMargin: '200px' }).observe(v);
}

/* ── Arranque ────────────────────────────────────────────────── */
enlazarContacto();
renderConfianza();
renderServicios();
renderRazones();
renderPasos();
renderResenas();
renderMapa();
renderGaleria();
navSticky();
reveal();
heroVideo();
