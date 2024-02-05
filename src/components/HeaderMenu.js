/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Container, Typography, AppBar, Toolbar, IconButton, Grid, Button, Box, ButtonGroup, Stack, Dialog,
} from '@mui/material';
import { ArrowDropDown, ArrowDropUp, Remove } from '@mui/icons-material';
import myResume from '../my_files/myResume.pdf';
import docIcon from '../images/IconsExtractedFromW311/COMMD001.ICO';

function ResumePDF() {
  return (
    <iframe
      src={myResume}
      title="resume_sean"
      width="100%"
      height="100%"
    />
  );
}

function HeaderMenu() {
  const windowHeight = 'calc(100vh - 40px)';
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);
  const fileDialogOpenHandler = () => {
    setIsFileDialogOpen(true);
  };
  const fileDialogCloseHandler = () => {
    setIsFileDialogOpen(false);
  };
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          margin: 1, border: 2, height: windowHeight, background: '#bebebe',
        }}
      >
        <Box
          width="100%"
          sx={{
            margin: 0.5, height: '99%', border: 2, background: 'white',
          }}
        >
          <Box sx={{ borderBottom: 2, borderRadius: 0, background: '#00007e' }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="cneter">
              <Grid alignItems="center" sx={{ borderRight: 2 }}>
                <Button variant="none" sx={{ borderRadius: 0, background: '#bebebe' }}>
                  <Remove fontSize="large" />
                </Button>
              </Grid>
              <Grid>
                <Typography variant="h4" color="white">ZionOS 1.0x</Typography>
              </Grid>
              <Grid sx={{ borderLeft: 2 }}>
                <ButtonGroup variant="none" sx={{ borderRadius: 0, background: '#bebebe' }}>
                  <Button>
                    <ArrowDropUp fontSize="large" />
                  </Button>
                  <Button sx={{ borderLeft: 2 }}>
                    <ArrowDropDown fontSize="large" />
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Box>
          <Container>
            <Box sx={{ margin: 3 }}>
              <Button size="large" onClick={fileDialogOpenHandler}>
                <Stack alignItems="center">
                  <img src={docIcon} alt="docIcon" style={{ width: '60px' }} />
                  <Typography sx={{ color: 'black' }}>Resume</Typography>
                </Stack>
              </Button>
            </Box>
          </Container>
          <Dialog fullScreen onClose={fileDialogCloseHandler} open={isFileDialogOpen}>
            <Button onClick={fileDialogCloseHandler}>Close X</Button>
            <ResumePDF />
          </Dialog>
        </Box>
      </Box>
    </Container>
  );
}

export default HeaderMenu;
