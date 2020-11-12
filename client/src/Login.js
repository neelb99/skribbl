import {useState} from 'react'
import {Grid,TextField,Typography,Button,Link} from '@material-ui/core'
import './stylesheets/login.css'

const Login  = ()=>{
  const [code,setCode] = useState('')
  const [name,setName] = useState('')
  const [create,setCreate] = useState(false)

  const checkCreate = ()=>{
    if(create)
      return(
        <>
          <form autoComplete="off">
            <TextField fullWidth id="name" label="Name" variant="outlined" value={name} onChange={e=>setName(e.target.value)}/>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Create Room
            </Button>
          </form>
          <Typography>
            <Link href="#" onClick={()=>setCreate(false)}>
              Join a Room
            </Link>
          </Typography>
        </>
      )
    else
      return(
        <>
          <form autoComplete="off">
            <TextField fullWidth id="code" label="Room Code" variant="outlined" value={code} onChange={e=>setCode(e.target.value)}/>
            <TextField fullWidth id="name" label="Name" variant="outlined" value={name} onChange={e=>setName(e.target.value)}/>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Enter Game
            </Button>
          </form>
          <Typography>
            <Link href="#" onClick={()=>setCreate(true)}>
              Create a Room
            </Link>
          </Typography>
        </>
      )
  }

  return(
    <Grid id="main" container justify="center" direction="row">
      <Grid item xs={12} sm={8} lg={4}>
        <Typography variant="h2" component="h1">
          Skribbl
        </Typography>
        {checkCreate()}
      </Grid>
    </Grid>
  )
}

export default Login