import React, {Component} from 'react';

class Button1 extends Component {


    render() {
        return(
            <div>
                <button name="square root"  value ="&radic;"onClick={e => this.props.onClick(e.target.name)}>&radic;</button>
                <button name="x2" onClick={e => this.props.onClick(e.target.name)}>x2</button>
                <button name="--" onClick={e => this.props.onClick(e.target.name)}>--</button>
                
            </div>
        )
    
        
    }
}

export default Button1;