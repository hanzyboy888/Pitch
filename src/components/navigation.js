import './navigation.css'
import {
    Text,
    Button,
} from '@chakra-ui/react'

import {
    AiOutlineArrowRight
} from 'react-icons/ai'

function navigation() {
    return (
        <div class="main">
            <div class="navContainer">
                <Text fontSize="4xl" fontFamily={'Raleway'} fontWeight="600" color="white">chip</Text>
                {/* <div></div> */}
                <ul class="bar">
                    {/* <li class="barItem">Home</li> */}
                    {/* <li class="barItem">About</li> */}
                </ul>
                <Button rightIcon={< AiOutlineArrowRight />} variant="ghost" textColor="white">
                    Logout
                </Button>
            </div>
        </div>

    )
}

export default navigation