import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/coursedetail.css'
import bitlab from '../assets/logo-bitlab.png'
import howto from '../assets/courses_img/details/howtolearn.png';
import bitsquare from '../assets/courses_img/details/rectangle.png'
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
                <section>
                    
                </section>

            </div>
        )
    }
}
