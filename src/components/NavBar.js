import React from 'react';
import '../App.css'
import full_color from '../assets/logo-fullcolor.svg'

import { BrowserRouter as Router, Redirect } from "react-router-dom";


export default class NavBar extends React.Component {

    constructor(props) {
        super()
        this.title = React.createRef();
        this.state = {
            logo: props.logo,
            propiedadades: "",
            mainPage:props.main,
            redirect: false,
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        if (this.state.mainPage) {
            this.setState({
                logo: this.props.logo,
                propiedadades: "flex bg-transparent text-white fixed items-center navigation justify-between flex-wrap px-24 w-full z-40",
            })
        }
        else {
            this.setState({
                logo: full_color,
                propiedadades: "flex bg-white fixed items-center navigation justify-between flex-wrap text-black px-24 w-full z-40",
            })
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }



    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop / 3 - 60);
        console.log(itemTranslate);
        var y = window.scrollY;
        console.log(y);

        if (y <= 120 && this.state.mainPage) {
            this.setState({
                logo: this.props.logo,
                propiedadades: "flex bg-transparent text-white fixed items-center navigation justify-between flex-wrap px-24 w-full z-40",
            })
        }
        else {
            this.setState({
                logo: full_color,
                propiedadades: "flex bg-white fixed items-center navigation justify-between flex-wrap text-black px-24 w-full z-40",
            })
        }

    }




    setRedirect = () => {
        this.setState({
            mainPage: false,
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({ mainPage: false })
            return <Redirect push to='/courses' />
        }
    }
    render() {
        return (
            <Router>
                {this.renderRedirect()}
                <nav className={this.state.propiedadades}>
                    <div className=" flex-shrink-0 mr-8">
                        <img src={this.state.logo} className="w-32" alt="" />
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400  hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="w-full block items-end lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="" onClick={this.setRedirect} className="block mt-4 Menu-item lg:inline-block lg:mt-0  text-base   py-6 px-6 ">Cursos</a>
                            <a href="#responsive-header" onClick={this.setRedirect} className="block mt-4 Menu-item lg:inline-block lg:mt-0  text-base    py-6 px-8 ">Becas</a>
                            <a href="#responsive-header" className="block mt-4 Menu-item lg:inline-block lg:mt-0  text-base font-semibold   py-6 px-6 "> Eventos</a>
                            <a href="#responsive-header" className="block mt-4 Menu-item lg:inline-block lg:mt-0  text-base font-semibold  py-6 px-6 ">Aliados</a>
                        </div>

                    </div>

                </nav>

            </Router>
        );
    }
}