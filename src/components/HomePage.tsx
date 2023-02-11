import React from 'react'
import { Text, Flex, HStack } from "@chakra-ui/react"

const HomePage:React.FC = () => {
    return (
     <>
        <Flex width='100%' height='100vh' bg='red.900'>
            <Flex bg="blue.400" width={'md'} flexGrow={1}>
                
            </Flex>
            <Flex width={'md'} bg='green.600' flexGrow={1}>
                
            </Flex>
        </Flex>
     </> 
    )
}

export default HomePage