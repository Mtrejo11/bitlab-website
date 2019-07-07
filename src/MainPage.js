import React from 'react';
import logo from '../src/assets/Group.svg';
import bitlab from '../src/assets/logo-bitlab.png'
import './App.css';
import '../src/styles/glyphstyle.css'
import TailCard from '../src/components/Tailcard';
import ArrowCard from '../src/components/ArrowCard';

import CourseCard from '../src/components/CourseCard';

import iconAprende from '../src/assets/home_page/icn-aprende.svg'
import iconContent from '../src/assets/home_page/icn-content.svg'
import iconEventos from '../src/assets/home_page/icn-eventos.svg'
import iconInteraccion from '../src/assets/home_page/icn-interaccion.svg'
import iconNetworking from '../src/assets/home_page/icn-networking.svg'
import iconOportunidad from '../src/assets/home_page/icn-oportunidad.svg'

import estrategia from '../src/assets/home_page/estrategia.png'
import software from '../src/assets/home_page/software.svg'
import diseno from '../src/assets/home_page/diseno.png'
import emprendimiento from '../src/assets/home_page/home/emprendimiento.svg'
import lens from '../src/assets/home_page/lents.png'


import course_intro from '../src/assets/home_page/home/img_course_dev.jpg'
import course_design from '../src/assets/home_page/home/img_course_ux.jpg'
import course_estrategia from '../src/assets/home_page/home/img_course_estrategia.jpg'
import course_emprendimiento from '../src/assets/home_page/home/img_course_emprendimiento.jpg'

import open_house from '../src/assets/home_page/open-house.jpg'
import NavBar from './components/NavBar';



export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainPage: true,
        }
    }


    render() {
        return (
            <div>

                <header className="App-header Header-background">
                    <NavBar logo={bitlab} main={true} />
                    <div >

                        <div className="Header-content  mt-20 items-start ">

                            <img src={logo} className="" alt="logo" />


                            <button className="bg-transparent hover:bg-white text-white text-base font-semibold hover:text-gray-700 py-2 mt-12 px-5 border-2 border-white hover:border-transparent rounded">
                                Encuentra tu curso
            </button>
                        </div>

                    </div>
                </header>
                <div className="Content">
                    <div className="About-bitlab">

                        <h1 class="text-4xl montserrat">Aprende de la mano de <br></br> profesionales</h1>
                        <p>Somos una academia de entrenamiento para trabajos en el mundo digital. En BitLab puedes
              acceder a cursos y talleres en las áreas de <span class="text-purple"> desarrollo de software, estrategia
              digital, diseño y emprendimiento.</span> Nuestras clases son desarrolladas por
                profesionales y expertos del rubro brindando educación integral con un enfoque
            profesional y práctico.</p>
                        <h2 class="text-4xl montserrat">Te ofrecemos</h2>
                    </div>

                    <div class="container flex Offers mt-10 mb-16">

                        <div class="w-1/3 flex justify-center   ">
                            <TailCard
                                body="Aprendizaje práctico para generar portafolio"
                                image={iconAprende}
                            />

                        </div>
                        <div class="w-1/3 flex justify-center border-l border-gray-200 ">
                            <TailCard

                                body="Contenido de vanguardia del mundo digital"
                                image={iconContent}
                            />
                        </div>
                        <div class="w-1/3  flex justify-center border-l border-gray-200 ">
                            <TailCard
                                body="Interacción con expertos de la industria"
                                image={iconInteraccion}
                            />
                        </div>
                    </div>
                    <div class="container flex  mb-20  Offers">

                        <div class="w-1/3  flex  justify-center ">
                            <TailCard
                                body="Acceso a eventos exclusivos con entrenadores internacionales"
                                image={iconEventos}
                            />

                        </div>
                        <div class="w-1/3  flex justify-center border-l border-gray-200">
                            <TailCard
                                body="Programa de becas"
                                image={iconNetworking}
                            />
                        </div>
                        <div class="w-1/3  flex justify-center border-l border-gray-200">
                            <TailCard
                                body="Oportunidades laborales y pasantías con empresas aliadas"
                                image={iconOportunidad}
                            />
                        </div>
                    </div>
                    <div className="flex  Intereses pl-48 mb-20">

                        <div class="w-full bg-gray-200 deseas-aprender flex p-32 ">
                            <div class="w-1/3   ">
                                <img src={lens} alt="" id="img-lentes"></img>
                            </div>
                            <div class="w-2/3  px-4">
                                <h3 class="text-3xl montserrat md:mt-20">¿Qué estás interesado<br></br>en aprender?</h3>
                                <div class="flex">
                                    <ArrowCard
                                        title="Desarrollo de software"
                                        position='software'
                                        image={software}

                                    ></ArrowCard>
                                    <ArrowCard
                                        title="Estrategia digital"
                                        position='estrategia'
                                        image={estrategia}
                                    ></ArrowCard>
                                </div>
                                <div class="flex">
                                    <ArrowCard
                                        title="Diseño"
                                        position='diseno'
                                        image={diseno}
                                    ></ArrowCard>
                                    <ArrowCard
                                        title="Emprendimiento"
                                        position='emprendimiento'
                                        image={emprendimiento}
                                    ></ArrowCard>
                                </div>
                            </div>


                        </div>
                    </div>
                    <section class="container flex-row text-left mx-auto ">
                        <h3 class="text-3xl font-sans font-bold">Cursos Disponibles</h3>
                        <div class="container mx-auto flex-row justify-center w-screen ">

                            <div class="flex  mb-4 px-10">
                                <div class="w-1/2  m-2 ">
                                    <CourseCard
                                        imagen={course_intro}
                                        title='Introducción a la programación'
                                        encargado='Eduardo Linares'
                                        descripcion='Aprenderás conceptos básicos de programación y herramientas para entrar al mundo del desarrollo web y móvil. Este curso es requisito para personas con conocimiento básico y sin conocimiento en el área. '
                                        horas='10 horas'
                                    />

                                </div>
                                <div class="w-1/2 m-2 ">
                                    <CourseCard
                                        imagen={course_estrategia}
                                        title='Introducción a la estrategia digital'
                                        encargado='Fabiola León'
                                        descripcion='Aprende conceptos básicos, los medios digitales de tendencia, lo básico de un plan de pauta, buenas prácticas, hacks y herramientas para iniciar u optimizar tu estrategia digital.'
                                        horas='4 horas'
                                    />

                                </div>
                            </div>
                            <div class="flex mb-4 px-10">
                                <div class="w-1/2 m-2  mt-0">
                                    <CourseCard
                                        imagen={course_emprendimiento}
                                        title='Introducción al emprendimiento'
                                        encargado='Carlos Moreno'
                                        descripcion='Descubre el camino para emprender en El Salvador desde construir tu modelo de negocio, herramientas, aliados y opciones de fondeo hasta cómo preparar un Pitch Deck. '
                                        horas='4 horas'
                                    />

                                </div>
                                <div class="w-1/2 m-2  mt-0">
                                    <CourseCard
                                        imagen={course_design}
                                        title='Introducción al UX & UI'
                                        encargado='Luis Pinto'
                                        descripcion='Conocerás la diferencia entre la Experiencia de Usuario y la Interfaz de Usuario, entenderas el significado de cada uno, y aprenderas procesos y tips que te ayudaran a lograr un buen producto digital.'
                                        horas='4 horas'
                                    />

                                </div>
                            </div>

                        </div>

                    </section>
                    <section className='container mx-auto w-full' >
                        <div class="flex mb-4 px-10">
                            <div class="w-5/12 ">
                                <img src={open_house} className="h-64" alt="Girls in Tech"></img>
                            </div>
                            <div class="w-7/12 h-12 text-left">
                                <h3 className="font-bold text-4xl">Noticias</h3>
                                <h5 className="font-semibold text-4xl">Girls In Tech - BOOTCAMP</h5>
                                <p>9:30 a.m. | 8 de marzo de 2019</p>
                                <p>¡Reunimos a talento salvadoreños en la industria tecnológica para celebrar el Día Internacional de la Mujer! Inspiramos a más de cien niñas, jóvenes y mujeres a que conozcan más sobre lo que pueden llegar a ser siendo parte de la comunidad #GirlsInTech.</p>
                                <div className="flex justify-end">

                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Ver más
              </button>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

            </div>
        );
    }
}

