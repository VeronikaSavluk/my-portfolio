import { extendTheme } from '@chakra-ui/react';
import { breakpoints } from './foundations';
import { Container, Button} from './components';
import { styles } from './styles';

const theme = {
    styles,
    breakpoints,
    components: {
        Button,
        Container,
    },
};

export default extendTheme(theme);