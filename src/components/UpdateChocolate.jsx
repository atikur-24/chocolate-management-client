import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
    const loadedChocolate = useLoaderData();
    const { _id, name, country, photo, category} = loadedChocolate;

    const handleUpdateChocolate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const category = form.category.value;
    
        const updateChocolate = {name, country, photo, category};
        console.log(updateChocolate);
        if( name === ''  || country === '' || photo === '' ) {
          return Swal.fire({
            title: 'Warning!',
            text: 'Pleas fill up input field',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
        }

        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Chocolate Updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    return (
        <section className="my-container">
        <h2 className="my-bg text-white text-3xl font-semibold text-center w-fit mx-auto p-4 mb-12">
          Chocolate Management System
        </h2>
        <Link to='/'>
          <h5 className="flex items-center gap-4 font-medium text-xl text-gray-500"> <HiArrowNarrowLeft /> All Chocolate</h5>
        </Link>
        <hr className="border my-6" />
          <form onSubmit={ handleUpdateChocolate } className="bg-slate-100 py-12 px-28">
            <h3 className="text-center font-semibold text-2xl mb-2">Update Chocolates</h3>
            <p className="text-center text-gray-500">Use the below form to create a new product</p>
           <div className="mb-8">
            <label className="label">
              <span className="font-semibold">Name</span>
            </label>
           <input
              type="text"
              placeholder="Hot Pink Chocolate"
              className="input w-full"
              name="name"
              defaultValue={name}
            />
           </div>
           <div className="mb-8">
            <label className="label">
              <span className="font-semibold">Country</span>
            </label>
           <input
              type="text"
              placeholder="Enter Country Name"
              className="input w-full"
              name="country"
              defaultValue={country}
            />
           </div>
           <div className="mb-8">
            <label className="label">
              <span className="font-semibold">Photo url</span>
            </label>
           <input
              type="text"
              placeholder="Enter Chocolate Photo"
              className="input w-full"
              name="photo"
              defaultValue={photo}
            />
           </div>
           <div className="mb-8">
              <label className="block font-semibold mb-2" htmlFor="dropdown">
              <span className="font-semibold">Category</span>
              </label>
              <select
                className="input w-full"
                name="category"
                defaultValue={category}
              >
                <option value="Premium">Premium</option>
                <option value="Regular">Regular</option>
              </select>
            </div>
            <button className="bg-orange-800 hover:bg-orange-900 py-3 text-white w-full rounded-sm font-semibold">Update Details</button>
          </form>
      </section>
    );
};

export default UpdateChocolate;