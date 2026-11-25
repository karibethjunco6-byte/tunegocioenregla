// ==========================================
// 1. REQUISITOS POR RUBRO Y SEMAFORO MYPE
// ==========================================
const REQUISITOS_RESPALDO = {
  "Pesca artesanal": [
     {
      "id": "PA-1",
      "nombre": "Permiso de pesca de la embarcación",
      "critico": true,
      "glosario": "Comprueba que tienes el permiso correspondiente antes de salir a pescar. La matrícula no sustituye al permiso.",
      "baseLegal": "Decreto Ley 25977, art. 43 literal c), art. 76 numeral 1",
      "entidad": "Gobierno regional (DIREPRO o equivalente); fiscalización pesquera según competencia de GORE/PRODUCE",
      "aplicabilidad": "Titular de embarcación artesanal de bandera nacional dedicada a extracción.",
      "plazo": "Antes de operar; verificar condiciones y vigencia del permiso.",
      "fuente": "https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=51"
    },
    {
      "id": "PA-2",
      "nombre": "Respeto de vedas, tallas y zonas autorizadas",
      "critico": true,
      "glosario": "Revisa las restricciones de la especie y zona antes de cada faena.",
      "baseLegal": "Decreto Ley 25977, art. 76 numerales 2 y 3",
      "entidad": "PRODUCE y gobiernos regionales, según competencia",
      "aplicabilidad": "Extracción de recursos hidrobiológicos; las restricciones varían según especie y zona.",
      "plazo": "En cada faena; consultar las disposiciones específicas vigentes.",
      "fuente": "https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=51"
    },
    {
      "id": "PA-3",
      "nombre": "Manipulación sanitaria de la captura a bordo",
      "critico": true,
      "glosario": "Evita contaminar o dañar el pescado durante su manipulación.",
      "baseLegal": "D.S. 020-2022-PRODUCE, art. 25.1; el numeral 1 fue modificado por D.S. 005-2025-PRODUCE.",
      "entidad": "SANIPES",
      "aplicabilidad": "Embarcaciones pesqueras comerciales, incluida la pesca artesanal embarcada.",
      "plazo": "Durante cada faena.",
      "fuente": "https://www.sanipes.gob.pe/documentos_sanipes/ds/2023/DS%20N020-2022-PRODUCE.pdf"
    }
  ],
  "Agroindustria": [
    {
      "id": "AG-1",
      "nombre": "Registro sanitario del producto industrializado",
      "critico": true,
      "glosario": "Comprueba que el alimento industrializado sujeto a registro cuenta con el trámite correspondiente antes de venderlo.",
      "baseLegal": "D.S. 007-98-SA, arts. 101 y 102",
      "entidad": "DIGESA (MINSA)",
      "aplicabilidad": "Alimentos y bebidas industrializados de consumo humano sujetos a registro y comercializados en Perú. No incluye automáticamente el procesamiento primario.",
      "plazo": "Antes de comercializar; verificar vigencia y condiciones del registro.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    },
    {
      "id": "AG-2",
      "nombre": "Programa de limpieza y desinfección",
      "critico": true,
      "glosario": "Organiza y ejecuta la limpieza del local para evitar contaminar los alimentos.",
      "baseLegal": "D.S. 007-98-SA, art. 56",
      "entidad": "Autoridad sanitaria competente (DIGESA o autoridad regional, según competencia)",
      "aplicabilidad": "Fábricas de alimentos y bebidas del perfil industrializado seleccionado.",
      "plazo": "Al finalizar la jornada y cuando sea necesario.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    },
    {
      "id": "AG-3",
      "nombre": "Agua apta para elaborar alimentos",
      "critico": true,
      "glosario": "Usa agua que cumpla los requisitos sanitarios aplicables al consumo humano.",
      "baseLegal": "D.S. 007-98-SA, art. 40",
      "entidad": "Autoridad sanitaria competente (DIGESA o autoridad regional, según competencia)",
      "aplicabilidad": "Fabricación de alimentos y bebidas del perfil seleccionado que utiliza agua en sus procesos o en operaciones de higiene.",
      "plazo": "Durante la fabricación y según el programa de control sanitario.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    }
  ],
  "Manufactura": [
    {
      "id": "MF-1",
      "nombre": "Licencia municipal de funcionamiento e ITSE",
      "critico": true,
      "glosario": "Antes de abrir el taller o planta, verifica la licencia municipal y las condiciones de seguridad del establecimiento. La inspección de seguridad puede ser previa o posterior según el nivel de riesgo.",
      "baseLegal": "TUO de la Ley 28976, aprobado por D.S. 163-2020-PCM, arts. 3, 4, 5, 6 y 8; D.S. 002-2018-PCM, arts. 31, 33 y 34",
      "entidad": "Municipalidad distrital o provincial competente",
      "aplicabilidad": "Personas naturales o jurídicas que desarrollan actividad industrial en un establecimiento permanente; la municipalidad evalúa zonificación, compatibilidad de uso y seguridad.",
      "plazo": "Antes de abrir el establecimiento. ITSE previa para riesgo alto o muy alto; posterior para riesgo bajo o medio, conforme a la clasificación municipal.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/1890266-2"
    },
    {
      "id": "MF-2",
      "nombre": "Instrumento de Gestión Ambiental correspondiente",
      "critico": true,
      "glosario": "Identifica qué instrumento ambiental corresponde a tu actividad y cumple sus compromisos. No todas las fábricas necesitan el mismo instrumento: depende de la actividad, categoría e impactos.",
      "baseLegal": "D.S. 017-2015-PRODUCE, arts. 16 y 19, modificado por D.S. 006-2019-PRODUCE; D.S. 020-2025-PRODUCE, arts. 1, 2.1 y 2.5; Ley 27446, art. 3",
      "entidad": "PRODUCE (Dirección General de Asuntos Ambientales de Industria) o gobierno regional con funciones transferidas; fiscalización por OEFA/EFA según competencia",
      "aplicabilidad": "Proyectos manufactureros sujetos al SEIA y actividades en curso comprendidas en el reglamento sectorial. La DAA o el PAMA por adecuación excepcional del D.S. 020-2025-PRODUCE solo alcanza a actividades que iniciaron hasta el 27/06/2019 sin IGA aprobado y cumplen las condiciones normativas.",
      "plazo": "El instrumento preventivo debe obtenerse antes de iniciar el proyecto sujeto al SEIA. Para los supuestos excepcionales del D.S. 020-2025-PRODUCE, el plazo máximo para presentar DAA o PAMA es de cinco años desde la entrada en vigor de esa norma.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2445312-1"
    },
    {
      "id": "MF-3",
      "nombre": "Evaluación de riesgos laborales y equipos de protección",
      "critico": true,
      "glosario": "Identifica los peligros de máquinas, herramientas, sustancias y procesos; actualiza la evaluación de riesgos y entrega gratuitamente los equipos de protección adecuados cuando correspondan.",
      "baseLegal": "Ley 29783, arts. 49, 57 y 60 (arts. 49 y 60 modificados por Ley 31246); D.S. 005-2012-TR",
      "entidad": "SUNAFIL y autoridad de trabajo competente",
      "aplicabilidad": "Empleadores manufactureros con trabajadores; deben prevenir riesgos según las tareas y condiciones reales del centro de trabajo.",
      "plazo": "La evaluación de riesgos se actualiza como mínimo una vez al año, cuando cambian las condiciones de trabajo o cuando se producen daños a la salud o seguridad; los EPP se proporcionan cuando el riesgo no puede eliminarse en su origen.",
      "fuente": "https://www.dirislimaeste.gob.pe/Virtual2/Otros_Link/CSST/Ley%2029783%20Seguridad%20y%20Salud%20en%20el%20Trabajo.pdf"
    },
    {
      "id": "MF-4",
      "nombre": "Manejo de residuos sólidos no municipales y reportes SIGERSOL",
      "critico": true,
      "glosario": "Separa, almacena y entrega los residuos industriales de forma adecuada. Si tu actividad está obligada a contar con IGA, verifica además los reportes que correspondan en SIGERSOL.",
      "baseLegal": "D. Leg. 1278, art. 55; D.S. 014-2017-MINAM, arts. 13 y 48; R.M. 000279-2025-PRODUCE, arts. 1 y 3-1.4",
      "entidad": "MINAM (administración de SIGERSOL); PRODUCE/DGAAMI para las reglas sectoriales; OEFA o EFA competente para fiscalización, según corresponda",
      "aplicabilidad": "Generadores de residuos sólidos no municipales. Si cuentan con IGA, revisar la obligación de reporte conforme al D.S. 014-2017-MINAM. Si no están obligados a IGA, la R.M. 000279-2025-PRODUCE (vigente desde 01/01/2026) exige DAMRS/MMRSP solo a las actividades manufactureras CIIU enumeradas y cuando se cumplan las condiciones y umbrales específicos de su cuadro (por ejemplo, cantidades de residuos o material de descarte). Quienes no estén comprendidos igualmente deben cumplir las demás obligaciones de manejo de residuos.",
      "plazo": "Cuando corresponda: DAMRS durante los primeros quince días hábiles de abril de cada año; manifiestos de residuos peligrosos durante los primeros quince días hábiles del inicio de cada trimestre. La gestión de residuos debe mantenerse de forma continua.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2430741-1"
    }
  ],
  "Minería en formalización": [
    {
      "id": "MN-1",
      "nombre": "Inscripción vigente en REINFO y RUC activo",
      "critico": true,
      "glosario": "Verifica que tu inscripción en el REINFO figure vigente y que tu RUC esté activo, en renta de tercera categoría y con actividad económica minera. Estar inscrito no equivale a tener autorización de inicio o reinicio.",
      "baseLegal": "D.S. 001-2020-EM, art. 7.2 literal a), modificado por D.S. 010-2022-EM; Ley 32537, art. único (modifica art. 6 del D. Leg. 1293)",
      "entidad": "MINEM - Dirección General de Formalización Minera (REINFO); SUNAT (RUC)",
      "aplicabilidad": "Solo para operadores inscritos en el REINFO dentro del proceso de formalización minera integral. La Ley 32537 también exige verificar el cumplimiento del sinceramiento georreferenciado de ubicación presentado por los inscritos.",
      "plazo": "Mantener las condiciones durante la vigencia del proceso. La Ley 32537 fija vigencia hasta el 31/12/2026 o hasta la entrada en vigor de la Ley MAPE y su reglamento, lo que ocurra primero. Además, exigió el sinceramiento georreferenciado de ubicación dentro de 120 días desde su entrada en vigor; verificar el cargo porque ese plazo único ya transcurrió.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2471915-1"
    },
    {
      "id": "MN-2",
      "nombre": "IGAFOM correctivo y preventivo",
      "critico": true,
      "glosario": "El IGAFOM describe las medidas para corregir impactos existentes y prevenir impactos de la actividad minera. Debes revisar que corresponda a cada actividad inscrita y conocer su estado de evaluación.",
      "baseLegal": "D. Leg. 1336, art. 6; D.S. 038-2017-EM, arts. 4, 9 y 10; D.S. 001-2020-EM, art. 7.2 literal b), modificado por D.S. 010-2022-EM; D.S. 009-2025-EM, arts. 9.5 y disposición complementaria modificatoria primera",
      "entidad": "MINEM - Dirección General de Asuntos Ambientales Mineros (evalúa y aprueba); gobiernos regionales y Dirección General de Minería en Lima Metropolitana (fiscalización ambiental, según competencia)",
      "aplicabilidad": "Minero informal inscrito en REINFO, respecto de cada actividad minera inscrita. El IGAFOM es un requisito del proceso de formalización y su aprobación es necesaria para culminarlo.",
      "plazo": "Presentar los aspectos correctivo y preventivo y atender las observaciones. Si hay desistimiento, abandono o desaprobación, revisar el plazo de treinta días calendario para una nueva presentación previsto en el art. 7.2 literal b), según corresponda.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2400459-1"
    },
    {
      "id": "MN-3",
      "nombre": "Acreditación de concesión minera y uso del terreno superficial",
      "critico": true,
      "glosario": "Debes acreditar el derecho sobre la concesión minera y, por separado, la propiedad o autorización para usar el terreno superficial. Una concesión minera no reemplaza el derecho de uso de la superficie.",
      "baseLegal": "D. Leg. 1336, art. 3; D.S. 018-2017-EM, arts. 18 y 20",
      "entidad": "MINEM - Dirección General de Formalización Minera; SUNARP para verificar partidas registrales; titular del predio o de la concesión, según corresponda",
      "aplicabilidad": "Operadores inscritos en el proceso que deben acreditar titularidad de la concesión o contrato de cesión/explotación y propiedad o autorización de uso del terreno superficial.",
      "plazo": "Antes de solicitar la autorización de inicio o reinicio; los contratos y derechos deben estar vigentes y acreditados conforme a la norma.",
      "fuente": "https://cdn.www.gob.pe/uploads/document/file/308242/D.S._N__018-2017-EM_-_Complementarias_en_el_marco_del_PFMI.pdf"
    },
    {
      "id": "MN-4",
      "nombre": "Expediente técnico y autorización de inicio o reinicio",
      "critico": true,
      "glosario": "Prepara el expediente técnico y los documentos arqueológicos que correspondan. No inicies ni reinicies explotación o beneficio solo por tener inscripción en REINFO: se requiere la autorización administrativa correspondiente.",
      "baseLegal": "D.S. 018-2017-EM, arts. 29, 30, 31 y 32; D.S. 009-2025-EM, art. 9.3 literal c) y art. 9.5; D.S. 025-2026-EM, art. 2",
      "entidad": "MINEM - Dirección General de Formalización Minera (trámite y verificación previa); otras autoridades sectoriales para documentos específicos",
      "aplicabilidad": "Minero en proceso de formalización que solicita autorización de inicio o reinicio de explotación y/o beneficio. Incluye expediente técnico, declaración jurada de inexistencia de restos arqueológicos y demás requisitos aplicables.",
      "plazo": "Antes de iniciar o reiniciar actividades. Desde el D.S. 025-2026-EM, la verificación previa del art. 32 se realiza en gabinete por la DGFM.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2570415-1"
    },
    {
      "id": "MN-5",
      "nombre": "Declaración semestral de producción y registro de insumos fiscalizados",
      "critico": true,
      "glosario": "Presenta la declaración semestral de producción cuando te corresponda. Si realizas beneficio con insumos químicos fiscalizados, verifica también la inscripción en el registro de SUNAT.",
      "baseLegal": "D.S. 001-2020-EM, art. 7.2 literales c) y d), modificado por D.S. 005-2022-EM y D.S. 010-2022-EM",
      "entidad": "MINEM - Dirección General de Formalización Minera (declaración de producción); SUNAT (Registro para el Control de Bienes Fiscalizados)",
      "aplicabilidad": "Mineros inscritos en REINFO por cada actividad declarada. La declaración semestral tiene una excepción para quien explota en una concesión vigente de la que es titular; el registro de bienes fiscalizados corresponde cuando se realiza beneficio con insumos sujetos a control.",
      "plazo": "Declaración de producción: hasta el último día calendario de julio y enero, por los semestres anteriores, según el texto del art. 7.2(c) modificado por D.S. 010-2022-EM. Registro de bienes fiscalizados: antes de realizar la actividad sujeta a control.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2102467-1"
    },
    {
      "id": "MN-6",
      "nombre": "Seguridad y salud ocupacional minera",
      "critico": true,
      "glosario": "Realiza inspecciones para identificar peligros y evaluar riesgos. Implementa estándares, procedimientos y prácticas seguras para las labores mineras, según el tipo de operación.",
      "baseLegal": "D.S. 024-2016-EM, arts. 26 literal m) y 33, modificados por D.S. 034-2023-EM",
      "entidad": "Gobierno regional competente para pequeña minería y minería artesanal; SUNAFIL en el ámbito laboral; OSINERGMIN para gran y mediana minería",
      "aplicabilidad": "Titulares de actividades de pequeña minería y minería artesanal; las medidas concretas dependen de si la operación es subterránea, superficial, de explotación o beneficio.",
      "plazo": "Obligación permanente durante las actividades; efectuar inspecciones, evaluar riesgos e implementar los controles, estándares y procedimientos que correspondan.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2249422-2"
    }
  ],
  "Otro rubro productivo": [
    {
      id: "OT-1",
      nombre: "Identificación formal del negocio y permisos base",
      critico: true,
      glosario: "La base para operar con respaldo y acceder a mejores clientes."
    },
    {
      id: "OT-2",
      nombre: "Calendario de fechas y pagos clave",
      critico: false,
      glosario: "Evita recargos o multas por olvidar una fecha."
    },
    {
      id: "OT-3",
      nombre: "Respaldo de cargos y comprobantes",
      critico: false,
      glosario: "Guardar constancias te sirve como prueba si hay una revisión."
    }
  ]
};

let requisitosPorRubro = { ...REQUISITOS_RESPALDO };
let estadosActualesRequisitos = [];

async function cargarBaseNormativa() {
  try {
    const respuesta = await fetch("base-normativa.json");
    if (!respuesta.ok) {
      throw new Error("No se pudo leer base-normativa.json");
    }
    const datosJson = await respuesta.json();
    requisitosPorRubro = {
      ...REQUISITOS_RESPALDO,
      ...datosJson
    };
  } catch (err) {
    console.warn("Usando datos de respaldo locales:", err.message);
    requisitosPorRubro = { ...REQUISITOS_RESPALDO };
  }
  renderizarRequisitosRubro();
}

function obtenerListaRubroActual() {
  const rubro = document.getElementById("prod-rubro").value;
  return requisitosPorRubro[rubro] || REQUISITOS_RESPALDO[rubro] || [];
}

function obtenerMetricasRequisitos() {
  const total = estadosActualesRequisitos.length;
  if (total === 0) {
    return { porcentaje: 0, criticosPendientes: 0 };
  }

  const listaBase = obtenerListaRubroActual();
  let alDia = 0;
  let criticosPendientes = 0;

  for (let i = 0; i < total; i = i + 1) {
    const estado = estadosActualesRequisitos[i];
    const esCritico = listaBase[i] ? Boolean(listaBase[i].critico) : false;
    if (estado === "al_dia") {
      alDia = alDia + 1;
    } else if (esCritico) {
      criticosPendientes = criticosPendientes + 1;
    }
  }

  return {
    porcentaje: Math.round((alDia / total) * 100),
    criticosPendientes: criticosPendientes
  };
}

function renderizarRequisitosRubro() {
  const listaBase = obtenerListaRubroActual();
  estadosActualesRequisitos = listaBase.map(function () {
    return "pendiente";
  });

  const contenedor = document.getElementById("contenedor-requisitos");
  contenedor.innerHTML = "";

  for (let i = 0; i < listaBase.length; i = i + 1) {
    const req = listaBase[i];
    const tarjetaReq = document.createElement("div");
    tarjetaReq.className = "item-requisito";

    const codigo = req.id ? req.id + " — " : "";
    const badge = req.critico ? '<span class="badge-critico">Clave</span>' : "";

    let detalleNormativo = "";
    if (req.baseLegal || req.entidad || req.aplicabilidad || req.plazo || req.fuente) {
      detalleNormativo += '<details class="detalle-normativo"><summary>Ver base legal y fundamento</summary>';
      if (req.baseLegal) {
        detalleNormativo += "<div><strong>Base legal:</strong> " + req.baseLegal + "</div>";
      }
      if (req.entidad) {
        detalleNormativo += "<div><strong>Entidad:</strong> " + req.entidad + "</div>";
      }
      if (req.aplicabilidad) {
        detalleNormativo += "<div><strong>A quién aplica:</strong> " + req.aplicabilidad + "</div>";
      }
      if (req.plazo) {
        detalleNormativo += "<div><strong>Plazo:</strong> " + req.plazo + "</div>";
      }
      if (req.fuente) {
        detalleNormativo +=
          '<div><strong>Fuente:</strong> <a href="' +
          req.fuente +
          '" target="_blank" rel="noopener noreferrer">Consultar norma oficial</a></div>';
      }
      detalleNormativo += "</details>";
    }

    tarjetaReq.innerHTML =
      '<div class="cabecera-requisito">' +
      "<div><strong>" +
      codigo +
      req.nombre +
      "</strong>" +
      badge +
      "</div>" +
      '<select data-indice="' +
      i +
      '" class="selector-estado-req">' +
      '<option value="pendiente">Pendiente</option>' +
      '<option value="en_tramite">En trámite</option>' +
      '<option value="al_dia">Al día</option>' +
      "</select>" +
      "</div>" +
      '<p class="glosario-requisito">' +
      req.glosario +
      "</p>" +
      detalleNormativo;

    contenedor.appendChild(tarjetaReq);
  }

  const selectores = document.querySelectorAll(".selector-estado-req");
  for (let j = 0; j < selectores.length; j = j + 1) {
    selectores[j].addEventListener("change", function (evento) {
      const idx = Number(evento.target.getAttribute("data-indice"));
      estadosActualesRequisitos[idx] = evento.target.value;
      evento.target.closest(".item-requisito").classList.toggle("completo", evento.target.value === "al_dia");
      evaluarSemaforoMype();
      revisarCelebracion();
    });
  }

  evaluarSemaforoMype();
}

function evaluarSemaforoMype() {
  const nombre = document.getElementById("prod-nombre").value.trim();
  const rubro = document.getElementById("prod-rubro").value;
  const diasPlazo = Number(document.getElementById("prod-dias-plazo").value);
  const claridad = document.getElementById("prod-tiene-instrumento").value;
  const metricas = obtenerMetricasRequisitos();

  document.getElementById("porcentaje-avance").textContent = metricas.porcentaje + "%";
  document.getElementById("criticos-pendientes").textContent = String(metricas.criticosPendientes);
  document.getElementById("anillo-avance").style.setProperty("--pct", metricas.porcentaje);
  document.getElementById("anillo-texto").textContent = metricas.porcentaje + "%";

  let clase = "estado-verde";
  let etiqueta = "VERDE: Vas en buen camino";
  let explicacion =
    "Tienes claridad y avance. Sigue revisando tus fechas con anticipación para evitar apuros.";

  if (claridad === "no" || diasPlazo < 0 || metricas.criticosPendientes >= 2) {
    clase = "estado-rojo";
    etiqueta = "ROJO: Atención urgente";
    explicacion =
      "Hay un plazo vencido, falta claridad o tienes varios puntos clave pendientes. Prioriza esos requisitos hoy para evitar multas o paradas.";
  } else if (claridad === "parcial" || diasPlazo <= 10 || metricas.criticosPendientes === 1) {
    clase = "estado-amarillo";
    etiqueta = "AMARILLO: Revisa a tiempo";
    explicacion =
      "Tienes una fecha cercana o algún punto clave por cerrar. Ordena ese pendiente ahora que aún estás a tiempo.";
  }

  const caja = document.getElementById("semaforo-productor");
  caja.className = "aviso-estado " + clase;
  const tituloNegocio = nombre !== "" ? nombre + " (" + rubro + ")" : rubro;
  caja.textContent = tituloNegocio + " -> " + etiqueta;
  document.getElementById("explicacion-productor").textContent = explicacion;
}

// Icono que cambia según el rubro
const ICONOS_RUBRO = {
  "Pesca artesanal": "🐟",
  "Agroindustria": "🌾",
  "Manufactura": "🏭",
  "Minería en formalización": "⛏️",
  "Otro rubro productivo": "🧰"
};

function actualizarIconoRubro() {
  const icono = document.getElementById("icono-rubro");
  const rubro = document.getElementById("prod-rubro").value;
  icono.textContent = ICONOS_RUBRO[rubro] || "📋";
  icono.classList.remove("salto");
  void icono.offsetWidth; // reinicia la animación
  icono.classList.add("salto");
}

// Celebración con confeti al completar todos los requisitos
function lanzarConfeti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  const colores = ["#0c7a7c", "#1d78a8", "#bfe6f5", "#d7f2ec", "#facc15", "#f97316"];
  for (let i = 0; i < 60; i = i + 1) {
    const pieza = document.createElement("span");
    pieza.className = "confeti";
    pieza.style.left = Math.random() * 100 + "vw";
    pieza.style.background = colores[i % colores.length];
    pieza.style.animationDelay = Math.random() * 0.6 + "s";
    document.body.appendChild(pieza);
    setTimeout(function () {
      pieza.remove();
    }, 3200);
  }
}

let yaCelebro = false;
function revisarCelebracion() {
  const completo =
    estadosActualesRequisitos.length > 0 &&
    estadosActualesRequisitos.every(function (e) {
      return e === "al_dia";
    });
  const aviso = document.getElementById("explicacion-productor");
  if (completo && !yaCelebro) {
    yaCelebro = true;
    lanzarConfeti();
    aviso.insertAdjacentHTML(
      "afterend",
      '<p class="celebracion" id="msg-celebracion">🎉 ¡Excelente! Marcaste todos tus requisitos al día. Sigue revisando tus fechas con anticipación.</p>'
    );
  } else if (!completo) {
    yaCelebro = false;
    const msg = document.getElementById("msg-celebracion");
    if (msg) {
      msg.remove();
    }
  }
}

document.getElementById("prod-rubro").addEventListener("change", function () {
  actualizarIconoRubro();
  renderizarRequisitosRubro();
  revisarCelebracion();
});
document.getElementById("btn-evaluar-productor").addEventListener("click", evaluarSemaforoMype);

// ==========================================
// 2. ESCENARIOS DE RETRASO (7, 15, 30 DIAS)
// ==========================================
function actualizarEscenariosRetraso() {
  const montoDia = Number(document.getElementById("calc-monto-dia").value);
  const presupuesto = Number(document.getElementById("calc-presupuesto").value);
  const cuerpo = document.getElementById("cuerpo-escenarios");
  cuerpo.innerHTML = "";

  const tramos = [7, 15, 30];
  for (let i = 0; i < tramos.length; i = i + 1) {
    const dias = tramos[i];
    const costo = montoDia * dias;
    const diferencia = costo - presupuesto;
    const signoDiff = diferencia >= 0 ? "+S/ " + diferencia : "-S/ " + Math.abs(diferencia);

    const fila = document.createElement("tr");
    fila.innerHTML =
      "<td>Esperar " +
      dias +
      " días</td>" +
      "<td>S/ " +
      costo +
      "</td>" +
      "<td>" +
      signoDiff +
      "</td>";
    cuerpo.appendChild(fila);
  }
}

document.getElementById("btn-calcular-riesgo").addEventListener("click", actualizarEscenariosRetraso);

// ==========================================
// 3. TAREAS PENDIENTES Y BITACORA
// ==========================================
function configurarListaSimple(idInput, idBoton, idLista, idAviso, itemsIniciales, prefijoItem) {
  const input = document.getElementById(idInput);
  const boton = document.getElementById(idBoton);
  const lista = document.getElementById(idLista);
  const aviso = document.getElementById(idAviso);

  function agregar(texto) {
    const li = document.createElement("li");
    li.textContent = prefijoItem ? prefijoItem + texto : texto;
    lista.appendChild(li);
  }

  for (let i = 0; i < itemsIniciales.length; i = i + 1) {
    agregar(itemsIniciales[i]);
  }

  boton.addEventListener("click", function () {
    const limpio = input.value.trim();
    if (limpio === "") {
      aviso.textContent = "Escribe algo antes de agregar.";
      return;
    }
    aviso.textContent = "";
    agregar(limpio);
    input.value = "";
  });
}

configurarListaSimple(
  "input-obligacion",
  "btn-agregar-obligacion",
  "lista-obligaciones",
  "aviso-obligacion",
  [
    "Revisar cuándo vence mi próximo trámite o pago",
    "Juntar mis papeles o constancias en una sola carpeta"
  ],
  ""
);

configurarListaSimple(
  "input-bitacora",
  "btn-agregar-bitacora",
  "lista-bitacora",
  "aviso-bitacora",
  ["Inicio de control preventivo en FormalizaLex"],
  "Avance: "
);

// ==========================================
// 4. PLAN MYPE Y VIGENCIA
// ==========================================
function calcularPlanYVigencia() {
  const tipoPlan = document.getElementById("sub-perfil").value;
  const meses = Number(document.getElementById("sub-meses").value);
  const diasRestantes = Number(document.getElementById("sub-dias-restantes").value);

  const mesesSeguros = meses > 0 ? meses : 1;
  let monto = 80 * mesesSeguros;
  let detalle = mesesSeguros + " mes(es) a S/ 80 cada uno.";

  if (tipoPlan === "pyme_anual") {
    monto = 800;
    detalle = "Pago anual (10 meses cobrados, 2 de ahorro): ahorras S/ 160 frente a S/ 960.";
  }

  let estadoVigencia = "Activa — te quedan " + diasRestantes + " día(s).";
  if (diasRestantes <= 0) {
    estadoVigencia = "Vencida — renueva tu plan para seguir con tus recordatorios.";
  } else if (diasRestantes <= 5) {
    estadoVigencia = "Por vencer — te quedan " + diasRestantes + " día(s).";
  }

  document.getElementById("sub-monto-total").innerHTML = "<strong>Monto del plan:</strong> S/ " + monto;
  document.getElementById("sub-ahorro").innerHTML = "<strong>Detalle:</strong> " + detalle;
  document.getElementById("sub-vigencia").innerHTML = "<strong>Vigencia:</strong> " + estadoVigencia;
}

document.getElementById("btn-calcular-sub").addEventListener("click", calcularPlanYVigencia);

document.getElementById("btn-validar-sub").addEventListener("click", function () {
  const correo = document.getElementById("sub-correo").value.trim().toLowerCase();
  const confirmacion = document.getElementById("sub-confirmacion");

  if (correo === "") {
    confirmacion.textContent = "Escribe un correo para guardar tu aviso de demostración.";
    return;
  }

  confirmacion.textContent = "Listo: correo registrado en modo demostración (" + correo + ").";
});

// Inicializar al cargar
cargarBaseNormativa();
actualizarEscenariosRetraso();
calcularPlanYVigencia();

// ==========================================
// 5. BARRA DE NAVEGACION: RESALTAR SECCION ACTUAL
// ==========================================
(function () {
  const enlaces = document.querySelectorAll(".nav-enlaces a");
  const secciones = [];
  for (let i = 0; i < enlaces.length; i = i + 1) {
    const sec = document.querySelector(enlaces[i].getAttribute("href"));
    if (sec) {
      secciones.push({ enlace: enlaces[i], seccion: sec });
    }
  }

  function marcarActivo() {
    // Punto de lectura: un poco debajo de la barra fija
    const referencia = window.scrollY + 120;
    let actual = null;
    for (let i = 0; i < secciones.length; i = i + 1) {
      if (secciones[i].seccion.offsetTop <= referencia) {
        actual = secciones[i].enlace;
      }
    }
    // Si llegó al final de la página, marcar la última sección
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4 && secciones.length > 0) {
      actual = secciones[secciones.length - 1].enlace;
    }
    for (let j = 0; j < enlaces.length; j = j + 1) {
      enlaces[j].classList.toggle("activo", enlaces[j] === actual);
    }
  }

  window.addEventListener("scroll", marcarActivo, { passive: true });
  marcarActivo();
})();

// ==========================================
// 6. APARECER SUAVEMENTE AL HACER SCROLL
// ==========================================
(function () {
  const bloques = document.querySelectorAll("main .tarjeta");
  if (!("IntersectionObserver" in window)) {
    return;
  }
  const observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  bloques.forEach(function (bloque) {
    bloque.classList.add("aparecer");
    observador.observe(bloque);
  });
})();

// ==========================================
// 7. LEXI: ASISTENTE DE LA PÁGINA
// Lee tu diagnóstico (nombre, rubro, plazos, estado de cada requisito,
// simulador) y la base legal cargada para recomendarte y explicarte.
// No usa internet ni servidor: responde con la información de esta página.
// ==========================================
(function () {
  const panelEmpresa = document.getElementById("ia-empresa");
  const panelLista = document.getElementById("ia-recomendaciones");
  const panelEstado = document.getElementById("ia-estado");
  const cajaMensajes = document.getElementById("ia-mensajes");
  const formulario = document.getElementById("ia-form");
  const entrada = document.getElementById("ia-entrada");
  const zonaSugerencias = document.getElementById("ia-sugerencias");

  if (!cajaMensajes || !formulario) {
    return;
  }

  const ETIQUETA_ESTADO = {
    pendiente: "Pendiente",
    en_tramite: "En trámite",
    al_dia: "Al día"
  };

  // Siglas que aparecen en la base legal, explicadas en palabras simples
  const SIGLAS = [
    { sigla: "REINFO", texto: "Registro Integral de Formalización Minera." },
    { sigla: "IGAFOM", texto: "Instrumento de Gestión Ambiental para la Formalización de Actividades de Pequeña Minería y Minería Artesanal." },
    { sigla: "ITSE", texto: "Inspección Técnica de Seguridad en Edificaciones: revisan que tu local sea seguro." },
    { sigla: "SIGERSOL", texto: "Sistema de Información para la Gestión de Residuos Sólidos (plataforma del MINAM)." },
    { sigla: "DAMRS", texto: "Declaración Anual de Manejo de Residuos Sólidos." },
    { sigla: "MMRSP", texto: "Manifiesto de Manejo de Residuos Sólidos Peligrosos." },
    { sigla: "SEIA", texto: "Sistema Nacional de Evaluación del Impacto Ambiental." },
    { sigla: "IGA", texto: "Instrumento de Gestión Ambiental: el documento ambiental que te corresponde según tu actividad." },
    { sigla: "PAMA", texto: "Programa de Adecuación y Manejo Ambiental." },
    { sigla: "DAA", texto: "Declaración de Adecuación Ambiental." },
    { sigla: "EPP", texto: "Equipos de protección personal (casco, guantes, mascarilla, etc.)." },
    { sigla: "RUC", texto: "Registro Único de Contribuyentes (SUNAT)." },
    { sigla: "SUNAT", texto: "Superintendencia Nacional de Aduanas y de Administración Tributaria." },
    { sigla: "SUNARP", texto: "Superintendencia Nacional de los Registros Públicos." },
    { sigla: "SUNAFIL", texto: "Superintendencia Nacional de Fiscalización Laboral." },
    { sigla: "SANIPES", texto: "Organismo Nacional de Sanidad Pesquera." },
    { sigla: "DIGESA", texto: "Dirección General de Salud Ambiental e Inocuidad Alimentaria (MINSA)." },
    { sigla: "OEFA", texto: "Organismo de Evaluación y Fiscalización Ambiental." },
    { sigla: "MINEM", texto: "Ministerio de Energía y Minas." },
    { sigla: "MINAM", texto: "Ministerio del Ambiente." },
    { sigla: "PRODUCE", texto: "Ministerio de la Producción." }
  ];

  // Cómo leer las citas de la base legal
  const CITAS = [
    { patron: /D\.\s?S\./, texto: "<strong>D.S.</strong> = Decreto Supremo." },
    { patron: /D\.\s?Leg\./, texto: "<strong>D. Leg.</strong> = Decreto Legislativo." },
    { patron: /R\.\s?M\./, texto: "<strong>R.M.</strong> = Resolución Ministerial." },
    { patron: /\bLey\b/, texto: "<strong>Ley</strong> = norma aprobada por el Congreso." },
    { patron: /\bTUO\b/, texto: "<strong>TUO</strong> = Texto Único Ordenado: la ley ya reunida y actualizada en un solo texto." },
    { patron: /\barts?\./i, texto: "<strong>art. / arts.</strong> = artículo(s): el punto exacto de la norma donde está la obligación." },
    { patron: /\bliterales?\b/, texto: "<strong>literal</strong> = la letra (a, b, c…) dentro de un artículo." },
    { patron: /\bnumerales?\b/, texto: "<strong>numeral</strong> = el punto numerado (1, 2, 3…) dentro de un artículo." },
    { patron: /modificad[oa]s?/, texto: "<strong>modificado por…</strong> = la norma cambió después; conviene leer el texto vigente en la fuente oficial." }
  ];

  // ---------- utilidades ----------
  function esc(texto) {
    return String(texto === undefined || texto === null ? "" : texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizar(texto) {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function entidadCorta(entidad) {
    if (!entidad) {
      return "";
    }
    return entidad.split(/[;(]/)[0].trim();
  }

  function escaparRegex(texto) {
    return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // ---------- lectura del estado de la página ----------
  function leerContexto() {
    const nombre = document.getElementById("prod-nombre").value.trim();
    const rubro = document.getElementById("prod-rubro").value;
    const textoDias = document.getElementById("prod-dias-plazo").value;
    const dias = textoDias === "" || isNaN(Number(textoDias)) ? null : Number(textoDias);
    const claridad = document.getElementById("prod-tiene-instrumento").value;
    const lista = obtenerListaRubroActual();
    const estados = estadosActualesRequisitos.slice();
    const metricas = obtenerMetricasRequisitos();
    const claseSemaforo = document.getElementById("semaforo-productor").className;

    let semaforo = "verde";
    if (claseSemaforo.indexOf("estado-rojo") !== -1) {
      semaforo = "rojo";
    } else if (claseSemaforo.indexOf("estado-amarillo") !== -1) {
      semaforo = "amarillo";
    }

    // Requisitos críticos que aún no están al día (pendientes primero, luego en trámite)
    const criticosNoAlDia = [];
    const otrosNoAlDia = [];
    for (let i = 0; i < lista.length; i = i + 1) {
      const estado = estados[i] || "pendiente";
      if (estado !== "al_dia") {
        const registro = { req: lista[i], estado: estado, idx: i };
        if (lista[i].critico) {
          criticosNoAlDia.push(registro);
        } else {
          otrosNoAlDia.push(registro);
        }
      }
    }
    const orden = function (a, b) {
      const peso = { pendiente: 0, en_tramite: 1 };
      return peso[a.estado] - peso[b.estado];
    };
    criticosNoAlDia.sort(orden);
    otrosNoAlDia.sort(orden);

    return {
      nombre: nombre,
      rubro: rubro,
      dias: dias,
      claridad: claridad,
      lista: lista,
      estados: estados,
      metricas: metricas,
      semaforo: semaforo,
      criticosNoAlDia: criticosNoAlDia,
      otrosNoAlDia: otrosNoAlDia,
      enTramite: estados.filter(function (e) { return e === "en_tramite"; }).length,
      alDia: estados.filter(function (e) { return e === "al_dia"; }).length,
      explicacion: document.getElementById("explicacion-productor").textContent
    };
  }

  function nombreNegocio(ctx) {
    return ctx.nombre !== "" ? ctx.nombre : "tu negocio";
  }

  function etiquetaSemaforo(semaforo) {
    if (semaforo === "rojo") {
      return "🔴 Rojo: atención urgente";
    }
    if (semaforo === "amarillo") {
      return "🟡 Amarillo: revisa a tiempo";
    }
    return "🟢 Verde: vas en buen camino";
  }

  function frasePresupuesto(ctx) {
    const montoDia = Number(document.getElementById("calc-monto-dia").value);
    const presupuesto = Number(document.getElementById("calc-presupuesto").value);
    if (!(montoDia > 0) || !(presupuesto > 0)) {
      return "";
    }
    const c7 = montoDia * 7;
    const c15 = montoDia * 15;
    const c30 = montoDia * 30;
    if (c7 >= presupuesto) {
      return "Con tus números del simulador, solo <strong>7 días</strong> de retraso (S/ " + c7 + ") ya cuestan más que tu presupuesto para ponerte al día (S/ " + presupuesto + ").";
    }
    if (c15 >= presupuesto) {
      return "Con tus números del simulador, a los <strong>15 días</strong> de retraso (S/ " + c15 + ") ya pierdes más que tu presupuesto para ponerte al día (S/ " + presupuesto + ").";
    }
    if (c30 >= presupuesto) {
      return "Con tus números del simulador, a los <strong>30 días</strong> de retraso (S/ " + c30 + ") ya pierdes más que tu presupuesto para ponerte al día (S/ " + presupuesto + ").";
    }
    return "Con tus números del simulador, incluso 30 días de retraso (S/ " + c30 + ") costarían menos que tu presupuesto (S/ " + presupuesto + "), pero ese cálculo no incluye multas ni paradas de operación.";
  }

  // ---------- panel de recomendaciones (arriba) ----------
  function recomendacionesBreves(ctx) {
    const items = [];

    if (ctx.dias !== null && ctx.dias < 0) {
      items.push("Tu fecha o trámite más próximo <strong>ya venció</strong>: regulariza hoy el punto más urgente.");
    } else if (ctx.dias !== null && ctx.dias <= 10) {
      items.push("Te quedan <strong>" + ctx.dias + " día(s)</strong> para tu fecha más próxima: empieza por lo que vence primero.");
    }

    if (ctx.claridad === "no") {
      items.push("Dijiste que no tienes claro qué te toca: abre <em>“Ver base legal y fundamento”</em> en cada requisito o pregúntame abajo.");
    } else if (ctx.claridad === "parcial") {
      items.push("Tienes dudas en algún requisito: pídeme que te explique su base legal en palabras simples.");
    }

    if (ctx.criticosNoAlDia.length > 0) {
      const nombres = ctx.criticosNoAlDia.slice(0, 2).map(function (r) {
        return "<strong>" + esc(r.req.nombre) + "</strong>";
      });
      let frase = "Prioriza tus requisitos clave pendientes: " + nombres.join(" y ");
      if (ctx.criticosNoAlDia.length > 2) {
        frase += " (y " + (ctx.criticosNoAlDia.length - 2) + " más)";
      }
      items.push(frase + ".");
    } else if (ctx.estados.length > 0) {
      items.push("Tus requisitos clave están al día. Mantén tus constancias ordenadas y revisa los plazos con anticipación.");
    }

    if (ctx.enTramite > 0) {
      items.push("Tienes <strong>" + ctx.enTramite + "</strong> requisito(s) en trámite: guarda el cargo y anótalo en tu Bitácora.");
    }

    const presupuesto = frasePresupuesto(ctx);
    if (presupuesto !== "" && ctx.metricas.porcentaje < 100) {
      items.push(presupuesto);
    }

    return items;
  }

  function actualizarPanel() {
    const ctx = leerContexto();
    panelEmpresa.textContent = nombreNegocio(ctx);

    const items = recomendacionesBreves(ctx);
    panelLista.innerHTML = "";
    for (let i = 0; i < items.length; i = i + 1) {
      const li = document.createElement("li");
      li.innerHTML = items[i];
      panelLista.appendChild(li);
    }

    panelEstado.innerHTML =
      '<span class="ia-dato">' + esc(ctx.rubro) + "</span>" +
      '<span class="ia-dato">' + etiquetaSemaforo(ctx.semaforo) + "</span>" +
      '<span class="ia-dato">Avance: ' + ctx.metricas.porcentaje + "%</span>" +
      '<span class="ia-dato">Clave pendientes: ' + ctx.metricas.criticosPendientes + "</span>";
  }

  // ---------- mensajes del chat ----------
  function agregarMensaje(html, esUsuario) {
    const fila = document.createElement("div");
    fila.className = "ia-msg " + (esUsuario ? "usuario" : "bot");
    const burbuja = document.createElement("div");
    burbuja.className = "ia-burbuja";
    if (esUsuario) {
      burbuja.textContent = html;
    } else {
      burbuja.innerHTML = html;
    }
    fila.appendChild(burbuja);
    cajaMensajes.appendChild(fila);
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
  }

  function responderConPausa(html) {
    const fila = document.createElement("div");
    fila.className = "ia-msg bot";
    fila.innerHTML = '<div class="ia-burbuja ia-escribiendo" aria-label="Lexi está escribiendo"><span></span><span></span><span></span></div>';
    cajaMensajes.appendChild(fila);
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
    setTimeout(function () {
      fila.remove();
      agregarMensaje(html, false);
    }, 450);
  }

  function botonRequisito(registro) {
    return '<button type="button" class="ia-chip" data-ia="req" data-idx="' + registro.idx + '">' +
      esc((registro.req.id ? registro.req.id + " · " : "") + registro.req.nombre) + "</button>";
  }

  function botonesTodosLosRequisitos(ctx) {
    let html = '<div class="ia-botones">';
    for (let i = 0; i < ctx.lista.length; i = i + 1) {
      html += botonRequisito({ req: ctx.lista[i], idx: i });
    }
    return html + "</div>";
  }

  // ---------- respuestas ----------
  function respuestaAnalisis(ctx) {
    const nombre = nombreNegocio(ctx);
    let html = "<p>Este es mi análisis para <strong>" + esc(nombre) + "</strong> (" + esc(ctx.rubro) + "):</p>";

    if (ctx.nombre === "") {
      html += '<p>Aún no escribiste el nombre de tu negocio. Puedes ponerlo en el <a href="#diagnostico">Diagnóstico</a> y lo uso en mis recomendaciones.</p>';
    }

    html += "<p><strong>Semáforo:</strong> " + etiquetaSemaforo(ctx.semaforo) + ". " + esc(ctx.explicacion) + "</p>";

    const total = ctx.lista.length;
    html += "<p><strong>Avance:</strong> " + ctx.metricas.porcentaje + "% (" + ctx.alDia + " de " + total +
      " al día, " + ctx.enTramite + " en trámite). Requisitos clave sin cerrar: " + ctx.metricas.criticosPendientes + ".</p>";

    if (ctx.alDia === 0 && ctx.enTramite === 0 && total > 0) {
      html += "<p>Todos tus requisitos siguen en <em>Pendiente</em>. Si ya cumples alguno, cambia su estado en la lista base y afino el análisis.</p>";
    }

    if (ctx.dias !== null && ctx.dias < 0) {
      html += "<p>⚠️ Tu fecha más próxima ya venció. Eso pesa en el semáforo: regulariza cuanto antes.</p>";
    } else if (ctx.dias !== null && ctx.dias <= 10) {
      html += "<p>⏰ Te quedan " + ctx.dias + " día(s) para tu fecha más próxima.</p>";
    }

    if (ctx.claridad !== "si") {
      html += "<p>Marcaste que no tienes del todo claro qué te toca. Te puedo explicar la base legal de cada punto, uno por uno.</p>";
    }

    const prioridad = ctx.criticosNoAlDia.concat(ctx.otrosNoAlDia);
    if (prioridad.length > 0) {
      html += "<p><strong>Te recomiendo este orden:</strong></p><ol>";
      const tope = Math.min(prioridad.length, 4);
      for (let i = 0; i < tope; i = i + 1) {
        const r = prioridad[i];
        html += "<li><strong>" + esc(r.req.nombre) + "</strong> — " + ETIQUETA_ESTADO[r.estado] +
          (r.req.critico ? " (clave)" : "") +
          (r.req.entidad ? ". Ve con: " + esc(entidadCorta(r.req.entidad)) : "") + ".</li>";
      }
      html += "</ol>";
      if (prioridad.length > tope) {
        html += "<p>Y " + (prioridad.length - tope) + " requisito(s) más en la lista.</p>";
      }
      html += "<p>¿Quieres entender la base legal de alguno?</p>" + botonesTodosLosRequisitos(ctx);
    } else if (total > 0) {
      html += "<p>🎉 Todos tus requisitos están al día. Sigue revisando tus fechas con anticipación.</p>";
    }

    const presupuesto = frasePresupuesto(ctx);
    if (presupuesto !== "") {
      html += "<p>" + presupuesto + "</p>";
    }

    html += "<p class=\"ia-nota\">Esto es orientación general; no reemplaza a un abogado ni a los trámites oficiales.</p>";
    return html;
  }

  function respuestaPrimero(ctx) {
    const prioridad = ctx.criticosNoAlDia.concat(ctx.otrosNoAlDia);
    if (prioridad.length === 0) {
      return "<p>No veo pendientes en tu lista: todo figura al día. 🎉 Lo siguiente es mantener tus constancias a mano y revisar plazos periódicos.</p>";
    }
    const r = prioridad[0];
    let html = "<p>Yo empezaría por <strong>" + esc(r.req.nombre) + "</strong>" +
      (r.req.critico ? ", que es un requisito clave" : "") + " (estado: " + ETIQUETA_ESTADO[r.estado] + ").</p><ol>";
    if (r.estado === "pendiente") {
      html += "<li>Confirma si te aplica: " + (r.req.aplicabilidad ? esc(r.req.aplicabilidad) : "revisa la base legal del punto") + "</li>";
      if (r.req.entidad) {
        html += "<li>Acércate o consulta a: " + esc(r.req.entidad) + "</li>";
      }
      html += "<li>Junta tus documentos y cambia el estado a <em>En trámite</em> cuando lo inicies.</li>";
    } else {
      html += "<li>Guarda el cargo o constancia de lo presentado.</li>";
      html += "<li>Anótalo en tu Bitácora de avances.</li>";
      html += "<li>Cuando quede resuelto, márcalo <em>Al día</em>.</li>";
    }
    if (r.req.plazo) {
      html += "<li>Ten presente el plazo: " + esc(r.req.plazo) + "</li>";
    }
    html += "</ol>";
    html += '<div class="ia-botones">' + botonRequisito(r) + "</div>";
    return html;
  }

  function respuestaEntidades(ctx) {
    let html = "<p>Estas son las entidades que aparecen en la base legal de tu rubro (<strong>" + esc(ctx.rubro) + "</strong>):</p><ul>";
    let hay = false;
    for (let i = 0; i < ctx.lista.length; i = i + 1) {
      if (ctx.lista[i].entidad) {
        hay = true;
        html += "<li><strong>" + esc(ctx.lista[i].nombre) + ":</strong> " + esc(ctx.lista[i].entidad) + "</li>";
      }
    }
    html += "</ul>";
    if (!hay) {
      return "<p>Para este rubro todavía no tengo entidades cargadas. Como punto de partida, consulta en tu municipalidad y en SUNAT, o con un abogado.</p>";
    }
    return html;
  }

  function respuestaPlazos(ctx) {
    let html = "<p>Plazos que indica la base legal para tu rubro:</p><ul>";
    let hay = false;
    for (let i = 0; i < ctx.lista.length; i = i + 1) {
      if (ctx.lista[i].plazo) {
        hay = true;
        html += "<li><strong>" + esc(ctx.lista[i].nombre) + ":</strong> " + esc(ctx.lista[i].plazo) + "</li>";
      }
    }
    html += "</ul>";
    if (!hay) {
      return "<p>Para este rubro no tengo plazos cargados. Te sugiero armar tu calendario de fechas y pagos clave en la lista de tareas.</p>";
    }
    return html;
  }

  function respuestaElegirRequisito(ctx) {
    return "<p>¿De cuál punto de tu lista quieres entender la base legal?</p>" + botonesTodosLosRequisitos(ctx);
  }

  function respuestaRequisito(ctx, idx) {
    const req = ctx.lista[idx];
    if (!req) {
      return "<p>No encontré ese requisito en tu lista actual. Revisa que el rubro seleccionado sea el correcto.</p>";
    }
    const estado = ctx.estados[idx] || "pendiente";
    let html = "<p><strong>" + esc((req.id ? req.id + " — " : "") + req.nombre) + "</strong>" +
      (req.critico ? ' <span class="badge-critico">Clave</span>' : "") + "</p>";

    html += "<p><strong>En palabras simples:</strong> " + esc(req.glosario) + "</p>";
    html += "<p><strong>Tu estado hoy:</strong> " + ETIQUETA_ESTADO[estado] + "</p>";

    if (!req.baseLegal) {
      html += "<p>Este punto es una recomendación general: todavía no tiene una norma específica cargada en la base. Consulta en tu municipalidad, en SUNAT o con un abogado qué documentos te corresponden.</p>";
      return html;
    }

    html += "<p><strong>Base legal:</strong> " + esc(req.baseLegal) + "</p>";

    const guia = [];
    for (let i = 0; i < CITAS.length; i = i + 1) {
      if (CITAS[i].patron.test(req.baseLegal)) {
        guia.push("<li>" + CITAS[i].texto + "</li>");
      }
    }
    if (guia.length > 0) {
      html += "<p><strong>Cómo leer esa cita:</strong></p><ul>" + guia.join("") + "</ul>";
    }

    if (req.entidad) {
      html += "<p><strong>Quién lo ve o fiscaliza:</strong> " + esc(req.entidad) + "</p>";
    }
    if (req.aplicabilidad) {
      html += "<p><strong>A quién aplica:</strong> " + esc(req.aplicabilidad) + "</p>";
    }
    if (req.plazo) {
      html += "<p><strong>Cuándo:</strong> " + esc(req.plazo) + "</p>";
    }

    // Siglas presentes en el texto del requisito
    const texto = [req.nombre, req.glosario, req.baseLegal, req.entidad, req.aplicabilidad, req.plazo].join(" ");
    const siglasUsadas = [];
    for (let j = 0; j < SIGLAS.length; j = j + 1) {
      const patron = new RegExp("(^|[^A-Za-zÁÉÍÓÚÑ])" + escaparRegex(SIGLAS[j].sigla) + "([^A-Za-zÁÉÍÓÚÑ]|$)");
      if (patron.test(texto)) {
        siglasUsadas.push("<li><strong>" + SIGLAS[j].sigla + ":</strong> " + SIGLAS[j].texto + "</li>");
      }
    }
    if (siglasUsadas.length > 0) {
      html += "<p><strong>Siglas que aparecen:</strong></p><ul>" + siglasUsadas.join("") + "</ul>";
    }

    let siguiente = "Revisa si te aplica con la entidad indicada y junta tus documentos para iniciarlo.";
    if (estado === "en_tramite") {
      siguiente = "Guarda el cargo o constancia y anótalo en tu Bitácora hasta que quede resuelto.";
    } else if (estado === "al_dia") {
      siguiente = "Mantén tus constancias a mano y revisa si hay renovaciones o plazos periódicos.";
    }
    html += "<p><strong>Qué puedes hacer ahora:</strong> " + siguiente + "</p>";

    if (req.fuente) {
      html += '<p><a href="' + esc(req.fuente) + '" target="_blank" rel="noopener noreferrer">Consultar la norma oficial</a></p>';
    }
    html += '<p class="ia-nota">Orientación general basada en la base normativa de esta página; para tu caso concreto consulta a un abogado.</p>';
    return html;
  }

  function respuestaSigla(sigla) {
    return "<p><strong>" + sigla.sigla + ":</strong> " + sigla.texto + "</p>";
  }

  function respuestaAyuda() {
    return "<p>Puedo ayudarte con esto:</p><ul>" +
      "<li>Analizar tu diagnóstico y decirte qué priorizar.</li>" +
      "<li>Explicar en palabras simples la base legal de cada requisito de tu rubro.</li>" +
      "<li>Decirte qué entidad ve cada trámite y qué plazos aparecen.</li>" +
      "<li>Explicar siglas como REINFO, ITSE, IGAFOM o SIGERSOL.</li></ul>" +
      "<p>Puedes escribirme o tocar una opción de abajo.</p>";
  }

  // ---------- interpretación del texto escrito ----------
  const PALABRAS_VACIAS = ["correspondiente", "actividad", "general", "gestion"];

  function buscarRequisitos(ctx, texto) {
    const n = normalizar(texto);

    // 1) por código: MF-1, mf1, etc.
    const porCodigo = n.match(/\b(pa|ag|mf|mn|ot)\s?-?\s?(\d)\b/);
    if (porCodigo) {
      const codigo = (porCodigo[1] + "-" + porCodigo[2]).toUpperCase();
      for (let i = 0; i < ctx.lista.length; i = i + 1) {
        if (ctx.lista[i].id === codigo) {
          return [i];
        }
      }
    }

    // 2) por palabras del nombre
    let mejor = 0;
    let indices = [];
    for (let j = 0; j < ctx.lista.length; j = j + 1) {
      const palabras = normalizar(ctx.lista[j].nombre).split(/[^a-z0-9]+/);
      let puntos = 0;
      for (let k = 0; k < palabras.length; k = k + 1) {
        const p = palabras[k];
        if (p.length >= 5 && PALABRAS_VACIAS.indexOf(p) === -1 && n.indexOf(p) !== -1) {
          puntos = puntos + 1;
        }
      }
      if (puntos > mejor) {
        mejor = puntos;
        indices = [j];
      } else if (puntos === mejor && puntos > 0) {
        indices.push(j);
      }
    }
    return indices;
  }

  function buscarSigla(texto) {
    for (let i = 0; i < SIGLAS.length; i = i + 1) {
      const patron = new RegExp("(^|[^a-zA-Z])" + escaparRegex(SIGLAS[i].sigla) + "([^a-zA-Z]|$)", "i");
      if (patron.test(texto)) {
        return SIGLAS[i];
      }
    }
    return null;
  }

  function contiene(n, patron) {
    return patron.test(n);
  }

  function interpretar(texto) {
    const ctx = leerContexto();
    const n = normalizar(texto);

    if (contiene(n, /^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey|holi)\b/)) {
      return "<p>¡Hola! 👋 Soy Lexi. Puedo analizar tu diagnóstico o explicarte la base legal de tu rubro. ¿Por dónde empezamos?</p>";
    }
    if (contiene(n, /\b(gracias|muchas gracias|genial|ok gracias)\b/)) {
      return "<p>¡Con gusto! Si quieres, seguimos con otro requisito. 😊</p>";
    }
    if (contiene(n, /\b(ayuda|que puedes hacer|como funcionas|que haces)\b/)) {
      return respuestaAyuda();
    }

    const porCodigo = n.match(/\b(pa|ag|mf|mn|ot)\s?-?\s?(\d)\b/);
    if (porCodigo) {
      const hallados = buscarRequisitos(ctx, texto);
      if (hallados.length > 0) {
        return respuestaRequisito(ctx, hallados[0]);
      }
    }

    if (contiene(n, /(analiz|diagnostic|resumen|como voy|como estoy|recomiend|recomendacion|mi situacion|mis resultados|semaforo)/)) {
      return respuestaAnalisis(ctx);
    }
    if (contiene(n, /(primero|prioridad|urgente|por donde empiezo|que hago ahora|siguiente paso)/)) {
      return respuestaPrimero(ctx);
    }

    const sigla = buscarSigla(texto);
    const hallados = buscarRequisitos(ctx, texto);

    if (hallados.length === 1) {
      return respuestaRequisito(ctx, hallados[0]);
    }
    if (hallados.length > 1) {
      let html = "<p>Encontré varios puntos que podrían ser. ¿Cuál quieres?</p><div class=\"ia-botones\">";
      for (let i = 0; i < hallados.length; i = i + 1) {
        html += botonRequisito({ req: ctx.lista[hallados[i]], idx: hallados[i] });
      }
      return html + "</div>";
    }

    if (sigla) {
      return respuestaSigla(sigla);
    }
    if (contiene(n, /(entidad|quien|donde|acudir|ventanilla|oficina|institucion)/)) {
      return respuestaEntidades(ctx);
    }
    if (contiene(n, /(plazo|fecha|cuando|vence|vencimiento|cuanto tiempo)/)) {
      return respuestaPlazos(ctx);
    }
    if (contiene(n, /(base legal|ley|norma|articulo|decreto|fundamento|legal)/)) {
      return respuestaElegirRequisito(ctx);
    }
    if (contiene(n, /(multa|sancion|penalidad|cuanto me cobran)/)) {
      return "<p>En esta página no tengo los montos de multas o sanciones cargados, así que no quiero inventarlos. Puedo mostrarte la norma de cada requisito para que revises ahí, o te recomiendo consultar a un abogado. ¿Quieres ver la base legal de alguno?</p>" + botonesTodosLosRequisitos(ctx);
    }

    return "<p>No estoy seguro de haber entendido. 🤔 Prueba con algo como <em>“analiza mi diagnóstico”</em>, <em>“explícame la licencia municipal”</em> o <em>“¿qué es REINFO?”</em>.</p>";
  }

  // ---------- eventos ----------
  function enviarTexto(texto) {
    const limpio = texto.trim();
    if (limpio === "") {
      return;
    }
    agregarMensaje(limpio, true);
    responderConPausa(interpretar(limpio));
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    enviarTexto(entrada.value);
    entrada.value = "";
    entrada.focus();
  });

  function manejarClic(evento) {
    const boton = evento.target.closest("[data-ia]");
    if (!boton) {
      return;
    }
    const accion = boton.getAttribute("data-ia");
    const ctx = leerContexto();

    if (accion === "req") {
      const idx = Number(boton.getAttribute("data-idx"));
      const req = ctx.lista[idx];
      agregarMensaje("Explícame: " + (req ? req.nombre : "este requisito"), true);
      responderConPausa(respuestaRequisito(ctx, idx));
    } else if (accion === "analizar") {
      agregarMensaje("Analiza mi diagnóstico", true);
      responderConPausa(respuestaAnalisis(ctx));
    } else if (accion === "primero") {
      agregarMensaje("¿Qué hago primero?", true);
      responderConPausa(respuestaPrimero(ctx));
    } else if (accion === "baselegal") {
      agregarMensaje("Quiero entender la base legal", true);
      responderConPausa(respuestaElegirRequisito(ctx));
    } else if (accion === "entidades") {
      agregarMensaje("¿A qué entidades acudo?", true);
      responderConPausa(respuestaEntidades(ctx));
    } else if (accion === "plazos") {
      agregarMensaje("¿Qué plazos tengo?", true);
      responderConPausa(respuestaPlazos(ctx));
    }
  }

  cajaMensajes.addEventListener("click", manejarClic);
  zonaSugerencias.addEventListener("click", manejarClic);

  // Mantener el panel al día cuando cambian los datos del diagnóstico
  let temporizador = null;
  function programarActualizacion() {
    clearTimeout(temporizador);
    temporizador = setTimeout(actualizarPanel, 60);
  }

  document.addEventListener("input", function (e) {
    if (e.target && e.target.id && (e.target.id.indexOf("prod-") === 0 || e.target.id.indexOf("calc-") === 0)) {
      programarActualizacion();
    }
  });
  document.addEventListener("change", function (e) {
    if (e.target && ((e.target.id && e.target.id.indexOf("prod-") === 0) || e.target.classList.contains("selector-estado-req"))) {
      programarActualizacion();
    }
  });
  document.getElementById("btn-evaluar-productor").addEventListener("click", programarActualizacion);
  document.getElementById("btn-calcular-riesgo").addEventListener("click", programarActualizacion);

  // Cuando se vuelve a dibujar la lista de requisitos (cambio de rubro o carga de la base normativa)
  const contenedorReq = document.getElementById("contenedor-requisitos");
  if (contenedorReq && "MutationObserver" in window) {
    new MutationObserver(programarActualizacion).observe(contenedorReq, { childList: true });
  }

  // Mensaje de bienvenida y panel inicial
  actualizarPanel();
  const ctxInicial = leerContexto();
  agregarMensaje(
    "<p>¡Hola! Soy <strong>Lexi</strong>, tu asistente IA. 👋</p>" +
    "<p>" + (ctxInicial.nombre !== ""
      ? "Ya vi los datos de <strong>" + esc(ctxInicial.nombre) + "</strong>."
      : "Escribe el nombre de tu negocio en el <a href=\"#diagnostico\">Diagnóstico</a> y lo uso para personalizar mis recomendaciones.") +
    " Puedo analizar tus resultados o explicarte la base legal de tu lista en palabras simples.</p>",
    false
  );
})();