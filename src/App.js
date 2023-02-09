import Page1 from './home_page/Page1';
import './style.css'
import './media.css'
import { Page2 } from './home_page/Page2';
import { Page3 } from './home_page/Page3';
import Page4 from './home_page/Page4';

function App() {
  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default App;
