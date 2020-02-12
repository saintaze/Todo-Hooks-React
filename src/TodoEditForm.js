import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


const TodoEditForm = (props) => { 
  const [value, handleChange ] = useInputState(props.task);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.updateTodo(props.id, value)
      props.toggleIsEditing()

    }} style={{ width: '50%', marginLeft: '1rem' }}>
      <TextField color='secondary' autoFocus value={value} onChange={handleChange} fullWidth margin="normal"/>
      <ListItemSecondaryAction>
        <IconButton onClick={props.toggleIsEditing}>
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </form>
  );
 }

export default TodoEditForm;