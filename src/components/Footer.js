import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Footer extends React.Component{
    render(){
        return(
            <div>
{/* Footer Start */}

<section className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-2 footer-logo">
                <Link to="/">
                    <img src="assets/images/logo.png" alt="logo" />
                </Link>
			</div>
            <div className="col-md-10 copyright">
            © Copyright 2019. USA Dental Solutions All Images and Content Rights Reserved.
            </div>

        </div>
    </div>
</section>
{/* Footer end */}

            </div>
        );
    }
}

export default Footer;