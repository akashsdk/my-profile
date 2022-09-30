import React from 'react'

export default function Footer() {
  return (
    <div>
      <p style={{
        fontSize: '30px',
        opacity: '.6'
      }}>Copyright © 2022. All rights reserved.</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'-40px',
      }}>
        <p style={{
          fontSize: '20px',
          opacity: '.6'
        }}>Developed by: </p>
        <p style={{
          fontSize: '20px',
          textDecoration:'underline',
        }}>Tasnim Shahriar Akash.</p>
      </div>
      <div style={{
        height:'30px'
      }}/>
    </div>
  )
}
