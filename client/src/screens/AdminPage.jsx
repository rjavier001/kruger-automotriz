import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 
  return (
    <Box sx={{ display: 'flex' }}>
      admin
    </Box>
  );
}
