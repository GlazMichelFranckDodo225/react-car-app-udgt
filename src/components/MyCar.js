import { Component } from 'react'
import Car from './Car';

class MyCar extends Component {
    render() {
        return (
            <div className='myCar'>
                <h1>Hello from "MyCar" Class Component</h1>
                <Car color="Red">Ford</Car>
                <Car color="Black">Mercedes</Car>
                {/* <Car color="Green">Peugeot</Car> */}
                <Car >Peugeot</Car>
            </div>
        )
    }
}

export default MyCar;
