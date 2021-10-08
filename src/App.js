import React from 'react'
import BarcodeReader from 'react-barcode-reader'
import './App.css';
import { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

import WebCam from './WebCam'

const axios = require('axios').default;

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

function App() {
  const [data, setData] = useState('Not Found');
  return (
    <div className="App">

        <button onClick={() => {
          fetchRandomData();
        }}>
          Activate Lasers
        </button>
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

    </div>
  );
}
const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
    .then(res => {
      //sucess
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
};




export default App;
