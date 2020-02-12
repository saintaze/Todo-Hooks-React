import {useState} from 'react';

const ids = (() => {
  let id = 6;
  return () => {
    id += 1
    return id
  }
})()

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: ids(), task: newTodo, completed: false }])
  }

  const removeTodo = (id) => {
    const filteredTodos = todos.filter(t => t.id !== id);
    setTodos(filteredTodos);
  }

  const onToggleCompletion = id => {
    const toggledTodos = todos.map(t => {
      return t.id === id ? { ...t, completed: !t.completed } : t
    })
    setTodos(toggledTodos);
  }

  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map(t => {
      return t.id === id ? { ...t, task: newTask } : t
    })
    setTodos(updatedTodos);
  }

  return { todos, removeTodo, addTodo, onToggleCompletion, updateTodo }
}
