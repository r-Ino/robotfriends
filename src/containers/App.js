//import logo from '../logo.svg';
import './App.css';
import React, {useState, useEffect, lazy, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import ErrorBoundry from "../components/ErrorBoundry";

import {requestRobots, setSearchField} from "../actions";

import Page1 from "../components/Page1";
import Page2  from "../components/Page2";
import Page3  from "../components/Page3";
import AsyncComponents from "../components/AsyncComponents";
const Page2Lazy = lazy(() => import('../components/Page2'))
const Page3Lazy = lazy(() => import('../components/Page3'))
const PageLazy = lazy(() => import('../components/PageLazy'))
//import {robots} from "../robots";
//import {Page} from "../stories/Page";
//import {Button} from "../stories/Button";
//import {Header} from "../stories/Header";


function App(props) {

    /*constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor')
    }*/

    //useState est similaire au constructor dans le hook

    //const [robots, setRobots] = useState([])
    //const [searchField, setSearchfield] = useState('')
    const [count, setCount] = useState(0)
    //const storeState = useSelector(state => state)
    const searchField = useSelector(state => state.searchRobots.searchField)
    const robots = useSelector(state => state.requestRobots.robots)
    const isPending = useSelector(state => state.requestRobots.pending)
    const error = useSelector(state => state.requestRobots.error)
    const dispatch = useDispatch()
    const [route, setRoute] = useState('page1')

    /*componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})})
        //this.setState({robots: robots})
    }*/

    //useEffect est similaire au componentDidMount, componentDidUpdate dans le hook

    useEffect(() => {

        dispatch(requestRobots);
    }, [dispatch])


    useEffect(() => {
        // Mettre à jour le titre du document en utilisant l'API du navigateur
        console.log(count);
    }, [count]);// only run if count changes




    // Dispatch permet de modifier une valeur dans Redux
    const onSearchChange = (event) => {

        // setSearchfield(event.target.value)
        dispatch(setSearchField(event.target.value));
    }


    let pageChange;

    const onRouteChange = (route) => {
        setRoute(route);
    }

    // Mettre à jour le titre du document en utilisant l'API du navigateur
    if (route === 'page1') {
        //setPageChange( <Page1 />)
        pageChange = <Page1 onRouteChange={onRouteChange} />;
        console.log('route1');

    } else if(route === 'page2'){

        //const AsyncPage2 = AsyncComponents(() => import('../components/Page2'))
       // pageChange = <AsyncPage2 onRouteChange={onRouteChange}/>

        pageChange = <Suspense fallback={<div>Loading...</div>}>
            <Page2Lazy onRouteChange={onRouteChange} />
        </Suspense>;
        //pageChange = <Page2 onRouteChange={onRouteChange} />;
        console.log('route2');

    } else if(route === 'page3'){
        pageChange = <Suspense fallback={<div>Loading...</div>}>
            <Page3Lazy onRouteChange={onRouteChange} />
        </Suspense>;
        //pageChange = <Page3 onRouteChange={onRouteChange} />;
        console.log('route3');
    }

    //console.log('render');


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })


    return isPending ? <h1>Loading</h1> : (

        <div className='App tc'>
            <header>

                <Header />
                <br/>
                <button className='dib f6 link dim ba bw1 ph3 pv2 mb2 dib dark-blue'
                        onClick={() => setCount(count + 1)}>Click Me!
                </button>
                <SearchBox searchChange={onSearchChange}/>
                <nav>
                        {pageChange}
                </nav>
            </header>


            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>


            <Suspense fallback={<div>Loading...</div>}>
                <PageLazy />
            </Suspense>

        </div>
    )

    /*render() {
        // Part 1 - No code splitting
        if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange} />
        } else if (this.state.route === 'page2') {
            return <Page2 onRouteChange={this.onRouteChange} />
        } else {
            return <Page3 onRouteChange={this.onRouteChange} />
        }
    }*/


}

// connect : 2 paramaters

export default (App);
