import {
    Text,
    useDisclosure,
    Box,
    ModalOverlay,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Tooltip
} from "@chakra-ui/react"

function ClassCard(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <tr>
            <Tooltip label="Check out">
                <Box as="button" marginTop="15px" onClick={onOpen} w="100%" borderRadius="3%">
                    <Text fontWeight="bold">{props.subj.className}</Text>
                    <Text fontWeight="bold">{props.subj.section}</Text>
                    <Text fontWeight="bold">{props.subj.time}</Text>
                </Box>
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.subj.className}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight="bold">Section: {props.subj.section}</Text>
                        <Text fontWeight="bold">Time: {props.subj.time}</Text>

                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost">Go to Google Classroom</Button>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>

        </tr >
    );
}

export default ClassCard