import React from 'react'; //for creating components
import { render } from "react-dom"; //for component render

//Imported Components
import { Header } from "./components/Header"
import { Home } from "./components/Home"

//App Component
class App extends React.Component {
    
    //For component Rendering
    render(){

        //Returns JSX (Javascript syntact extension)
        return(
            //Only one element
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/> 
                    </div>
                </div>          
            </div>
        );
    }
}

//Render App Component on a element with app ID (<div id="app"></div>)
render(<App/>, window.document.getElementById("app"));
