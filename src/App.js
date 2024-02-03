/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Container, Box, Paper, Button, Typography, IconButton, Dialog, DialogContent, DialogTitle, Grid,
} from '@mui/material';
import folderIcon from './images/IconsExtractedFromW311/MSMAI010.ICO';
import myResume from './my_files/myResume_sean.pdf';

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

function App() {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const folderOpenHandler = () => {
    setIsFolderOpen(true);
  };
  const folderCloseHandler = () => {
    setIsFolderOpen(false);
  };

  return (
    <div>
      <Container sx={{ background: '#047e7e' }}>
        <Typography>Zion Ko</Typography>
        <Button onClick={folderOpenHandler}>
          <img src={folderIcon} alt="oldFolderIcon" />
        </Button>
        <Dialog
          fullScreen
          open={isFolderOpen}
          onClose={folderCloseHandler}
          PaperProps={{ style: { borderRadius: 0 } }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            minWidth="100%"
          >
            <Typography align="center">
              Resume
            </Typography>
            <Box>
              <Button
                size="small"
                variant="outlined"
                style={{
                  color: 'black',
                  borderRadius: 0,
                  border: 'none',
                  borderBlockColor: 'black',
                }}
                onClick={folderCloseHandler}
              >
                Close X
              </Button>
            </Box>
          </Grid>
          <DialogContent>
            <ResumePDF />
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
