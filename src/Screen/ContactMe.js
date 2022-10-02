import React from 'react'
import '../Styles/ContactMe.css'



export default function ContactMe() {

    return (
        <div className='ContactBody'>
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
                    gender
                </div>
            </div>
            <div className='ContactInputDivMess'>
                <input placeholder="Messege" className='ContactInputMess'></input>
            </div>
            <button type="submit" className="ContactBottuntDiv" >
            <p className="ContactBottuntH1">Send message</p>
          </button>
        </div>
    )
}


