import React from "react";
/* Component to handle errors for componets and display error message*/
class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {error: null};
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error});
            console.log(error, errorInfo);
    }
    render() {
        if (this.state.error) {
            return (
                <div>
                    <h3>Something Went wrong</h3>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary;