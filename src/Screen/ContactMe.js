import React from 'react';
import '../Styles/ContactMe.css';
import { Button, message } from 'antd';
import { firestore } from "./../firebase";
import { collection, addDoc } from "firebase/firestore";

import Select from 'react-select'

const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Femal', label: 'Femal' },
    { value: 'Other', label: 'Other' }
]
const key = 'updatable';


export default function ContactMe() {
    const [select,setSelect]=React.useState();
    const [Name,setName]=React.useState();
    const [Email,setEmail]=React.useState();
    const [Phone,setPhone]=React.useState();
    const [Text,setText]=React.useState();

    const openMessage = async () => {
        if(!Name){
            setTimeout(() => {
                message.success({ content: 'Name null!', key, duration: 2 });
            }, 1000);

            return
        }
        message.loading({ content: 'Loading...', key });
        try {
            await addDoc(collection(firestore, "contact"), {
                email: Email,
                phone: Phone,
                gender:select,
                name:Name,
                text:Text,
            });
            console.log("Success");
            setTimeout(() => {
                message.success({ content: 'Loaded!', key, duration: 2 });
                console.log("Success And Done");
            }, 1000);
            window.location.reload()
            //window.location.href="wwww.google.com"
        } catch (err) {
            setTimeout(() => {
                message.success({ content: err.message, key, duration: 2 });
                console.log("Success And Done");
            }, 1000);
        }
    
    };
    return (
        <div className='ContactBody'>
            <div style={{ height: '20px' }} />
            <div className='ContactInputDiv'>
                <input onChange={e=>{
                    setName(e.target.value)
                }} placeholder="Nmae" className='ContactInput'></input>
            </div>
            <div className='ContactInputDiv'>
                <input onChange={e=>{
                    setEmail(e.target.value)
                }} placeholder="E-mail" className='ContactInput'></input>
            </div>
            <div className='ContactInputDiv1'>
                <div className='ContactInputDiv'>
                    <input onChange={e=>{
                    setPhone(e.target.value)
                }} placeholder="Phone Number" className='ContactInput'></input>
                </div>
                <div className='ContactInputDiv2'>
                    <Select  onChange={(e)=>{
                        setSelect(e.value)
                    }} options={options} className='ContactInputSelect'></Select>
                </div>
            </div>
            <div className='ContactInputDivMess'>
                <input onChange={e=>{
                    setText(e.target.value)
                }} placeholder="Messege" className='ContactInputMess'></input>
            </div>
            <Button type="submit" className="ContactBottuntDiv" onClick={openMessage} >
                <p className="ContactBottuntH1">Send Message</p>
            </Button>
        </div>
    )
}


