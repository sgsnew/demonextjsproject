import React  from "react";
import './style.css';

interface TodoitemProps{

   title:string;
}
const Todoitem: React.FC<TodoitemProps> = (props) => {
    console.log('Todoitem props', props);
    return (
        
        <li>{props.title}</li>
    );
}

export default Todoitem;