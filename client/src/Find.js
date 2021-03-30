import React from 'react';
import {useForm} from 'react-hook-form';
import UsersList from './ShowUsers';

export default function FindByLastName(){
    //state is managed using useForm *** 
    const {register, handleSubmit} = useForm();

    const[users, setUsers] = React.useState([]);
    

//function to call API 
    const viewData = async ()=> {
        try {
            let response = await fetch(
                "http://localhost:5000/contacts"
            )
            return await response.json();

        } catch (error) {
            console.log("Error!", error);
            
        }

    }

    // const onSubmit = (data) => {
    //     //will only ever register if valid 
    //  console.log(data)
    //  //console log json blob 

    // }

    return (
        <>
        <br/>
        <div>
            <form onSubmit= {handleSubmit(viewData)}>
                <input type= 'text' placeholder= 'Last Name' name= 'last_name' ref= {register}/><br/>
                <input type='submit'onClick= {async ()=>{
            //functionality use viewData 
            const result= await viewData();
            //users=result
            setUsers(result);
            }}/>
            </form>
            {/* <button onClick= {async ()=>{
            //functionality use viewData 
            const result= await viewData();
            //users=result
            setUsers(result);
            }}>
            show all contacts with Last Name
            </button> */}
        </div>
        <br/>
        <UsersList users = {users}/>

        </>
    );
}