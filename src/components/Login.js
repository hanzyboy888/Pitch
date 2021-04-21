import './Login.css'
import {
    Heading,
    Button,
} from '@chakra-ui/react'

function Login(props) {

    const onClick = () => {
        props.onChange()
    }

    return (
        <div className="loginCard">
            <Heading fontFamily={"Raleway, sans-serif"} color="white" fontWeight="normal" fontSize="8xl">Chip in.</Heading>
            <Button marginTop="20px" variant="ghost" fontFamily={"Raleway, sans-serif"} onClick={onClick}>Login</Button>
        </div>
    );
}

export default Login;