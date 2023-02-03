import React from "react";

const StudentModal = ({ studentForm, setStudentForm, refetch }) => {
	// console.log(studentForm);
	// const{firstName,class,division,landmark,pincode,roll,city,addressone} = studentForm
	return (
		<>
			<input type="checkbox" id="booking-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative w-96">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					{/* <h3 className="text-lg font-bold">{title}</h3> */}

					<form
						// onSubmit={handleBooking}
						className="grid grid-cols-1 gap-3 mt-10"
					>
						<div>
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Name"
								// defaultValue={location}
								value={studentForm.firstName}
								className="input input-bordered w-full"
								readOnly
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Class</span>
							</label>
							<input
								type="text"
								placeholder="class"
								// defaultValue={resalePrice}
								value={studentForm.class}
								className="input input-bordered w-full"
								readOnly
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Roll</span>
							</label>
							<input
								// name="name"
								type="text"
								placeholder="Roll"
								defaultValue={studentForm.roll}
								readOnly
								className="input input-bordered w-full"
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Division</span>
							</label>
							<input
								type="text"
								placeholder="Division"
								defaultValue={studentForm.division}
								readOnly
								className="input input-bordered w-full"
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Address</span>
							</label>
							<input
								// name="phone"
								type="text"
								placeholder="Address"
								defaultValue={studentForm.addressone}
								className="input input-bordered w-full"
								readOnly
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">Lankmark</span>
							</label>
							<input
								// name="phone"
								type="text"
								placeholder="Lankmark"
								defaultValue={studentForm.landmark}
								className="input input-bordered w-full"
								readOnly
							/>
						</div>

						<div>
							<label className="label">
								<span className="label-text">City</span>
							</label>
							<input
								// name="phone"
								type="text"
								placeholder="City"
								defaultValue={studentForm.city}
								className="input input-bordered w-full"
								readOnly
							/>
						</div>
						<div>
							<label className="label">
								<span className="label-text">Pincode</span>
							</label>

							<input
								// name="phone"
								type="number"
								placeholder="Pincode"
								defaultValue={studentForm.pincode}
								className="input input-bordered w-full"
								readOnly
							/>
						</div>

						<br />
						{/* <input
							className="w-full btn btn-error"
							type="submit"
							value="submit"
						/> */}
					</form>
				</div>
			</div>
		</>
	);
};

export default StudentModal;
