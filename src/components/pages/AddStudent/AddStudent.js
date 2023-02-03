import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const navigate = useNavigate();

	const handleAddStudent = (data) => {
		console.log(data);
		const studentInfo = {
			firstName: data.firstName,
			middleName: data.middleName,
			lastName: data.lastName,
			class: data.class,
			division: data.division,
			roll: data.roll,
			addressone: data.addressone,
			addresstwo: data.addresstwo,
			landmark: data.landmark,
			city: data.city,
			pincode: data.pincode,
		};
		console.log(studentInfo);
		fetch("https://student-form-server.vercel.app/information", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(studentInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					toast.success("Student Information added");
					navigate("/dashboard/manage");
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<h2 className="text-2xl ml-14">Add Student</h2>
			<div className="w-full mx-auto bg-red-50 rounded-lg p-6">
				<form onSubmit={handleSubmit(handleAddStudent)}>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div>
							<input
								{...register("firstName", {
									required: "First Name is required",
								})}
								type="text"
								placeholder="First Name"
								className="input input-bordered w-full"
							/>
							{errors.firstName && (
								<p className="text-red-500">{errors.firstName?.message}</p>
							)}
						</div>

						<div>
							<input
								{...register("middleName", {
									required: "Middle Name is required",
								})}
								type="text"
								placeholder="Middle Name"
								className="input input-bordered w-full"
							/>
							{errors.middleName && (
								<p className="text-red-500">{errors.middleName?.message}</p>
							)}
						</div>

						<div>
							<input
								{...register("lastName", { required: "Last Name is required" })}
								type="text"
								placeholder="Last Name"
								className="input input-bordered w-full"
							/>
							{errors.lastName && (
								<p className="text-red-500">{errors.lastName?.message}</p>
							)}
						</div>

						<div>
							<select
								{...register("class", { required: " Class is required" })}
								className="select border w-full"
							>
								<option disabled selected>
									Select Class
								</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
								<option>11</option>
								<option>12</option>
							</select>
							{/* <input
							{...register("class", { required: " Class is required" })}
							type="text"
							placeholder="Select Class"
							className="input input-bordered w-full"
						/> */}
							{errors.class && (
								<p className="text-red-500">{errors.class?.message}</p>
							)}
						</div>

						<div>
							<select
								{...register("division", { required: " Division is required" })}
								className="select border w-full"
							>
								<option disabled selected>
									Select Division
								</option>
								<option>A</option>
								<option>B</option>
								<option>C</option>
								<option>D</option>
								<option>E</option>
							</select>
							{/* <input
							{...register("division", { required: " Division is required" })}
							type="text"
							placeholder="Select Division"
							className="input input-bordered w-full"
						/> */}
							{errors.division && (
								<p className="text-red-500">{errors.division?.message}</p>
							)}
						</div>

						<div>
							<input
								{...register("roll", {
									required: " Roll is required",
									minLength: {
										value: 2,
										message: "Roll should be 2 digit",
									},
								})}
								type="text"
								placeholder="Enter Roll Number in Digits"
								className="input input-bordered w-full"
							/>
							{errors.roll && (
								<p className="text-red-500">{errors.roll?.message}</p>
							)}
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7">
						<textarea
							{...register("addressone", {
								required: " Address one is required",
							})}
							className="textarea textarea-bordered h-24 w-full mt-5"
							placeholder="Address Line 1"
						></textarea>
						<textarea
							{...register("addresstwo", {
								required: " Address two is required",
							})}
							className="textarea textarea-bordered h-24 w-full mt-5"
							placeholder="Address Line 2"
						></textarea>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
						<div>
							<input
								{...register("landmark", { required: " Landmark is required" })}
								type="text"
								placeholder="Landmark"
								className="input input-bordered w-full"
							/>
							{errors.landmark && (
								<p className="text-red-500">{errors.landmark?.message}</p>
							)}
						</div>

						<div>
							<input
								{...register("city", { required: " City is required" })}
								type="text"
								placeholder="City"
								className="input input-bordered w-full"
							/>
							{errors.city && (
								<p className="text-red-500">{errors.city?.message}</p>
							)}
						</div>

						<div>
							<input
								{...register("pincode", {
									required: " Pincode is required",
									minLength: {
										value: 6,
										message: "Pincode should be 6 digit",
									},
								})}
								type="text"
								placeholder="Pincode"
								className="input input-bordered w-full"
							/>
							{errors.pincode && (
								<p className="text-red-500">{errors.pincode?.message}</p>
							)}
						</div>
					</div>

					<input
						className="btn mt-4 mb-5 bg-red-600 px-14"
						type="submit"
						value="Add Submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default AddStudent;
