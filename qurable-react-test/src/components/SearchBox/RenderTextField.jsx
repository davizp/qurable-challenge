import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

function RenderTextField(props) {
  return (
    <Paper>
      <TextField
        {...props}
        label="Search..."
        variant="filled"
        InputProps={{
          ...props.InputProps,
          endAdornment: (
            <>
              {props.loading ? <CircularProgress color="inherit" size={20} /> : null}
              {props.InputProps.endAdornment}
            </>
          ),
        }}
        fullWidth
      />
    </Paper>
  );
}

export default RenderTextField;
