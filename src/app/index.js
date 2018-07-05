import React from 'react'; //for creating components
import { render } from "react-dom"; //for component render

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
                        <h1>Testing</h1> 
                    </div>
                </div>       
            </div>
        );
    }
}

//Render App Component on a element with app ID (<div id="app"></div>)
render(<App/>, window.document.getElementById("app"));
