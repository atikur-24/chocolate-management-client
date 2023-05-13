import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddChocolate = () => {
  const handleAddChocolate = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const photo = form.photo.value;
    const category = form.category.value;

    const newChocolate = {name, country, photo, category};
    console.log(newChocolate);
    if( name === ''  || country === '' || photo === '' ) {
      return Swal.fire({
        title: 'Warning!',
        text: 'Pleas fill up input field',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }

    fetch('http://localhost:5000/chocolates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newChocolate)
    })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if(data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Chocolate added successfully!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
      form.reset();
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
        <form onSubmit={ handleAddChocolate } className="bg-slate-100 py-12 px-28">
          <h3 className="text-center font-semibold text-2xl">New Chocolates</h3>
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
            // defaultValue={}
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
          />
         </div>
         <div className="mb-8">
            <label className="block font-semibold mb-2" htmlFor="dropdown">
            <span className="font-semibold">Category</span>
            </label>
            <select
              className="input w-full"
              name="category"
              id="dropdown"
            >
              <option value="Premium">Premium</option>
              <option value="Regular">Regular</option>
            </select>
          </div>
          <button className="bg-orange-800 hover:bg-orange-900 py-3 text-white w-full rounded-sm font-semibold">Save</button>
        </form>
    </section>
  );
};

export default AddChocolate;
