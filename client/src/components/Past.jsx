import React, { useState } from 'react';


const Past = () => {
    let names=[['1mg'],['Accenture', 'Accolite', 'Addverb Technologies', 'Adobe', 'AgNext', 'Aizant Drugs', 'Alstom', 'Altair', 'Amagi Media', 'Amazon', 'Aptean', 'ARC dampers', 'ArcelorMittal Nippon Steel', 'Arcesium', 'Arista Networks', 'Atom', 'Avalara', 'Axxela']]
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