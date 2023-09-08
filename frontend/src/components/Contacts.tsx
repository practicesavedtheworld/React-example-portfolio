import React from "react";

import "../css/Contacts.css";

export default function Contacts(): React.JSX.Element {

    return (
        <div className="contacts" id="contacts">

            <div className="social-contacts">
                <div className="social-info">
                    <p>You can contact me through the technologies below or the form in which indicate how to contact
                        you</p>
                </div>
                <div className="social-media">
                    <br/>
                    <p>Telegram: <a href="">link</a></p>
                    <p>WhatsApp: <a href="">link</a></p>
                    <p>Instagram: <a href="">link</a></p>
                </div>
            </div>

            <div className="form-contacts">
                <form className="email-form">
                    <label htmlFor="name">Your Name</label><br/>
                    <input id="name" type="text"/><br/>

                    <label htmlFor="email">Your Email address</label><br/>
                    <input id="email" type="text"/><br/>

                    <label htmlFor="message">Your message</label><br/>
                    <textarea name="messages" id="message"></textarea><br/>

                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>

    )
}