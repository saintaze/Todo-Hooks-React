import {useState} from 'react';

export default initialValue => {
  const [val, setVal] = useState(initialValue);

  const handleChange = (e) => {
    setVal(e.target.value)
  }
  const reset = () => {
    setVal('');
  }
  return [val, handleChange, reset]
}
