import '../styles/TimePlan.css';
import {Table} from '../components/Table';

export const TimePlan = () => {
    return (
      <div>
          <section className="header">
            <h1>Timeplanning</h1>
            <p>"Eksempel motto-tekst"</p>
          </section>
        <section className="table-container">
          <Table />
        </section>
      </div>
    )
}