import React from "react";
import Counter from "./counter";

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

export default Container