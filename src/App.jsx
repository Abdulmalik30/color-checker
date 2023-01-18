import Box from './Components/Box';
import Input from './Components/Input';
import ToggleBtn from './Components/ToggleBtn';
import { DataProvider } from './contexts/DataContext';

const App = () => {
  return (
    <main>
      <DataProvider>
        <Box />
        <Input />
        <ToggleBtn />
      </DataProvider>
    </main>
  );
};

export default App;
