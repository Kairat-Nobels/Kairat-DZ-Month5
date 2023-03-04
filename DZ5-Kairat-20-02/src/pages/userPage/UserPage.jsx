import React, {useEffect, useState} from 'react'
import {createUser} from '../../redux/action'
import {useDispatch, useSelector} from "react-redux";

const UserPage = () => {
    const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const message = useSelector(state => state.userReducer.message)


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, username, email, website };

    dispatch(createUser(user))
    setName('')
    setUsername('')
    setEmail('')
    setWebsite('')
    
  };

  return <>
    <h1>Create user</h1>
    <form onSubmit={handleSubmit}>
      
        <div className='pole'>
          <label>Name:</label>
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      
      
        <div className='pole'>
          <label>Username:</label>
          <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
      
        
        <div className='pole'>
          <label>Email:</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      
      
        <div className='pole'>
          <label>Website:</label>
          <input required type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div >
      
      <button type="submit">Create User</button>
    </form>
      <div>
          {
              message === 'User created successfully!'
              &&
              <h2 style={{color: 'green'}}>Успешно Создан юзер</h2>
          }
      </div>
  </>
};

export default UserPage;