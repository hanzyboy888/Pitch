
import Navigation from './navigation.js'
import Table from './table.js'

function main(props) {
    return (
        <div>
            <Navigation onChange={props.onChange} />
            <Table schedule={props.classSchedule} />
        </div>
    );
}

export default main