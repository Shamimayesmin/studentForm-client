import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider.";

const Navbar = () => {
    
	const { user} = useContext(AuthContext);
	

	return (
		<div className="navbar flex justify-between w-full shadow-lg">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact justify-end dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						
						
					
						<li><Link to="/dashboard">Dashboard</Link></li>
						<li>
							<Link to="/">Log In</Link>
						</li>
					</ul>
				</div>
				<img
						alt=""
						className="w-12 h-12 mr-2 ring-1 rounded-full ring-offset-4 dark:bg-gray-500  ring-offset-gray-800 tooltip"
						src='https://i.ibb.co/10yWY09/student-logo.png'
					/>
			</div>
			<div className="navbar-end mr-8 hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					
                    
					{user?.uid?
						<>
						<li><Link to="/dashboard/addstudent">Dashboard</Link></li>
						
						</>
						:
						<li>
						<Link to="/">Log In</Link>
						</li>
					}
					
					
				</ul>
			</div>

			{/* userprofile photo showing */}
			<>
				{user?.photoURL ? (
					<img
						alt=""
						className="w-12 h-12 mr-2 ring-1 rounded-full ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800 tooltip"
						src={user?.photoURL}
					/>
				) : (
					<FaUser className=""></FaUser>
				)}
			</>

            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
			</label>
		</div>
	);
};

export default Navbar;
