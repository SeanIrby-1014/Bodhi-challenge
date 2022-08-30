import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import { updatePeriod } from '../../redux/appointment/actions'

const Period = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [disabled, setDisabled] = useState(false)
  const [period, setPeriod] = useState('')

  useEffect(() => {
    setDisabled(period === '')
  }, [period])

  const handleSubmit = () => {
    dispatch(updatePeriod(period))
    history.push('/method')
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
        <Typography variant="h6" sx={{ minWidth: 100 }}>Period:</Typography>
        <TextField
          fullWidth
          type="datetime-local"
          defaultValue={period}
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ ml: 2 }}
          onChange={(e) => setPeriod(e.target.value)}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' disabled={disabled} onClick={handleSubmit}>Continue</Button>
      </Box>
    </Box>
  )
}

export default Period