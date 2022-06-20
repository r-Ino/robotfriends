import React, {useState, memo} from 'react';

const CounterButton = (props, nextProps) => {

    const [count, setCount] = useState(0);
    const [colori, setColori] = useState('bg-green');

    const colors = ['bg-blue', 'bg-green', 'bg-red']


    console.log('Header 32');

    console.log(props);
    console.log(nextProps);

    /*shouldComponentUpdate(nextProps, nextState){
            return false;
    }*/

    //shouldComponentUpdate peut être remplacer par memo

    const updateCount = () => {
        return setCount(count + 1)
    }

    const updateColor = () => {

        let colA = colors[props.color]
        console.log(colA);
        return setColori(colA)
    }


    return (
        <>
            <button className={colori + ' f6 link ph3 pv2 mb2 dib white'} onClick={() => { updateCount(); updateColor();}}>Count : {count}</button>
            <h1 className='f1'>RoboFriends</h1>
        </>
    );

};

export default memo (CounterButton);