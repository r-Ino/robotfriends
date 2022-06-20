import React, {Component, useState} from 'react';

class ErrorBoundry extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>OOOps. That is not good</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundry;


/*function ErrorBoundry(props) {

    const [hasError, setHasError] = useState(false)

    componentDidCatch(error, errorInfo) {
        setHasError(true)
    }

    useEffect(() => {
        setHasError(true);
    }, [error]);

    return (
        <>
        {hasError
            ? <h1>OOOps. That is not good</h1>
            : props.children
        }
        </>
    );
}

export default ErrorBoundry;*/

