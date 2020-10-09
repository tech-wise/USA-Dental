import React, { Component } from 'react';
import Graph1 from './../Components/Graph1';
import Graph2 from './../Components/Graph2';
import Graph3 from './../Components/Graph3';
class AccountingDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
      <Graph1 />
      <Graph2 />
      <Graph3 />
      </>
     );
  }
}
 
export default AccountingDashboard;
