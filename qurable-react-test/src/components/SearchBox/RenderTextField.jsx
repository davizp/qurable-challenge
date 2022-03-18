import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

function RenderTextField(props) {
  const { loading, ...restProps } = props;

  return (
    <Paper>
      <TextField
        {...restProps}
        label="Search..."
        variant="filled"
        InputProps={{
          ...props.InputProps,
          endAdornment: (
            <>
              {loading ? <CircularProgress color="inherit" size={20} /> : null}
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
