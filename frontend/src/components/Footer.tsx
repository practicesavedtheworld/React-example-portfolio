import React, {useState, useEffect} from "react";

import TelegramImage from "../images/social/telegram_logo.svg";
import WhatsAppImage from "../images/social/whatsapp_logo.svg";
import InstagramImage from "../images/social/instagram_logo.svg";

import {newVisitor} from "../requests/newVisitor";
import {totalVisitors} from "../requests/totalVisitors";

import "../css/Footer.css";


export default function Footer(): React.JSX.Element {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                await newVisitor();
                const count: number = await totalVisitors();
                setVisitorCount(count);
            } catch (error) {
                console.log("Error fetching visitor count:", error);
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-slogan">
                    <p><em>Crafting Dreams with a 3D Touch | Nick</em></p>
                    <p>Number of visit {visitorCount ?? 0}</p>
                </div>
                <div className="social">
                    <img src={TelegramImage} alt=""/>
                    <img src={WhatsAppImage} alt=""/>
                    <img src={InstagramImage} alt=""/>
                </div>
            </div>
            <h4>2023</h4>
        </div>
    );
};