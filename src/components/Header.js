import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
            <div>
{/* Header Start */}
<header>
		<div className="container">
			<div className="row">
				<div className="col-md-2 logo">
                <Link to="/" className="nav-link">
                    <img src="assets/images/logo.png"  alt="logo"/>
                </Link>
				</div>
				<div className="col-md-10">
					<nav className="navbar navbar-expand-lg">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
                                    <Link to="/" className="nav-link">
									    Recrds Listing <span className="sr-only">(current)</span>
                                    </Link>    
								</li>

								<li className="nav-item">
                                    <Link to="/login" className="nav-link"> Login</Link>    
								</li>

								<li className="nav-item">
                                    <Link to="/form" className="nav-link"> Form</Link>    
								</li>

								<li className="nav-item">
                                    <Link to="/notifications" className="nav-link"> Noitifications</Link>    
								</li>

								<li className="nav-item">
                                    <Link to="/buttons" className="nav-link"> Buttons</Link>    
								</li>

								<li className="nav-item">
                                    <Link to="/text" className="nav-link"> Text</Link>    
								</li>


								<li className="nav-item">
                                    <Link to="/cards" className="nav-link"> Cards</Link>    
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</header>
{/* Header End      */}
               
            </div>
        );
    }
}

export default Header;