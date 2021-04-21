import ClassCard from './classCard.js'
import {
    Box,
    // Tooltip
} from '@chakra-ui/react'
import './daySched.css'

function daySched(props) {
    return (
        <table className="daySchedTable">
            <thead>
                <tr className="test">{props.day}</tr>
            </thead>
            <tbody>
                {
                    props.sched.map((subj, i) => {
                        const same = subj.days.includes(props.day)
                        if (same === true) return < ClassCard subj={subj} key={i} />
                        else return <tr key={i}><Box h="24px"></Box></tr>
                        // else return null
                    }
                    )
                }
            </tbody>
        </table >
    );
}

export default daySched;