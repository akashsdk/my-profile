import React from 'react'
import '../Styles/ContactMe.css';
import { Col, Row, Select, Button } from 'antd';

const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
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
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
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


