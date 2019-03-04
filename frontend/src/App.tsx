import * as React from 'react';
import './App.css';
import {CarInfo} from "./components/car-info/CarInfo";

interface States {
  activePageIndex: string;
}

class App extends React.Component<{}, States> {


  public render() {

    return (
      <div>
        <CarInfo/>
      </div>
    );
  }
}

export default App;
