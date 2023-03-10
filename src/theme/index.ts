import { extendTheme } from '@chakra-ui/react';
import { breakpoints, shadows } from './foundations';
import { Container, Button} from './components';
import { styles } from './styles';

const theme = {
    styles,
    breakpoints,
    shadows,
    components: {
        Button,
        Container
    },
};

export default extendTheme(theme);