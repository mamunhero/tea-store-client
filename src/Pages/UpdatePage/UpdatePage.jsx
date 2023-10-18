import { useLoaderData } from "react-router-dom";
import UpdateCoffeeBtn from "../../Components/Button/UpdateCoffeeBtn";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const tea = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = tea || {};
  const handleUpdateTea = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const chef = from.chef.value;
    const taste = from.taste.value;
    const supplier = from.supplier.value;
    const category = from.category.value;
    const details = from.details.value;
    const photo = from.photo.value;
    const newTea = { name, chef, taste, supplier, category, details, photo };
    // console.log(newTea);
    // send date to the server
    fetch("https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/tea", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTea),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tea added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          from.reset();
        }
      });
  };
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl text-[#374151] font-Rancho font-normal mb-5">Update Existing Coffee Details:{name}</h1>
        <p className="font-Raleway text-lg text-gray-400 md:w-1/2 mx-auto mb-5">
          It is a long established fact that a reader will be distraceted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using Content here.
        </p>
      </div>
      <div>
        <form onSubmit={handleUpdateTea}>
          <div className="flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter coffee name"
                  defaultValue={name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="chef"
                  required
                  placeholder="Enter coffee chef"
                  defaultValue={chef}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  required
                  placeholder="Enter coffee taste"
                  defaultValue={taste}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  required
                  placeholder="Enter coffee supplier"
                  defaultValue={supplier}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  required
                  placeholder="Enter coffee category"
                  defaultValue={category}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  required
                  placeholder="Enter coffee details"
                  defaultValue={details}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Enter photo URL"
                  defaultValue={photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <UpdateCoffeeBtn></UpdateCoffeeBtn>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
