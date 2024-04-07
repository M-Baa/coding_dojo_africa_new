import logo from './logo.svg';
import './App.css';
import  component1 from "./components/component1" ;


var personarray=[
  {"firstName":"jane","lastName":"doe","age":45,"hairColor":"black"},
  {"firstName":"john","lastName":"smith","age":88,"hairColor":"brown"},
  {"firstName":"millard","lastName":"fillmore","age":50,"hairColor":"brown"},
  {"firstName":"maria","lastName":"smith","age":62,"hairColor":"brown"},
  
  
]

function App() {
  return (
    <div className="App">
      {personarray.map(person => {
        return <person component1 firstName={person.firstName} lastName={person.lastName} age={person.age}
        hairColor={person.hairColor}/>
      })
    }


    </div>

  );
}

export default App;
