import React from "react";

import Counter from "./counter";
import exp from "constants";

const CounterContainer: React.FC = () => {
    return (
        <div className="counter-container">
            <Counter />
          
        </div>
    );
}

export default CounterContainer;