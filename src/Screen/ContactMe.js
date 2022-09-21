import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import "../Styles/ContactMe.css";
import { UserOutlined } from '@ant-design/icons';



export default function ContactMe() {



    return (
        <div>
            <div className='ContactMeDiv'>
                <Input className='ContactMeForm' placeholder="large size" prefix={<UserOutlined />} />
                <br />
                <br />
            </div>
        </div>
    )
}


