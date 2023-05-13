import { HiPlusSm } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import chocolate from "../src/assets/chocolate-bar.png";
import ChocolateTable from "./components/ChocolateTable";
import { useState } from "react";

function App() {
  const loadedChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadedChocolates);

  return (
    <main className="my-container">
      <h2 className="my-bg text-white text-3xl font-semibold text-center w-fit mx-auto p-4 mb-12">
        Chocolate Management System
      </h2>
      <Link to="/addChocolate">
        <span className="flex items-center text-xl gap-1 border w-fit p-4 rounded-md hover:bg-slate-100">
          <HiPlusSm /> New Chocolate <img src={chocolate} alt="chocolate" />
        </span>
      </Link>

      <section className="my-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-amber-700/50">
              <tr>
                <th className="py-5">Image</th>
                <th>Name</th>
                <th>Country/Factory</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {chocolates.map((chocolate) => (
                <ChocolateTable
                  key={chocolate._id}
                  chocolate={chocolate}
                  chocolates={chocolates}
                  setChocolates={setChocolates}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
