import React from 'react';
import './ViewSubmissions.css';
import Footer from '../Footer';


function ViewSubmissions() {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
     }

     // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  
  return (
    <>
    <div>
      <h1>View Application Submissions</h1>

      <button id="myBtn">View Applications for Junior Developer Position</button>

        <div id="myModal" class="modal">

            <div className="modal-content">
                <span class="close">&times;</span>
                <p>Applicant Name:</p>
            </div>
        </div> 
    </div>

    <Footer/>
    </>
  );

  
}

export default ViewSubmissions;
