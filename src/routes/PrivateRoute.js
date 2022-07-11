import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
	const { isLoggedIn } = useSelector((state) => state?.auth)
	const location = useLocation()

	if (!isLoggedIn) {
		return (
			<Navigate to={{ pathname: '/login', state: { from: location } }} />
		)
	}

	return children
}

export default PrivateRoute
