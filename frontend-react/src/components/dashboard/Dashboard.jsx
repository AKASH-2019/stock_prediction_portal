import React, {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../AxiosInstance'

const Dashboard = () => {
    const accessToken = localStorage.getItem('accessToken')
    useEffect(() =>{
        const fetchProtectedData = async () =>{
            try{
                // befor AxiosInstance file integrete
                // const response = await axiosInstance.get('/protected-view', {
                //     headers: {
                //         Authorization: `Bearer ${accessToken}`
                //     }
                // })
                
                // after axiosInstance file integrete
                const response = await axiosInstance.get('/protected-view');
                console.log('Success: ', response.data)
            }catch(error){
                console.error('Error fetching data: ', error)
            }
        }
        fetchProtectedData();
    }, [])
  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard