import React, { useState } from "react";
import "../../styles/home.css";

export const Add = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const handleChange = (event, set) => {
		set(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("Form submitted:", { name, email, phone, address });
	};

	return (
		<div className="text-center mt-5 m-4 m-4 border-5">
			<div>
				<h2>Add a new contact</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="fullName" className="d-flex flex-row mt-2 m-1">Full Name</label>
						<input
							type="text"
							className="form-control"
							id="fullName"
							placeholder="Full Name"
							onChange={(e) => handleChange(e, setName)}
							value={name}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1" className="d-flex flex-row mt-2 m-1">Email</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							placeholder="Enter email"
							onChange={(e) => handleChange(e, setEmail)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone" className="d-flex flex-row mt-2 m-1">Phone</label>
						<input
							type="number"
							className="form-control"
							id="phone"
							placeholder="Enter Phone"
							onChange={(e) => handleChange(e, setPhone)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="address" className="d-flex flex-row mt-2 m-1">Address</label>
						<input
							type="text"
							className="form-control"
							id="address"
							placeholder="Enter address"
							onChange={(e) => handleChange(e, setAddress)}
							value={address}
						/>
					</div>

					<button type="submit" className="btn btn-primary w-100">
						Save
					</button>
				</form>
			</div>
		</div>
	);
};
