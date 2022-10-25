import './App.css';
import Counter from './components/counter/counter.tsx';
import { Greet } from './components/greet/greet.tsx';


const App=()=> {
  return (
    <div>
    <Counter/>
    <Greet name={"Hossen"}/>
    </div>
  );
}

export default App;
