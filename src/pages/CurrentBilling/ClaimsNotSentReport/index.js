import React, {Component} from 'react';
import clsx from 'clsx';
import { Collapse, Card, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExampleWrapperSeamless } from 'layout-components';
import ClaimsReport from '../Component/ClaimsReport';

class ClaimsNotSentReport extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: false
    };
  }

  toggleAccordion() {
    console.log("click");
    if(this.state.accordion===true){
      this.setState({
        accordion: false
      });
    }
    else{
      this.setState({
        accordion: true
      });
    }
   
  }

  render() { 
    return ( 
      <>
      <div className="accordion mb-spacing-6-x2">
      <Card
        className={clsx('card-box', {
          'panel-open': this.state.accordion
        })}>
        <Card>
          <div className="card-header">
            <div className="panel-title">
              <div className="accordion-toggle">
                <Button
                  variant="text"
                  size="large"
                  className="color-pb btn-link font-weight-bold d-flex align-items-center justify-content-between btn-transition-none"
                  onClick={this.toggleAccordion}
                  aria-expanded={this.state.accordion}>
                  <span>Table Coloumn</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-up']}
                    className="font-size-xl accordion-icon"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Collapse in={this.state.accordion}>
            <div className="p-4">
              Under Constructions
            </div>
          </Collapse>
        </Card>
      </Card>
      </div>
      <ExampleWrapperSeamless>
        <ClaimsReport />
      </ExampleWrapperSeamless>
    </>
     );
  }
}
 
export default ClaimsNotSentReport;