import {
	Box,
	Image
 } from "@chakra-ui/react"
// import html from '../image/html5.jpg';
// import css from '../image/css3.jpg';
// import node from '../image/node.jpg';
import gear from '../image/wing.com.png';

function Logo (){

	return (
		<Box pos="relative">
			<Image boxSize={9}	src={gear} className="App-logo-min" alt="small gear" />
			<Image boxSize={12} src={gear} className="App-logo-max" alt="big gear" />
			<Image boxSize={10} src={gear} className="App-logo" alt="gear" />
			{/* <Image h={6} w={5} src={html} alt="html5" />
			<Image h={6} w={5} src={css} alt="css3" />
			<Image h={5} w={10} src={node} alt="node.js" /> */}
		</Box>
	);
}

export default Logo;