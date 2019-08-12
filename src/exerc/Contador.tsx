import React from 'react';

interface IProps{
    defaultNumberContador: number;
}

interface IState{
    number: number;
}

class Contador extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);

        this.state = {
            number: props.defaultNumberContador,
        }
    }

    numberSoma = () => {
        let soma1 = this.state.number + 1 ;
        this.setState ({number : soma1})

    }
    
    numberSub = () => {
        let sub1 = this.state.number - 1 ;
        this.setState ({number : sub1})

    }

    render(){
       return (
            <div>
            <button onClick={this.numberSoma}>+</button>
            <div>Contador: {this.state.number} </div>
            <button onClick={this.numberSub}>-</button>
            </div>
       ) 
    }
    
    
}

export default Contador;
