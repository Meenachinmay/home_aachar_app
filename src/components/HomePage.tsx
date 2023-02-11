import React from 'react'
import { Text, Flex, HStack } from "@chakra-ui/react"

const HomePage:React.FC = () => {
    return (
     <>
        <Flex width='100%' p={2} height='100vh'>
            <Flex flexDirection='column' width={'md'} flexGrow={1} m={2}>
              <Flex flexDirection='column' p={3} height="20%" flexGrow={1} border="1px solid" borderColor="gray.500" justifyContent='center' color="gray.700" textOverflow="hidden">
                  <Text  width='full' textAlign='center' fontSize="30px">Quick Order</Text>
                  <Text  width='full' textAlign='center' fontSize="15px" textOverflow="ellipsis">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
              </Flex> 
              <Flex p={3} height="80%" flexGrow={1} border="1px solid" borderColor="gray.500" justifyContent='center' color="gray.700" fontSize="lg">
                  <Text width='full' fontSize="20px">Start your order from here</Text>
              </Flex> 
            </Flex>
            <Flex width={'md'} border="1px solid" borderColor="gray.500" flexGrow={1} m={2}>
               Hello world 
            </Flex>
        </Flex>
     </> 
    )
}

export default HomePage