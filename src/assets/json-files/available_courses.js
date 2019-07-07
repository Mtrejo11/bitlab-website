import estrategia from '../courses_img/img-course-estrategia.jpg'
import emprendimiento from '../courses_img/img-course-emprendimiento.jpg'
import dev from '../courses_img/img_course-dev.jpg'
import ux from '../courses_img/img-course-ux.jpg'
import course from '../courses_img/img_course.jpg'
import course2 from '../courses_img/img_course2.jpg'


export const AVAILABLE_COURSES = [
    {
        "titulo": "Introducción a la estrategia digital",
        "descripcion": "Aprende conceptos básicos, los medios digitales de tendencia, lo básico de un plan de pauta, buenas prácticas, hacks y herramientas para iniciar u optimizar tu estrategia digital. ",
        "instructor": "Fabiola León",
        "tipo": false,
        "tiempo": "4 horas",
        "imagen": estrategia,
        "categoria": "2",
        "ruta":"digital-strategy"
    },
    {
        "titulo": "Introducción al desarrollo de software",
        "descripcion": "Aprenderás conceptos básicos de programación y herramientas para entrar al mundo del desarrollo web y móvil. Este curso es requisito para personas con conocimiento básico y sin conocimiento en el área. ",
        "instructor": "Eduardo Linares",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": dev,
        "categoria": "1",
        "ruta":"software-dev"

    },
    {
        "titulo": "Introducción al emprendimiento",
        "descripcion": "Descubre el camino para emprender en El Salvador desde construir tu modelo de negocio, herramientas, aliados y opciones de fondeo hasta cómo preparar un Pitch Deck. ",
        "instructor": "Carlos Moreno",
        "tipo": false,
        "tiempo": "4 horas",
        "imagen": emprendimiento,
        "categoria": "4",
        "ruta":"intro-entrepeneurship"

    },
    {
        "titulo": "Introducción al UX & UI",
        "descripcion": "Conoceras la diferencia entre la Experiencia de Usuario y la Interfaz de Usuario, entenderas el significado de cada uno, y aprenderas procesos y tips que te ayudaran a lograr un buen producto digital.",
        "instructor": "Luis Pinto",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": ux,
        "categoria": "3",
        "ruta":"intro-ux"

    },
    {
        "titulo": "Introducción al emprendimiento",
        "descripcion": "Descubre el camino para emprender en El Salvador desde construir tu modelo de negocio, herramientas, aliados y opciones de fondeo hasta cómo preparar un Pitch Deck. ",
        "instructor": "Carlos Moreno",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": course,
        "categoria": "4",
        "ruta":"entrepeneurship-course"

    },
    {
        "titulo": "Introducción al UX & UI",
        "descripcion": "Conoceras la diferencia entre la Experiencia de Usuario y la Interfaz de Usuario, entenderas el significado de cada uno, y aprenderas procesos y tips que te ayudaran a lograr un buen producto digital.",
        "instructor": "Luis Pinto",
        "tipo": true,
        "tiempo": "4 horas",
        "imagen": course2,
        "categoria": "3",
        "ruta":"ux-course"

    }, 

];