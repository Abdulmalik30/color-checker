import { useContext } from 'react';
import DataContext from '../contexts/DataContext';
const Box = () => {
  const { inputVal, hexVal, currentCol } = useContext(DataContext);

  return (
    <section
      id='box'
      style={{
        backgroundColor: inputVal,
        border: `1px solid ${inputVal}`,
      }}
    >
      <p
        style={{
          color: currentCol,
        }}
      >
        {inputVal ? inputVal : 'Empty Value'}
      </p>
      <p
        style={{
          color: currentCol,
        }}
      >
        {hexVal}
      </p>
    </section>
  );
};

export default Box;
