import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import Navigation from './shared/ui/Navigation';
import CardSection from './shared/ui/CardSection';
import OperationTable from './shared/ui/OperationTable';
import './App.css';

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm2 ms-xl2">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
          <div className="ms-Grid-row">
            <CardSection />
          </div>
          <div className="ms-Grid-row">
            <OperationTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
