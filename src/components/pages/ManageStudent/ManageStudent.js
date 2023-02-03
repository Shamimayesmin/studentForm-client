import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Student from "./Student";
import StudentModal from "./StudentModal";
import EditModal from "./EditModal";
import Loader from "../../Spinner/Loader";

const ManageStudent = () => {
	const [studentForm, setStudentForm] = useState(null);

	const {
		data: addstudent,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["addstudent"],
		queryFn: async () => {
			try {
				const res = await fetch(
					"https://student-form-server.vercel.app/information",
					{
						headers: {
							"content-type": "application/json",
						},
					}
				);

				const data = await res.json();
				return data;
			} catch (error) {}
		},
	});

	if (isLoading) {
		return <Loader></Loader>;
	}
	const handleDeleteStudent = (id) => {
		const procced = window.confirm("Do you want to delete this item");
		if (procced) {
			fetch(`https://student-form-server.vercel.app/information/${id}`, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						refetch();
						toast.success(`Student deleted successfully`);
					}
					console.log(data);
				});
		}
	};

	return (
		<section>
			<div>
				<h2 className="text-2xl ml-14 mb-3">Manage Students</h2>
				<div className="overflow-x-auto bg-red-50">
					<table className="table w-full">
						<thead>
							<tr className="bg-red-600">
								<th></th>

								<th>Name</th>
								<th>Class</th>
								<th>Roll No.</th>
								<th>View / Edit / Delete </th>
							</tr>
						</thead>
						<tbody className="bg-re-50">
							{addstudent?.map((students, i) => (
								<Student
									i={i}
									key={students._id}
									students={students}
									handleDeleteStudent={handleDeleteStudent}
									setStudentForm={setStudentForm}
								></Student>
							))}
						</tbody>
					</table>
				</div>
				{studentForm && (
					<StudentModal
						studentForm={studentForm}
						setStudentForm={setStudentForm}
						refetch={refetch}
					></StudentModal>
				)}
				{studentForm && (
					<EditModal
						studentForm={studentForm}
						setStudentForm={setStudentForm}
						refetch={refetch}
					></EditModal>
				)}
			</div>
		</section>
	);
};

export default ManageStudent;
