import React from 'react'
import './App.css';
import { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import WebCam from './WebCam'


function App() {
  const [data, setData] = useState('Not Found');
  const [buttonPopup, setButtonPopup] = useState('Not Found');
  return (
    <div className="App"> 
    <main>
        <Popup trigger={<button>1</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  <Popup trigger={<button>2</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  <Popup trigger={<button>3</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  <Popup trigger={<button>4</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  <Popup trigger={<button>5</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  <Popup trigger={<button>6</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  <Popup trigger={<button>7</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>

        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData('Not Found');
          }}
        />
        <p>{data}</p>

        <WebCam/>
        </main>

    </div>
  );
}





export default App;

// const axios = require('axios').default;

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// const fetchRandomData = () => {
//   return axios.get('https://randomuser.me/api')
//     .then(res => {
//       //sucess
//       console.log(res);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };
