import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material'
import { updateMethod } from '../../redux/appointment/actions'

const Method = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [method, setMethod] = useState('phone')
  const appointment = useSelector((state) => state.appointment)

  const handleSubmit = async() => {
    dispatch(updateMethod(method))

    try {
      let res = await axios({
        method: 'post',
        url: 'https://bodhi.com/api/appointment',
        data: {...appointment, method: method}
      });
  
      let data = res.data;
      history.push('/review/success')

    } catch (error) {
      console.log(error.response)
      history.push('/review/fail')
      return error.response
    }
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
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Method</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <FormControlLabel value="phone" control={<Radio />} label="Phone call" />
            <FormControlLabel value="video" control={<Radio />} label="Video call" />
            <FormControlLabel value="onsite" control={<Radio />} label="On-site meeting" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  )
}

export default Method