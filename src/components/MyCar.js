import { Component } from 'react'
import Car from './Car';

class MyCar extends Component {
    render() {
        // console.log(this);

        return (
            <div className='myCar'>
                {/* <h1>Car Catalog</h1> */}
                <h1>{this.props.title}</h1>
                <Car color="Red">Ford</Car>
                <Car color="Black">Mercedes</Car>
                {/* <Car color="Green">Peugeot</Car> */}
                <Car >Peugeot</Car>
            </div>
        )
    }
}

export default MyCar;
