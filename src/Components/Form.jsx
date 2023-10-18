import Swal from "sweetalert2";
import AddCoffee from "./Button/AddCoffeeBtn";

const handleAddTea = (event) => {
  event.preventDefault();
  const from = event.target;
  const name = from.name.value;
  const chef = from.chef.value;
  const taste = from.taste.value;
  const supplier = from.supplier.value;
  const category = from.category.value;
  const details = from.details.value;
  const photo = from.photo.value;
  const updatedTea = { _id, name, chef, taste, supplier, category, details, photo };
  // console.log(newTea);
  fetch(`https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/tea/${_id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updatedTea),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Tea updated successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        from.reset();
      }
    });
};

const Form = () => {
  return (
    <div>
      <form onSubmit={handleAddTea}>
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
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <AddCoffee></AddCoffee>
      </form>
    </div>
  );
};

export default Form;
