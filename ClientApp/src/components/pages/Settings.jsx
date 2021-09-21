import React from 'react';
import './Settings.css';
import Footer from '../Footer';

function Settings(){
    return(
        <>
    <div>
        <body>
        <h1>Settings</h1>

            <div className="grid-container">
                <div className="inline-buttons">
                    <button onClick="">Theme 1</button>
                    <button onClick="">Theme 2</button>
                    <button onClick="">Theme 3</button>
                </div>
                
                <h3>Choose Language</h3>
                <input type="checkbox"/><p >English</p>
                <input type="checkbox"/><p >Afrikaans</p>
                <input type="checkbox"/><p >Sotho</p>

                <h3>Notifications (Push Notifications, new listings added, etc.)</h3>
                <input type="checkbox"/><p >On</p>
                <input type="checkbox"/><p >Off</p>

                <h3>Support</h3>
                <h3>FAQs</h3>
            </div>
        </body>
    </div>
        <Footer/>
    </>

    );

}

export default Settings;