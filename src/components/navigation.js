import './navigation.css'
import {
    Text,
    Button,
} from '@chakra-ui/react'

import {
    AiOutlineArrowRight
} from 'react-icons/ai'

function navigation(props) {

    const onClick = () => {
        props.onChange()
    }
    return (
        <div className="main">
            <div className="navContainer">
                <Text fontSize="4xl" fontFamily={'Raleway'} fontWeight="600" color="white">chip</Text>
                {/* <div></div> */}
                <ul className="bar">
                    {/* <li className="barItem">Home</li> */}
                    {/* <li className="barItem">About</li> */}
                </ul>
                <Button rightIcon={< AiOutlineArrowRight />} onClick={onClick} variant="ghost" textColor="white">
                    Logout
                </Button>
            </div>
        </div>

    )
}

export default navigation