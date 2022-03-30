import './App.css';
import useStore, { AppProvider } from './store/context';

const App = () => {
  const[data, dispatch] = useStore();
  console.log(data, dispatch)
  return (
    <AppProvider>
      <div className="App">
        Hello
      </div>
    </AppProvider>
    
  );
}

export default App;
