import './App.css';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/react';
import Home from './components/pages/Home';

const code = new URLSearchParams(window.location.search).get('code');

function App() {

  
  return (
    <>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {code ? <Home code={code} /> : <Login />}
      </ColorModeProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
