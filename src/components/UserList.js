import React,{useState, useEffect} from 'react'
import { Fragment } from 'react'
import '../css/bootstrap.min.css'
import User from './User'

const UserList = () => {
	const [users, setusers] = useState([])
	useEffect(() => {

		fetch("https://jsonplaceholder.typicode.com/users")
		.then(res=>res.json())
		.then(data=>setusers(data));


	}, [])
	return (
		<Fragment>
			<div className="container">
				<div className="row">
							{
								users.map(user=><User data={user}></User>)
							}


					</div>
			</div>
		</Fragment>
	)
}

export default UserList
