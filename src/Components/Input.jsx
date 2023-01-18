import { useContext } from 'react';
import DataContext from '../contexts/DataContext';
const Input = () => {
  const { inputVal, handleInputChange } = useContext(DataContext);

  return (
    <>
      <form>
        <input
          type='text'
          value={inputVal}
          onChange={(e) => handleInputChange(e)}
          placeholder='input color name'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='off'
          maxLength='20'
        />
      </form>
    </>
  );
};

export default Input;
