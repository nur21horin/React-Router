import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  const { name } = users;
  return (
    <div>
    <h1>This is users........</h1>
      <div>
        {users.map((p) => (
          <h3 key={p.id}>{p.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default Users;
