import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePet from './views/CreatePet';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <CreatePet path="/new" />
        <Details path="/pets/:id" />
        <Update path="/pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
