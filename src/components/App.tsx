import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import Layout from './Layout';
import '../App.css';

const MainPage = lazy(() => import('../pages/About'));
const Experience = lazy(() => import('../pages/Experience'));
const Projects = lazy(() => import('../pages/Projects'));
const Skills = lazy(() => import('../pages/TechSkills'));

function App() {
  return (
    <VStack>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<MainPage/>} />
        <Route path='/experionce' element={<Experience/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>} />
        </Route>
      </Routes>
    </VStack>
  );
}

export default App;
