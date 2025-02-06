import { useState, useCallback } from 'react';
// @mui
import { m } from 'framer-motion';
import { Stack, Typography, Paper, Container, Avatar, Grid, Box } from '@mui/material';
// import Iconify from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';

export default function AboutUsPage() {
  return(
  <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: '80%',
            height: '400px',
            bgcolor: 'grey.300',
            display: 'flex',
            mx: 6,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h6" color="text.secondary">
            FOTO PERUSAHAAN
          </Typography>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          TENTANG KAMI
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </Typography>
      </Grid>
    </Grid>
  );
}
