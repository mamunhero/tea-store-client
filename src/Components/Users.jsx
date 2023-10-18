import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  const [user, setUser] = useState(loadedUser);
  const handelDeleteButton = (id) => {
    console.log(id);
    fetch(`https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("data hasbeen delete");
          // remove data fron ui
          const remaining = user.filter((cof) => cof._id !== id);
          setUser(remaining);
        }
      });
  };

  return (
    <div>
      <h2>Users:{loadedUser.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreateAt</th>
              <th>Favorite Color</th>
              <th>Acton</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((user) => (
              <tr key={user._id} className="bg-base-200">
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>Blue</td>
                <td>
                  <button onClick={() => handelDeleteButton(user._id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
