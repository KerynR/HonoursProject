import React from 'react';
import './ViewSubmissions.css';
import Footer from '../Footer';


{/** ONLY VISIBLE TO THE COMPANY AND COMPANY REP */}

function ViewSubmissions() {
 
  return (
    <>
    <div class="gridViewSub">
        <header className="viewSubsHeader">
        View Submissions
        </header>
        <main>
          <table className="tblViewSub">
            <thead>
              <tr>
                    <th>First Name</th>                
                    <th>Last Name</th>
                    <th>Motivation</th>
                    <th>CV URL</th>
                    <th>Approve Application</th>
                    <th>Reject Application</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                  <td><a href=""></a></td> 
                  <td><a href=""></a></td>    
                  <td></td>
                  <td><a href=""></a></td>    
                  <td><button>Approve</button></td>   
                  <td><button>Reject</button></td>           
              </tr>
              <tr>
                  <td><a href=""></a></td> 
                  <td><a href=""></a></td>    
                  <td></td>
                  <td><a href=""></a></td> 
                  <td><button>Approve</button></td>   
                  <td><button>Reject</button></td>   
              </tr>
              <tr>
                  <td><a href=""></a></td> 
                  <td><a href=""></a></td>  
                  <td></td>
                  <td><a href=""></a></td>   
                  <td><button>Approve</button></td>   
                  <td><button>Reject</button></td> 
              </tr>
              <tr>
                  <td><a href=""></a></td> 
                  <td><a href=""></a></td>   
                  <td></td>
                  <td><a href=""></a></td>   
                  <td><button>Approve</button></td>   
                  <td><button>Reject</button></td>         
              </tr>
              <tr>
                  <td><a href=""></a></td> 
                  <td><a href=""></a></td>  
                  <td></td>
                  <td><a href=""></a></td>   
                  <td><button>Approve</button></td>   
                  <td><button>Reject</button></td>            
              </tr>
            </tbody>
          </table>
        </main>
        
        </div>
      <Footer/>
    </>
  );

  
}

export default ViewSubmissions;
