import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import CountrySelect from './CountrySelect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';

function App() {
  const [flag, setFlag] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Nav />} >
            <Route path='calculator' element={<Calculator />} />
            <Route path='country' element={<CountrySelect />} />
          </Route>
          <Route path='*' element={<h1>404 Page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  // return (
  //     <div className="App">
  //       <button className='btn btn-outline-dark mt-4' onClick={() => { setFlag(!flag) }}>Click</button>
  //       {flag ? <CountrySelect /> : <Calculator />}
  //     </div>
  // );

  // return (
  //   <div className="App">
  //     {flag && <CountrySelect />}
  //     {!flag && <Calculator />}
  //   </div>
  // );
}

export default App;
