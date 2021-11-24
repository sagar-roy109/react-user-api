import React from 'react'
import { Fragment } from 'react'

const User = (getUser) => {
	return (
		<Fragment>
				<div className="col-md-3 mb-3">
						<div className="user-container shadow p-3">
							<h5>Name: {getUser.data.name}</h5>
							<p>Email: {getUser.data.email}</p>
							<p>Address: {getUser.data.address.street}</p>
							<p>City: {getUser.data.address.city} </p>
							<p>Post: {getUser.data.address.zipcode} </p>
						</div>

				</div>

		</Fragment>
	)
}

export default User
