import React, {memo, useState} from 'react';
import CounterButton from "./CounterButton";

const Header = () => {


    const [color, setColor] = useState(Math.floor(Math.random() * 3));

    console.log('Header');
    /*shouldComponentUpdate(nextProps, nextState){
            return false;
    }*/

    //shouldComponentUpdate peut être remplacer par memo


    return (
        <>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={color} />
        </>
    );

};

export default memo (Header);