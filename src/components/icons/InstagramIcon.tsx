import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/react';

const InstagramIcon = (props) => (
    <Link href="https://www.instagram.com/petengenhariabiomedica/" isExternal _hover={{ color: 'teal.300' }}>
        <Icon viewBox="0 0 512 512" {...props}>
            <path
                d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"
                fill="currentColor"
            />
            <path
                d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80zM393.6 135.456c9.42 0 17.056-7.636 17.056-17.056 0-9.42-7.636-17.056-17.056-17.056-9.42 0-17.056 7.636-17.056 17.056 0 9.42 7.636 17.056 17.056 17.056z"
                fill="currentColor"
            />
        </Icon>
    </Link>
);

export default InstagramIcon;
