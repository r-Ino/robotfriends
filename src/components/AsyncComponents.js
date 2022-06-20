import React, {Component, useEffect, useState} from 'react';


function AsyncComponents(props) {

    const [state, setState] = useState({component: null});

    useEffect(() => {

        const funcAElement = async () => {
            const component = await props.importComponent()
            setState({component: component})
        }

        funcAElement()

    }, [])


    return Component ? <Component {...props} /> : null;
}

export default AsyncComponents;