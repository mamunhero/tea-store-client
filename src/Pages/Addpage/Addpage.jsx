import AddCoffee from "../../Components/Button/AddCoffeeBtn";
import Form from "../../Components/Form";

const Addpage = () => {
  return (
    <div className="bg-[#F4F3F0;] py-10">
      <div className="text-center">
        <h1 className="text-5xl text-[#374151] font-Rancho font-normal mb-5">Add New Coffee</h1>
        <p className="font-Raleway text-lg text-gray-400 md:w-1/2 mx-auto mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      </div>
      <Form></Form>
     
    </div>
  );
};

export default Addpage;