import './App.css';
import Navigationbar from './Components/Navbar';
import Heading from './Components/Heading';
import { useState } from 'react';
import Content from './Components/Content';
import phone_data from './Data/data';

function App() {
  const [count, setcount] = useState(0)
  return (
    <div className="App">
      <Navigationbar
      count = {count}
      />

      <Heading/>

      
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='card-container'>
            {phone_data.map((object,index)=>(
              <Content
              key={index}
              object = {object}
              count={count}
              setcount={setcount}
              />
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
