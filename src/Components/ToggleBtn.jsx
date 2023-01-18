import { useContext } from 'react';
import DataContext from '../contexts/DataContext';
const ToggleBtn = () => {
  const { handleCurrentCol } = useContext(DataContext);
  return (
    <>
      <button onClick={handleCurrentCol}>change text color</button>
    </>
  );
};

export default ToggleBtn;
