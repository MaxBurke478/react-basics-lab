import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash the dishes" />
      <Task title="Laundry" deadline="Tomorrow" description="Don't forget to separate colors and whites!">
       </Task> 
      <Task title="Tidy" deadline="Today" description="Organize your workspace" />
    </div>
  );
}

export default App;
