import React from "react";
import { log } from "util";

import PropTypes from 'prop-types';

export class Home extends React.Component {

    //To save the age prop into this component, the contructor already has the props 
    constructor(props){
        super();

        //State of the component -> needs to change to re-render
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };

        //Change status after 3 seconds -> changes state
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    //Function to increase the age prop
    onMakeOlder(){
        //Function to set state -> IMPORTANT! so it re-renders, only specify the changes that you want to make
        this.setState({ 
            age: this.state.age + 1 //only age gets updated
        });
    }

    //Function to change the link name
    onChangeLink(){
        this.props.changeLink(this.state.homeLink); //Changes the name of the link by calling the function passed in the props
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value //The value of the input field
        });
    }

    //before render
    componentWillMount(){
        console.log("Component will Mount");
    }

    //after render
    componentDidMount(){
        console.log("Component Did Mount");
    }

    //When component receives new props
    componentWillReceiveProps(nextProps){
        console.log("Component Will Receive New Props: ", nextProps )
    }

    //before rendering, after receiving new props or state
    shouldComponentUpdate(nextProps, nextState){
        console.log("Component Update: ", nextProps, nextState);
        //if the next state has the following value
        /*if(nextState.status === 1) {
            return false;
        } */
        //return true;
    }

    //before rendering, after receiving new props or state
    componentWillUpdate(newProps, nextState){
        console.log("Component Will Update: ", nextProps, nextState);
    }

    //after components updates are flushed to dom
    componentDidUpdate(prevProps, prevState){
        console.log("Component Did Update: ", prevProps, prevState);
    }

    //before removing component from dom
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        //Object of Properties
        console.log(this.props);
        return (
            <div>
                <h1>User Home</h1>
                <h2>Welcome {this.props.username}</h2>
                <h3>Info </h3> 
                <p><strong>Email:</strong> {this.props.info.email} </p>
                <p><strong>Age:</strong> {this.state.age} </p>
                <p><strong>Status:</strong> {this.state.status} </p>
                <p><strong>Hobbies:</strong></p>
                <ul>
                    {/*Interating over an array*/}
                    {this.props.info.hobbies.map((hobby, i) => <li key={i}>{i} - {hobby}</li>)}
                </ul>

                {/*Whatever is passed between the Home tags*/}
                {this.props.children}

                <hr/>
                {/*The bind method allows to bind functions to the component, so it updates the component*/}
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)} >Make Me Older</button>
                <button className="btn btn-warning" onClick={this.props.greet}>Greet</button>
                
                {/*Changing Header Link Name*/}
                <p>New Header</p>
                {/*When typing, calls the onChange*/}
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
                <button className="btn btn-danger" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>

            </div>
        );
    }
}

//Defining Properties Types, enforce that correct type into props, so it cannot be change to any other type
Home.propTypes = {
    username: PropTypes.string,
    age: PropTypes.number,
    info: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
}