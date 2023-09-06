import React, {useEffect, useState} from "react";
import InfoContent from "./InfoContent";


export default function Info(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollPosition: number = window.scrollY;
            const screenHeight: number = window.innerHeight;

            if (scrollPosition >= screenHeight * 0.5) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        document.body.style.minHeight = "200vh";

        window.addEventListener("scroll", handleScroll);

        return (): void => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{paddingBottom: "300px"}}>
            {visible ? (
                <div className="main__container show__effect">
                    <InfoContent/>
                </div>
            ) : <div className="main__container hide__effect">
                <InfoContent/>
            </div>}
        </div>
    );
}