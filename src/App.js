import Text from './Components/Text';
import Button from './Components/Button';
import Img from './Components/Img';
import './App.css';

function App() {
  return (
    <div className='div1'>
      <div className='div2'>
         <Text/>
         <form>
           <Button
           value={"Go Back"}
           bgColor='white'
           clr='black'/>
           <Button value={"Take Me Home"}
           bgColor='#25C4F4'
           clr='white'/>
         </form>
       </div>
       <Img/>
      </div>
    
    
  );
}

export default App;
