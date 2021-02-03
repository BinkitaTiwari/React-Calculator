import React, { Component } from 'react';
import './App.css';
import ResultComponent from './Components/ResultComponent';
import KeyPad from "./Components/keyPad";
//import DarkModeToggle from "react-dark-mode-toggle";
import Button1 from "./Components/Button";
 

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: " ",
            isShowing:false
        }
    }

    onClick = button => {
        //window.alert(button)

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else if(button==="root"){
            this.setState({result:(Math.sqrt(this.state.result))+ ""})
        }
        else if(button==="square"){
            this.setState({result:(Math.pow(this.state.result,2))+ ""})
        }
        else if(button==="flap"){
            this.setState({result:this.state.result *(-1)+ ""})
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = '';
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    handleClick=()=>{
        console.log("button clicked");
        this.setState({isShowing:!this.state.isShowing});
        
        
    }
    
    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
                <div className="container">
                {this.state.isShowing && <Button1 onClick={this.onClick}/>}<br/>
                <button onClick={this.handleClick}>Scientific Mode</button>
                </div>
                
 
            </div>
        );
    }
}

export default App;