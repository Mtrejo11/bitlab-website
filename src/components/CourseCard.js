import React from 'react';
import '../styles/coursecardstyle.css'


export default class CourseCard extends React.Component {




    render() {
        return (
            <div class=" flex  rounded overflow-hidden cursor-pointer hover:shadow-2xl zoom">

                <div className="w-2/5 h-full overflow-hidden" >
                    <img src={this.props.imagen} className="w-full "  alt={this.props.title} />

                </div>


                <div class="relative w-3/5 flex-row rounded-r border border-l-0 border-gray-400 h-auto">
                    <div className="flex-column  px-6 py-6">
                        <h2 class="font-semibold text-2xl">{this.props.title}</h2>
                        <p className="font-semibold ">{this.props.encargado}</p>
                        <p class="text-base">{this.props.descripcion}</p>
                    </div>
                    <div className="w-full absolute flex justify-between bottom-0 flex border-solid border-t items-center h-16 border-gray-300 px-6">
                        <p className="font-bold">{this.props.horas}</p>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-1 px-4 border-2 border-blue-500 hover:border-transparent rounded">
                            Ver más
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}