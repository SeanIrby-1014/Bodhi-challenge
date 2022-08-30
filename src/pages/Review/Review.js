import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
} from '@mui/material'

const Review = () => {
  const { result } = useParams;
  const history = useHistory()
  const userInfo = useSelector((state) => state.appointment.userInfo)
  const period = useSelector((state) => state.appointment.period)
  const method = useSelector((state) => state.appointment.method)

  const handleSubmit = () => {
    history.push('/')
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
      <Typography variant="h5">
        { result === "success" ?
         "Your appointment was successfully registered" :
         "Your appointment was failed to register" }
      </Typography>
      <br></br>
      <Typography variant="h6" sx={{ minWidth: 100 }}>Name: {userInfo.name}</Typography>
      <Typography variant="h6" sx={{ minWidth: 100 }}>Email: {userInfo.email}</Typography>
      <Typography variant="h6" sx={{ minWidth: 100 }}>Period: {moment(period).format("ddd, MM DD YYYY, h:mm:ss a")}</Typography>
      <Typography variant="h6" sx={{ minWidth: 100 }}>Method: {method}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' onClick={handleSubmit}>Again</Button>
      </Box>
    </Box>
  )
}

export default Review