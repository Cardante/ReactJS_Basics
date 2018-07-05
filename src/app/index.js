import React from 'react'; //for creating components
import { render } from "react-dom"; //for component render
//import { Router, Route, browserHistory } from "react-router"; //for routing
 
//Imported Components
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { User } from './components/User'
import { Root } from "./components/Root"
import { Homme } from './components/Homme'

//App Component
class App extends React.Component {
    //Constructor to set state
    constructor(){
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
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

        let homeComponent = "";

        if(this.state.homeMounted) {
            homeComponent = (
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
            );
        }

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
                        { homeComponent }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button class="btn btn-danger" onClick={this.onChangeHomeMounted.bind(this)}>(Un)Mount Home Component</button>
                    </div>
                </div>           
            </div>
            
            /*<Router history={browserHistory}>
                <Route path={"user"} component={User}/>
                <Route path={"home"} component={Home}/>
            </Router>*/
        );
    }
}

//Render App Component on a element with app ID (<div id="app"></div>)
render(<App/>, window.document.getElementById("app"));