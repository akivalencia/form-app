import React from "react";
import User from './User';

//show the users
//there is a prop called result
export default function UsersList({ users }) {
  //need to pass the prop name
  return (
    <div>
      {/* {JSON.stringify(users)} */}
      {users
        .filter((user) => user.last_name === "L")
        .map((user) => (
            <User user={user}/>
        ))}
    </div>

    // something
  );
}
