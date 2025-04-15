import React, {useState, useContext} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [loading, setLoading] = useState(false)
        const navigate = useNavigate()
        const [error, setError] = useState('')
        const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

        const handelLogin = async (e) => {
            e.preventDefault()
            setLoading(true)
            const userData = {username, password}
            // console.log('userData ==>', userData)

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
                console.log('userData==>', response.data)
                localStorage.setItem('accessToken', response.data.access)
                localStorage.setItem('refreshToken', response.data.refresh)
                setIsLoggedIn(true)
                navigate('/dashboard')
            }catch(error){
                console.error('Login error: ', error.response.data)
                setError('Invalid credential')
            }finally{
                setLoading(false)
            }
        } 
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light-dark p-5 rounded">
                    <h3 className="text-light text-center mb-4">Login to our portal</h3>
                    <form onSubmit={handelLogin}>
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                       
                        <div className="mb-5">
                            <input type="password" className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>    
                        </div>
                        {error && <div className='text-danger'>{error}</div> }

                        {loading? (
                            <button type='submit' className='btn btn-info d-block mx-auto' disabled>
                                    <FontAwesomeIcon icon={faSpinner} spin />Login...
                            </button>
                        ): (
                            <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login