import React from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const Student = ({students, handleDeleteStudent, i,setStudentForm,studentForm}) => {
	// console.log(students);
    // const {_id,firstName,roll,noClass} = students


	return (
		<>
			<tr>
				<th>{i + 1}</th>

				<td className="">{students.firstName}</td>

				<td>{students.class}</td>

				<td>{students.roll}</td>

				<td className="flex text-2xl gap-3">
				
                    {/* <button className='btn ml-2 whitespace-nowrap bg-white rounded-full text-red-500 px-3 py-2 '><AiOutlineEye className="text-2xl"/></button> */}

                    <label  onClick={()=> setStudentForm(students)} htmlFor="booking-modal" className='btn ml-2 whitespace-nowrap bg-white rounded-full text-red-500 px-3 py-2 text-xs'><AiOutlineEye className="text-2xl"/></label>
                    
					
                     <label  onClick={()=> setStudentForm(students)} htmlFor="book-modal" className='btn ml-2 whitespace-nowrap bg-white rounded-full text-red-500 px-3 py-2 text-xs'><AiOutlineEdit className="text-2xl"/></label>

                    <button onClick={() => handleDeleteStudent(students._id)} className='btn ml-2 whitespace-nowrap bg-white rounded-full text-red-500 px-3 py-2 text-xs'><AiOutlineDelete
                    className="text-2xl"	
					/></button>
					
				</td>
				{/* <td>
					<label
						onClick={() => handleDeleteStudent()}
						htmlFor="confirm-modal"
						className="btn btn-sm btn-error"
					>
						<AiOutlineEdit className="text-2xl"/>
					</label>
				</td> */}
			</tr>
		</>
	);
};

export default Student;
