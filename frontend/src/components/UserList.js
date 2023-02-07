import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5050/users");
    setUser(response.data);
  };

  return (
    <div className="p-6">
      <h1 className="has-text-centered has-text-weight-bold is-uppercase">
        Fullstack CRUD Profile
      </h1>
      <div className="columns mt-5 is-centered">
        <div className="column is-half has-text-centered">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button className="button is-small is-link mr-1">
                      Edit
                    </button>
                    <button className="button is-small is-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
