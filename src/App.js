import Page1 from './home_page/Page1';
import './style.css'
import './media.css'
import { Page2 } from './home_page/Page2';
import { Page3 } from './home_page/Page3';

function App() {
  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
