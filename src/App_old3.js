import React, {useState, useEffect} from 'react'
import axios from 'axios';
// -----
const App = function () {
    const [users, setUsers] = useState(null);

    // const [username, setUsername] = useState("");
    // const [userfirstname, setUserfirstname] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
	useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

    
    
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
                       
                        {/* {toto && toto.map(user => (
                            <li key={user.id}>
                                Name: {user.username} - Firstname: {user.userfirstname} - Email: {user.email} - Phone: {user.phone}
                            </li>
                        ))} */}
					</ol>
                    <p>
                        1er user: {users === null ? (
                            <p>erreur</p>
                        ) : <p>ok {users[0]}</p>
                        }
                    </p>
				</>
			)}


		</>
	);
};
export default App