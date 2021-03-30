import React from 'react';

export default function User({user}){
return(
    <div
  style={{
    border: "1px solid black",
    borderRadius: "5px",
    padding: "15px",
  }}
>
  <div> First Name: {user.first_name}</div>
  <div> Last Name: {user.last_name}</div>
  <div> Email: {user.email}</div>
  <div> Phone: {user.phone_number}</div>
</div>

);
}