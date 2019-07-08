import React from 'react';

import NavBar from '../components/NavBar';
import '../styles/coursedetail.css'
import bitlab from '../assets/logo-bitlab.png'
import howto from '../assets/courses_img/details/howtolearn.png';
import bitsquare from '../assets/courses_img/details/rectangle.png';
import instructor from '../assets/courses_img/details/img-trainer.jpg'
import MapContainer from '../components/Map';

import Collapsible from 'react-collapsible';
var beca = "";


export default class CourseDetail extends React.Component {

    componentWillMount() {
        console.log(this.props.location.state.item.titulo)
        if (this.props.location.state.item.tipo) {
            beca = "Beca Disponible";
        }
        else {
            beca = "Gratis";
        }
    }


    render() {

        return (
            <div className="">
                <NavBar logo={bitlab} main={true} />
                <section className="h-screen bg-bitlab text-white ">
                    <div class="flex h-full items-center mb-4">
                        <div class="w-1/2  px-24">
                            <p className="text-4xl font-semibold">{this.props.location.state.item.titulo}</p>
                            <div class="flex mb-4">
                                <div class="w-1/2 ">
                                    <p>{this.props.location.state.item.tiempo}</p>
                                </div>
                                <div class="w-1/2">
                                    {beca}
                                </div>
                            </div>
                            <p>{this.props.location.state.item.descripcion}</p>
                        </div>
                        <div class="flex w-1/2  h-full items-center">
                            <img src={this.props.location.state.item.imgdetalle} alt="vacio" ></img>
                        </div>
                    </div>
                </section>
                <section className="h-screen bg-gray-200 ">
                    <div class="flex h-full items-center mb-4 ">
                        <div class="w-1/2  px-24">
                            <p className="text-4xl font-semibold">{this.props.location.state.item.titulo}</p>

                            <p>{this.props.location.state.item.descripcion}</p>
                        </div>
                        <div class="flex w-1/2  h-full items-center">
                            <img src={howto} alt="vacio" ></img>
                        </div>
                    </div>
                </section>
                <section className="h-auto text-center py-20 pb-48">
                    <h2 className="font-bold text-4xl mb-20">Programa del curso</h2>
                    <div className="flex flex-wrap ml-12 ">
                        {this.props.location.state.item.programa.map(item => (
                            <div className="flex justify-center w-full text-left ">
                                <div className="flex w-128  font-bitlab text-xl px-4 mb-10 cursor-pointer">
                                    <div>
                                        <img src={bitsquare} className="mr-4 mt-3" alt="" />
                                    </div>
                                    <Collapsible trigger={item.week}>
                                        {item.temas.map(element => (
                                            <p className="mb-2 font-semibold text-base">{element}</p>

                                        ))}

                                    </Collapsible>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
                <section className="h-full bg-bitlab-2 mb-10">
                    <div class="flex">
                        <div class="w-1/2  h-full">
                            <img src={instructor} alt=""></img>
                        </div>
                        <div className="flex w-1/2 items-center  h-auto  text-white">
                            <div className="px-20">
                                <h1 className="text-4xl font-bold mb-6">Conoce a tu entrenador</h1>
                                <p className="text-lg font-semibold mb-6">{this.props.location.state.item.instructor}</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate accusantium vel ut obcaecati cupiditate facilis, tenetur provident consequatur fugit, numquam possimus temporibus perferendis nisi dignissimos voluptatum mollitia ab? Odit, pariatur?</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="h-full py-20 px-20 mb-32">
                    <h3 className="text-4xl font-bold mb-6">Formas de pago</h3>
                    <div className="flex h-full justify-center bg-gray-200 py-6">
                        <p className="text-2xl font-semibold">{beca}</p>
                    </div>
                </section>
                <section className="h-full w-screen  pl-20  mb-32">
                    <div class="flex items-center justify-between mb-4">
                        <div class="px-10">
                            <h3 className="text-4xl font-bold">Nuestra ubicación</h3>
                            <p className="text-lg">9 Calle Poniente, 99 Avenida Norte #548, Colonia Escalón, El Salvador</p>
                        </div>
                        <div class="bg-gray-500 ">
                            <MapContainer/>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}
