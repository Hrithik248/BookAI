import './App.css';
import Authentication from './Components/Authentication';
import CodeExamples from './Components/CodeExamples';
import Endpoints from './Components/Endpoints';
import Navbar from './Components/Navbar';
import Overview from './Components/Overview';
import Pricing from './Components/Pricing';
import Tutorial from './Components/Tutorial';

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Overview/>
      <Authentication/>
      <Endpoints/>
      <Tutorial/>
      <CodeExamples/>
      <Pricing/>
    </main>
    </>
  );
}

export default App;
