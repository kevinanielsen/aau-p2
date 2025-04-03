import { SideBar } from '../components/SideBar'; 
import '../styles/Expenses.css'; 

export const Activities = () => {
  return (
    <div>
      <SideBar />

      <h1>Expenses</h1>

      {/* Add button */}
      <div className="button">
        <button className="button">Add Expense</button>
      </div>
    </div>
  );
};