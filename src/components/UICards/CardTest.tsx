import React from "react";
import { Button, Text, Box, Image, Flex, HStack } from "@chakra-ui/react";

type CardTest = {
  heading: string;
  subHeading: string;
  imageUri: string;
};

const CardTest: React.FC<CardTest> = () => {
  return (
    <Flex p={5} alignItems={"center"} justifyContent={"center"}>
      <Flex
        width="30%"
        bg="gray.100"
        height="250px"
        borderRadius={5}
        border="1px solid"
        p={3}
      >
        <Flex width={"full"}>
          <Flex alignItems={'center'}>
            <Box boxSize={"150"}>
              <Image
                src="https://avatars.githubusercontent.com/u/8050659?v=4"
                alt=""
              />
            </Box>
          </Flex>
          <Flex ml={5} w={"full"} p={1}>
            <Flex flexDirection={"column"}>
              <Text fontSize={"18pt"} fontWeight="bold">Chinmay anand</Text>
              <Text fontSize={"10pt"}>Software engineer, RCI, Japan</Text>
              <Box
                mt={2}
                border="1px solid"
                overflowY={'scroll'}
                p={2}
                borderRadius={5}
              >
                <Text fontSize={"8pt"}>
                  I am Chinmay anand and i am from india. currently i am working
                  as fullstack dev at RCI Japan. Since more than a year i am
                  working on their very big project. There are many variations
                  of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary, making this the first
                  true generator on the Internet. It uses a dictionary of over
                  200 Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </Text>
              </Box>
              <HStack spacing={5} mt={5}>
                <Button _hover={{ bg: 'red.500', color: 'white'}} width={'75px'} size={'xs'} bg="red.600" borderRadius={0} color={'white'}>Talk</Button>
                <Button _hover={{ bg: 'red.500', color: 'white'}} size={'xs'} bg="red.600" borderRadius={0} color={'white'}>View Complete Profile</Button>
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardTest;
