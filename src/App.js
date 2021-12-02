import logo from './logo.svg';
import './App.css';
import {Flex} from '@aws-amplify/ui-react';
import { RecipeList } from './ui-components';


function App() {
  return (
    <Flex justifyContent="center">
      <RecipeList gap="1.5rem"
    />
    </Flex>
  );
}

export default App

