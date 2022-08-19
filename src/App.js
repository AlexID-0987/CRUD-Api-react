import './App.css';
import FileRandom from "./fileRandom";
import WorldRan from "./worldRan";
import UniqNumber from "./uniqNumber";
import Webapi from "./webapi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Animals from "./animals";
function App(props) {
  return (
<div>
  <h1>Hello</h1>
  <FileRandom />
  <WorldRan/>
  <UniqNumber/>
  <Webapi/>
  <Animals/>
</div>
  )
}

export default App;
