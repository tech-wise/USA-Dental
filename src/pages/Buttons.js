import React, {Component} from 'react';
class Buttons extends React.Component{
    render(){
        return(
            <div>

{/* Recods Listing Start */}
<div className="container buttons-page">
    <div className="row">
        <div className="col-md-12">
            <h3>Notifications</h3>
        
<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>


<a className="btn btn-primary" href="/" role="button">Link</a>
<button className="btn btn-primary" type="submit">Button</button>
<input className="btn btn-primary" type="button" value="Input" />
<input className="btn btn-primary" type="submit" value="Submit" />
<input className="btn btn-primary" type="reset" value="Reset"></input>







<button type="button" className="btn btn-outline-primary">Primary</button>
<button type="button" className="btn btn-outline-secondary">Secondary</button>
<button type="button" className="btn btn-outline-success">Success</button>
<button type="button" className="btn btn-outline-danger">Danger</button>
<button type="button" className="btn btn-outline-warning">Warning</button>
<button type="button" className="btn btn-outline-info">Info</button>
<button type="button" className="btn btn-outline-light">Light</button>
<button type="button" className="btn btn-outline-dark">Dark</button>



<button type="button" className="btn btn-primary btn-lg">Large button</button>
<button type="button" className="btn btn-secondary btn-lg">Large button</button>



<button type="button" className="btn btn-primary btn-sm">Small button</button>
<button type="button" className="btn btn-secondary btn-sm">Small button</button>








<button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>


<a href="/" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="/" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>


<button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" className="btn btn-secondary btn-lg" disabled>Button</button>

<a href="/" className="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="/" className="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>


<button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button>

<div className="btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary active">
    <input type="checkbox" checked autocomplete="off" /> Checked
  </label>
</div>



<div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Active
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off" /> Radio
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
  </label>
</div>




        </div>
    </div>
</div>

{/* Records Listin End */}
            </div>
        );
    }
}

export default Buttons;