import { Stack, TextField, InputAdornment } from "@mui/material";

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          disabled
          helperText="Do not share"
        />
        <TextField label="Read-only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Amount"
          inputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          inputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
