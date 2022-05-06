import React from "react";
import Counter from "./counter";

// We will now be adding the "state" to the container component so it slows down into the children components.

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        };

// To bind your method, you need to add the bind code to your class.
// Example: this.myMethod = this.myMethod.bind(this);
        
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;

// Here we are adding an if statement to keep track of which button has the most clicks:

                if(state.counts[name] > state.highestCount) {
                    state.highestCount = state.counts[name];
                    state.highestCountName = name;
                }
            return state;
        });
    }

/*

Additional properties need to be added to our buttons to keep track on the counter:
Example: count={this.state.counts.one} onClick={this.countClicks}

*/

    render() {
        return(

// We are adding a header to the button div to display which button was clicked the most:
// Example: <h2>{this.state.highestCountName}</h2>

            <div>
                <h2>{this.state.highestCountName}</h2>
                <Counter name ="one" count={this.state.counts.one} onClick={this.countClicks}/>
                <Counter name ="two" count={this.state.counts.two} onClick={this.countClicks}/>
                <Counter name ="three" count={this.state.counts.three} onClick={this.countClicks}/>
            </div>  
        );
    }
}

export default Container

/*

Im this example code, we created our component WITHOUT adding the "state".

class Container extends React.Component {
    render() {
        return(
            <div>
                <Counter name ="One" />
                <Counter name ="Two" />
                <Counter name ="Three" />
            </div>  
        );
    }
}

*/