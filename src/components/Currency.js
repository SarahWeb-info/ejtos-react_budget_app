import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./Currency.css";

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}

   return (
		<div className='alert alert-secondary'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#6fee7d', color:'white'}} >Currency
      <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} >
        <option className="hoverOpt" value="£" >£ Pound</option>
        <option className="hoverOpt" value="$">$ Dollar</option>
        <option className="hoverOpt" value="€">€ Euro</option>
        <option className="hoverOpt" value="₹">₹ Rupee</option>
      </select>	
      </label>
      	
    </div>
	);
};

export default Currency;