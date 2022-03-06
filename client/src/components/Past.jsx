import React, { useState } from 'react';


const Past = () => {
    let names=[['1mg'],['Accenture', 'Accolite', 'Addverb Technologies', 'Adobe', 'AgNext', 'Aizant Drugs', 'Alstom', 'Altair', 'Amagi Media', 'Amazon', 'Aptean', 'ARC dampers', 'ArcelorMittal Nippon Steel', 'Arcesium', 'Arista Networks', 'Atom', 'Avalara', 'Axxela'],['B Beehyv', 'Bizense Technologies', 'Bluestar', 'Bookmyshow', 'Boston Ivy Healthcare Pvt ltd.', 'BPCL', 'Broadridge Financial Solutions', 'BrowserStack', 'Buddi.AI', "BYJU'S"],['CAD Studio', 'Capgemini', 'Capital Dynamics', 'CashFree', 'C-DAC', 'CeWIT', 'Ceremorphic', 'CGI', 'Chegg', 'CISCO', 'CL Educate', 
    'Clear Trail', 'Clicklabs', 'Coal India', 'Codenation', 'Cognizant', 'Commvault', 'Continental India Private Limited', 'Cortex', 'Cready Technologies Pvt Ltd', 'Crisptag Technologies Private Limited', 'CSC', 'Cubastion Consulting Pvt Ltd'],['D. E. Shaw', 'Decision Point', 'Delhivery', 'Deloitte', 'Dhrishti-Soft', 'DIRECTI', 'Dolcera', 'Domino Datalab', 'Doubtnut', 'DRDO', 'Dunzo'],['EBAY', 'eClerx Services', 'Ecom Express', 'Edifecs Technologies', 'Embibe', 'Enarka', 'Endeavor Careers Pvt. Lid.', 'Entuple'],['Finisar', 'Flipkart', 'Fresenius Kab', 'Futures First'],['General Electric', 'GMO Research', 'Goldman Sachs', 'Gridants', 'Grofers'],['Halliburton', 'Helium Consulting Pvt. Ltd.', 'HPCL', 'HSBC Technology', 'Hyperverge', 'Hyundai'],['IBM India', 'Ikarus Process Automation', 'Impact Guru Technology', 'Indeed', 'Infoedge', 'Infosys', 'Innovaccer ', 'Innovation Line Technologies', 'Internet Academy', 'Intuit', 'IOLCP', 'IP Infusion', 'Irage Capital Advisory Pvt. Ltd.', 'ISRO '],['Jaguar', 'JP Morgan', 'Juspay', 'John Deere'],['K&T Research', 'Khosla Labs', 'Kisan Hub', 'KPMG', 'Kritikal vision', 'Kuliza'],['LafargeHolcim', 'Lepton Maps', 'LnT Constructions', 'LnT ECC', 'LnT infotech', 'LnT Mumbai', 'Logic Fruit Technologies', 'Loop', 'LTI', 'LTTS', 'Lucideus'],['Mahindra', 'Mahindra and Mahindra', 'MAQ Software', 'Marvell Semiconductor', 'MasterCard', 'Mathworks', 'Maven Securites', 'Media.net', 'Meeso', 'Microsoft', 'Mojo Networks', 'Morgan Stanley', 'Mphasis'],['Nagarro Software', 'Newzera ', 'Nference Labs', 'NHAI', 'Novopay Solution', 'NSL HUB', 'Nucleus Software', 'Nutanix Technologies India Private Ltd.'],['One97', 'Optiver Services BV', 'Optum', 'Oracle ', 'Oyo Room'],['P2Power Solutions ', 'PalC Networks ', 'Payme IndiaPayTM ', 'PayU ', 'Pentair ', 'Perceptive Analytics ', 'PharmEasy ', 'Play Simple ', 'Praco Labs ', 'Practically ', 'ProtoTech Solutions ', 'Publicis Sapien'],[],['R Systems ', 'Raam group ', 'Razorpay ', 'Reliance Jio ', 'Resonance Eduventures Ltd. ', 'Robert Bosch ', 'RockOn Technologies ', 
'Rubrik'],['Sam media', 'Samsung (SEL)', 'Samsung (SISC)', 'Samsung (SDS)', 'Sandip University', 'SAP LABS', 'Sentiss Pharma', 'Service Now', 
'ShopX', 'Siemens', 'Siemens Gamesa', 'Sigmoid Analytics', 'Signal Chip', 'Signaltron', 'Slice', 'Smarton', 'SmartPrix', 'SMS Datatech', 'Sprinklr', 'Statlabs Analytics', 'Stellarix', 'Swastik Classes', 'Swiggy'],['Tata Motors', 'Tata Steel Ltd', 'Target', 'TCS', 'TCS IT', 'TCS R&D', 'Tecumseh', 'Tejas Networks', 'Tescra', 'Tetcos', 'Texas Instruments', 'TG Campus', 'The solar labs', 'Time tooth Technologies Pvt. Ltd', 'TMIToppr', 'Tork Motors Pvt. Ltd.', 'TRAI', 'Trident','Truminds','Truring Softek Pvt. Ltd'],['Udaan','UnDosTres','Ushvaa'],['Vehant','Veratech','Videocon Technologies','Vidyamandir Classes','Visa','VMware Inc.'],['Walmart Labs','Walkover','Webstaff Co., Lid','Wipro Limited','Wisig Networks Pvt. Ltd.','Works Application','Wunderman'],['Xebia IT Architects India Pvt'],['Yodlee','Yokogawa'],[]]
    let [name, setname] = useState(names[0]);

    const handleclick = (e) =>{
        e.preventDefault();
        let val=(e.target.id).charCodeAt(0);
        name= setname(names[val-64])
    }


    return (
        <>
            <div class="AlphabetNav container">
                <a id="@" onClick={handleclick}>#</a>
                <a id="A" onClick={handleclick}>A</a>
                <a id="B" onClick={handleclick}>B</a>
                <a id="C" onClick={handleclick}>C</a>
                <a id="D" onClick={handleclick}>D</a>
                <a id="E" onClick={handleclick}>E</a>
                <a id="F" onClick={handleclick}>F</a>
                <a id="G" onClick={handleclick}>G</a>
                <a id="H" onClick={handleclick}>H</a>
                <a id="I" onClick={handleclick}>I</a>
                <a id="J" onClick={handleclick}>J</a>
                <a id="K" onClick={handleclick}>K</a>
                <a id="L" onClick={handleclick}>L</a>
                <a id="M" onClick={handleclick}>M</a>
                <a id="N" onClick={handleclick}>N</a>
                <a id="O" onClick={handleclick}>O</a>
                <a id="P" onClick={handleclick}>P</a>
                <a id="Q" onClick={handleclick}>Q</a>
                <a id="R" onClick={handleclick}>R</a>
                <a id="S" onClick={handleclick}>S</a>
                <a id="T" onClick={handleclick}>T</a>
                <a id="U" onClick={handleclick}>U</a>
                <a id="V" onClick={handleclick}>V</a>
                <a id="W" onClick={handleclick}>W</a>
                <a id="X" onClick={handleclick}>X</a>
                <a id="Y" onClick={handleclick}>Y</a>
                <a id="Z" onClick={handleclick}>Z</a>
            </div>
            <div className="container">
                <div className="values row">
                    {name.map((item)=>{
                        return <div className="company col-lg-3 col-md-4 col-sm-6 col-xs-12">{item}</div>;
                    })}
                </div>
            </div>
        </>

    )
}

export default Past