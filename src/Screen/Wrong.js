import React from 'react'
import { Button, Result } from 'antd';
import { Link, } from "react-router-dom";

export default function Wrong() {
    return (
        <div style={{
            marginTop: '5px',

        }}>
            <p style={{
                opacity: '.6'
            }}>Could not find this page !</p>
            <div style={{
                marginTop: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',

            }}>

                <Result
                    status="500"
                    title=""
                    subTitle=""
                    extra={''}
                />
                <p>Sorry, something went wrong.</p>
                <Link state={{
                    color: '#fff',
                }} to="/">Go Back Home</Link>
            </div>
        </div>
    )
}
