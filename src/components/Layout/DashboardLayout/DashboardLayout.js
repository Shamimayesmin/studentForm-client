import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { MdManageSearch } from "react-icons/md";
import { AuthContext } from "../../../context/AuthProvider.";

const DashboardLayout = () => {
    const { user, logOut } = useContext(AuthContext);
    const navegate = useNavigate();
	

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.error(err));
			navegate('/login')
	};
	return (
		<div className="mt-7">
			{/* <Navbar></Navbar> */}
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side sm:text-black bg-rose-50 mt-10">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80">
						<>
							<li className="hover:bg-red-600 hover:text-white rounded-lg">
								<Link to="/dashboard/addstudent" className="text-center">
									<FiUsers className="ml-7"></FiUsers>
									Add Student
								</Link>
							</li>
							<li className="hover:bg-red-600 hover:text-white rounded-lg">
								<Link to="/dashboard/manage">
									<MdManageSearch className="ml-7" />
									Manage Student
								</Link>
							</li>
							<li className="hover:bg-red-600 hover:text-white rounded-lg">
								<button onClick={handleLogOut}>
									<FiLogOut className="ml-7" />
									Log Out
								</button>
							</li>
						</>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
