import React, {Component} from 'react';



class Login extends React.Component{
    render(){
        return(
            <div>

{/* Recods Listing Start */}

<div className="container">
    <div className="row">
        <div className="col-md-12">
    <form>
    <h3> Form</h3>

  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="inputEmail4">Text</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Text" />

      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />


      <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>

    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" />

    </div>



    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
      <label for="inputPassword4">Number</label>
      <input type="number" className="form-control" id="inputPassword4" placeholder="Number" />
    
      <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    </div>

    <div className="form-group mb-2">
    <label for="staticEmail2" className="sr-only">Email</label>
    <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>

  </div>
  
  <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>



  
  
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
 </div>
    </div>
</div>

{/* Records Listin End */}
            </div>
        );
    }
}

export default Login;