import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';

const Footer = (props) => {
  const { footerShadow, footerBgTransparent } = props;
  return (
    <>
      <div
        className={clsx('app-footer text-black-50', {
          'app-footer--shadow': footerShadow,
          'app-footer--opacity-bg': footerBgTransparent
        })}>
        {/* <div className="app-footer--first">
          
        </div> */}
        <div className="app-footer--second">
          <span> © Copyright {1900 + new Date().getYear()}. <a
            href="http://usadentalsolutions.com/"
            target="_blank"
            title="USA Dental Solutions"
            rel="noopener noreferrer">USA Dental Solutions</a> All Images and Content Rights Reserved.</span> 
                
                  </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  footerShadow: state.ThemeOptions.footerShadow,
  footerBgTransparent: state.ThemeOptions.footerBgTransparent
});

export default connect(mapStateToProps)(Footer);
