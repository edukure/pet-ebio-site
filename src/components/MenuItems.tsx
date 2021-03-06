import { Stack, Link, Text, Divider } from '@chakra-ui/react';

type MenuItemProps = {
    children: string;
    to: string;
};

const MenuItem = ({ children, to = '/' }: MenuItemProps) => {
    return (
        <Link href={to} _hover={{ color: 'teal.300' }} 
        width={{base: "full", lg: "max-content"}} >
            <Text 
            mt={{base: "4", lg: "0"}}
            display="block" textTransform="uppercase" fontWeight="semibold" fontSize="md"
            >
                {children}
            </Text>
            <Divider display={{ base: 'block', lg: 'none' }} />
        </Link>
    );
};

type MenuItemsProps = {
    isOpen: boolean;
};

const MenuItems = ({ isOpen }: MenuItemsProps) => {
    return (
        <Stack
            maxWidth="3xl"
            display={{ base: isOpen ? 'flex' : 'none', lg: "flex" }}
            direction={{base: "column", lg: "row"}}
            width="full"
            alignItems={{base: "baseline", lg: "center"}}
            justifyContent="space-around"
            spacing={{base: "0.5rem", lg: "0"}}

            >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/">sobre o pet</MenuItem>
            <MenuItem to="/">sobre o curso</MenuItem>
            <MenuItem to="/">comunicados</MenuItem>
            <MenuItem to="/">eventos</MenuItem>
            <MenuItem to="/">noticias</MenuItem>
        </Stack>
    );
};

export default MenuItems;
