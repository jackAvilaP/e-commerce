import React from 'react'
import '../styles/Accordion.css';
import Category from './Category';
import Price from './Price';


const Acoordion = ({ title, active, setActive, busqueda, first ,setFirst}) => {
    return (
        <div className='accordion'>
            <div className='accordionHeading' onClick={() => {setActive(title);setFirst(!first)}}>
                <div className='container'>
                    <p>{title}</p>
                    <span >
                        {
                            active === title && first? "X" : "-"
                        }
                    </span>
                </div>
            </div>
            <div className={(active === title && first? "show " : "") + " acoordionContent"}>
                <div className='container'>
                    <div>
                        {
                            busqueda === "price"  ? <Price /> : <Category/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acoordion;