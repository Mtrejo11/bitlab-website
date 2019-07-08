import estrategia from '../courses_img/img-course-estrategia.jpg'
import emprendimiento from '../courses_img/img-course-emprendimiento.jpg'
import dev from '../courses_img/img_course-dev.jpg'
import ux from '../courses_img/img-course-ux.jpg'
import course from '../courses_img/img_course.jpg'
import course2 from '../courses_img/img_course2.jpg'
import detail_dev from '../courses_img/details/intro-strategy.png'
import detail_design from '../courses_img/details/intro-ux.png'
import detail_strategy from '../courses_img/details/intro-strategy.png'
import detail_entrepreneur from '../courses_img/details/entrepreneurship.png'


export const AVAILABLE_COURSES = [
    {
        "titulo": "Introducción a la estrategia digital",
        "descripcion": "Aprende conceptos básicos, los medios digitales de tendencia, lo básico de un plan de pauta, buenas prácticas, hacks y herramientas para iniciar u optimizar tu estrategia digital. ",
        "instructor": "Fabiola León",
        "tipo": false,
        "tiempo": "4 horas",
        "imagen": estrategia,
        "categoria": "2",
        "imgdetalle": detail_strategy,
        "programa": [
            {
                "week": "Clase 1",
                "temas": ["¿Cuáles son los medios digitales de tendencia?", "Introducción a los algoritmos", "¿Cómo funciona la pauta en medios digitales?", "Formatos y posibilidades de estrategias + pautas", "¿Qué es el inbound marketing?", "¿Para qué sirve crear tu Buyer persona?", "La metodología de inbound marketing en acción", "Aciertos y desaciertos de acciones en medios digitales", "Guía base para crear una estrategia de inbound marketing"]
            },


        ]
    },
    {
        "titulo": "Introducción al desarrollo de software",
        "descripcion": "Aprenderás conceptos básicos de programación y herramientas para entrar al mundo del desarrollo web y móvil. Este curso es requisito para personas con conocimiento básico y sin conocimiento en el área. ",
        "instructor": "Eduardo Linares",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": dev,
        "categoria": "1",
        "imgdetalle": detail_dev,
        "programa": [
            {
                "week": "Semana 1",
                "temas": ["¿Qué es un lenguaje de programación?", "HTML / HyperText Markup Language", "Estructura de un documento HTML", "¿Qué es CSS? / Cascading Style Sheets?", "CSS Syntax: selector, propiedad y valor"]
            },
            {
                "week": "Semana 2",
                "temas": ["¿Qué es JavaScript?", "Javascript Syntax.", "Variables.", "Operadores matemáticos: +, -, *, /, %, ++, --.", "Javascript puede cambiar el contenido HTML.", "Javascript puede cambiar atributos HTML.", "Javascript puede cambiar estilos CSS.", "Funciones en Javascript."]
            },
            {
                "week": "Semana 3",
                "temas": ["Responsive Design", "Mobile First", "Bootstrap CDN", "Bootstrap Grid System", "Grid Classes: xs, sm, md, lg"]
            },
            {
                "week": "Semana 4",
                "temas": ["¿Qué es PHP?", "Ambiente de trabajo", "PHP Syntax", "If, Else, If Else.", "While en PHP"]
            },

        ]
    },
    {
        "titulo": "Introducción al emprendimiento",
        "descripcion": "Descubre el camino para emprender en El Salvador desde construir tu modelo de negocio, herramientas, aliados y opciones de fondeo hasta cómo preparar un Pitch Deck. ",
        "instructor": "Carlos Moreno",
        "tipo": false,
        "tiempo": "4 horas",
        "imagen": emprendimiento,
        "categoria": "4",
        "imgdetalle": detail_entrepreneur,
        "programa": [
            {
                "week": "Clase 1",
                "temas": ["¿Qué es un Emprendedor?", "¿Qué es una Startup?", "Ciclos de vida de las Startups", "Características de las Startups Latinoamericanas", "¿Es mi idea buena o mala?", "Métodos de validación de ideas.", "Estructurar una idea usando el BMC.", "¿Qué es un Pitch?"]
            },
        ]
    },
    {
        "titulo": "Introducción al UX & UI",
        "descripcion": "Conoceras la diferencia entre la Experiencia de Usuario y la Interfaz de Usuario, entenderas el significado de cada uno, y aprenderas procesos y tips que te ayudaran a lograr un buen producto digital.",
        "instructor": "Luis Pinto",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": ux,
        "categoria": "3",
        "imgdetalle": detail_design,
        "programa": [
            {
                "week": "Semana 1",
                "temas": ["¿Qué es el UX?", "¿Qué es el UI?", "Conocer la diferencia entre UX & UI", "Ejercicios practicos", "¿Qué es ID?", "Prototipado y herramientas de prototipado", "Lotties (¿Qué es y cómo usarlo?)"]
            },


        ]
    },
    {
        "titulo": "Introducción al emprendimiento",
        "descripcion": "Descubre el camino para emprender en El Salvador desde construir tu modelo de negocio, herramientas, aliados y opciones de fondeo hasta cómo preparar un Pitch Deck. ",
        "instructor": "Carlos Moreno",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": course,
        "categoria": "4",
        "imgdetalle": detail_entrepreneur,
        "programa": [
            {
                "week": "Semana 1",
                "temas": ["¿Qué es una idea?", "¿Qué es un Idea Innovadora?", "Ciclos de vida de las Startups", "Definición e identificación de competencias", "Gestión del Equipo de trabajo", "Herramientas de planificación y gestión de equipos"]
            },
            {
                "week": "Semana 2",
                "temas": ["Herramientas de Fondeo de Startups","Calcular el precio de mi producto","¿Regalo o vendo mi producto? ¿Cuánto de eso?","¿Qué es un Modelo de Negocios?","Para que sirve un Modelo de Negocios"]
            },
            {
                "week": "Semana 3",
                "temas": ["Business Model Canvas","Definir las diferentes secciones del BMC","Presentar el Business Model Canvas de mi Startup.","¿Qué son las redes sociales?","¿Qué hacer y qué no hacer en Redes Sociales?"]
            },  
        ]

    },
    {
        "titulo": "Introducción al UX & UI",
        "descripcion": "Conoceras la diferencia entre la Experiencia de Usuario y la Interfaz de Usuario, entenderas el significado de cada uno, y aprenderas procesos y tips que te ayudaran a lograr un buen producto digital.",
        "instructor": "Luis Pinto",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": course2,
        "categoria": "3",
        "imgdetalle": detail_design,
        "programa": [
            {
                "week": "Semana 1",
                "temas": ["¿Qué es el UX?", "¿Qué es el UI?", "Conocer la diferencia entre UX & UI", "Ejercicios practicos", "¿Qué es ID?", "Prototipado y herramientas de prototipado", "Lotties (¿Qué es y cómo usarlo?)"]
            },


        ]

    },

];