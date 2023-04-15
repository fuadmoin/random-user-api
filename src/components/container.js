import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/users/usersSlice'

const Container = () => {
    const dispatch = useDispatch();
    const {users, isLoading, error} = useSelector(state => state.users);
useEffect(() => {
    dispatch(fetchUsers())
}, [])

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error</div>
    }
    if (users) { 
  return (
    <div>
        {users.map((user) => (

            user.map((user2) => (

                <ul key={user2.name.first}>
                <h5>{user2.name.first} {'   '} {user2.name.last}</h5>
            </ul>
                
            ) )
        
          
 ))}
    </div>
  )
        
}
}

export default Container