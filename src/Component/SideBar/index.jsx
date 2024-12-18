import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';

const Sidebar = ()=>{
    const [value,setValue] = useState([100,60000]);
    const [value2,setvalue2] = useState(0);

    return(
        <div className="sidebar">
            <div className="filterbox">
                <h6>PRODUCT CATEGORIES</h6>

                <div className='scroll'>
                    <ul>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Fashion" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Electronics" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Market" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Men" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Woman" />
                        </li>
                       
                    </ul>
                
                </div>

            </div>

            <div className='filterbox'>
                <h6>FILTER BY PRICE</h6>
                <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5}/>

                <div className='d-flex pt-2 pb-2 priceRange'>
                    <span>From: <strong className='text-dark'>Rs: {value[0]}</strong></span>
                    <span className='ml-auto'>From: <strong className='text-dark'>Rs: {value[1]}</strong></span>

                </div>

            </div>

            <div className="filterbox">
                <h6>PRODUCT STATUS</h6>

                <div className='scroll'>
                    <ul>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="In Stock" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="On Sale" />
                        </li>
                    
                       
                    </ul>
                
                </div>

            </div>

            <div className="filterbox">
                <h6>BRANDS</h6>

                <div className='scroll'>
                    <ul>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Nike" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Lacoste" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Prada" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Pepsi" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Milka" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Bell" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Ikea" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Coca Cola" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Celine" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Eres" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Dior" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Kenzo" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Rouje" />
                        </li>
                        <li>
                        <FormControlLabel className="w-100"control={<Checkbox defaultChecked />} label="Chanel" />
                        </li>
                       
                       
                    </ul>
                
                </div>

            </div>

            

        </div>
    )
}

export default Sidebar;