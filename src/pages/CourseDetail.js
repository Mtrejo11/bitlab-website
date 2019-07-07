import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/coursepagestyles.css'
import bitlab from '../assets/logo-bitlab.png'

export default class CourseDetail extends React.Component {


    render() {

        return (
            <div className="">
                <NavBar logo={bitlab} main={false} />
                
            </div>
        )
    }
}