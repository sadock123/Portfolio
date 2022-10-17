import logo from './logo.svg';
import './App.css';
import Main from './component/main.js';
import About from './component/about.js';
import Experiences from './component/experiences.js'
import Techskill from './component/techskill.js'
import Tools from './component/tools.js'
import Contact from './component/contact.js'
import Footer from './component/footer.js'
import './CSS/global.css'
import './CSS/Home.css'
import { ThemeProvider } from '@mui/material/styles';
import { Box,CssBaseline,} from '@mui/material';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>

    <CssBaseline/>
<Box  sx={{
        width: '100%',
        padding: '2rem',
        backgroundColor: '#310A5D',
        backdropFilter:"blur(20px)",
        borderRadius: '1rem',   
    }}>
  <br/>
  <br/>
 <br/>
 <br/>
  <Main />
  <br/>
  <br/>
  <br/>
  <br/>
  <About />

  <br/>
  <br/>
  <br/>
  </ Box>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
  <Techskill/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <Tools/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <Experiences/>
<br/>
<br/>
  <br/>
  <br/>
  <br/>
  <Contact/>
<br/>
<br/>
  <br/>
  <br/>
  <br/>
  <Footer/>
  <br/>
    </ThemeProvider>

   );

}

export default App;
