import { Component } from "react";
import ErrorMessage from '../components/ErrorMessage';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error){
        console.log(error);
        this.setState({ hasError: true });
    }

    render() {
        if(this.state.hasError) {
            return (
                <ErrorMessage title='Oops!' message='Something went wrong. Please try again later.' />
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;