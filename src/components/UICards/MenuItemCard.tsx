import React from 'react'
import { CardFooter, Button, Text, Image, Stack, CardBody, Heading,  Card } from "@chakra-ui/react"

type MenuItemCardProps = {
  title: string,
  description: string,
  imageUrl: string,
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ title, description, imageUrl }) => {
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        width={'full'}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={imageUrl}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{title}</Heading>

            <Text py='2'>
              {description}
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' fontSize={'sm'} bg={'red.400'} _focus={{ outline: 'none' }} color="white" _hover={{ bg: "red.500" }}>
              Do you want to taste me?
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  )
}

export default MenuItemCard
