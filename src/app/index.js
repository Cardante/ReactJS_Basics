import React from 'react'; //for creating components
import { render } from "react-dom"; //for component render
import { STATUS_CODES } from 'http';

//Imported Components
import { Header } from "./components/Header"
import { Home } from "./components/Home"

//App Component
class App extends React.Component {
    //Constructor to set state
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onGreet(){
        alert("Hello Stranger!");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        })
    }
    
    //For component Rendering
    render(){

        let info = {
            email: "diogocardante@gmail.com",
            hobbies: ["sports", "games", "books"]
        };

        //Returns JSX (Javascript syntact extension)
        return(
            //Only one element 
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {/*Props->Properties that become available in the Home component*/}
                        <Home 
                        username="Diogo" 
                        initialAge={21} 
                        info={info} 
                        greet={this.onGreet} 
                        changeLink={this.onChangeLinkName.bind(this)} 
                        initialLinkName={this.state.homeLink} 
                        >
                            <p>This is a Paragraph</p>
                        </Home> 
                    </div>
                </div>          
            </div>
        );
    }
}

//Render App Component on a element with app ID (<div id="app"></div>)
render(<App/>, window.document.getElementById("app"));