import logo from './logo.svg';
import './App.css';

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
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => {
        fetchRandomData();
      }}>
  Activate Lasers
</button>
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
    })};




export default App;
