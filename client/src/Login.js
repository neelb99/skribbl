import {useState} from 'react'
import {Grid,TextField,Typography,Button} from '@material-ui/core'
import './stylesheets/login.css'

const Login  = ()=>{
  const [code,setCode] = useState('')
  const [name,setName] = useState('')
  return(
    <Grid id="main" container alignItems="center" direction="column" xs={12} justify="center">
        <Typography variant="h2" component="h1">
          Skribbl
        </Typography>
        <form autoComplete="off">
          <TextField className="input" fullWidth id="code" label="Room Code" variant="outlined" value={code} onChange={e=>setCode(e.target.value)}/>
          <TextField className="input" fullWidth id="name" label="Name" variant="outlined" value={name} onChange={e=>setName(e.target.value)}/>
          <Button className="input" fullWidth variant="contained" color="primary" type="submit">
            Enter Game
          </Button>
        </form>
    </Grid>
  )
}

export default Login