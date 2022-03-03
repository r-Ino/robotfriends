import logo from '../logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import {robots} from "../robots";
import {Button} from "../stories/Button";
import {Header} from "../stories/Header";


function App() {

    /*constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor')
    }*/

    //useState est similaire au constructor dans le hook

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    /*componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})})
        //this.setState({robots: robots})
    }*/

    //useEffect est similaire au componentDidMount, componentDidUpdate dans le hook

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})

        console.log(count)
    }, [count]) // only run if count changes

    const onSearchChange = (event) => {

        setSearchfield(event.target.value)
        //console.log(filteredRobots);
    }


    console.log('render');

    //const {robots, searchfied} = this.state;

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ? <h1>Loading</h1> : (


            <div className='App tc'>

                <h1 className='f1'>RoboFriends</h1>
                <br/>
                <button className='dib' onClick={()=>setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
    )

}

export default App;
