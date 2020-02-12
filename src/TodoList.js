import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

const TodoList = props => {
    return (
      <Paper elevation={1}>
        <List>
          {props.todos.map((t,i)=> (
            <div>
              <Todo 
                {...t} 
                key={t.id} 
                removeTodo={() => props.removeTodo(t.id)}
                onToggleCompletion={() => props.onToggleCompletion(t.id)}
                updateTodo={props.updateTodo}
                />
              {i < props.todos.length - 1 && <Divider /> }
            </div>
          ))}
        </List>
      </Paper>
    );
}

export default TodoList
