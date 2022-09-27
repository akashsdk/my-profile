import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import "../Styles/ContactMe.css";
import { UserOutlined } from '@ant-design/icons';



export default function ContactMe() {

    return (
        <div>
            <div className='ContactMeDiv'>
                <div className='ContactInputDiv'>
                    <h1>Name:</h1>
                    <div className='ContactInputDiv2'>
                        <Input className='ContactInput' placeholder='Name'></Input>
                    </div>
                </div>
            </div>
        </div>
    )
}


