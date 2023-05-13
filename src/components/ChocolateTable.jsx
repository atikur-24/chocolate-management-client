import { HiOutlinePencil, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateTable = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, photo, name, country, category } = chocolate;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/chocolates/${id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Chocolate has been Deleted',
                        'success'
                      )
                      const remaining = chocolates.filter( chocolate => chocolate._id !== id)
                      setChocolates(remaining);
                }
              })
            }
          })
    }

    return (
        <tr className="border">
            <td><img src={photo} alt="chocolate" className="w-16" /></td> 
            <td>{name}</td> 
            <td>{country}</td> 
            <td>{category}</td> 
            <td className="flex justify-evenly items-center h-28">
                <Link to={`/updateChocolate/${_id}`} className="bg-orange-500/50 p-2 hover:bg-orange-700 h-8">
                    <span> <HiOutlinePencil /> </span>
                </Link>
                <span onClick={ () => handleDelete(_id) } className="bg-orange-500/50 p-2 cursor-pointer hover:bg-orange-700"> <HiOutlineX /> </span>
            </td>
        </tr> 
    );
};

export default ChocolateTable;