import { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(){
        super()
        this.state = {
            title: "Clique Aqui!"
        }
    }

    render() {
        return(
            <section className='panel' onClick={
                () => {
                    this.setState(
                        {title: "Parabéns, você não ganhou nada!"}
                        )
                      }
                    }>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel