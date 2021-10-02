import React from 'react'
import BarcodeReader from 'react-barcode-reader'
import './App.css';

function App() {

console.log(<BarcodeReader/>)

  return (
    <div className="App">
      <button>get data</button>
      <BarcodeReader/>
    </div>
  );
}

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
