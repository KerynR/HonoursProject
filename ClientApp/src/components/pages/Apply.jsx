import React from 'react';
import './Apply.css';
import Footer from '../Footer';


function Apply() {
  return (
    <>
        <div className="gridApply">
            <div className="box applyLeft">
            <div className="row">
          <div className="col-25">    
            <label>Employer:</label>
          </div>
          
        </div> 


            </div>
            <div className="box applyRight">
                
            <div className="col-75">
          <input className="inputPosDetails" type="text" />
          </div>
            </div>
            
            <div className="box applyButtons">
                <input className="btnApply" type="submit" value="Apply" />
                <input className="btnUpdate" type="submit" value="Update" />
                <input className="btnCancel" type="submit" value="Cancel" />
            </div>
        </div>
    </>
  );
}

export default Apply;
