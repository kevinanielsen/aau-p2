import '../styles/Table.css';
import { useState } from "react";


export const Table = () => {
    const [rows, setRows] = useState([]); // State to track table rows

    const addEmptyRow = () => {
      setRows([...rows, {}]); // Add an empty row to the state
    };

function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
        const job = formData.get("job");
        const hours = parseFloat(formData.get("hours")) || 0; // Ensure hours is a number
        const pay = parseFloat(formData.get("pay")) || 0; // Ensure pay is a number
        setRows([...rows, { job, hours, pay }]);
    
        form.reset();
}
    // Calculate totals using a for-loop
    let totalHours = 0;
    let totalPay = 0;
    for (let i = 0; i < rows.length; i++) {
        totalHours += rows[i].hours;
        totalPay += rows[i].pay * rows[i].hours;
    }

    return (
      <div>
        <form className="inputForms" onSubmit={handleSubmit}>
            <input name="job" placeholder="Job" required />
            <input name="hours" type="number" placeholder="Hours" required />
            <input name="pay" type="number" placeholder="Wage" required />
            <button type="submit">Add worked hours</button>
        </form>

            <table>
                <thead>
                <tr>
                    <th>Job</th>
                    <th>Wage</th>
                    <th>Hours</th>
                    <th>Total pay</th>
                </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.job}</td>
                            <td>{row.pay}</td>
                            <td>{row.hours}</td>
                            <td>{`${row.pay * row.hours } kr`}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td scope="row">Totals</td>
                        <td></td>
                        <td>{`${totalHours} t`}</td>
                        <td>{`${totalPay} kr`}</td>              
                    </tr>
                </tfoot>
            </table> 
        </div>
    );
  };
  