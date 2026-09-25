import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';





const Task = (props) => {
    


return <Grid
  key={props.id}
  size={{ xs: 12, sm: 6, md: 4 }}
>
  <Card
    sx={{
      backgroundColor: props.done ? 'lightgrey' : 'lightblue',
      padding: '20px'
    }}
  >
    <CardHeader
      title={props.title}
      sx={{
        backgroundColor: 'white',
        borderRadius: '3px',
        padding: '20px',
        textAlign: 'center'
      }}
    />

    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          mb: 2,
          padding: '20px'
        }}
      >
        <Typography
          component="p"
          variant="subtitle2"
          color="text.primary"
        >
          Due: {props.deadline}
        </Typography>
      </Box>

      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        sx={{ fontStyle: 'italic' }}
      >
        {props.description}
      </Typography>
      
<Typography
  component="p"
  variant="subtitle1"
  align="center"
  sx={{
    backgroundColor:
      props.priority === "High"
        ? "red"
        : props.priority === "Medium"
        ? "orange"
        : "green",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
  }}
>
  Priority: {props.priority} {props.priority === "High" ? <WarningAmberIcon /> : null}
</Typography>
    </CardContent>

    <CardActions
      sx={{
        justifyContent: 'space-between',
        padding: '20px'
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={props.markDone}
      >
       <CheckIcon /> Done
      </Button>

      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={props.deleteTask}
      >
        <DeleteIcon /> Delete
      </Button>
    </CardActions>
  </Card>
</Grid>






}
export default Task;