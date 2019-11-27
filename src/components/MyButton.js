import React from 'react';

class MyButton extends React.Component{

    
    debugar = () => {
        console.log('Botão Clicado!');
        this.savingTheWorld();
    }

    savingTheWorld = () => {
        let header = document.querySelector('.App-header');
        header.style = "background: #282c34;"
    }
    
    render() {
        return(
            <button class="MyButton" onClick={this.debugar}>Save the World</button>

        );
    }
}

export default MyButton;
