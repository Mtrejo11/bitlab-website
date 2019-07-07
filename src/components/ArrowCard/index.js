import React from 'react';
import arrow from '../../assets/home_page/arrow.png'
import './style.css'
import softarewhite from '../../assets/home_page/software-white.png'
import emprendimientowhite from '../../assets/home_page/home/emprendimientob.svg'
import disenowhite from '../../assets/home_page/home/diseñob.svg'
import estrategiawhite from '../../assets/home_page/home/estrategiab.svg'



export default class ArrowCard extends React.Component {
  constructor(props) {
    super()
    this.title = React.createRef();
    this.state = {
      imageUrl: props.image,
    }

  }

  mouseOver = () => {
    //alert("on mouse");
    //alert(this.props.position)
    switch (this.props.position) {
      case 'software':
        this.setState({ imageUrl: softarewhite })
        break;
      case 'emprendimiento':
        this.setState({ imageUrl: emprendimientowhite })
        break;
      case 'diseno':
        this.setState({ imageUrl: disenowhite })
        break;
      case 'estrategia':
        this.setState({ imageUrl: estrategiawhite })
        break;
      default:
        break;
    }
  }

  mouseOut = () => {
    this.setState({ imageUrl: this.props.image });
  }



  render() {
    return (
      <div class="w-1/2 bg-gray-100 my-2 mx-2 interest-card cursor-pointer rounded" onMouseOver={() => this.mouseOver()}
        onMouseOut={() => this.mouseOut()}>
        <div class="w-full interest-card div-1 p-5 h-full hover:bg-blue-500" >
          <img src={this.state.imageUrl} width="44px" alt="" ></img>
          <h4 ref={this.title} class="ml-2">{this.props.title}</h4>
        </div>
        <div class=" flex items-center arrow-next  text-center p-2 h-full rounded-r">
          <img src={arrow} alt="" width='11px' height='11px'></img>
        </div>
      </div>
    )
  }
}