import React from 'react'
import '../Styles/ContactMe.css';

import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function ContactMe() {

    return (
        <div className='ContactBody'>
            <div style={{ height: '20px' }} />
            <div className='ContactInputDiv'>
                <input placeholder="Nmae" className='ContactInput'></input>
            </div>
            <div className='ContactInputDiv'>
                <input placeholder="E-mail" className='ContactInput'></input>
            </div>
            <div className='ContactInputDiv1'>
                <div className='ContactInputDiv'>
                    <input placeholder="Phone Number" className='ContactInput'></input>
                </div>
                <div className='ContactInputDiv2'>
                <Select options={options} />
                </div>
            </div>
            <div className='ContactInputDivMess'>
                <input placeholder="Messege" className='ContactInputMess'></input>
            </div>
            <button type="submit" className="ContactBottuntDiv" >
                <p className="ContactBottuntH1">Send Message</p>
            </button>
        </div>
    )
}


