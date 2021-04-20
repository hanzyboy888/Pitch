import './table.css'
import DaySched from './daySched.js'

function Table(props) {
    const workDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ]
    return (
        <div className="tableHolder">
            <table>
                <tr>
                    <th><DaySched day={workDays[0]} sched={props.schedule} /></th>
                    <th><DaySched day={workDays[1]} sched={props.schedule} /></th>
                    <th><DaySched day={workDays[2]} sched={props.schedule} /></th>
                    <th><DaySched day={workDays[3]} sched={props.schedule} /></th>
                    <th><DaySched day={workDays[4]} sched={props.schedule} /></th>
                </tr>
            </table >
        </div>
    );
}

export default Table;