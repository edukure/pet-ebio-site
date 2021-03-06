import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

type MenuToggleProps = {
    toggle: () => void;
    isOpen: boolean;
};

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
    return (
        <Box display={{ base: 'block', lg: 'none' }} width="30" onClick={toggle}>
            {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={8} h={8} />}
        </Box>
    );
};

export default MenuToggle;
