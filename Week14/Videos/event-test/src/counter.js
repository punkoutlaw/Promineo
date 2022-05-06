import React from 'react'

/*

We will now learn how to "raise the state" which will entail removing the state from our previous code. 
It will now be put into our parent component which will maintain the state instead. See below for detail:

*/

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

   // You would remove any code that references the "state" and replace it with "props".

    handleClick() {
        this.props.onClick(this.props.name);

    }

    // We need to replace "state with "props" in the code below as well.

    render() {
        return (
            <button className="btn btn-primary" onClick={this.handleClick}>
                {this.props.name} {this.props.count}
            </button>
        );
    }
}

export default Counter

/* 

In the code below, we set the state in the component. See below for detail.

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

// The following method uses "bind" instead of using an anonymous function \\

    handleClick() {
        this.setState(state => ({count: state.count +1}));

    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.handleClick}>
                {this.state.name} {this.state.count}
            </button>
        );
    }
}

// The follwing method uses an anonymouis function \\

    render() {
        return (
            <button className="btn btn-primary" onClick={() => this.setState(state => ({count: state.count +1}))}>
                Counter {this.state.count}
            </button>
        );
    }
}

*/