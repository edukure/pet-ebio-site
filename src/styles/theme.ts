import { theme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
});

export const customTheme = {
    ...theme,
    breakpoints: breakpoints,
};
