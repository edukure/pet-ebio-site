import { VStack } from '@chakra-ui/layout';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';

const HomeLayout = () => {
    return (
        <VStack minH="100vh" spacing={0}>
            <Navbar />
            <Hero />
            <Footer />
        </VStack>
    );
};

export default HomeLayout;
