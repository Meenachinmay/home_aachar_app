import React from 'react'
import { CardFooter, VStack, Button, Text, Flex, Image, Stack, CardBody, Heading, HStack, Card } from "@chakra-ui/react"
import MenuItemCard from './UICards/MenuItemCard'

let image = 'https://holycowvegan.net/wp-content/uploads/2021/06/indian-lime-pickle-probiotic-1.jpg'

const HomePage: React.FC = () => {
  return (
    <>
      <Flex width='100%' p={2} height='100vh'>
        <Flex flexDirection='column' width={'xs'} flexGrow={1} m={2}>
          < Flex flexDirection='column' p={3}
            minHeight="20%"
            maxHeight="20%" overflowY={'scroll'} border="1px solid" borderColor="gray.500" justifyContent='center' color="gray.700" textOverflow="hidden">
            <Text width='full' textAlign='center' fontSize="30px">Quick Order</Text>
            <Text width='full' textAlign='center' fontSize="15px" textOverflow="ellipsis">
              Hey everyone. Welcome to Quick order section of Home Aachar. Here you can order your wishlist quickly.
            </Text>
          </Flex>
          <Flex p={3} height="80%" flexGrow={1} border="1px solid" borderColor="gray.500" color="gray.700" fontSize="lg">
            List of all the quick orderable items will come here.
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} width={'md'}
          border="1px solid" maxHeight={'100vh'} overflowY='scroll' borderColor="gray.500" flexGrow={1} m={2}>
          <Flex flexDirection={'column'} bg="red.400" width={'full'} boxShadow="md" height="150px">
            <Flex flexGrow={1} alignItems='center' p={3} justifyContent={'center'}>
              <HStack spacing={10} color='white'>
                <Text bg={"red.600"} p={2} borderRadius={3} cursor="pointer">View Aachar Gallary</Text>
                <Text bg={"red.600"} p={2} borderRadius={3} cursor="pointer">Contact Us</Text>
              </HStack>
            </Flex>
            <Flex p={1}>
              <Text color="white">
                Here is the list of all the available order we have ever created.
                You can check the details from here and then can order in few clicks.
              </Text>
            </Flex>
          </Flex>
          <VStack p={3} spacing="3">
            <MenuItemCard title='I am a aachar.' description='I am a aachar' imageUrl={image} />
            <MenuItemCard title='I am a aachar.' description='I am a aachar' imageUrl={image} />
            <MenuItemCard title='I am a aachar.' description='I am a aachar' imageUrl={image} />
            <MenuItemCard title='I am a aachar.' description='I am a aachar' imageUrl={image} />
            <MenuItemCard title='I am a aachar.' description='I am a aachar' imageUrl={image} />
            <MenuItemCard title='I am a aachar.' description='I am a aachar' imageUrl={image} />
          </VStack>
        </Flex>
      </Flex>
    </>
  )
}

export default HomePage
