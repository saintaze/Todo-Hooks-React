import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './useToggleState';
import TodoEditForm from './TodoEditForm';

const Todo = props => {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? <TodoEditForm toggleIsEditing={toggleIsEditing} id={props.id} task={props.task} updateTodo={props.updateTodo}/> : 
        <>
          <Checkbox checked={props.completed} onClick={props.onToggleCompletion} />
          <ListItemText style={{ textDecoration: props.completed ? 'line-through' : '' }}>{props.task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={props.removeTodo}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>  
        </>    
      }
    </ListItem>
  );
}

export default Todo;