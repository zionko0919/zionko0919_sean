/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Container, Box, Paper, Button, Typography, IconButton, Dialog, DialogContent, DialogTitle, Grid,
} from '@mui/material';
import HeaderMenu from './components/HeaderMenu';

function App() {
  const windowHeight = 'calc(100vh - 20px)';
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const folderOpenHandler = () => {
    setIsFolderOpen(true);
  };
  const folderCloseHandler = () => {
    setIsFolderOpen(false);
  };

  return (
    <Box
      maxWidth="100%"
      sx={{
        border: 1, borderRadius: 3, background: '#047e7e', height: windowHeight, margin: 1,
      }}
    >
      <HeaderMenu />
    </Box>
  );
}

export default App;
