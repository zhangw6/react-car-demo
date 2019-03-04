import * as React from 'react';
import {CarDetail} from "../../constants";


interface State {
  cars: CarDetail[]
  error: string;
}

export class CarInfo extends React.Component<{}, State> {

  state: State = {
    cars: [],
    error:""
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars",
      {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }
      );
      const resJson = await response.json();
      this.setState({cars: resJson});

    } catch (error) {
      if (error instanceof Response) {
        const fieldErrors = await error.json();
        this.setState({ error: fieldErrors });
      }
    }
  }


  public render() {

    return (
      <div>
        {
          this.state.cars.length !== 0 ?
            <div>Loading, please wait.......</div>
            :
            this.state.cars.map(
                (car: CarDetail, index) => {
                   <div key={index}>
                     <h5>{car.name}</h5>
                     <ul>
                       <li>{car.cars.model}</li>
                       <li>{car.cars.make}</li>
                     </ul>
                   </div>
              }
            )
        }
      </div>
    );
  }
}

