import React, { useState } from "react";

const Past = () => {
  let names = [
    //   A
    [
        "Aakash Institute",
        "ABB",
        "Achnet Technologie",
        "Accenture India",
      "Accenture",
      "Accolite",
      "ACME",
      "Addverb Technologies",
      "Adobe",
      "AgNext",
      "Agnikul Cosmos",
      "Aizant Drugs",
      "Alstom",
      "Altair",
      "Amagi Media",
      "Amazon",
      "Aptean",
      "ARC dampers",
      "ArcelorMittal Nippon Steel",
      "Arcesium",
      "Arista Networks",
      "Ascend Bizcap",
      "Ather energy",
      "Atom",
      "Atom Berg technologies",
      "Avalara",
      "Axtria",
      "Axxela",
      "Azure power"
    ],
    // B
    [
      "B Beehyv",
      "Bajaj Auto",
      "BEL",
      "Bizense Technologies",
      "Bluestar",
      "Bookmyshow",
      "Boston Ivy Healthcare Pvt ltd.",
      "BPCL",
      "Brigosha Technologies Pvt Ltd",
      "Broadridge Financial Solutions",
      "BrowserStack",
      "Buddi.AI",
      "Bueno Finance",
      "BYJU'S",
    ],
    // C
    [
      "CAD Studio",
      "Cadence",
      "CAPRI GLOBAL CAPITAL LTD",
      "Capgemini",
      "Capital Dynamics",
      "Careallianz",
      "CashFree",
      "C-DAC",
      "CeWIT",
      "Ceremorphic",
      "CG Power and Industrial Solutions",
      "CGI",
      "Chegg",
      "CISCO",
      "CL Educate",
      "Clear Trail",
      "Clicklabs",
      "Coal India",
      "Codenation",
      "Cognizant",
      "Commvault",
      "Continental India Private Limited",
      "Cortex",
      "Couture",
      "Cready Technologies Pvt Ltd",
      "Crisptag Technologies Private Limited",
      "CRISIL",
      "CSC",
      "Cubastion Consulting Pvt Ltd",
      "Cummins India Limited"
    ],
    // D
    [
        "Danfoss Industries Pvt Ltd",
      "D. E. Shaw",
      "Decision Point",
      "Delhivery",
      "Deloitte",
      "Dhrishti-Soft",
      "Digilytics",
      "DIRECTI",
      "Disha Foundation",
      "Dolcera",
      "Domino Datalab",
      "Doubtnut",
      "DP World",
      "DRDO",
      "Drishtee Foundation",
      "Dunzo",
      "Dyeus"
    ],
    // E
    [
      "EBAY",
      "eClerx Services",
      "Ecom Express",
      "Edifecs Technologies",
      "Edvizo Media Private Limited",
      "Embibe",
      "Emerson",
      "Enarka",
      "Endeavor Careers Pvt. Lid.",
      "Entuple",
      "ET Medialabs"
    ],
    // F
    [
    "FactWise (Fact Wise Tech Pvt Ltd)",
    "FIITJEE Ltd",
    "Finisar", 
    "Flipkart",
    "Flipspaces",
    "Ford Motors Pvt Ltd",
    "Fresenius Kab",
    "Frontrow",
    "Futures First",
    "FYP Money"
    ],
    // G 
    [
        "Gameskraft",
      "General Electric",
      "Genpact",
      "GMO Research",
      "Goldman Sachs",
      "GoMassive Incubators",
      "Grayquest",
      "Gridants",
      "Grofers",
    ],
    // H
    [
      "Halliburton",
      "HCL TECHNOLOGIES LTD.",
      "Helium Consulting Pvt. Ltd.",
      "Housing",
      "HPCL",
      "HSBC Technology",
      "Hyperverge",
      "Hyundai",
    ],
    // I
    [
      "IBM India",
      "ICICI Bank",
      "Ikarus Process Automation",
      "Impact Guru Technology",
      "Indeed",
      "Infoedge",
      "Infosys",
      "InfoObjects Inc",
      "Innominds",
      "Innovaccer ",
      "Innovation Line Technologies",
      "Internet Academy",
      "Intuit",
      "IOLCP",
      "IP Infusion",
      "Irage",
      "Irage Capital Advisory Pvt. Ltd.",
      "ISRO ",
    ],
    // J
    [
    "Jaguar", 
    "JP Morgan",
    "JSW", 
    "Juspay", 
    "John Deere"
    ],
    // K
    [
      "K&T Research",
      "Keyideas",
      "Khosla Labs",
      "Kisan Hub",
      "KPMG",
      "Kritikal vision",
      "Kuliza",
    ],
    // L
    [
        "L’Oréal India Pvt Ltd",
      "LafargeHolcim",
      "LatentView Analytics",
      "Lead School",
      "Leena.AI",
      "Lekha Wireless",
      "Lepton Maps",
      "LnT Constructions",
      "LnT ECC",
      "LnT infotech",
      "LnT Mumbai",
      "Log9 Materials",
      "Logic Fruit Technologies",
      "Logicfruit",
      "Loop",
      "LTI",
      "LTTS",
      "Lucideus",
    ],
    // M
    [
      "Mahindra",
      "Mahindra and Mahindra",
      "MAQ Software",
      "Marvell Semiconductor",
      "MasterCard",
      "Mathworks",
      "Maven Securites",
      "Media.net",
      "Media Net",
      "Meeso",
      "Merlytics",
      "Microsoft",
      "Mindtickle",
      "Mindworks Global Media Services",
      "Mojo Networks",
      "Morgan Stanley",
      "Morphle Labs",
      "Mphasis",
      "MPSlimited"
    ],
    // N
    [
      "Nagarro Software",
      "Nation with Namo",
      "Newzera ",
      "Nference Labs",
      "NHAI",
      "Novopay Solution",
      "NSL HUB",
      "Nucleus Software",
      "Nucleus Software Exports Ltd",
      "Nutanix Technologies India Private Ltd.",
      "Nvidia",
      "NXP Semiconductors"
    ],
    // O
    [
        "ODE holdings",
        "OLA",
        "One97",
        "Optiver Services BV", 
        "Optum", 
        "Oracle ",
        "Oxytocin", 
        "Oyo Room"
    ],
    // P
    [
      "P2Power Solutions ",
      "PalC Networks ",
      "Payme IndiaPayTM ",
      "PayU ",
      "Pentair ",
      "Perceptive Analytics ",
      "Perl Education",
      "PharmEasy ",
      "Play Simple ",
      "Planet Spark",
      "Praco Labs ",
      "Practically ",
      "ProtoTech Solutions ",
      "Publicis Sapien",
    ],
    // Q
    [
        "Qualcomm"
    ],
    // R
    [
      "R Systems ",
      "Raam group ",
      "Radisys",
      "Rajasthan Grameen Ajeevika Vikas Parishad",
      "Razorpay ",
      "Reading Right",
      "Reliance Jio ",
      "Resonance Eduventures Ltd. ",
      "RightBoat Technologies",
      "Robert Bosch ",
      "RockOn Technologies ",
      "Rubrik",
    ],
    // S
    [
      "Salesforce",
      "Sam media",
      "Samsung Noida",
      "Samsung, Bangalore",
      "Samsung (SEL)",
      "Samsung (SISC)",
      "Samsung (SDS)",
      "Sandip University",
      "SAP LABS",
      "Sapio Analytics",
      "Sentiss Pharma",
      "Service Now",
      "SGIC",
      "ShopX",
      "Siemens",
      "Siemens Gamesa",
      "Sigmoid Analytics",
      "Signal Chip",
      "Signaltron",
      "Siksha ‘O’ Anusandhan",
      "Silicon Labs",
      "Slice",
      "SLK Group",
      "Smarton",
      "SmartPrix",
      "SMS Datatech",
      "Social Lab",
      "Sprinklr",
      "SRI CHAITANYA EDUCATIONAL INSTITUTIONS",
      "ST Microelectronics",
      "Statlabs Analytics",
      "Stellarix",
      "Superset",
      "Swastik Classes",
      "Swiggy",
      "Synapse"
    ],
    // T
    [
    
        "Tata Electronics",
      "Tata Motors",
      "Tata Steel Ltd",
      "Target",
      "TCS",
      "TCS IT",
      "TCS R&D",
      "TechAdvantage System",
      "Tecumseh",
      "Tejas Networks",
      "Telecom Regulatory Authority of India (TRAI)",
      "Tescra",
      "Tetcos",
      "Texas Instruments",
      "TG Campus",
      "The solar labs",
      "Thence",
      "Tiger Analytics",
      "Time tooth Technologies Pvt. Ltd",
      "TMIToppr",
      "Tonichi",
      "Topline",
      "Tork Motors Pvt. Ltd.",
      "TRAI",
      "Tredence",
      "Tresvista",
      "Trident",
      "Trilogy Innovation",
      "Truminds",
      "Truring Softek Pvt. Ltd",
      "TVS"
    ],
    // U
    ["UBS","Uber","Udaan", "UnDosTres","Uolo Edtech", "Ushvaa"],
    // V
    [
        "VCE",
      "Vehant",
      "Veratech",
      "Videocon Technologies",
      "Vidyamandir Classes",
      "Virtusa Consulting Services Pvt Ltd",
      "Visa",
      "Viscadia",
      "VisibleBox LLP",
      "VMware Inc.",
    ],
    // W
    [
        "Walmart Global Tech India",
      "Walmart Labs",
      "Walkover",
      "Webstaff Co., Lid",
      "Willings",
      "Wipro Limited",
      "Wisig Networks Pvt. Ltd.",
      "Works Application",
      "Wrig Nanosystems Pvt Ltd",
      "Wunderman",
    ],
    // X
    ["Xebia IT Architects India Pvt"],
    // Y
    ["Yellow. AI","Yodlee", "Yokogawa","Yugabyte"],
    // Z
    ["Zomato", "ZS"],
  ];
  let [name, setname] = useState(names[0]);

  const handleclick = (e) => {
    e.preventDefault();
    let val = e.target.id.charCodeAt(0);
    name = setname(names[val - 65]);
  };

  return (
    <>
      <div style={{"margin":"30px 0px"}}>
        <hr className="left" />
        <h3 className="homeHead homeHead">Past Recruiters</h3>
        <hr className="right" />
      </div>
      <div class="AlphabetNav container">
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
          {name.map((item) => {
            return (
              <div className="company col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{"padding":"25px"}}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Past;
