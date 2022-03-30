import './App.css';
import Home from './pages/Home';
import useStore, { AppProvider } from './store/context';

const App = () => {
  const[data, dispatch] = useStore();
  console.log(data, dispatch)
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
    </AppProvider>
    
  );
}

export default App;
