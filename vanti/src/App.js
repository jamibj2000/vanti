import logo from './logo.svg';
import './App.css';
import DynamicIFrame from './Components/Inputs/DynamicIFrame';
import DynamicThanks from './Components/Inputs/DynamicThanks';

function App() {
  document.title = "Vanti"
  return (
        <>
          <DynamicIFrame></DynamicIFrame>
        </>
  );
}

export default App;