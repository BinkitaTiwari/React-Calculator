import React, {Component} from 'react';

class Button1 extends Component {


    render() {
        return(
            <div>
                <button name="root"  onClick={e => this.props.onClick(e.target.name)}>&radic;</button>
                <button name="square"  onClick={e => this.props.onClick(e.target.name)}>x2</button>
                <button name="flap"   onClick={e => this.props.onClick(e.target.name)}>flap</button>

            </div>
        )
    
        
    }
}

export default Button1;