import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // new user has been created
        const crateAt = result.user?.metadata?.creationTime;
        const user = { email, createAt: crateAt };
        fetch("https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User added is successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="card-body">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
