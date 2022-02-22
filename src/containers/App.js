import logo from '../logo.svg';
import './App.css';
import {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import {robots} from "../robots";


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})})
        //this.setState({robots: robots})
    }

    onSearchChange = (event) => {

        this.setState({searchfield: event.target.value})
        //console.log(filteredRobots);
    }

    render() {
        console.log('render');

        const {robots, searchfied} = this.state;

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return !robots.length ? <h1>Loading</h1> : (

                <div className='App tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
        )
    }
}

export default App;
