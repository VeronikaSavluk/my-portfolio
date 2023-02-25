import {
	Box
 } from "@chakra-ui/react"
import html from '../image/html.svg';
import css from '../image/css.svg';
import node from '../image/node.svg';
import gear from '../image/wing.com.png';
import js from '../image/js.png';
import react from '../image/react.svg';

function Logo (){
	return (
		<Box boxSize={92} pos="relative">
			<img src={gear} className="gear-min" alt="small gear" />
			<img src={gear} className="gear-max" alt="big gear" />
			<img src={gear} className="gear" alt="gear" />
			<img className="html" src={html} alt="html5" />
			<img className="css" src={css} alt="css3" />
			<img className="react" src={react} alt="react" />
			<img className="node" src={node} alt="node.js" />
			<img className="js" src={js} alt="js" />
		</Box>
	);
}

export default Logo;
