import React from 'react';
import { toast } from 'react-hot-toast';

const EditModal = ({ studentForm,setStudentForm, setEditForm, refetch }) => {
    console.log(studentForm);
    const {_id,} = studentForm

    const handleUpdateForm = (event) => {
		event.preventDefault();
		const updatedName = event.target.firstName.value; 
        const updatedClass = event.target.class.value;
        const updatedDivision = event.target.division.value;
        const updatedRoll = event.target.roll.value;
        const updatedAddress = event.target.addressone.value;
        const updatedLand = event.target.landmark.value;
        const updatedCity = event.target.city.value;
        const updatedPin = event.target.pincode.value;
        

		fetch(` http://localhost:5000/edit/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({updatedName, updatedClass,updatedDivision,updatedRoll,updatedAddress,updatedLand,updatedCity,updatedPin }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.matchedCount > 0) {
					toast.success("Form updated");
					event.target.reset();
					
				}
			});
	};
    return (
        <>
			<input type="checkbox" id="book-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative w-96">
					<label
						htmlFor="book-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					

					<form
						onSubmit={handleUpdateForm}
						className="grid grid-cols-1 gap-3 mt-10"
					>
						<div>
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Name"
                                name='firstName'
                                id='firstName'
								className="input input-bordered w-full"
								
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Class</span>
							</label>
							<input
								type="number"
								placeholder="class"
								name='class'
                                id='class'
								className="input input-bordered w-full"
								
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Roll</span>
							</label>
							<input
								name="roll"
                                id='roll'
								type="number"
								placeholder="Roll"
								className="input input-bordered w-full"
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Division</span>
							</label>
							<input
								type="text"
                                name='division'
                                id='division'
								placeholder="Division"	
								className="input input-bordered w-full"
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Address</span>
							</label>
							<input
								name="addressone"
                                id='addressone'
								type="text"
								placeholder="Address"
								className="input input-bordered w-full"
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Lankmark</span>
							</label>
							<input
								name="landmark"
                                id='landmark'
								type="text"
								placeholder="Lankmark"						
								className="input input-bordered w-full"
								
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">City</span>
							</label>
							<input
								name="city"
                                id='city'
								type="text"
								placeholder="City"
								
								className="input input-bordered w-full"
								
							/>
						</div>
						<div>
							<label className="label">
								<span className="label-text">Pincode</span>
							</label>

							<input
								name="pincode"
                                id='pincode'
								type="number"
								placeholder="Pincode"
								
								className="input input-bordered w-full"
								
							/>
						</div>

						<br />
						<input
							className="w-full btn bg-red-600"
							type="submit"
							value="Save Change"
						/>
					</form>
				</div>
			</div>
		</>
    );
};

export default EditModal;