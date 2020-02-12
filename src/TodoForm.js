import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './useInputState';



const TodoForm = props => {
  const [val, handleChange, reset] = useInputState('');
  return (
    <Paper elevation={0} style={{margin: '1rem 0', padding: '1rem 1rem'}}>
     <form onSubmit={(e) => {
       e.preventDefault();
       props.addTodo(val);
       reset();
     }}>
        <TextField color='secondary' label="New Todo" value={val} onChange={handleChange} margin='normal' fullWidth/>
     </form>
    </Paper>
  )
} 

export default TodoForm