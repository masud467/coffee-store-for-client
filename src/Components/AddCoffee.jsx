// import { data } from "autoprefixer";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        form.reset()

        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)

        fetch('http://localhost:7000/coffee',{
            method:"POST",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


  return (
    <div className="p-24 bg-[#F4F3F0]">
        <h1 className="text-3xl font-bold text-center">Add new coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* form name & quantity row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        {/* form supplier & taste row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="taste"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        {/* form Category & Details row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        {/* form photo row */}
        <div className="flex gap-4 ">
          <div className="form-control md:w-full ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Coffee Name"
                className="input input-bordered w-full "
              />
            </label>
            <div className="label"></div>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C]" />
      </form>
    </div>
  );
};

export default AddCoffee;
