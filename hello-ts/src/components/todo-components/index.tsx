import React from "react";
import Todoitem from "./todo-item";
import './styles.css';

interface Todoitem {
     id: number; title: string ;
}

interface TodoconainerProps {
    items: Todoitem[];
}
const Todoconainer: React.FC<TodoconainerProps> = (props) => {

    return (
        <div className="todo-container">
            <ol>
                { props.items.map((item) => (<Todoitem title={item.title}/>)) }
            
            </ol>
                        
               </div>
    );
}

export default Todoconainer;
