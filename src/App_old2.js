import React, {useState, useEffect} from 'react'
import axios from 'axios';
// -----
const App = function () {
	const [users, setUsers] = useState(null);

    const [username, setUsername] = useState("");
    const [userfirstname, setUserfirstname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
	useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

    let usersToRender=[];
    if(users)
    {usersToRender=users && users.map((user, index) => (
            <li key={index}>
            Name: {user.username} - Firstname: {user.userfirstname} - Email: {user.email} - Phone: {user.phone}
            </li>
    ))}

	function submitForm() {
		if (username === "") {
			alert("Please fill the username field");
			return;
        }
        if (userfirstname === "") {
			alert("Please fill the userfirstname field");
			return;
        }
		if (email === "") {
			alert("Please fill the email field");
			return;
        }
        if (phone === "") {
			alert("Please fill the phone field");
			return;
        }
		axios
			.post("/api/users", {
                username: username,
                userfirstname: userfirstname,
                email: email,
                phone: phone,
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not create account. Please try again");
            });
    }
	return (
		<>
			<h1>My Project</h1>
			{users === null ? (
				<p>Loading...</p>
			) : users.length === 0 ? (
				<p>No user available</p>
			) : (
				<>
					<h2>Available Users</h2>
					<ol>
                        {usersToRender}
                        {/* {users && users.map(user => (
                            <li key={user.id}>
                                Name: {user.username} - Firstname: {user.userfirstname} - Email: {user.email} - Phone: {user.phone}
                            </li>
                        ))} */}
					</ol>
                    <p>
                        1er user: {users === null ? (
                            <p>erreur</p>
                        ) : <p>{users[0]}</p>
                        }
                    </p>
				</>
			)}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Enter your username"
				/>
                <input
					onChange={(e) => setUserfirstname(e.target.value)}
					type="text"
					placeholder="Enter your firstname"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email address"
				/>
                <input
					onChange={(e) => setPhone(e.target.value)}
					type="text"
					placeholder="Enter your Phone"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App