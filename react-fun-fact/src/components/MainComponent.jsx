import React from "react";

export default function MainComponent(){
    return(
        <main>
            <h1 className="page-title">Fun facts about React</h1>
            <ul className="page-content">
                <li className="list-item">Was first released in 2013</li>
                <li className="list-item">Was originally created by Jordan Walke</li>
                <li className="list-item">Has well over 200K stars on GitHub</li>
                <li className="list-item">Is maintained by Meta</li>
                <li className="list-item">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}