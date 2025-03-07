import Accordion from '../Accordion/Accordion';

import './App.css';

import accordionItems from '../../data/accordionItems';

function App() {
  return (
    <div>
      <Accordion title="FAQ" items={accordionItems} />
    </div>
  )
}

export default App
