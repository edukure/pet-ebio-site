import { Flex, Box, Image, Stack, Heading } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Flex
            bgImage="linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/robot.jpg)"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgBlendMode="darken"
            alignItems="center"
            justifyContent="center"
            wrap="nowrap"
            minH="50vh"
            w="full"
            px={8}
            mb={16}
            >
            <Flex textAlign="center" width="full" 
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column">
                <Heading
                    as="h1"
                    size="4xl"
                    fontWeight="extrabold"
                    lineHeight={1.2}
                    mb={10}
                    >
                    PET <br />
                    ENGENHARIA BIOMÉDICA
                </Heading>

                <Heading
                    as="h2"
                    size="md"
                    opacity="0.9"
                    fontWeight="light"
                    lineHeight={1.5}
                    width="50%"
                    >
                        
                    <strong>Programa de Educação Tutorial</strong> do curso de graduação em Engenharia
                    Biomédica da Universidade Federal de Uberlândia
                </Heading>
            </Flex>
        </Flex>
    );
};

export default Hero;
