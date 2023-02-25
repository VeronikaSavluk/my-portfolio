import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import Layout from './Layout';
import '../App.css';

const MainPage = lazy(() => import('../pages/About'));
const Education = lazy(() => import('../pages/Education'));
const Projects = lazy(() => import('../pages/Projects'));
const Skills = lazy(() => import('../pages/TechSkills'));

function App() {
  return (
    <VStack>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<MainPage/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>} />
        </Route>
      </Routes>
    </VStack>
  );
}

export default App;
