import React from 'react';
import '../Styles/ContactMe.css';
import { Button, message } from 'antd';

import Select from 'react-select'

const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Femal', label: 'Femal' },
    { value: 'Other', label: 'Other' }
]
const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  console.log("Success");
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
    console.log("Success And Done");
  }, 1000);
};

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
                    <Select options={options} className='ContactInputSelect'></Select>
                </div>
            </div>
            <div className='ContactInputDivMess'>
                <input placeholder="Messege" className='ContactInputMess'></input>
            </div>
            <Button type="submit" className="ContactBottuntDiv" onClick={openMessage} >
                <p className="ContactBottuntH1">Send Message!</p>
            </Button>
        </div>
    )
}


