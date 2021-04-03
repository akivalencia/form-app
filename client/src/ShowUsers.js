import React from "react";

//show the users
//there is a prop called result
export default function UsersList({ users }) {
  //an array of objects

  return (
    <div>
      {/* {JSON.stringify(users)} */}
      {/* filter by last name 
    need that name to be a prop  */}

      {users.map((user) => (
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
      ))}
    </div>

    // something
  );
}

//hard coded last name L see if works
//filter function
//pass prop (whatever is put into last Name)
