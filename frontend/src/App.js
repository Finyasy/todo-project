import './App.css';
import List from './components/List';
import Remove from './components/Remove';
import Form from './components/Form';
function App() {

  


  return (
    <div>
      <h1>Todo-List</h1>
      <Form />
      <List />
      <Remove />
    </div>
    
  );
}

export default App;
