import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';

import { customTheme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={customTheme}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </ThemeProvider >
    );
}
export default MyApp;
