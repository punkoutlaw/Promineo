import React from 'react'

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

/* 

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

export default Counter