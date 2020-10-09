import React, { Component } from 'react';
import Graph1 from './../Components/Graph1';
import Graph2 from './../Components/Graph2';

class ReconciliationReport extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
      <Graph1 />
      <Graph2 />
      </>
     );
  }
}
 
export default ReconciliationReport;
