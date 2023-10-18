import icon from "../../src/assets/images/Frame.svg";
import icontwo from "../../src/assets/images/Frame-two.svg";
import iconthree from "../../src/assets/images/delete.svg";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const TeaCard = ({ tea, setTeas, teas }) => {
  const { _id, name, chef, taste, photo } = tea || {};
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/tea/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coffee has been deleted", "success");
            }
            const remaining = teas.filter((cof) => cof._id !== _id);
            setTeas(remaining);
          });
        // console.log(setTeas);
      }
    });
  };
  return (
    <div className="mt-10 mb-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <p className="font-bold">
              Name: <span className="text-gray-500 font-normal">{name}</span>
            </p>
            <img src={icon} alt="" className="bg-[#D2B48C] border-[#D2B48C] w-12 h-10" />
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">
              Chef: <span className="text-gray-500 font-normal">{chef}</span>
            </p>
            <Link to={`updatepage/${_id}`}>
              <img src={icontwo} alt="" className="bg-[#3C393B] border-[#3C393B] w-12 h-10" />
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">
              Taste: <span className="text-gray-500 font-normal">{taste}</span>
            </p>
            <img
              onClick={() => handleDelete(_id)}
              src={iconthree}
              alt=""
              className="bg-[#EA4744;] border-[#EA4744] w-12 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaCard;
