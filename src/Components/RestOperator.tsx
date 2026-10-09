import React from "react";

//Rest means the remaining elements in the array. It is used to collect the remaining elements into a new array.
function RestOperator() {
    const numbers = [1, 2, 3, 4, 5];    
    const [first, second, ...rest] = numbers;

    return (
        <div>
            <h2>Rest Operator Example</h2>
            <p>First: {first}</p>
            <p>Second: {second}</p>
            <p>Rest: {rest.join(", ")}</p>
        </div>
    );
}

export default RestOperator;