import { createContext, useState } from 'react';
import colorNames from 'colornames';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [inputVal, setInputVal] = useState('');

  const [hexVal, setHexVal] = useState('');

  const [currentCol, setCurrentCol] = useState('white');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
    setHexVal(colorNames(value));
  };

  const handleCurrentCol = () => {
    currentCol === 'white' ? setCurrentCol('black') : setCurrentCol('white');
  };

  return (
    <DataContext.Provider
      value={{
        inputVal,
        setInputVal,
        handleInputChange,
        hexVal,
        setHexVal,
        currentCol,
        setCurrentCol,
        handleCurrentCol,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
