import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/Tabs';
import './components/Tabs.css';

const tabsData = [
  { label: 'Tab 1', content: 'Content for Tab 1' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
  { label: 'Tab 3', content: 'Content for Tab 3' },
];

function App() {
  return (
    <React.StrictMode>
      <Tabs tabs={tabsData} />
    </React.StrictMode>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App; // Make sure you export the App component
