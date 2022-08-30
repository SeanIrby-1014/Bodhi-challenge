import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import { updateUserInfo } from '../../redux/appointment/actions'

const UserInfo = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setDisabled(name === '' || email === '')
  }, [name, email])

  const handleSubmit = () => {
    if(!validateEmail(email)) {
      setMessage("Please enter your email address in format: yourname@example.com")
      return
    }
    dispatch(updateUserInfo({
      name: name,
      email: email
    }))
    history.push('/period')
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '4px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -100%)',
        width: '30%',
        border: 'none',
        p: 3
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ minWidth: 100 }}>Name:</Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ ml: 2 }}
          size="small"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ minWidth: 100 }}>Email:</Typography>
        <TextField
          variant="outlined"
          fullWidth
          error={message !== ''}
          helperText={message}
          sx={{ ml: 2 }}
          size="small"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setMessage('')
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' disabled={disabled} onClick={handleSubmit}>Continue</Button>
      </Box>
    </Box>
  )
}

export default UserInfo