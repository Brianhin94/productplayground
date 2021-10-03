import React from 'react'
import BarcodeReader from 'react-barcode-reader'
import './App.css';
import { useState } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
//const axios = require('axios').default;

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
      <header className="App-header">
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
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
// import React, { Component } from 'react'
// import BarcodeReader from 'react-barcode-reader'
//
// class Test extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       result: 'No result',
//     }
//
//     this.handleScan = this.handleScan.bind(this)
//   }
//   handleScan(data){
//     this.setState({
//       result: data,
//     })
//   }
//   handleError(err){
//     console.error(err)
//   }
//   render(){
//
//     return(
//       <div>
//         <BarcodeReader
//           onError={this.handleError}
//           onScan={this.handleScan}
//           />
//         <p>{this.state.result}</p>
//       </div>
//     )
//   }
// }
// export default Test
