import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import AppBar from "./AppBar";

function Layout(){
	return (
		<Container border='none' px={{base: '20px', md: '30px'}}>
			<AppBar />
			<Suspense fallback={null}>
		 		<Outlet />
 			</Suspense>
 		</Container>
	);
}

export default Layout;