import React from "react";

const StudentModal = ({ studentForm, setStudentForm, refetch }) => {
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

					<form className="grid grid-cols-1 gap-3 mt-10">
						<div>
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Name"
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
								type="number"
								placeholder="Pincode"
								defaultValue={studentForm.pincode}
								className="input input-bordered w-full"
								readOnly
							/>
						</div>

						<br />
					</form>
				</div>
			</div>
		</>
	);
};

export default StudentModal;
