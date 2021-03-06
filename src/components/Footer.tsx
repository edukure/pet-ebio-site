import { Box, Center, HStack, Text, VStack, Flex } from '@chakra-ui/layout';
import { FacebookIcon, InstagramIcon } from './icons';
import YoutubeIcon from './icons/YoutubeIcon';

const Footer = () => {
    return (
        <VStack w="full" position="absolute" bottom={0} spacing={0}>
            <RedesSociais />
            <Copyright />
        </VStack>
    );
};

export default Footer;

const RedesSociais = () => {
    return (
        <Box bg="blackAlpha.900" h="8rem" w="full">
            <Center h="full">
                <VStack h="full" color="white" justifyContent="center" spacing={4}>
                    <Text fontWeight="semibold" textTransform="uppercase">
                        Acompanhe-nos nas redes sociais
                    </Text>
                    <HStack spacing={8}>
                        <YoutubeIcon boxSize={30}/>
                        <FacebookIcon boxSize={30}/>
                        <InstagramIcon boxSize={30}/>
                    </HStack>
                </VStack>
            </Center>
        </Box>
    );
};

const Copyright = () => {
    return (
        <Box bg="blackAlpha.800" h="5vh" w="full" textAlign="center">
            <Center h="full">
                <Text fontWeight="light" color="white">
                    Copyright © 2021 PET Engenharia Biomédica
                </Text>
            </Center>
        </Box>
    );
};
