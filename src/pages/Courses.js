import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/coursepagestyles.css'
import logo from '../assets/Group.svg';
import bitlab from '../assets/logo-bitlab.png'
import { AVAILABLE_COURSES } from '../assets/json-files/available_courses'
import CourseCard from '../components/CourseCard'
import CourseDetail from '../pages/CourseDetail'

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


var pay = false;
var free = false;
var item_selected = {};
export default class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            tipo1: [],
            tipo2: [],
            tipo3: [],
            tipo4: [],
            selected: AVAILABLE_COURSES,
            shown: AVAILABLE_COURSES,
            pagados: [],
            gratis: [],
            redirect: false,
        };
    }
    componentWillMount() {

        AVAILABLE_COURSES.forEach(element => {
            switch (element.categoria) {
                case '1': this.state.tipo1.push(element);
                    break;
                case '2': this.state.tipo2.push(element);
                    break;
                case '3': this.state.tipo3.push(element);
                    break;
                case '4': this.state.tipo4.push(element);
                    break;
                default:
                    break;
            }

        });
        console.log(this.state.tipo1);

    }

    changeDevelop = () => {
        this.setState({ selected: this.state.tipo1, shown: this.state.tipo1 });
    }

    changeEstrategy = () => {
        this.setState({ selected: this.state.tipo2, shown: this.state.tipo2 });
    }

    changeDesign = () => {
        this.setState({ selected: this.state.tipo3, shown: this.state.tipo3 });
    }

    changeEntrepe = () => {
        this.setState({ selected: this.state.tipo4, shown: this.state.tipo4 });

    }

    filterPay = () => {
        this.setState({ pagados: [] });
        pay = !pay;
        this.checkFilter();

    }

    filterFree = () => {
        this.setState({ gratis: [] });
        free = !free;
        this.checkFilter();

    }

    checkFilter = () => {
        if (free === pay) {
            this.setState({ shown: this.state.selected });
        }
        else if (pay) {
            this.state.selected.forEach(element => {
                if (element.tipo) {
                    this.state.pagados.push(element)
                }
            });
            this.setState({ shown: this.state.pagados });
        }
        else if (free) {
            this.state.selected.forEach(element => {
                if (!element.tipo) {
                    this.state.gratis.push(element)
                }
            });
            this.setState({ shown: this.state.gratis });
        }
        else {
            this.setState({ shown: this.state.selected });
        }
    }


    setRedirect = (item) => {
        this.setState({
            redirect: true,
        })
        item_selected = item;
    }

    renderRedirect = () => {

        if (this.state.redirect) {
            return <Redirect push to={{
                pathname: '/courses/details',
                state: { item: item_selected }
            }} />
        }
    }

    render() {

        return (
            <div className="">
                <NavBar logo={bitlab} main={false} />
                <div className="pt-16">
                    <div className=" text-sm flex justify-around bg-gray-200 px-56 py-8">
                        <h4 className="cursor-pointer" onClick={this.changeDevelop}>Desarrollo de Software</h4>
                        <h4 className="cursor-pointer" onClick={this.changeEstrategy}>Estrategia Digital</h4>
                        <h4 className="cursor-pointer" onClick={this.changeDesign}>Diseño</h4>
                        <h4 className="cursor-pointer" onClick={this.changeEntrepe}>Emprendimiento</h4>
                    </div>
                </div>
                <section className="container flex-row w-screen mx-auto ">
                    <div className="w-full flex  items-center justify-between py-12 pl-16 pr-20">
                        <div>
                            <h1 className="font-bold text-4xl">Cursos Disponibles</h1>
                            <p>Te presentamos los cursos completos que BITLAB tiene para ti, encuentra el que <br></br> deseas realizar e inscríbete y aprende de la mano de profesionales en el área.</p>
                        </div>
                        <div>
                            <label> <input class="mr-2 leading-tight" type="checkbox" label="check" onClick={this.filterFree}></input>Gratis</label>
                            <label> <input class="mr-2 leading-tight" type="checkbox" label="check" onClick={this.filterPay}></input>Pagados</label>

                        </div>
                    </div>
                    <div className="w-full flex mb-10">
                        <Router>
                            {this.renderRedirect()}


                            <div className="flex flex-wrap ml-12 ">
                                {this.state.shown.map(item => (
                                    <div className="m-2" >
                                        <a href="" onClick={() => this.setRedirect(item)}>
                                            <CourseCard

                                                imagen={item.imagen}
                                                title={item.titulo}
                                                encargado={item.instructor}
                                                descripcion={item.descripcion}
                                                horas={item.tiempo}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <Route path="/courses/details" exact component={CourseDetail} />
                        </Router>
                    </div>
                </section>
            </div>
        )
    }
}