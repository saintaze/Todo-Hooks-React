import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './useTodoState';


const TodoApp = props => {
  const initialTodos = JSON.parse(localStorage.getItem('todos') || '[]')

  const { todos, addTodo, removeTodo, updateTodo, onToggleCompletion } = useTodoState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Paper style={{padding: 0, margin: 0, minHeight: '100vh', backgroundColor: '#fafafa'}} elevation={0}>
      <AppBar color='secondary' position='static'>
        <Toolbar>
          <Typography>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={5}>
          <TodoForm addTodo={addTodo} />
          {todos.length > 0 && (
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              onToggleCompletion={onToggleCompletion}
              updateTodo={updateTodo}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;