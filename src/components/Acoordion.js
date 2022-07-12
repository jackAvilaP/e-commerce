import React from 'react'
import '../styles/Accordion.css';
import Category from './Category';
import Price from './Price';


const Acoordion = ({ title, active, setActive, busqueda, toggle ,setToggle}) => {
    return (
        <div className='accordion'>
            <div className='accordionHeading' onClick={() => {setActive(title);setToggle(!toggle)}}>
                <div className='container'>
                    <p>{title}</p>
                    <span >
                        {
                            active === title && toggle? "X" : "-"
                        }
                    </span>
                </div>
            </div>
            <div className={(active === title && toggle? "show " : "") + " acoordionContent"}>
                <div className='container'>
                    
                        {
                            busqueda === "price"  ? <Price /> : <Category/>
                        }
                    
                </div>
            </div>
        </div>
    )
}

export default Acoordion;