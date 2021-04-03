import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import UsersList from "./ShowUsers";
import FindByLastName from "./Find";

export default function Form() {
  //state is managed using useForm ***
  const { register, handleSubmit } = useForm();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function viewUsers() {
      const result = await viewData();
      setUsers(result);
    }
    viewUsers();
  }, []);

  //function to call API
  const viewData = async () => {
    try {
      let response = await fetch("http://localhost:5000/contacts");
      return await response.json();
    } catch (error) {
      console.log("Error!", error);
    }
  };

  const sendData = async (data) => {
    console.log(data);
    try {
      let response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      });
        const resObj = await response.json();
        const newUser = resObj.rows[0];
        setUsers(users.concat(newUser));
    } catch (error) {
      console.log("Error!", error);
    }
  };

  // const onSubmit = (data) => {
  //     //will only ever register if valid
  //  console.log(data)
  //  //console log json blob

  // }

  return (
    <>
      <br />
      <div>
        <form onSubmit={handleSubmit(sendData)}>
          <input
            type="text"
            id="email"
            placeholder="email"
            name="email"
            ref={register}
          />
          <br />
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            ref={register}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            ref={register}
          />
          <br />
          <input
            type="tel"
            placeholder="1234567"
            name="phone_number"
            ref={register}
          />
          <br />
          <input type="submit" />
        </form>
        <FindByLastName users={users} />
        {/* <button onClick= {async ()=>{
            //functionality use viewData 
            const result= await viewData();
            //users=result
            setUsers(result);
            }}>
            show all contacts 
            </button> */}
      </div>
      <br />
      <UsersList users={users} />
    </>
  );
}
