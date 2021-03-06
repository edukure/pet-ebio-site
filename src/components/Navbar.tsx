import { useState } from 'react';
import { Container, Box, Image, Stack, Flex, Button, Menu } from '@chakra-ui/react';

import MenuToggle from './MenuToggle';
import MenuItems from './MenuItems';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Flex width="full" justifyContent="center" borderBottom="0.5px solid lightgray">
            <Flex     
                justifyContent="space-between"
                alignItems="center"
                wrap={{ base: 'wrap', lg: 'nowrap' }}
                py="1rem"
                px={{base: "2.5rem", md: "1.5rem"}}
                color="gray.600"
                width="full"
                maxWidth={{ base: 'full', lg: '6xl' }}
                >
                    

                <Flex align="center">
                    <Image src="/logo-pet.svg" width={{ base: '24', md: '32' }} />
                </Flex>

                <MenuToggle isOpen={isOpen} toggle={handleToggle} />

                <MenuItems isOpen={isOpen} />
            </Flex>
        </Flex>
    );
};

export default Navbar;
