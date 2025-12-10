
const DB = [
  // --- TEMA 1 (Copiado de tu lista) ---
  {
    t: 1,
    q: "¿Cuál de las siguientes afirmaciones describe mejor una característica del software?",
    o: ["Es un elemento tangible que se puede tocar", "Se fabrica en una línea de montaje", "Se estropea y desgasta con el uso físico", "Es intangible y no debe tocarse", "Es un componente exclusivamente de hardware", "No requiere ningún proceso de desarrollo"],
    c: 3
  },
  {
    t: 1,
    q: "Selecciona las afirmaciones VERDADERAS sobre el software según el texto:",
    o: ["Se desarrolla, no se fabrica", "Se deteriora físicamente como un coche", "Es un esfuerzo permanente e infinito", "Es intangible", "No tiene costes de mantenimiento", "Solo existe el tipo de sistema hardware"],
    c: [0, 3]
  },
  {
    t: 1,
    q: "Según el texto, la ingeniería es una disciplina que...",
    o: ["Se encarga de fabricar hardware exclusivamente", "Aplica conocimientos científicos para resolver problemas", "Solo se enfoca en la gestión económica", "No tiene relación con soluciones tecnológicas", "Se limita a la programación de código", "Es una rama de las artes visuales"],
    c: 1
  },
  {
    t: 1,
    q: "¿Cómo se define un proyecto de software?",
    o: ["Un esfuerzo permanente para mantener un servicio", "Una tarea repetitiva sin fin", "Un esfuerzo temporal para crear un producto o servicio único", "Un proceso de fabricación industrial en serie", "Un conjunto de herramientas de hardware", "Una metodología de ventas"],
    c: 2
  },
  {
    t: 1,
    q: "¿Cuáles de los siguientes son tipos de proyectos software mencionados?",
    o: ["Productivo", "De hardware puro", "Social", "De entretenimiento", "Científico", "Bélico"],
    c: [0, 2, 4]
  },
  {
    t: 1,
    q: "Un proyecto software debe estar limitado en:",
    o: ["Tiempo y Coste", "Espacio y Materia", "Solo en Tiempo", "Solo en Coste", "Personal y Ubicación", "Hardware y Redes"],
    c: 0
  },
  {
    t: 1,
    q: "¿Cuáles son las etapas del ciclo de Deming mencionadas en el texto?",
    o: ["Plan", "Build", "Do", "Check", "Release", "Act"],
    c: [0, 2, 3, 5]
  },
  {
    t: 1,
    q: "En el ciclo de Deming, ¿qué se hace en la etapa 'Plan'?",
    o: ["Llevar a cabo los objetivos", "Establecer objetivos y procesos necesarios", "Evaluar los resultados obtenidos", "Identificar problemas de la iteración anterior", "Entregar el producto al cliente", "Corregir errores de código"],
    c: 1
  },
  {
    t: 1,
    q: "En el ciclo de Deming, ¿qué define la etapa 'Check'?",
    o: ["Ejecutar el plan establecido", "Planificar los costes", "Evaluar resultados y compararlos con los esperados", "Atajar oportunidades de mejora", "Desplegar el software", "Escribir el código fuente"],
    c: 2
  },
  {
    t: 1,
    q: "La etapa 'Act' del ciclo de Deming consiste en:",
    o: ["Identificar problemas y oportunidades de mejora para la siguiente iteración", "No hacer nada hasta la siguiente fase", "Llevar a cabo los objetivos ciegamente", "Monitorizar los logs del sistema", "Vender el producto al cliente", "Contratar más personal"],
    c: 0
  },
  {
    t: 1,
    q: "¿Qué son los entregables en un proyecto software?",
    o: ["Solo el código fuente final", "El conjunto de productos que deben desarrollarse y entregarse", "Las facturas emitidas al cliente", "Los correos electrónicos del equipo", "Las reuniones diarias", "El hardware donde se instala el sistema"],
    c: 1
  },
  {
    t: 1,
    q: "¿Cuál es el coste más alto de todo el ciclo de vida del software?",
    o: ["La planificación", "El diseño", "El desarrollo (codificación)", "El mantenimiento", "El despliegue", "La gestión de requisitos"],
    c: 3
  },
  {
    t: 1,
    q: "¿Qué objetivo tiene la gestión de incidencias?",
    o: ["Crear nuevas funcionalidades", "Restaurar la operativa normal minimizando el impacto negativo", "Despedir a los responsables del error", "Aumentar el presupuesto del proyecto", "Reescribir todo el software desde cero", "Planificar la siguiente versión"],
    c: 1
  },
  {
    t: 1,
    q: "Selecciona los cuatro tipos de mantenimiento existentes:",
    o: ["Evolutivo", "Preventivo", "Correctivo", "Adaptativo", "Predictivo", "Perfectivo"],
    c: [0, 2, 3, 5]
  },
  {
    t: 1,
    q: "¿Qué porcentaje del mantenimiento representa el mantenimiento Evolutivo?",
    o: ["17%", "5%", "60%", "18%", "25%", "80%"],
    c: 2
  },
  {
    t: 1,
    q: "¿En qué consiste el mantenimiento Evolutivo?",
    o: ["Corrige errores no detectados", "Mejora la calidad interna del sistema", "Adapta el software a cambios tecnológicos", "Incorpora nuevos requisitos o cambios en los existentes", "Realiza copias de seguridad", "Formatea los servidores"],
    c: 3
  },
  {
    t: 1,
    q: "¿Qué porcentaje representa el mantenimiento Correctivo?",
    o: ["60%", "18%", "5%", "10%", "17%", "30%"],
    c: 4
  },
  {
    t: 1,
    q: "El mantenimiento que corrige errores del producto no detectados durante el desarrollo es el:",
    o: ["Evolutivo", "Perfectivo", "Correctivo", "Adaptativo", "Preventivo", "Emergente"],
    c: 2
  },
  {
    t: 1,
    q: "¿Qué porcentaje representa el mantenimiento Adaptativo?",
    o: ["18%", "17%", "60%", "5%", "50%", "12%"],
    c: 0
  },
  {
    t: 1,
    q: "El mantenimiento Adaptativo se encarga de:",
    o: ["Añadir nuevas funcionalidades", "Corregir bugs críticos", "Mejorar la eficiencia del código", "Adaptar a cambios en el entorno tecnológico", "Limpiar la base de datos", "Formar a los usuarios"],
    c: 3
  },
  {
    t: 1,
    q: "¿Cuál es el tipo de mantenimiento con menor porcentaje (5%)?",
    o: ["Evolutivo", "Correctivo", "Adaptativo", "Perfectivo", "De emergencia", "De usuario"],
    c: 3
  },
  {
    t: 1,
    q: "El mantenimiento Perfectivo tiene como objetivo:",
    o: ["Mejorar la calidad interna de los sistemas", "Añadir nuevas pantallas al programa", "Cambiar de sistema operativo", "Arreglar fallos que impiden trabajar", "Hacer el software más bonito visualmente", "Reducir el coste de licencias"],
    c: 0
  },
  {
    t: 1,
    q: "¿Qué se entiende por 'Calidad del Software' según el texto?",
    o: ["Que el software no ocupe mucho espacio", "Cumplir requisitos, estándares y características implícitas esperadas", "Que el software sea gratuito", "Que esté escrito en el lenguaje de programación más moderno", "Que no tenga ninguna línea de comentarios", "Que se desarrolle en menos de un mes"],
    c: 1
  },
  {
    t: 1,
    q: "Los costes de aseguramiento de la calidad se compensan con:",
    o: ["El aumento de precio al cliente", "La reducción de personal", "El ahorro en mantenimiento posterior", "Las subvenciones del estado", "La venta de hardware", "No se compensan, son pérdidas"],
    c: 2
  },
  {
    t: 1,
    q: "¿Qué significan las siglas SQA?",
    o: ["Software Quality Assurance (Aseguradora de Calidad del Software)", "System Questions Answers", "Software Quick Analysis", "Simple Query Application", "System Quality Audit", "Standard Quality Association"],
    c: 0
  },
  {
    t: 1,
    q: "Selecciona las responsabilidades del equipo de SQA:",
    o: ["Establecer el plan de SQA", "Programar todo el código de la aplicación", "Vender el producto", "Auditar los productos de desarrollo", "Documentar desviaciones o no conformidades", "Reparar el hardware de los servidores"],
    c: [0, 3, 4]
  },
  {
    t: 1,
    q: "El equipo de SQA participa en:",
    o: ["La definición del plan de proyecto", "La contratación de personal de limpieza", "La compra de acciones de la empresa", "El diseño gráfico del logotipo", "La instalación eléctrica", "La gestión de nóminas"],
    c: 0
  },
  {
    t: 1,
    q: "¿Cuándo pueden generarse entregables en un proyecto?",
    o: ["Solo al final del proyecto", "Previo al comienzo", "Durante el desarrollo", "Nunca, el software no tiene entregables", "Solo si el cliente lo pide explícitamente", "Solo en la fase de mantenimiento"],
    c: [1, 2]
  },
  {
    t: 1,
    q: "¿Qué implica que el software no se 'fabrica'?",
    o: ["Que no requiere esfuerzo humano", "Que es un proceso lógico de desarrollo y no una manufactura física", "Que se hace solo con máquinas", "Que no tiene costes asociados", "Que siempre sale perfecto a la primera", "Que no se puede vender"],
    c: 1
  },
  {
    t: 1,
    q: "En el contexto de la ingeniería del software, 'intangible' significa:",
    o: ["Que no tiene valor económico", "Que es difícil de entender", "Que no debe tocarse (no tiene presencia física)", "Que es ilegal", "Que está en la nube", "Que es transparente"],
    c: 2
  },
  {
    t: 1,
    q: "¿Cuál de los siguientes NO es un tipo de mantenimiento mencionado?",
    o: ["Evolutivo", "Correctivo", "Destructivo", "Adaptativo", "Perfectivo", "Ninguna de las anteriores"],
    c: 2
  },
  {
    t: 1,
    q: "Las desviaciones o no conformidades se detectan en:",
    o: ["Las reuniones de ventas", "Las revisiones técnicas formales", "La pausa del café", "El momento de la instalación", "Al borrar el código", "En la entrevista de trabajo"],
    c: 1
  },
  {
    t: 2,
    q: "¿Qué especifica el ciclo de vida de un proyecto software?",
    o: [
      "Solo el coste económico del proyecto",
      "El enfoque general, procesos, actividades, tareas y el orden de los productos a entregar",
      "El hardware necesario para ejecutar el programa",
      "La lista de empleados que serán despedidos",
      "El lenguaje de programación a utilizar exclusivamente",
      "La temperatura de la sala de servidores"
    ],
    c: 1
  },
  {
    t: 2,
    q: "¿Qué característica define principalmente a los métodos de desarrollo 'tradicionales'?",
    o: [
      "Son iterativos e incrementales",
      "Se basan en el manifiesto ágil",
      "Suelen ser modelos de desarrollo secuencial (en cascada)",
      "Entregan software funcional cada 2 semanas",
      "El alcance es variable",
      "No requieren planificación detallada"
    ],
    c: 2
  },
  {
    t: 2,
    q: "En los métodos tradicionales, ¿cómo se relacionan las etapas entre sí?",
    o: [
      "Son independientes y se hacen en paralelo",
      "No tienen relación alguna",
      "Los resultados de una etapa se utilizan como base para planificar la siguiente",
      "Se empieza por el final y se acaba por el principio",
      "Todas las etapas se ejecutan simultáneamente",
      "Se saltan etapas según convenga"
    ],
    c: 2
  },
  {
    t: 2,
    q: "En el desarrollo tradicional, ¿cuándo se especifican los requisitos?",
    o: [
      "Se especifican completamente antes de diseñar y construir",
      "Se van descubriendo sobre la marcha",
      "Al final del proyecto",
      "Durante la fase de pruebas",
      "Nunca se especifican",
      "En cada Sprint"
    ],
    c: 0
  },
  {
    t: 2,
    q: "¿Qué sucede con los requisitos en los métodos tradicionales si estos cambian?",
    o: [
      "Se adaptan fácilmente sin coste",
      "Tienen que ser reelaborados y probados de nuevo",
      "Se ignoran los cambios",
      "El proyecto se cancela inmediatamente",
      "Se cambian automáticamente por IA",
      "No afecta al resto de etapas"
    ],
    c: 1
  },
  {
    t: 2,
    q: "Selecciona las características de los métodos ÁGILES:",
    o: [
      "Son modelos secuenciales",
      "Son modelos iterativos",
      "Son modelos incrementales",
      "Tienen entregas poco frecuentes",
      "El alcance es fijo e inamovible",
      "Buscan producir software de valor de forma flexible"
    ],
    c: [1, 2, 5]
  },
  {
    t: 2,
    q: "¿Dónde se refleja la filosofía de los métodos ágiles?",
    o: [
      "En la Constitución",
      "En el ciclo de Deming",
      "En el Manifiesto Ágil",
      "En el modelo en Cascada",
      "En el código penal",
      "En los manuales de hardware"
    ],
    c: 2
  },
  {
    t: 2,
    q: "En la gestión de proyectos TRADICIONALES, ¿qué variable se mantiene FIJA?",
    o: [
      "El tiempo",
      "El coste",
      "El alcance",
      "La calidad",
      "El equipo",
      "La tecnología"
    ],
    c: 2
  },
  {
    t: 2,
    q: "En la gestión de proyectos TRADICIONALES, ¿qué variables se van ADAPTANDO (son variables)?",
    o: [
      "Alcance y Calidad",
      "Coste y Tiempo",
      "Solo el Alcance",
      "Riesgo y Beneficio",
      "Hardware y Software",
      "Ninguna, todo es fijo"
    ],
    c: 1
  },
  {
    t: 2,
    q: "En la gestión de proyectos ÁGILES, ¿qué variables se mantienen FIJAS?",
    o: [
      "El alcance y los requisitos",
      "El coste y el tiempo",
      "Solo el alcance",
      "La documentación",
      "Los errores",
      "Las herramientas"
    ],
    c: 1
  },
  {
    t: 2,
    q: "En la gestión de proyectos ÁGILES, ¿qué variable se ADAPTA a las circunstancias?",
    o: [
      "El coste",
      "El tiempo",
      "El alcance",
      "El jefe de proyecto",
      "El presupuesto inicial",
      "La fecha de entrega final"
    ],
    c: 2
  },
  {
    t: 2,
    q: "¿Qué es Scrum?",
    o: [
      "Un lenguaje de programación",
      "Un tipo de base de datos",
      "Un marco de trabajo ágil para productos complejos",
      "Un método tradicional de desarrollo",
      "Un software de antivirus",
      "Una marca de ordenadores"
    ],
    c: 2
  },
  {
    t: 2,
    q: "¿Cómo entrega valor Scrum?",
    o: [
      "En un gran lanzamiento al final del proyecto",
      "En ciclos cortos y repetitivos llamados Sprints",
      "Sin entregar nada hasta que todo esté perfecto",
      "Mediante documentación extensiva",
      "En fases de 6 meses mínimo",
      "Solo cuando el cliente paga por adelantado"
    ],
    c: 1
  },
  {
    t: 2,
    q: "¿Qué es un Sprint?",
    o: [
      "Una carrera de velocidad",
      "Un error en el código",
      "Un período de tiempo variable según el humor del equipo",
      "Un período de tiempo fijo (2-4 semanas) para crear un incremento terminado",
      "La fase de pruebas de un proyecto tradicional",
      "Una reunión de 15 minutos"
    ],
    c: 3
  },
  {
    t: 2,
    q: "Selecciona los eventos que encontramos DENTRO de un Sprint:",
    o: [
      "Sprint Planning",
      "Daily Scrum",
      "Waterfall Phase",
      "Sprint Review",
      "Project Cancellation",
      "Sprint Retrospective"
    ],
    c: [0, 1, 3, 5]
  },
  {
    t: 2,
    q: "¿Cuál es el objetivo del Sprint Planning?",
    o: [
      "Reflexionar sobre cómo ha ido el sprint anterior",
      "Mostrar el trabajo a los interesados",
      "Definir qué se puede entregar en el Sprint y cómo se realizará",
      "Sincronizar el trabajo diario",
      "Despedir a los miembros improductivos",
      "Escribir todo el código del proyecto"
    ],
    c: 2
  },
  {
    t: 2,
    q: "Sobre la Daily Scrum, señala las afirmaciones correctas:",
    o: [
      "Dura 1 hora",
      "Es una reunión diaria de 15 minutos",
      "Es para el equipo de desarrollo",
      "Su objetivo es crear un plan para las próximas 24 horas",
      "Se invita a todos los clientes",
      "Se revisa el presupuesto del proyecto"
    ],
    c: [1, 2, 3]
  },
  {
    t: 2,
    q: "¿En qué evento el equipo muestra el trabajo realizado a los interesados y recoge comentarios?",
    o: [
      "Sprint Planning",
      "Daily Scrum",
      "Sprint Review",
      "Sprint Retrospective",
      "En el desarrollo tradicional",
      "En la fase de diseño"
    ],
    c: 2
  },
  {
    t: 2,
    q: "¿Cuál es el objetivo de la Sprint Retrospective?",
    o: [
      "Programar nuevas funcionalidades",
      "Reflexionar sobre cómo ha ido el sprint y crear un plan de mejoras",
      "Presentar el producto al cliente",
      "Planificar el trabajo de las próximas 24 horas",
      "Asignar los sueldos del equipo",
      "Definir el alcance total del proyecto"
    ],
    c: 1
  },
  {
    t: 2,
    q: "En Scrum, el resultado de un Sprint debe ser:",
    o: [
      "Un documento de requisitos",
      "Un prototipo que no funciona",
      "Un incremento de producto 'terminado' y potencialmente entregable",
      "Una presentación en PowerPoint",
      "Solo código sin probar",
      "Un plan de costes"
    ],
    c: 2
  },
  {
    t: 2,
    q: "¿Cuándo se suele entregar el producto al cliente en los métodos TRADICIONALES?",
    o: [
      "Cada 2 semanas",
      "Al principio del proyecto",
      "Mucho después de lo especificado",
      "Antes de empezar el desarrollo",
      "En cada iteración",
      "Nunca"
    ],
    c: 2
  },
  {
    t: 2,
    q: "En los métodos ÁGILES, los nuevos requisitos...",
    o: [
      "Están prohibidos",
      "Requieren cancelar el proyecto actual",
      "Pueden proponerse cambios y requisitos no previstos inicialmente",
      "Solo se aceptan si se paga el triple",
      "Deben esperar al final del todo el proyecto",
      "Son ignorados por el equipo"
    ],
    c: 2
  },
  {
    t: 2,
    q: "¿A qué se adapta el alcance en la gestión de proyectos ÁGILES?",
    o: [
      "A las circunstancias del momento",
      "A los presupuestos",
      "A los Sprints restantes",
      "A la fase lunar",
      "A la tecnología de hace 10 años",
      "A los manuales de papel"
    ],
    c: [0, 1, 2]
  },
  {
    t: 2,
    q: "¿Qué duración normal tiene un Sprint según el texto?",
    o: [
      "1 a 2 días",
      "2 a 4 semanas",
      "3 a 6 meses",
      "1 año",
      "15 minutos",
      "Indefinida"
    ],
    c: 1
  },
  {
    t: 2,
    q: "¿Qué metodología está orientada al desarrollo rápido de software?",
    o: [
      "Métodos Tradicionales",
      "Métodos en Cascada",
      "Métodos Secuenciales",
      "Métodos Ágiles",
      "Métodos de Hardware",
      "Métodos de Planificación Estricta"
    ],
    c: 3
  },
  {
    t: 2,
    q: "El 'ciclo de vida en cascada' es típico de:",
    o: [
      "Scrum",
      "Métodos Ágiles",
      "Métodos Tradicionales",
      "Programación Extrema",
      "Desarrollo Web moderno",
      "Startups tecnológicas"
    ],
    c: 2
  },
  {
    t: 2,
    q: "¿Qué evento de Scrum ocurre justo antes de empezar a trabajar en las tareas del Sprint?",
    o: [
      "Sprint Review",
      "Sprint Retrospective",
      "Sprint Planning",
      "Daily Scrum",
      "Lanzamiento final",
      "Vacaciones"
    ],
    c: 2
  },
  {
    t: 2,
    q: "En un proyecto ágil, si el presupuesto se agota, ¿qué es lo más probable que ocurra con el alcance?",
    o: [
      "Se ha adaptado a lo que se pudo hacer con ese presupuesto",
      "Se extiende el presupuesto obligatoriamente",
      "Se trabaja gratis hasta terminar el alcance",
      "Se considera el proyecto un fracaso total",
      "Se demanda al cliente",
      "Se cambia a metodología tradicional"
    ],
    c: 0
  },
  {
    t: 2,
    q: "¿Qué NO es característico de los métodos tradicionales?",
    o: [
      "Planificación detallada de actividades",
      "Etapas definidas",
      "Entregas frecuentes de valor",
      "Procesos largos",
      "Requisitos especificados completamente al inicio",
      "Diseño previo a la construcción"
    ],
    c: 2
  },
  {
    t: 2,
    q: "¿Qué NO es un evento oficial de Scrum mencionado en el texto?",
    o: [
      "Sprint Planning",
      "Sprint Review",
      "Daily Scrum",
      "Sprint Brainstorming",
      "Sprint Retrospective",
      "Ninguna de las anteriores"
    ],
    c: 3
  },
  {
    t: 2,
    q: "La gestión de incidencias NO es una fase de Scrum, ¿pero qué evento se centra en la 'mejora' del proceso?",
    o: [
      "Daily Scrum",
      "Sprint Planning",
      "Sprint Review",
      "Sprint Retrospective",
      "Sprint Testing",
      "Sprint Coding"
    ],
    c: 3
  },
  {
    t: 2,
    q: "¿Cuál es la frecuencia de la reunión 'Daily Scrum'?",
    o: [
      "Semanal",
      "Mensual",
      "Al inicio y fin del Sprint",
      "Diaria",
      "Cada 2 días",
      "Cuando el jefe quiera"
    ],
    c: 3
  },
  {
    t: 3,
    q: "Un sistema es un conjunto de componentes que interactúan entre sí para:",
    o: [
      "Generar caos en la organización",
      "Lograr unos objetivos comunes",
      "Aumentar los costes operativos",
      "Eliminar el uso de ordenadores",
      "Sustituir a todo el personal humano",
      "Crear barreras de entrada"
    ],
    c: 1
  },
  {
    t: 3,
    q: "¿Qué toma un sistema de su entorno (entradas)?",
    o: [
      "Solo dinero",
      "Datos, energía o materia",
      "Información procesada exclusivamente",
      "Solo software",
      "Decisiones estratégicas",
      "Resultados finales"
    ],
    c: 1
  },
  {
    t: 3,
    q: "¿Cuál es la diferencia principal entre 'Datos' e 'Información'?",
    o: [
      "Los datos tienen significado y la información no",
      "Son sinónimos exactos",
      "Los datos son hechos aislados sin procesar; la información son datos procesados con significado",
      "La información es hardware y los datos son software",
      "Los datos son subjetivos y la información objetiva",
      "Los datos son siempre numéricos y la información es texto"
    ],
    c: 2
  },
  {
    t: 3,
    q: "El 'Conocimiento' se define como una mezcla de:",
    o: [
      "Datos y Hardware",
      "Experiencias concretas, valores, información de contexto y juicio",
      "Solo información de bases de datos",
      "Transacciones financieras",
      "Instrucciones de máquina",
      "Informes impresos"
    ],
    c: 1
  },
  {
    t: 3,
    q: "¿Cuáles son los componentes de un Sistema de Información?",
    o: [
      "Solo ordenadores y cables",
      "Hardware, Software, Personal y Procedimientos",
      "Datos y Dinero",
      "Internet y Wifi",
      "Oficinas y Mobiliario",
      "Dirección y Empleados solamente"
    ],
    c: 1
  },
  {
    t: 3,
    q: "Selecciona los tres niveles de gestión de una organización mencionados:",
    o: [
      "Estratégico",
      "Financiero",
      "Táctico",
      "Tecnológico",
      "Operativo",
      "Social"
    ],
    c: [0, 2, 4]
  },
  {
    t: 3,
    q: "El nivel de gestión Estratégico se caracteriza por:",
    o: [
      "Metas inmediatas y tareas diarias",
      "Gestionar departamentos a medio plazo",
      "Ser responsabilidad de cada empleado individual",
      "Gestionar la organización con objetivos a largo plazo",
      "Usar solo datos operativos",
      "No tomar decisiones importantes"
    ],
    c: 3
  },
  {
    t: 3,
    q: "¿Qué nivel de gestión se encarga de los objetivos departamentales a medio-corto plazo?",
    o: [
      "Estratégico",
      "Operativo",
      "Táctico",
      "Ejecutivo",
      "Técnico",
      "Auxiliar"
    ],
    c: 2
  },
  {
    t: 3,
    q: "El nivel Operativo lleva a cabo:",
    o: [
      "Planes de acción con metas inmediatas",
      "Planes quinquenales",
      "Estrategias de competitividad global",
      "Reestructuración de toda la empresa",
      "Análisis de mercado a largo plazo",
      "Fusiones con otras empresas"
    ],
    c: 0
  },
  {
    t: 3,
    q: "¿Cuáles son las funciones de un sistema de información?",
    o: [
      "Memoria",
      "Decorativa",
      "Informativa",
      "Destructiva",
      "Activa",
      "Pasiva"
    ],
    c: [0, 2, 4]
  },
  {
    t: 3,
    q: "La función 'Memoria' de un sistema de información consiste en:",
    o: [
      "Proporcionar información al usuario",
      "Mantener una representación interna del estado del entorno",
      "Modificar el entorno físico",
      "Borrar datos antiguos",
      "Aumentar la memoria RAM del servidor",
      "Imprimir documentos"
    ],
    c: 1
  },
  {
    t: 3,
    q: "Cuando el sistema de información realiza una función al detectar cambios en su entorno sin intervención del usuario, actúa de forma:",
    o: [
      "Bajo demanda",
      "Manual",
      "Errónea",
      "Autónoma",
      "Aleatoria",
      "Pasiva"
    ],
    c: 3
  },
  {
    t: 3,
    q: "¿Qué significan las siglas TPS?",
    o: [
      "Total Production System",
      "Transaction Processing Systems (Sistemas de Procesamiento de Transacciones)",
      "Technical Process Support",
      "Tactical Planning Software",
      "Technology for Public Services",
      "Transfer Protocol Secure"
    ],
    c: 1
  },
  {
    t: 3,
    q: "Un fallo grave en un TPS puede:",
    o: [
      "Pasar desapercibido",
      "Mejorar la eficiencia",
      "Paralizar la organización y provocar un desastre",
      "Afectar solo a la alta dirección",
      "Solucionarse reiniciando Windows",
      "No tiene consecuencias graves"
    ],
    c: 2
  },
  {
    t: 3,
    q: "Las características ACID que debe cumplir un TPS son:",
    o: [
      "Atomicidad",
      "Calidad",
      "Consistencia",
      "Aislamiento",
      "Inteligencia",
      "Durabilidad"
    ],
    c: [0, 2, 3, 5]
  },
  {
    t: 3,
    q: "¿Qué es una transacción?",
    o: [
      "Un error del sistema",
      "Una interacción entre dos o más partes con intercambio de información",
      "Un informe impreso",
      "Un dispositivo de hardware",
      "Una reunión estratégica",
      "Un tipo de virus informático"
    ],
    c: 1
  },
  {
    t: 3,
    q: "Los sistemas MIS (Gestión de la Información) proporcionan información para:",
    o: [
      "Necesidades de operaciones y administración (táctica)",
      "Solo para la alta dirección estratégica",
      "Solo para clientes externos",
      "Exclusivamente para el mantenimiento del hardware",
      "Juegos y entretenimiento",
      "Proveedores únicamente"
    ],
    c: 0
  },
  {
    t: 3,
    q: "¿De dónde obtienen principalmente la información los sistemas MIS?",
    o: [
      "De los rumores de pasillo",
      "De las redes sociales exclusivamente",
      "De los sistemas TPS",
      "De los sistemas DSS",
      "De la competencia",
      "No usan información externa al sistema"
    ],
    c: 2
  },
  {
    t: 3,
    q: "¿Cómo suelen ser los informes generados por un MIS?",
    o: [
      "Flexibles y dinámicos",
      "Imprevisibles",
      "Con estructura fija",
      "Orales, nunca escritos",
      "Basados en opiniones",
      "Inexistentes"
    ],
    c: 2
  },
  {
    t: 3,
    q: "¿Qué significan las siglas DSS?",
    o: [
      "Data Storage System",
      "Decision Support Systems (Apoyo a la toma de decisiones)",
      "Digital Security Service",
      "Daily Support Software",
      "Direct Sales System",
      "Development Standard Set"
    ],
    c: 1
  },
  {
    t: 3,
    q: "¿Qué tipo de problemas ayudan a resolver los sistemas DSS?",
    o: [
      "Problemas cotidianos y repetitivos",
      "Problemas de hardware físico",
      "Problemas no previstos",
      "Problemas de cableado",
      "Nóminas mensuales",
      "Transacciones diarias"
    ],
    c: 2
  },
  {
    t: 3,
    q: "¿Qué tecnologías suelen usar los sistemas DSS?",
    o: [
      "Data Warehousing",
      "Procesadores de texto básicos",
      "Big Data",
      "Modelos de IA (Inteligencia Artificial)",
      "Calculadoras manuales",
      "Hojas de papel"
    ],
    c: [0, 2, 3]
  },
  {
    t: 3,
    q: "¿Qué es un ERP?",
    o: [
      "Un sistema para gestionar clientes únicamente",
      "Un sistema integral para la gestión de los procesos de negocio",
      "Un software de edición de video",
      "Un protocolo de internet",
      "Una marca de impresoras",
      "Un sistema de suministro"
    ],
    c: 1
  },
  {
    t: 3,
    q: "El modelo de gestión enfocado principalmente a los clientes se denomina:",
    o: [
      "ERP",
      "MIS",
      "TPS",
      "CRM",
      "SCM",
      "DSS"
    ],
    c: 3
  },
  {
    t: 3,
    q: "¿Qué objetivo tiene el SCM (Supply Chain Management)?",
    o: [
      "Gestionar las nóminas de los empleados",
      "Mejorar y automatizar el suministro y permitir la trazabilidad",
      "Diseñar logotipos para la empresa",
      "Gestionar las relaciones con los clientes finales",
      "Procesar textos",
      "Crear copias de seguridad"
    ],
    c: 1
  },
  {
    t: 3,
    q: "¿Qué función del sistema de información 'modifica el estado del entorno'?",
    o: [
      "Informativa",
      "Memoria",
      "Activa",
      "Pasiva",
      "Reflexiva",
      "Consultiva"
    ],
    c: 2
  },
  {
    t: 3,
    q: "En los niveles de gestión, ¿quién es el responsable del nivel Estratégico?",
    o: [
      "Los empleados base",
      "La unidad organizativa",
      "El personal de limpieza",
      "La dirección",
      "Los proveedores",
      "El cliente"
    ],
    c: 3
  },
  {
    t: 3,
    q: "¿Qué tipo de sistema ofrece gráficas, balanceador de peticiones y servidor de apps además de procesar datos?",
    o: [
      "Un sistema manual",
      "Un TPS",
      "Un archivo físico",
      "Una hoja de cálculo simple",
      "Un SCM",
      "Un CRM básico"
    ],
    c: 1
  },
  {
    t: 3,
    q: "¿De qué fuentes obtienen información los DSS?",
    o: [
      "Solo de fuentes externas",
      "TPS",
      "MIS",
      "Fuentes externas",
      "Solo de la memoria RAM",
      "De ningún sitio"
    ],
    c: [1, 2, 3]
  },
  {
    t: 3,
    q: "¿Qué significan las siglas CRM?",
    o: [
      "Computer Room Management",
      "Customer Relationship Management",
      "Company Resource Method",
      "Central Reporting Mechanism",
      "Customer Real Money",
      "Control Risk Management"
    ],
    c: 1
  },
  {
    t: 3,
    q: "La función 'Informativa' de un sistema:",
    o: [
      "Modifica el entorno",
      "Almacena datos internamente",
      "Proporciona información sobre el estado del entorno",
      "Ejecuta órdenes de compra",
      "Borra la base de datos",
      "Bloquea el acceso a usuarios"
    ],
    c: 2
  },
  {
    t: 3,
    q: "¿Qué es necesario hacer con los 'Datos' para que sean útiles?",
    o: [
      "Nada, ya son útiles",
      "Borrarlos",
      "Procesarlos",
      "Ocultarlos",
      "Imprimirlos sin mirar",
      "Encriptarlos siempre"
    ],
    c: 2
  },
  {
    t: 4,
    q: "¿Qué es el 'dominio del problema'?",
    o: [
      "El área específica de conocimiento en la que se centra un problema",
      "El servidor donde se aloja la web",
      "El conjunto de errores de un software",
      "La dirección URL de la aplicación",
      "El departamento de recursos humanos",
      "La fase final del desarrollo"
    ],
    c: 0
  },
  {
    t: 4,
    q: "El dominio del problema comprende:",
    o: [
      "Solo el código fuente",
      "Conceptos, entidades, relaciones y restricciones del contexto",
      "Únicamente el hardware necesario",
      "Los colores de la interfaz",
      "El presupuesto del cliente",
      "Las vacaciones de los empleados"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Por qué es fundamental comprender el dominio del problema?",
    o: [
      "Para cobrar más al cliente",
      "Para diseñar soluciones informáticas efectivas y relevantes",
      "Para poder usar lenguajes de programación antiguos",
      "No es importante, lo importante es programar rápido",
      "Para evitar hacer pruebas de software",
      "Para reducir el personal necesario"
    ],
    c: 1
  },
  {
    t: 4,
    q: "Selecciona las definiciones válidas de 'Requisito' según el texto:",
    o: [
      "Una condición o capacidad que un usuario necesita para resolver un problema",
      "Una característica que es condición para la aceptación del sistema",
      "Una propiedad que el sistema debería tener para tener éxito",
      "Un error que impide que el sistema arranque",
      "Un componente de hardware obsoleto",
      "Un tipo de virus informático"
    ],
    c: [0, 1, 2]
  },
  {
    t: 4,
    q: "¿Qué son las 'Historias de usuario'?",
    o: [
      "Cuentos para entretener a los desarrolladores",
      "La propuesta de las metodologías ágiles para especificar requisitos",
      "Documentos legales firmados ante notario",
      "Diagramas de flujo complejos",
      "Archivos de base de datos",
      "Informes de errores del sistema"
    ],
    c: 1
  },
  {
    t: 4,
    q: "Las historias de usuario se escriben desde el punto de vista de:",
    o: [
      "El programador",
      "El jefe de proyecto",
      "La base de datos",
      "El usuario",
      "El servidor",
      "El inversor"
    ],
    c: 3
  },
  {
    t: 4,
    q: "¿Qué vocabulario se debe usar en las historias de usuario?",
    o: [
      "Vocabulario técnico avanzado",
      "Código binario",
      "El vocabulario del usuario",
      "Lenguaje SQL",
      "Latín",
      "Jerga legal exclusivamente"
    ],
    c: 2
  },
  {
    t: 4,
    q: "Para las historias de usuario se suele usar el formato propuesto por:",
    o: [
      "Bill Gates",
      "Mike Cohn",
      "Steve Jobs",
      "El ciclo de Deming",
      "Alan Turing",
      "Elon Musk"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Están todas las historias de usuario al mismo nivel de detalle?",
    o: [
      "Sí, siempre",
      "No, pueden tener diferentes niveles de detalle",
      "Depende del sistema operativo",
      "Solo si son requisitos no funcionales",
      "Sí, es obligatorio por ley",
      "Nunca tienen detalle alguno"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Cómo se representan visualmente los diferentes requisitos?",
    o: [
      "En mapas de historias",
      "En un archivo de texto plano",
      "En una consola de comandos",
      "En diagramas de sectores exclusivamente",
      "No se pueden representar visualmente",
      "En matrices de contabilidad"
    ],
    c: 0
  },
  {
    t: 4,
    q: "Los 'Requisitos generales' también se conocen como:",
    o: [
      "Objetivos",
      "Bugs",
      "Parches",
      "Scripts",
      "Variables",
      "Constantes"
    ],
    c: 0
  },
  {
    t: 4,
    q: "Sobre los requisitos generales (Objetivos), señala la afirmación correcta:",
    o: [
      "Tienen el máximo nivel de detalle posible",
      "Su nivel de detalle suele ser insuficiente para implementar la solución directamente",
      "Son códigos listos para compilar",
      "Son pruebas de aceptación automáticas",
      "No sirven para nada",
      "Son siempre requisitos de seguridad"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Qué son las historias épicas en el contexto de los requisitos generales?",
    o: [
      "Historias muy largas de fantasía",
      "Objetivos que a veces solo contienen el nombre y organizan otras historias",
      "Requisitos que nunca se cumplen",
      "Historias de usuario rechazadas",
      "Manuales de usuario impresos",
      "Bases de datos gigantes"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Qué describen los 'Requisitos de información'?",
    o: [
      "La velocidad del procesador",
      "Qué información se debe almacenar sobre un concepto relevante",
      "El color de la carcasa del ordenador",
      "El sueldo de los desarrolladores",
      "Las leyes de protección de datos exclusivamente",
      "Cómo hackear el sistema"
    ],
    c: 1
  },
  {
    t: 4,
    q: "Los 'Requisitos de información' definen:",
    o: [
      "Qué datos específicos de un concepto son importantes para los usuarios",
      "La marca del servidor",
      "El horario de oficina",
      "El lenguaje de programación a usar",
      "La temperatura de la sala",
      "La distancia entre monitores"
    ],
    c: 0
  },
  {
    t: 4,
    q: "¿Qué definen las 'Reglas de negocio'?",
    o: [
      "Reglas o políticas del negocio importantes para los usuarios",
      "El código fuente del kernel",
      "Las reglas gramaticales del idioma",
      "El protocolo TCP/IP",
      "Las normas de vestimenta de la empresa",
      "El menú del comedor"
    ],
    c: 0
  },
  {
    t: 4,
    q: "Las reglas de negocio suelen ser requisitos:",
    o: [
      "Inmutables",
      "Permanentes para siempre",
      "Relativamente inestables",
      "Físicos",
      "De hardware",
      "Irrelevantes"
    ],
    c: 2
  },
  {
    t: 4,
    q: "¿Qué definen los 'Requisitos funcionales'?",
    o: [
      "El color del logotipo",
      "Los servicios que los usuarios desean que el sistema les ofrezca",
      "La calidad del código",
      "La velocidad de carga",
      "La seguridad ante hackers",
      "El sistema de copias de seguridad"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Qué constituye una manera alternativa a las historias de usuario para definir requisitos funcionales?",
    o: [
      "Los Casos de Uso",
      "El Diagrama de Gantt",
      "El Presupuesto",
      "La Factura",
      "El Contrato",
      "El Manual de Hardware"
    ],
    c: 0
  },
  {
    t: 4,
    q: "Los Casos de Uso están muy relacionados con:",
    o: [
      "La limpieza de datos",
      "El prototipado de interfaces de usuario",
      "La gestión de nóminas",
      "La instalación de cables",
      "La compra de licencias",
      "El marketing digital"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Cómo describe un Caso de Uso un requisito funcional?",
    o: [
      "Con código binario",
      "Mediante una foto del usuario",
      "Textualmente y de manera abstracta mediante una secuencia de interacciones",
      "Con una fórmula matemática",
      "Con un video explicativo",
      "Con una grabación de voz"
    ],
    c: 2
  },
  {
    t: 4,
    q: "¿Qué describen los 'Requisitos no funcionales'?",
    o: [
      "Lo que hace el sistema",
      "Aspectos relacionados con la calidad (rendimiento, fiabilidad, seguridad...)",
      "Los datos que se guardan",
      "Las reglas del negocio",
      "El nombre del proyecto",
      "La dirección de la empresa"
    ],
    c: 1
  },
  {
    t: 4,
    q: "Selecciona ejemplos de Requisitos No Funcionales:",
    o: [
      "El sistema debe permitir registrar usuarios (Funcional)",
      "Rendimiento",
      "Seguridad",
      "Fiabilidad",
      "El sistema debe imprimir facturas (Funcional)",
      "El sistema debe calcular impuestos (Regla de negocio)"
    ],
    c: [1, 2, 3]
  },
  {
    t: 4,
    q: "Cada requisito puede estar asociado a:",
    o: [
      "Una multa",
      "Unas pruebas de aceptación",
      "Un desarrollador específico obligatoriamente",
      "Un tipo de hardware concreto",
      "Una licencia de software",
      "Un color específico"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Qué función tienen las pruebas de aceptación?",
    o: [
      "Describir cómo validar que el sistema satisface los requisitos",
      "Añadir más detalle a las historias de usuario",
      "Aumentar el precio del proyecto",
      "Retrasar la entrega",
      "Complicar la vida al usuario",
      "Sustituir a los requisitos"
    ],
    c: [0, 1]
  },
  {
    t: 4,
    q: "Respecto a las pruebas de aceptación, lo ideal es que:",
    o: [
      "Se hagan siempre a mano",
      "Nunca se ejecuten",
      "Puedan programarse para ejecutarse automáticamente",
      "Sean subjetivas",
      "No existan",
      "Las haga el cliente sin ayuda"
    ],
    c: 2
  },
  {
    t: 4,
    q: "¿A cuántos requisitos se asocian las pruebas de aceptación?",
    o: [
      "A ninguno",
      "A uno o más requisitos",
      "Exactamente a cinco",
      "A todos los del proyecto a la vez",
      "Solo a los no funcionales",
      "Solo a los objetivos"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Qué es una 'Matriz de trazabilidad'?",
    o: [
      "Una película de ciencia ficción",
      "Una tabla que muestra la relación entre elementos de diferentes artefactos del software",
      "Un error de compilación",
      "Un tipo de pantalla",
      "Un teclado especial",
      "Un algoritmo de ordenación"
    ],
    c: 1
  },
  {
    t: 4,
    q: "¿Para qué sirve una matriz de trazabilidad?",
    o: [
      "Para facilitar la gestión del cambio",
      "Para dibujar gráficos",
      "Para escribir código más rápido",
      "Para borrar datos duplicados",
      "Para conectar a internet",
      "Para enfriar el procesador"
    ],
    c: 0
  },
  {
    t: 4,
    q: "¿En qué momento del ciclo de vida se usan las matrices de trazabilidad?",
    o: [
      "Solo al principio",
      "Solo al final",
      "A lo largo de todo el ciclo de vida",
      "Nunca",
      "Solo en la fase de pruebas",
      "Solo en la fase de diseño"
    ],
    c: 2
  },
  {
    t: 4,
    q: "¿Qué tipo de requisito suele ser considerado 'inestable'?",
    o: [
      "Requisitos de información",
      "Requisitos no funcionales",
      "Reglas de negocio",
      "Requisitos de hardware",
      "Requisitos legales",
      "Objetivos épicos"
    ],
    c: 2
  },
  {
    t: 4,
    q: "Un Caso de Uso describe la interacción mediante:",
    o: [
      "Una secuencia de interacciones entre usuario y sistema",
      "Un diagrama de clases",
      "Una tabla de base de datos",
      "Un código en Python",
      "Una llamada telefónica",
      "Una hoja de cálculo"
    ],
    c: 0
  },
  {
    t: 5,
    q: "Independientemente del ciclo de vida, ¿en qué fase se utiliza el modelado conceptual?",
    o: [
      "Durante la fase de pruebas",
      "En el diseño de la base de datos física",
      "Durante el último estado del análisis",
      "En la implementación del código",
      "Durante el despliegue",
      "En la fase de mantenimiento"
    ],
    c: 2
  },
  {
    t: 5,
    q: "¿Hacia qué requisitos debe estar trazado todo elemento de un modelo conceptual?",
    o: [
      "Requisitos de hardware y red",
      "Requisitos de información y reglas de negocio",
      "Requisitos de interfaz y usabilidad",
      "Requisitos no funcionales exclusivamente",
      "Presupuesto y Cronograma",
      "Historias de usuario de rendimiento"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Cómo se debe nombrar una Clase Entidad en el diagrama?",
    o: [
      "Mediante un verbo en infinitivo",
      "Mediante un sustantivo en plural",
      "Mediante un código numérico",
      "Mediante un sustantivo en singular",
      "Con el nombre de la tabla de la base de datos",
      "Usando abreviaturas técnicas"
    ],
    c: 3
  },
  {
    t: 5,
    q: "¿Qué representa un atributo de una clase entidad?",
    o: [
      "Una acción que realiza el sistema",
      "Una relación con otra clase",
      "Una propiedad asociada a un concepto relevante que el sistema debe almacenar",
      "Un botón en la interfaz de usuario",
      "Una restricción de seguridad",
      "Un archivo adjunto"
    ],
    c: 2
  },
  {
    t: 5,
    q: "Según los apuntes, los valores de los atributos deben ser:",
    o: [
      "Compuestos",
      "Atómicos",
      "Jerárquicos",
      "Objetos complejos",
      "Arrays multidimensionales",
      "Funciones"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Qué indica la notación [0..1] en un atributo?",
    o: [
      "Que el atributo es obligatorio y único",
      "Que es un atributo multivaluado",
      "Que el atributo es opcional (su valor puede ser nulo)",
      "Que el atributo es una clave primaria",
      "Que el atributo es derivado",
      "Que es un atributo de clase (estático)"
    ],
    c: 2
  },
  {
    t: 5,
    q: "¿Cómo se nombra una asociación entre clases entidades?",
    o: [
      "Con un sustantivo en plural",
      "Con un verbo en tercera persona del singular",
      "Con un adjetivo calificativo",
      "Con el nombre de las dos clases unidas",
      "Con un código ID",
      "No se nombran nunca"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Cuándo es estrictamente necesario indicar el 'Rol' en una asociación?",
    o: [
      "Siempre, es obligatorio",
      "Nunca, es opcional",
      "En asociaciones de una clase consigo misma (reflexivas) o cuando existe más de una asociación entre dos clases",
      "Solo en las generalizaciones",
      "Solo en las composiciones",
      "Cuando la multiplicidad es muchos a muchos"
    ],
    c: 2
  },
  {
    t: 5,
    q: "Basándonos en la imagen y el texto: ¿Qué significa la multiplicidad '1..*'?",
    o: [
      "Opcional (cero o uno)",
      "Opcional múltiple (cero o muchos)",
      "Obligatoria (exactamente uno)",
      "Obligatoria múltiple (uno o muchos)",
      "Desconocida",
      "Infinito negativo"
    ],
    c: 3
  },
  {
    t: 5,
    q: "Basándonos en la imagen y el texto: ¿Qué significa la multiplicidad '0..*' o '*'?",
    o: [
      "Opcional múltiple",
      "Obligatoria múltiple",
      "Opcional simple",
      "Obligatoria simple",
      "Prohibida",
      "Unaria"
    ],
    c: 0
  },
  {
    t: 5,
    q: "Basándonos en la imagen y el texto: ¿Qué significa la multiplicidad '1..1' o '1'?",
    o: [
      "Opcional",
      "Obligatoria",
      "Opcional múltiple",
      "Indefinida",
      "Aleatoria",
      "Abstracta"
    ],
    c: 1
  },
  {
    t: 5,
    q: "La relación de Generalización/Especialización es del tipo:",
    o: [
      "Tiene-un",
      "Usa-un",
      "Es-un",
      "Conoce-a",
      "Parte-de",
      "Produce-un"
    ],
    c: 2
  },
  {
    t: 5,
    q: "¿Qué propiedades matemáticas tiene la relación de Generalización?",
    o: [
      "Simétrica y Reflexiva",
      "Transitiva y Antisimétrica",
      "Circular y Conmutativa",
      "Aleatoria y Disjunta",
      "Opaca y Transparente",
      "Ninguna de las anteriores"
    ],
    c: 1
  },
  {
    t: 5,
    q: "En una generalización, si decimos que es '{disjunta}', significa que:",
    o: [
      "Las instancias de la superclase pueden ser instancias de varias subclases a la vez",
      "Las instancias de la superclase pueden ser instancias de una sola subclase",
      "La superclase es abstracta obligatoriamente",
      "Puede haber instancias de la superclase que no sean de ninguna subclase",
      "Es una composición fuerte",
      "No existe herencia de atributos"
    ],
    c: 1
  },
  {
    t: 5,
    q: "En una generalización, la restricción '{completa}' implica que:",
    o: [
      "Las instancias de la superclase deben ser instancias de al menos una subclase (la superclase es abstracta)",
      "Puede haber instancias de la superclase que no lo sean de ninguna subclase",
      "Las subclases no heredan atributos",
      "La generalización es opcional",
      "Solo se permite una subclase",
      "Es una clasificación solapada"
    ],
    c: 0
  },
  {
    t: 5,
    q: "¿Qué implica la combinación de restricciones {completa, disjunta}?",
    o: [
      "Un error de modelado",
      "Una partición del conjunto de instancias",
      "Que se puede elegir varias subclases",
      "Que la superclase es concreta",
      "Que no se puede instanciar nada",
      "Una relación de agregación"
    ],
    c: 1
  },
  {
    t: 5,
    q: "La Composición representa el concepto de:",
    o: [
      "Es-un",
      "Usa-un",
      "Ser-parte-de o estar-compuesto-por (fuerte)",
      "Hereda-de",
      "Se-parece-a",
      "Transforma-en"
    ],
    c: 2
  },
  {
    t: 5,
    q: "Selecciona las características correctas de la COMPOSICIÓN:",
    o: [
      "Una parte puede pertenecer a varios todos",
      "Una parte solo puede pertenecer a un todo",
      "La eliminación del todo implica la eliminación de sus partes",
      "La parte puede sobrevivir sin el todo",
      "Es una relación simétrica",
      "Es una relación transitiva, antisimétrica y recursiva"
    ],
    c: [1, 2, 5]
  },
  {
    t: 5,
    q: "Selecciona las características correctas de la AGREGACIÓN:",
    o: [
      "Una parte puede pertenecer a uno, varios o ningún todo",
      "La eliminación del todo implica la eliminación de sus partes",
      "La parte SÍ puede existir sin pertenecer a un todo",
      "Es más fuerte que la composición",
      "Es una relación transitiva, antisimétrica y recursiva",
      "La parte muere con el todo"
    ],
    c: [0, 2, 4]
  },
  {
    t: 5,
    q: "¿Cuál es la principal diferencia entre Composición y Agregación respecto a la eliminación?",
    o: [
      "En la agregación se borran las partes, en la composición no",
      "En la composición la eliminación del todo implica la eliminación de las partes; en la agregación no",
      "No hay diferencia, ambas borran todo",
      "La composición no permite borrar nada",
      "La agregación es para bases de datos relacionales y la composición para NoSQL",
      "La composición es bidireccional"
    ],
    c: 1
  },
  {
    t: 5,
    q: "Si necesitamos añadir información a una asociación (atributos propios de la relación), ¿qué hacemos?",
    o: [
      "No se puede hacer nada",
      "Creamos un atributo multivaluado",
      "La convertimos en una Clase Asociación (o clase componente)",
      "Usamos una generalización",
      "Duplicamos las clases",
      "Usamos una restricción {OR}"
    ],
    c: 2
  },
  {
    t: 5,
    q: "¿Cómo se representan las Restricciones en el modelo?",
    o: [
      "Mediante rombos",
      "Mediante notas con texto entre llaves { }",
      "Con líneas discontinuas rojas",
      "Con un círculo negro",
      "Con el estereotipo <<Restriccion>>",
      "No se representan gráficamente"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Qué estereotipo se utiliza para definir Tipos Enumerados?",
    o: [
      "<<List>>",
      "<<Array>>",
      "<<Enumerado>> o <<Enum>>",
      "<<Type>>",
      "<<Class>>",
      "<<Const>>"
    ],
    c: 2
  },
  {
    t: 5,
    q: "En un Diagrama de Objetos, ¿qué es un 'Enlace'?",
    o: [
      "Una URL web",
      "Cada ocurrencia o instancia de una asociación",
      "Un puntero de memoria",
      "Un atributo clave",
      "Una herencia",
      "Un método de la clase"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Qué es un 'Objeto' en el contexto del diagrama de objetos?",
    o: [
      "Cada ocurrencia o instancia de una clase",
      "Un archivo físico",
      "Una base de datos completa",
      "Un usuario del sistema",
      "Un requisito funcional",
      "Un diagrama de flujo"
    ],
    c: 0
  },
  {
    t: 5,
    q: "¿Para qué sirve el paso de 'Validar con posibles escenarios mediante diagramas de objetos'?",
    o: [
      "Para hacer el sistema más bonito",
      "Para comprobar que el modelo conceptual soporta los casos necesarios",
      "Para generar código automático",
      "Para calcular el presupuesto",
      "Para definir los colores de la pantalla",
      "Es un paso opcional que no sirve de mucho"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Cuál es el PRIMER paso recomendado para crear modelos conceptuales?",
    o: [
      "Identificar composiciones",
      "Analizar la información sobre el dominio del problema (glosario) y los requisitos",
      "Identificar asociaciones",
      "Dibujar diagramas de objetos",
      "Escribir el código SQL",
      "Identificar clasificaciones"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Qué permite comprobar la matriz de trazabilidad en este tema?",
    o: [
      "Si el código compila",
      "Si todos los requisitos de información y reglas de negocio están expresados en el modelo",
      "Si el hardware es suficiente",
      "Si los empleados han fichado",
      "Si el diagrama es estéticamente correcto",
      "La velocidad de la base de datos"
    ],
    c: 1
  },
  {
    t: 5,
    q: "Sobre la herencia en generalización: ¿Qué heredan las subclases?",
    o: [
      "Solo el nombre",
      "Todos los atributos y asociaciones comunes de la superclase",
      "Solo las asociaciones, no los atributos",
      "Nada, son independientes",
      "Solo los métodos privados",
      "Los datos de prueba"
    ],
    c: 1
  },
  {
    t: 5,
    q: "¿Qué tipo de atributo se representa si puede haber momentos donde su valor sea nulo?",
    o: [
      "Opcional [0..1]",
      "Obligatorio [1..1]",
      "Múltiple [1..*]",
      "Derivado [/]",
      "Estático",
      "Clave principal"
    ],
    c: 0
  },
  {
    t: 5,
    q: "¿Qué ocurre en la clasificación 'Solapada'?",
    o: [
      "Las instancias de la superclase pueden ser instancias de una o más subclases",
      "Solo pueden ser de una subclase",
      "No pueden ser de ninguna subclase",
      "La superclase desaparece",
      "Es incompatible con la clasificación completa",
      "Implica una partición estricta"
    ],
    c: 0
  },
  {
    t: 5,
    q: "Identifica las afirmaciones correctas sobre las multiplicidades:",
    o: [
      "0..1 significa Opcional",
      "1..* significa Obligatoria Múltiple",
      "0..* significa Opcional Múltiple",
      "1..1 significa Opcional",
      "* es equivalente a 0..*",
      "1..* significa que puede ser cero"
    ],
    c: [0, 1, 2, 4]
  },
  {
    t: 6,
    q: "¿Qué es un Sistema de Gestión de Base de Datos (SGBD)?",
    o: [
      "Un hardware para guardar archivos",
      "Un sistema informático que realiza funciones de memoria e informática",
      "Un protocolo de internet",
      "Un lenguaje de programación exclusivamente",
      "Una hoja de cálculo avanzada",
      "Un sistema operativo de red"
    ],
    c: 1
  },
  {
    t: 6,
    q: "Selecciona las funciones principales de un SGBD mencionadas en el texto:",
    o: [
      "Almacena grandes volúmenes de datos",
      "Gestiona el acceso concurrente a los datos",
      "Mantiene la integridad semántica de los datos",
      "Controla el acceso de los datos",
      "Diseña la interfaz gráfica del usuario",
      "Repara el hardware dañado"
    ],
    c: [0, 1, 2, 3]
  },
  {
    t: 6,
    q: "Una 'Relación' está compuesta por:",
    o: [
      "Tablas y Consultas",
      "Intensión y Extensión",
      "Claves y Valores",
      "Filas y Columnas exclusivamente",
      "Hardware y Software",
      "Usuarios y Permisos"
    ],
    c: 1
  },
  {
    t: 6,
    q: "¿Qué define la 'Intensión' de una relación?",
    o: [
      "El número de filas",
      "Un conjunto de tuplas",
      "Un conjunto de atributos y sus dominios",
      "Los datos almacenados en un momento dado",
      "El tamaño en disco de la base de datos",
      "Las claves ajenas solamente"
    ],
    c: 2
  },
  {
    t: 6,
    q: "La 'Extensión' de una relación es:",
    o: [
      "El nombre de la tabla",
      "El conjunto de tuplas (filas)",
      "La definición de los tipos de datos",
      "El diseño del esquema",
      "El número de atributos",
      "Las restricciones de integridad"
    ],
    c: 1
  },
  {
    t: 6,
    q: "¿Cómo se denomina el número de atributos definidos en la intensión?",
    o: [
      "Cardinalidad",
      "Extensión",
      "Volumen",
      "Grado",
      "Nivel",
      "Dimensión"
    ],
    c: 3
  },
  {
    t: 6,
    q: "¿Cómo se denomina el número de tuplas en una relación?",
    o: [
      "Grado",
      "Intensión",
      "Magnitud",
      "Cardinalidad",
      "Peso",
      "Escala"
    ],
    c: 3
  },
  {
    t: 6,
    q: "En la implementación mediante una tabla, ¿qué representan las columnas?",
    o: [
      "Las tuplas",
      "La cardinalidad",
      "Los atributos",
      "Los registros",
      "Las claves ajenas",
      "Los valores nulos"
    ],
    c: 2
  },
  {
    t: 6,
    q: "¿Qué es un 'Dominio' en el contexto del modelo relacional?",
    o: [
      "La dirección web de la base de datos",
      "El conjunto de valores admisibles que puede tomar un atributo",
      "El nombre del administrador del sistema",
      "Una tabla que contiene otras tablas",
      "El rango de memoria utilizado",
      "Una restricción de clave primaria"
    ],
    c: 1
  },
  {
    t: 6,
    q: "¿Qué operador deben tener definido obligatoriamente todos los dominios?",
    o: [
      "Suma (+)",
      "Resta (-)",
      "Multiplicación (*)",
      "Igualdad (=)",
      "División (/)",
      "Concatenación"
    ],
    c: 3
  },
  {
    t: 6,
    q: "¿Qué significa que un atributo tenga valor nulo (null)?",
    o: [
      "Que su valor es cero",
      "Que es una cadena vacía",
      "Que no se conoce su valor",
      "Que es un error del sistema",
      "Que el atributo ha sido borrado",
      "Que es una clave primaria"
    ],
    c: 2
  },
  {
    t: 6,
    q: "El uso de valores nulos implica la necesidad de una lógica:",
    o: [
      "Binaria (True/False)",
      "Difusa",
      "Cuántica",
      "Trivaluada",
      "Booleana estricta",
      "Analógica"
    ],
    c: 3
  },
  {
    t: 6,
    q: "¿Se pueden comparar valores nulos de atributos definidos sobre dominios diferentes?",
    o: [
      "Sí, siempre son iguales",
      "Sí, dan como resultado False",
      "No, no pueden compararse",
      "Sí, si se convierten a texto",
      "Depende del SGBD",
      "Solo si son numéricos"
    ],
    c: 2
  },
  {
    t: 6,
    q: "¿Qué es una Superclave?",
    o: [
      "Una clave que abre todas las tablas",
      "Un subconjunto de atributos que identifica de manera única a las tuplas",
      "Una clave primaria muy larga",
      "Cualquier atributo numérico",
      "Un conjunto de claves ajenas",
      "Un permiso de administrador"
    ],
    c: 1
  },
  {
    t: 6,
    q: "El criterio de unicidad establece que:",
    o: [
      "Todos los atributos deben ser únicos",
      "No tiene sentido que existan dos tuplas distintas con los mismos valores del descriptor",
      "La clave debe tener un solo atributo",
      "La tabla solo puede tener una fila",
      "Los valores nulos deben ser únicos",
      "Las claves ajenas no pueden repetirse"
    ],
    c: 1
  },
  {
    t: 6,
    q: "En cualquier relación, el conjunto formado por TODOS sus atributos es siempre:",
    o: [
      "Una Clave Primaria",
      "Una Clave Ajena",
      "Una Superclave",
      "Un valor nulo",
      "Una Clave Mínima",
      "Un error de diseño"
    ],
    c: 2
  },
  {
    t: 6,
    q: "¿Qué diferencia a una Clave Candidata de una Superclave normal?",
    o: [
      "Que la candidata cumple el criterio de minimalidad",
      "Que la candidata permite nulos",
      "Que la superclave es más pequeña",
      "No hay diferencia, son sinónimos",
      "Que la candidata siempre es numérica",
      "Que la superclave es la elegida por el usuario"
    ],
    c: 0
  },
  {
    t: 6,
    q: "¿Qué dice el Criterio de Minimalidad para una Clave Candidata?",
    o: [
      "Que debe tener el mínimo número de caracteres",
      "Que si se elimina cualquier atributo del descriptor, deja de cumplir la unicidad",
      "Que debe ser la clave más pequeña de la base de datos",
      "Que debe tener valores mínimos (cercanos a cero)",
      "Que solo puede tener un atributo",
      "Que no puede contener claves ajenas"
    ],
    c: 1
  },
  {
    t: 6,
    q: "¿Puede una relación tener varias claves candidatas?",
    o: [
      "No, solo una",
      "Sí, siempre tiene al menos una, pero puede tener varias",
      "Solo si no tiene clave primaria",
      "No, eso provocaría redundancia",
      "Solo en bases de datos NoSQL",
      "Sí, pero ninguna puede ser primaria"
    ],
    c: 1
  },
  {
    t: 6,
    q: "¿Qué es la Clave Primaria (PK)?",
    o: [
      "La primera columna de la tabla siempre",
      "Una clave candidata seleccionada arbitrariamente para identificar la relación",
      "La clave con el nombre más corto",
      "Una superclave que no cumple minimalidad",
      "Cualquier atributo que no sea nulo",
      "La suma de todas las claves candidatas"
    ],
    c: 1
  },
  {
    t: 6,
    q: "¿Qué son las Claves Alternativas (AK)?",
    o: [
      "Claves que se usan cuando falla la primaria",
      "Cualquier clave candidata no seleccionada como primaria",
      "Claves que permiten valores duplicados",
      "Claves de otras tablas",
      "Atributos opcionales",
      "Índices secundarios sin restricción de unicidad"
    ],
    c: 1
  },
  {
    t: 6,
    q: "Una Clave Ajena (FK) es un conjunto de atributos cuyos valores deben coincidir con:",
    o: [
      "Cualquier atributo de otra tabla",
      "La clave primaria de otra relación (o la misma)",
      "Los valores de una clave alternativa propia",
      "Los nombres de las columnas",
      "Un valor aleatorio",
      "La extensión de la relación"
    ],
    c: 1
  },
  {
    t: 6,
    q: "La regla de 'Integridad de la entidad' establece que:",
    o: [
      "Las claves ajenas no pueden ser nulas",
      "Ningún atributo de la clave primaria puede tomar valor nulo",
      "Todos los atributos deben ser enteros",
      "No puede haber dos tablas con el mismo nombre",
      "La base de datos no puede apagarse",
      "Las claves candidatas deben ser únicas"
    ],
    c: 1
  },
  {
    t: 6,
    q: "¿Qué garantiza la Integridad de la entidad?",
    o: [
      "La velocidad de la consulta",
      "La identificación de tuplas mediante valores de la clave primaria",
      "La relación entre tablas",
      "Que no haya virus",
      "El ahorro de espacio",
      "La conectividad de red"
    ],
    c: 1
  },
  {
    t: 6,
    q: "La regla de 'Integridad referencial' afecta a:",
    o: [
      "Las claves primarias exclusivamente",
      "Los valores nulos de cualquier campo",
      "Las claves ajenas",
      "Los nombres de las tablas",
      "La memoria RAM del servidor",
      "Los usuarios del sistema"
    ],
    c: 2
  },
  {
    t: 6,
    q: "Según la integridad referencial, los valores de una clave ajena deben:",
    o: [
      "Ser siempre únicos",
      "Ser siempre nulos",
      "Coincidir con valores de la clave primaria correspondiente o ser nulos",
      "Ser mayores que cero",
      "Coincidir con la clave alternativa de su propia tabla",
      "No estar repetidos en la tabla destino"
    ],
    c: 2
  },
  {
    t: 6,
    q: "¿Qué garantiza la integridad referencial?",
    o: [
      "Que las tuplas con claves ajenas se relacionen con tuplas existentes o con ninguna",
      "Que la clave primaria sea mínima",
      "Que no existan valores nulos en la base de datos",
      "Que el sistema sea rápido",
      "Que los dominios sean correctos",
      "Que la tabla tenga columnas"
    ],
    c: 0
  },
  {
    t: 6,
    q: "Selecciona los tipos de dominios mencionados:",
    o: [
      "Básico sin restricciones",
      "Básico con restricciones",
      "Enumerado",
      "Infinito",
      "Compuesto",
      "Abstracto"
    ],
    c: [0, 1, 2, 4]
  },
  {
    t: 6,
    q: "¿Cuál de las siguientes es una característica correcta de las Claves Candidatas?",
    o: [
      "Puede haber varias en una relación",
      "Son superclaves",
      "Cumplen el criterio de minimalidad",
      "Deben contener valores nulos",
      "Son siempre numéricas",
      "Se eligen aleatoriamente"
    ],
    c: [0, 1, 2]
  },
  {
    t: 6,
    q: "Si eliminamos un atributo de una Superclave y sigue siendo única, entonces:",
    o: [
      "La superclave original era una Clave Candidata",
      "La superclave original NO era una Clave Candidata (no cumplía minimalidad)",
      "La tabla está vacía",
      "Es una clave ajena",
      "Es una clave primaria compuesta",
      "Se rompe la integridad referencial"
    ],
    c: 1
  },
  {
    t: 6,
    q: "En una relación, las tuplas representan:",
    o: [
      "Los metadatos",
      "La intensión",
      "Los atributos",
      "Los objetos o elementos individuales del conjunto (filas)",
      "Las restricciones",
      "Los dominios"
    ],
    c: 3
  },
  {
    t: 6,
    q: "Si una clave ajena tiene valor NULL, ¿viola la integridad referencial?",
    o: [
      "Sí, siempre",
      "No, la regla permite que tomen valores nulos (si no son parte de la PK)",
      "Depende del sistema operativo",
      "Sí, porque no apunta a nada",
      "Solo si la tabla está vacía",
      "No, pero viola la integridad de entidad"
    ],
    c: 1
  },
  {
    t: 7,
    q: "La calidad de un modelo relacional depende, entre otros factores, de:",
    o: [
      "El número de tablas que tenga",
      "La velocidad del procesador",
      "Las anomalías de manipulación que presente",
      "El lenguaje de programación utilizado",
      "El color de la interfaz",
      "La cantidad de usuarios conectados"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Qué provoca la presencia de 'Datos redundantes'?",
    o: [
      "Mejora la velocidad de consulta",
      "Ahorra espacio en disco",
      "Malgasta espacio",
      "Garantiza la seguridad",
      "Evita anomalías de inserción",
      "Simplifica el modelo"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Cuál es una consecuencia directa de la redundancia de datos?",
    o: [
      "Riesgos de incoherencia",
      "Mayor integridad referencial",
      "Normalización automática",
      "Eliminación de claves ajenas",
      "Aumento de la atomicidad",
      "Mejora en las copias de seguridad"
    ],
    c: 0
  },
  {
    t: 7,
    q: "Si los datos repetidos no se actualizan en todos los sitios y la información se vuelve contradictoria, hablamos de:",
    o: [
      "Anomalía de inserción",
      "Riesgo de incoherencia",
      "Dependencia funcional",
      "Tercera Forma Normal",
      "Anomalía de cardinalidad",
      "Error de hardware"
    ],
    c: 1
  },
  {
    t: 7,
    q: "¿En qué consiste una 'Anomalía de inserción'?",
    o: [
      "Se tarda mucho en guardar los datos",
      "No es posible registrar datos de una entidad si no está vinculada a otra",
      "Se duplican los datos al insertar",
      "El sistema se bloquea al escribir",
      "Se pierden datos al insertar",
      "Requiere permisos de administrador"
    ],
    c: 1
  },
  {
    t: 7,
    q: "El ejemplo: 'no puedes añadir un nuevo profesor si no tiene un curso asignado', ¿a qué anomalía corresponde?",
    o: [
      "Actualización",
      "Eliminación",
      "Inserción",
      "Consulta",
      "Redundancia",
      "Transitiva"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Qué caracteriza a las 'Anomalías de actualización'?",
    o: [
      "No se pueden borrar datos",
      "Para modificar un dato repetido, tienes que hacerlo múltiples veces",
      "Se actualiza todo automáticamente sin errores",
      "El software necesita actualizarse",
      "Solo se puede actualizar la clave primaria",
      "No permiten valores nulos"
    ],
    c: 1
  },
  {
    t: 7,
    q: "¿Qué ocurre en una 'Anomalía de eliminación'?",
    o: [
      "No se pueden borrar registros",
      "El sistema hace una copia de seguridad antes de borrar",
      "Al borrar un registro, puedes perder sin querer toda la información de otra entidad",
      "Se borra solo la clave ajena",
      "Se borra la tabla entera accidentalmente",
      "Quedan datos huérfanos"
    ],
    c: 2
  },
  {
    t: 7,
    q: "Selecciona todas las anomalías de manipulación mencionadas en el texto:",
    o: [
      "Anomalías de inserción",
      "Anomalías de conexión",
      "Anomalías de actualización",
      "Anomalías de compilación",
      "Anomalías de eliminación",
      "Problemas de consulta"
    ],
    c: [0, 2, 4, 5]
  },
  {
    t: 7,
    q: "Si X determina funcionalmente a Y, se denota como:",
    o: [
      "Y → X",
      "X = Y",
      "X → Y",
      "X > Y",
      "X - Y",
      "X :: Y"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Se pueden deducir las dependencias funcionales a partir de los datos de la extensión?",
    o: [
      "Sí, siempre",
      "Solo si la tabla es pequeña",
      "No, no pueden deducirse de los datos de la extensión",
      "Sí, usando algoritmos de IA",
      "Depende del SGBD",
      "Solo si están en 3FN"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿De qué dependen las dependencias funcionales?",
    o: [
      "Del tamaño del disco duro",
      "De la semántica de los atributos y del dominio del problema",
      "De los datos que haya insertados actualmente",
      "Del lenguaje SQL",
      "Del administrador de la base de datos",
      "De la memoria RAM"
    ],
    c: 1
  },
  {
    t: 7,
    q: "En un Grafo de dependencias funcionales, ¿qué son los nodos?",
    o: [
      "Dependencias",
      "Tablas",
      "Atributos o conjunto de atributos",
      "Relaciones",
      "Tuplas",
      "Claves ajenas"
    ],
    c: 2
  },
  {
    t: 7,
    q: "Las Formas Normales son condiciones para que un modelo esté exento de:",
    o: [
      "Claves primarias",
      "Relaciones",
      "Anomalías de manipulación",
      "Usuarios malintencionados",
      "Errores de sintaxis",
      "Costes elevados"
    ],
    c: 2
  },
  {
    t: 7,
    q: "Selecciona las formas normales mencionadas en el texto:",
    o: [
      "1FN",
      "2FN",
      "BCFN (Boyce-Codd)",
      "6FN",
      "3FN",
      "0FN"
    ],
    c: [0, 1, 2, 4]
  },
  {
    t: 7,
    q: "¿Cuándo está una relación en 1FN (Primera Forma Normal)?",
    o: [
      "Cuando tiene claves ajenas",
      "Cuando no tiene filas repetidas",
      "Cuando en cada tupla se asigna a cada atributo un solo valor del dominio (valores atómicos)",
      "Cuando los atributos dependen de la clave completa",
      "Cuando no hay dependencias transitivas",
      "Cuando la tabla está vacía"
    ],
    c: 2
  },
  {
    t: 7,
    q: "Estar en 1FN implica la ausencia de:",
    o: [
      "Claves primarias",
      "Grupos repetidos",
      "Valores nulos",
      "Atributos de texto",
      "Relaciones n:m",
      "Datos numéricos"
    ],
    c: 1
  },
  {
    t: 7,
    q: "Para que una relación esté en 2FN debe cumplir:",
    o: [
      "Estar en 1FN",
      "Estar en 3FN",
      "Que todos los atributos no primos sean completamente dependientes de las claves candidatas",
      "No tener claves ajenas",
      "Tener solo un atributo",
      "Tener un índice único"
    ],
    c: [0, 2]
  },
  {
    t: 7,
    q: "¿Qué son los atributos NO primos?",
    o: [
      "Los atributos numéricos impares",
      "Los que forman parte de la clave primaria",
      "Los que no forman parte de ninguna clave candidata",
      "Los atributos opcionales",
      "Los atributos derivados",
      "Las claves ajenas"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Por qué una relación NO suele estar en 2FN normalmente?",
    o: [
      "Porque los SGBD no lo permiten",
      "Porque está representando varias entidades y asociaciones a la vez",
      "Porque usa demasiada memoria",
      "Porque tiene muchos registros",
      "Porque no tiene atributos primos",
      "Es imposible que no esté en 2FN"
    ],
    c: 1
  },
  {
    t: 7,
    q: "¿Se puede transformar siempre un modelo a 2FN?",
    o: [
      "No, a veces es imposible",
      "Sí, pero se pierden datos",
      "Sí, sin pérdidas de información ni dependencias",
      "Solo si se usa Oracle",
      "Solo si la tabla es pequeña",
      "No, requiere borrar la base de datos"
    ],
    c: 2
  },
  {
    t: 7,
    q: "En el ejemplo R(K1, K2, X, Y), si K1 → X, ¿por qué NO está en 2FN?",
    o: [
      "Porque X es primo",
      "Porque Y depende de todo",
      "Porque X no depende completamente de las claves candidatas (depende solo de K1)",
      "Porque hay redundancia en Y",
      "Porque K2 es nulo",
      "Porque K1 no es clave"
    ],
    c: 2
  },
  {
    t: 7,
    q: "En la relación R(K1, K2, X, Y), ¿cuáles son los atributos primos?",
    o: [
      "X e Y",
      "K1 y K2",
      "Solo K1",
      "Solo X",
      "Todos",
      "Ninguno"
    ],
    c: 1
  },
  {
    t: 7,
    q: "Una relación está en 3FN si:",
    o: [
      "Está en 2FN",
      "Ningún atributo no primo depende transitivamente de ninguna clave candidata",
      "No tiene atributos primos",
      "Está en 4FN",
      "Tiene menos de 3 columnas",
      "Todas las claves son simples"
    ],
    c: [0, 1]
  },
  {
    t: 7,
    q: "La dependencia transitiva es lo que se busca eliminar en la:",
    o: [
      "1FN",
      "2FN",
      "3FN",
      "Integridad Referencial",
      "Creación de índices",
      "Anomalía de inserción"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Qué significan los arcos en un grafo de dependencias funcionales?",
    o: [
      "Las tablas",
      "Los atributos",
      "Las dependencias funcionales",
      "Los errores",
      "Las consultas",
      "Los usuarios"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Qué implica que 'X determina funcionalmente a Y'?",
    o: [
      "Que X es mayor que Y",
      "Que Y depende funcionalmente de X",
      "Que son independientes",
      "Que X e Y son la misma columna",
      "Que Y es la clave primaria",
      "Que X es opcional"
    ],
    c: 1
  },
  {
    t: 7,
    q: "Si los datos de la extensión contradicen una dependencia funcional, entonces:",
    o: [
      "La dependencia se confirma",
      "La base de datos se corrompe",
      "Podría descartarse la existencia de dicha dependencia",
      "Se debe borrar la tabla",
      "Se crea una anomalía de actualización",
      "La tabla pasa a 3FN"
    ],
    c: 2
  },
  {
    t: 7,
    q: "¿Qué tipo de atributo debe ser 'completamente dependiente' de la clave en 2FN?",
    o: [
      "El atributo primo",
      "La clave ajena",
      "El atributo no primo",
      "El índice",
      "El valor nulo",
      "El nombre de la tabla"
    ],
    c: 2
  },
  {
    t: 7,
    q: "Si un profesor deja de dar clase y al borrarlo se pierden sus datos personales, es un ejemplo de:",
    o: [
      "Normalización correcta",
      "Anomalía de eliminación",
      "Anomalía de actualización",
      "Dependencia transitiva",
      "Integridad de entidad",
      "Optimización de consultas"
    ],
    c: 1
  },
  {
    t: 7,
    q: "La afirmación 'Y depende funcionalmente de X' es equivalente a:",
    o: [
      "Y → X",
      "X determina funcionalmente a Y",
      "X e Y son independientes",
      "Y es clave primaria",
      "X no afecta a Y",
      "Y borra a X"
    ],
    c: 1
  },
  {
    t: 7,
    q: "¿Cuál es el orden lógico de aplicación de las formas normales?",
    o: [
      "3FN -> 2FN -> 1FN",
      "1FN -> 2FN -> 3FN",
      "BCFN -> 1FN",
      "Aleatorio",
      "Solo se aplica la 3FN directamente",
      "No tienen orden"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Qué significan las siglas MDD en el contexto del tema?",
    o: [
      "Model Database Design",
      "Model Driven Development (Desarrollo dirigido por modelos)",
      "Master Data Definition",
      "Manual Data Deployment",
      "Multiple Database Distribution",
      "Management of Digital Data"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Cuál es el enfoque principal del MDD?",
    o: [
      "Programar directamente en código máquina",
      "Transformar modelos para generar productos hasta llegar al código fuente",
      "Evitar el uso de bases de datos",
      "Diseñar solo la interfaz gráfica",
      "Usar metodologías en cascada exclusivamente",
      "Contratar más personal para escribir código manual"
    ],
    c: 1
  },
  {
    t: 8,
    q: "En el desarrollo de sistemas con bases de datos relacionales, ¿cuál es el orden de transformación?",
    o: [
      "Código SQL -> Modelo Relacional -> Modelo Conceptual",
      "Modelo Relacional -> Código SQL -> Modelo Conceptual",
      "Modelo Conceptual -> Modelo Relacional -> Código SQL",
      "Modelo Conceptual -> Código SQL (directamente)",
      "Modelo Físico -> Modelo Lógico -> Modelo Conceptual",
      "No hay transformación, se hace todo a la vez"
    ],
    c: 2
  },
  {
    t: 8,
    q: "¿Cuál es la regla general para transformar una Entidad del modelo conceptual?",
    o: [
      "Se transforma en una columna",
      "Se ignora",
      "Se transforma en una relación (tabla) con su mismo nombre",
      "Se convierte en una clave ajena",
      "Se transforma en dos tablas siempre",
      "Se convierte en un procedimiento almacenado"
    ],
    c: 2
  },
  {
    t: 8,
    q: "Al transformar atributos de una entidad, ¿qué se debe tener en cuenta?",
    o: [
      "Definir dominios en función de la semántica de los atributos",
      "Convertir todos los atributos a texto",
      "Eliminar los atributos opcionales",
      "Crear una tabla por cada atributo",
      "Usar siempre números enteros",
      "No definir ningún dominio"
    ],
    c: 0
  },
  {
    t: 8,
    q: "¿Qué son las 'Claves semánticas'?",
    o: [
      "Claves generadas aleatoriamente",
      "Atributos artificiales sin significado",
      "Atributos o conjunto de atributos que son claves en el dominio del problema",
      "Claves ajenas mal formadas",
      "Contraseñas de usuarios",
      "Índices de rendimiento"
    ],
    c: 2
  },
  {
    t: 8,
    q: "¿Qué son los 'Identificadores de objetos (Id)'?",
    o: [
      "Atributos naturales del problema",
      "Atributos artificiales añadidos para identificar un objeto sin depender de claves semánticas",
      "El nombre de la tabla",
      "La dirección de memoria",
      "Un código de barras físico",
      "El DNI de una persona obligatoriamente"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Cómo se suelen nombrar los identificadores de objetos (Id)?",
    o: [
      "Solo con el nombre 'clave'",
      "Con el nombre de la entidad en plural",
      "Solo 'id' o con el sufijo 'id'",
      "Con números romanos",
      "Con el prefijo 'pk_'",
      "Con el nombre del desarrollador"
    ],
    c: 2
  },
  {
    t: 8,
    q: "¿Cómo se transforma una asociación 1:N (Uno a Muchos)?",
    o: [
      "Se crea una nueva tabla auxiliar",
      "Se pone la clave ajena en la relación del lado 1",
      "Se pone la clave ajena en la relación de la entidad del rol N",
      "No se puede transformar",
      "Se duplican los datos en ambas tablas",
      "Se elimina la entidad N"
    ],
    c: 2
  },
  {
    t: 8,
    q: "Si tenemos 'Cliente (1) -- Compro -- (N) Producto', ¿dónde va la clave ajena?",
    o: [
      "En la tabla Cliente",
      "En una tabla nueva llamada Cliente_Producto",
      "En la tabla Producto",
      "En ninguna, se usa un array",
      "En ambas tablas",
      "Se borra la tabla Producto"
    ],
    c: 2
  },
  {
    t: 8,
    q: "¿Cómo se transforma una asociación 1:1 (Uno a Uno)?",
    o: [
      "Es obligatorio crear una tercera tabla",
      "Se representa con una clave ajena en cualquiera de las relaciones",
      "No se permite en el modelo relacional",
      "Siempre se fusionan las dos tablas en una sola",
      "Se pone la clave ajena en ambas tablas a la vez (referencia circular)",
      "Se usa un campo booleano"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Cómo se transforma una asociación M:N (Muchos a Muchos)?",
    o: [
      "Con una clave ajena en una de las tablas",
      "Con claves ajenas en ambas tablas originales",
      "Se representan con una relación auxiliar con claves ajenas a las dos relaciones",
      "Transformándola a 1:1",
      "No se hace nada",
      "Se borran las entidades originales"
    ],
    c: 2
  },
  {
    t: 8,
    q: "En una asociación M:N transformada a tabla auxiliar, ¿qué contiene esa tabla?",
    o: [
      "Solo un ID propio",
      "Claves ajenas a las dos relaciones originales",
      "Todos los atributos de las dos tablas copiados",
      "Solo la fecha de creación",
      "Nada, está vacía",
      "Un campo de texto libre"
    ],
    c: 1
  },
  {
    t: 8,
    q: "Si un rol está marcado como {ordenado}, ¿qué se debe hacer?",
    o: [
      "Nada, el orden no importa en bases de datos",
      "Crear una tabla extra solo para el orden",
      "Añadir un atributo que especifique el orden en la misma relación donde se coloca la clave ajena",
      "Usar una lista enlazada en memoria",
      "Ordenar alfabéticamente el nombre de la tabla",
      "Borrar la relación"
    ],
    c: 2
  },
  {
    t: 8,
    q: "Selecciona las tres estrategias mencionadas para transformar una jerarquía de generalización/especialización:",
    o: [
      "Una relación para cada clase de la jerarquía",
      "Una relación para cada atributo",
      "Una relación para cada subclase concreta",
      "Una relación para cada método",
      "Una única relación para toda la jerarquía",
      "Una relación para cada clave ajena"
    ],
    c: [0, 2, 4]
  },
  {
    t: 8,
    q: "En la estrategia de 'Una relación para cada clase de la jerarquía', ¿cuántas tablas se crean si hay 1 superclase y 2 subclases?",
    o: [
      "1 tabla",
      "2 tablas",
      "3 tablas",
      "4 tablas",
      "0 tablas",
      "Infinitas"
    ],
    c: 2
  },
  {
    t: 8,
    q: "En la estrategia de 'Una relación para cada subclase concreta', ¿qué pasa con los atributos de la superclase?",
    o: [
      "Se pierden",
      "Se guardan en una tabla separada",
      "Se repiten (se bajan) en cada tabla de subclase",
      "Se convierten en nulos",
      "Se hacen estáticos",
      "No se pueden usar"
    ],
    c: 2
  },
  {
    t: 8,
    q: "En la estrategia de 'Una única relación para toda la jerarquía', ¿qué sucede?",
    o: [
      "Se crean muchas tablas pequeñas",
      "Se fusionan todos los atributos de superclase y subclases en una sola tabla gigante",
      "Solo se guardan los datos de la superclase",
      "Se eliminan las subclases",
      "Se usa una base de datos no relacional",
      "Se viola la 1FN"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Por qué a veces usamos claves semánticas como identificadores?",
    o: [
      "Porque es más difícil de programar",
      "Porque realmente identifican de manera única en el dominio del problema",
      "Porque ocupan más espacio",
      "Porque SQL lo obliga",
      "No se deben usar nunca",
      "Porque son aleatorias"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Qué ventaja tienen los identificadores artificiales (Id)?",
    o: [
      "Hacen el modelo dependiente del negocio",
      "Permiten identificar un objeto sin depender de cambios en las claves semánticas",
      "Son más lentos",
      "Son difíciles de generar",
      "Ocupan mucho texto",
      "No tienen ninguna ventaja"
    ],
    c: 1
  },
  {
    t: 8,
    q: "Si en una asociación 1:N colocamos la FK en el lado del 1, ¿qué problema tendríamos?",
    o: [
      "Ninguno, es correcto",
      "Tendríamos que tener múltiples valores en una celda (violando 1FN) o duplicar filas del lado 1",
      "Se borra la base de datos",
      "La tabla desaparece",
      "El ID se vuelve negativo",
      "Se convierte en una relación M:N"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Qué implica añadir un atributo de orden en una relación?",
    o: [
      "Que la base de datos se ordena físicamente",
      "Que necesitamos guardar la secuencia (1º, 2º, 3º...) de los elementos relacionados",
      "Que los datos se ordenan alfabéticamente solos",
      "Que se usa un algoritmo de burbuja",
      "Que la clave primaria cambia",
      "Que la relación se vuelve recursiva"
    ],
    c: 1
  },
  {
    t: 8,
    q: "El paso final mencionado en el MDD para sistemas de bases de datos es:",
    o: [
      "Modelo Conceptual",
      "Modelo de Objetos",
      "Código SQL",
      "Diagrama de Flujo",
      "Entrevista con el cliente",
      "Dibujo en papel"
    ],
    c: 2
  },
  {
    t: 8,
    q: "¿Qué elemento del modelo conceptual se transforma en una columna de la tabla relacional?",
    o: [
      "La Entidad",
      "La Asociación M:N",
      "El Atributo",
      "La Generalización",
      "El diagrama completo",
      "La nota explicativa"
    ],
    c: 2
  },
  {
    t: 8,
    q: "Selecciona las afirmaciones verdaderas sobre la transformación de asociaciones:",
    o: [
      "1:N -> Clave ajena en el lado N",
      "M:N -> Clave ajena en el lado M",
      "M:N -> Tabla auxiliar",
      "1:1 -> Tabla auxiliar siempre",
      "1:1 -> Clave ajena en cualquiera de las dos",
      "1:N -> Clave ajena en el lado 1"
    ],
    c: [0, 2, 4]
  },
  {
    t: 8,
    q: "Si elegimos la estrategia de 'Una relación para cada subclase concreta', ¿existe una tabla para la superclase abstracta?",
    o: [
      "Sí, siempre",
      "No, la superclase no tiene tabla propia en este caso",
      "Sí, pero vacía",
      "Depende del gestor de base de datos",
      "Sí, para guardar las claves ajenas",
      "Solo si tiene atributos privados"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Qué sufijo se sugiere añadir para la clave primaria en la transformación?",
    o: [
      "_key",
      "Pk",
      "Id",
      "_num",
      "_code",
      "_val"
    ],
    c: 2
  },
  {
    t: 8,
    q: "La transformación del modelo conceptual al relacional es parte del:",
    o: [
      "Mantenimiento correctivo",
      "Análisis de requisitos",
      "Desarrollo dirigido por modelos (MDD) - Diseño",
      "Testing de usuario",
      "Despliegue en producción",
      "Marketing del producto"
    ],
    c: 2
  },
  {
    t: 8,
    q: "En una relación M:N transformada, la tabla auxiliar tiene:",
    o: [
      "Una clave primaria compuesta por las dos claves ajenas (habitualmente)",
      "Solo un campo de fecha",
      "Ninguna clave",
      "Solo atributos nulos",
      "Una sola columna",
      "Datos de otras tablas aleatorias"
    ],
    c: 0
  },
  {
    t: 8,
    q: "Si un atributo es multivaluado en el modelo conceptual, ¿cómo se suele transformar (aunque no lo especifique el texto explícitamente, se deduce de la 1FN)?",
    o: [
      "Se deja igual",
      "Se crea una nueva tabla para esos valores (similar a 1:N)",
      "Se pone todo en una celda separado por comas",
      "Se borra el atributo",
      "Se ignora",
      "Se transforma en una entidad débil"
    ],
    c: 1
  },
  {
    t: 8,
    q: "¿Qué se debe añadir a las tablas resultantes además de las columnas de atributos?",
    o: [
      "Restricciones de clave primaria (PK) y ajena (FK)",
      "Colores de fondo",
      "Imágenes",
      "Sonidos",
      "Enlaces web",
      "Nada más"
    ],
    c: 0
  },
  {
    t: 8,
    q: "El concepto 'Rol' en una asociación ayuda a determinar:",
    o: [
      "El color de la línea",
      "El nombre de la clave ajena o el significado de la relación",
      "El tipo de dato",
      "El tamaño en disco",
      "El usuario que creó la tabla",
      "La fecha de caducidad"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Qué es el Álgebra Relacional (AR)?",
    o: [
      "Un lenguaje de programación orientado a objetos",
      "Un conjunto de operadores sobre relaciones que permiten expresar consultas",
      "Un sistema de gestión de base de datos físico",
      "Una técnica para normalizar tablas",
      "Un software de IBM",
      "Un protocolo de red"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Quién propuso el conjunto de operadores del Álgebra Relacional?",
    o: [
      "Turing",
      "Von Neumann",
      "Codd",
      "Gates",
      "Chen",
      "Deming"
    ],
    c: 2
  },
  {
    t: 9,
    q: "¿Qué devuelven como resultado los operadores del Álgebra Relacional?",
    o: [
      "Un número entero",
      "Un valor booleano (Verdadero/Falso)",
      "Una relación derivada",
      "Un archivo de texto",
      "Un puntero de memoria",
      "Una gráfica visual"
    ],
    c: 2
  },
  {
    t: 9,
    q: "Selecciona los operadores clasificados como 'Operadores Conjuntistas' en el texto:",
    o: [
      "Selección",
      "Unión",
      "Intersección",
      "Proyección",
      "Diferencia",
      "Producto cartesiano"
    ],
    c: [1, 2, 4, 5]
  },
  {
    t: 9,
    q: "Selecciona los operadores clasificados como 'Operadores Relacionales' en el texto:",
    o: [
      "Selección",
      "Unión",
      "Proyección",
      "Combinación (Join)",
      "Intersección",
      "División"
    ],
    c: [0, 2, 3, 5]
  },
  {
    t: 9,
    q: "¿Qué se debe hacer cuando hay ambigüedad en los nombres de atributos (ej: atributo 'a' en relación R)?",
    o: [
      "Renombrar la tabla obligatoriamente",
      "Prefijar con el nombre de la relación (R.a)",
      "Borrar el atributo",
      "Usar índices numéricos",
      "Dejarlo como está, el sistema adivina",
      "Cambiar el tipo de dato"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Qué son 'Relaciones compatibles'?",
    o: [
      "Relaciones que tienen el mismo número de filas",
      "Relaciones creadas por el mismo usuario",
      "Relaciones cuyas intensiones comparten los mismos dominios (atributo a atributo)",
      "Relaciones que están en la misma base de datos",
      "Relaciones con claves primarias idénticas",
      "Relaciones sin valores nulos"
    ],
    c: 2
  },
  {
    t: 9,
    q: "¿Sobre qué relaciones se pueden aplicar la unión, intersección y diferencia?",
    o: [
      "Sobre cualquier par de relaciones",
      "Solo sobre relaciones con claves ajenas",
      "Sobre relaciones compatibles",
      "Solo sobre relaciones vacías",
      "Sobre relaciones normalizadas en 3FN",
      "Sobre relaciones con nombres idénticos"
    ],
    c: 2
  },
  {
    t: 9,
    q: "Si queremos aplicar unión o intersección sobre relaciones NO compatibles por tener nombres diferentes de atributos, ¿qué operador usamos?",
    o: [
      "Selección",
      "Renombrado",
      "División",
      "Producto Cartesiano",
      "Agregación",
      "Borrado"
    ],
    c: 1
  },
  {
    t: 9,
    q: "El operador Unión (R U S) devuelve:",
    o: [
      "Las tuplas comunes a ambas relaciones",
      "Todas las combinaciones posibles",
      "Todas las tuplas que están en R o en S (sin duplicados)",
      "Las tuplas de R que no están en S",
      "Un valor numérico",
      "Las columnas de ambas tablas"
    ],
    c: 2
  },
  {
    t: 9,
    q: "El operador Intersección (R n S) devuelve:",
    o: [
      "Todas las tuplas de R y todas las de S",
      "Las tuplas que están en R pero no en S",
      "Las tuplas que están en ambas relaciones",
      "El producto de las tuplas",
      "Las tuplas con valores nulos",
      "La suma de los atributos"
    ],
    c: 2
  },
  {
    t: 9,
    q: "El operador Diferencia (R - S) devuelve:",
    o: [
      "Las tuplas que están en S pero no en R",
      "Las tuplas comunes",
      "Las tuplas que están en R pero no en S",
      "La resta aritmética de sus valores",
      "Todas las tuplas de R y S",
      "Una relación vacía siempre"
    ],
    c: 2
  },
  {
    t: 9,
    q: "El Producto Cartesiano (R x S) devuelve:",
    o: [
      "Solo las tuplas que coinciden en la clave",
      "Todas las combinaciones de tuplas de R con las de S",
      "La unión de R y S",
      "La intersección de atributos",
      "Un número escalar",
      "Solo la primera fila de cada tabla"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Cuál es el símbolo o notación para la Selección?",
    o: [
      "Pi (π)",
      "Sigma (σ)",
      "Rho (ρ)",
      "Gamma (γ)",
      "Chi (χ)",
      "Delta (δ)"
    ],
    c: 1
  },
  {
    t: 9,
    q: "La operación Selección (σ) permite:",
    o: [
      "Elegir columnas específicas",
      "Combinar dos tablas",
      "Seleccionar las tuplas de R que satisfacen una fórmula f",
      "Agrupar resultados",
      "Ordenar los resultados",
      "Cambiar el nombre de los atributos"
    ],
    c: 2
  },
  {
    t: 9,
    q: "La operación Proyección (Π) sirve para:",
    o: [
      "Filtrar filas (tuplas)",
      "Extraer columnas específicas (B) de R",
      "Hacer un producto cartesiano",
      "Calcular sumas y promedios",
      "Borrar la tabla",
      "Unir dos tablas"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Cuál es el símbolo o notación para la Proyección?",
    o: [
      "Sigma (σ)",
      "Gamma (γ)",
      "Pi (Π)",
      "Unión (U)",
      "Bowtie (⋈)",
      "División (÷)"
    ],
    c: 2
  },
  {
    t: 9,
    q: "La Combinación Natural (Natural Join) se define como una combinación de:",
    o: [
      "Suma, Resta y División",
      "Unión e Intersección",
      "Proyección, Selección y Producto Cartesiano",
      "Agregación y Diferencia",
      "Solo Producto Cartesiano",
      "Solo Selección"
    ],
    c: 2
  },
  {
    t: 9,
    q: "El Natural Join crea una relación enlazando tuplas donde:",
    o: [
      "Los atributos son diferentes",
      "No hay coincidencia alguna",
      "Las claves primarias de R son iguales a las claves ajenas de S (atributos comunes)",
      "Se multiplican todos los valores",
      "Se restan los valores numéricos",
      "Se concatenan todos los textos"
    ],
    c: 2
  },
  {
    t: 9,
    q: "¿Qué tipo de operador es el Natural Join?",
    o: [
      "Primitivo",
      "Aritmético",
      "Derivado",
      "Lógico",
      "Físico",
      "Obsoleto"
    ],
    c: 2
  },
  {
    t: 9,
    q: "En una Combinación Natural (Natural Join), ¿qué pasa con los atributos comunes?",
    o: [
      "Se duplican en el resultado",
      "Se eliminan ambos",
      "Aparecen una sola vez (intersección de intensión)",
      "Se renombran obligatoriamente",
      "Se convierten a NULL",
      "Se ponen en negrita"
    ],
    c: 2
  },
  {
    t: 9,
    q: "La operación División (R ÷ S) devuelve:",
    o: [
      "La mitad de las tuplas",
      "Los valores de R tales que para TODO valor de s en S existe una tupla en R",
      "Una división aritmética de columnas numéricas",
      "Los valores que no coinciden",
      "El resto de la división entera",
      "La unión de R y S"
    ],
    c: 1
  },
  {
    t: 9,
    q: "La División es un operador derivado. ¿Qué operaciones se usan para calcularla según el texto?",
    o: [
      "Solo Unión",
      "Producto Cartesiano, Resta (Diferencia) y Proyección",
      "Intersección y Suma",
      "Natural Join exclusivo",
      "Selección y Agregación",
      "Renombrado"
    ],
    c: 1
  },
  {
    t: 9,
    q: "En el algoritmo para calcular la división descrito, 'allComb' representa:",
    o: [
      "El resultado final",
      "Todas las combinaciones posibles de r y s",
      "Las combinaciones que faltan",
      "Los r que no sirven",
      "La tabla vacía",
      "La cabecera de la tabla"
    ],
    c: 1
  },
  {
    t: 9,
    q: "La operación Agregación determina:",
    o: [
      "El número de particiones por cada valor del grupo G",
      "La intersección de conjuntos",
      "La diferencia de conjuntos",
      "El producto cartesiano",
      "Una proyección simple",
      "Un filtrado de filas"
    ],
    c: 0
  },
  {
    t: 9,
    q: "En la función de Agregación, 'F' representa:",
    o: [
      "Falso",
      "Función de agregación definida sobre R (ej: Suma, Cuenta)",
      "Fuerza bruta",
      "Formato de fecha",
      "Filtro de búsqueda",
      "Final del archivo"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Cuál es la intensión resultante I(T) de una Selección sobre R?",
    o: [
      "Es vacía",
      "Es igual a I(R) (mismos atributos)",
      "Es la mitad de los atributos",
      "Son solo los atributos numéricos",
      "Es la suma de I(R) + I(R)",
      "Depende de la fórmula f"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Cuál es la intensión resultante I(T) de una Proyección sobre R seleccionando columnas B?",
    o: [
      "I(R)",
      "B (solo las columnas proyectadas)",
      "I(R) - B",
      "Todas las columnas posibles",
      "Ninguna",
      "Solo la clave primaria"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Cuál es la intensión resultante I(T) de un Producto Cartesiano R x S?",
    o: [
      "I(R) n I(S)",
      "I(R) U I(S) (Unión de todos los atributos)",
      "Solo atributos de R",
      "Solo atributos de S",
      "Atributos comunes",
      "Ninguno"
    ],
    c: 1
  },
  {
    t: 9,
    q: "En la definición de Selección, 'f' es:",
    o: [
      "Una función de agregación",
      "Una fórmula bien formada sobre I(R)",
      "Un atributo",
      "Una relación externa",
      "Un índice",
      "Un error"
    ],
    c: 1
  },
  {
    t: 9,
    q: "¿Qué operadores permiten 'anidar' resultados formando expresiones complejas?",
    o: [
      "Solo los aritméticos",
      "Ninguno",
      "Todos los operadores del Álgebra Relacional",
      "Solo la Selección",
      "Solo la Proyección",
      "Solo la Unión"
    ],
    c: 2
  },
  {
    t: 9,
    q: "Si G = Ø (vacío) en una Agregación, ¿cuál es la partición?",
    o: [
      "No hay partición",
      "Cada fila es una partición",
      "La partición es toda la relación",
      "Da error",
      "Se borran los datos",
      "Se divide por cero"
    ],
    c: 2
  }
]; // FINNNNNNN
