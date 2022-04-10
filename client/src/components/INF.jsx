import React from "react";
import ContactForm from "./Form";
import "./INF.css";
export const INF = (props) => {
    return (
        <div>
            <ContactForm/>
            <div className="nav-intern">
                Indian Institute of Technology Mandi
            </div>
            <div className="forms">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNODvu8xH2XpUhad2Kzi7RqU0LpXLtLkhPcB8HdXSzV8QtGg/viewform?embedded=true" width="100%" height="598" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
};