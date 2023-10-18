import { useEffect, useState } from "react";
import TeaCard from "../../Components/TeaCard";

const Home = () => {
  const [teas, setTeas] = useState([]);
  useEffect(() => {
    fetch("https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/tea")
      .then((response) => response.json())
      .then((data) => setTeas(data));
  }, []);
  // console.log(teas);

  return (
    <div>
      <span>--- Sip & Savor ---</span>
      <h2 className="text-5xl">Our Popular Products{teas.length}</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {teas.map((tea) => (
          <TeaCard key={tea._id} tea={tea} teas={teas} setTeas={setTeas}></TeaCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
