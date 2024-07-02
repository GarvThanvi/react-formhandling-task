import React from "react";

export default function Card(info){
  return (
    <div style={{margin: '10px',border: 'solid' ,borderColor: 'black', borderRadius: '20px', padding: '20px'}}>
      <div style={{ display: "flex", gap: '10px', alignItems: 'center' , justifyContent: 'space-between'}}>
        <h3>{info.info.fname} {info.info.lname}</h3>
        <p>{info.info.email}</p>
        <p>{info.info.phone}</p>
      </div>

      <p style={{margin: '0'}}>{info.info.message}</p>
    </div>
  );
}
