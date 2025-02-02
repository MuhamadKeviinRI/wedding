import { useState, useCallback } from 'react';
// @mui
import { m } from 'framer-motion';
import { Stack, Typography, Paper, Container, Avatar, Grid, Box } from '@mui/material';
// import Iconify from 'src/components/iconify';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';

export default function AboutUsPage() {
  const [currentTab, setCurrentTab] = useState('About');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const renderDescription = (
    <Stack sx={{ textAlign: 'center', pt: 15 }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Tentang Kami
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
          Kami adalah tim yang berpengalaman dalam merencanakan dan menyelenggarakan pernikahan impian Anda.
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ mb: 5, color: 'text.secondary' }}>
          Kami hadir untuk memberikan layanan terbaik, mulai dari perencanaan hingga pelaksanaan acara pernikahan yang tak terlupakan.
        </Typography>
      </m.div>
    </Stack>
  );

  const renderTeam = (
    <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
      {/* Wedding Planner */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ padding: 3, textAlign: 'center' }}>
          <Avatar alt="Wedding Planner" src="wedding-planner.jpg" sx={{ width: 100, height: 100, mx: 'auto' }} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Maria Susanti
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Wedding Planner & Founder
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Maria adalah perencana pernikahan yang berpengalaman, yang akan memastikan setiap detail acara Anda berjalan lancar.
          </Typography>
        </Paper>
      </Grid>

      {/* Designer */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ padding: 3, textAlign: 'center' }}>
          <Avatar alt="Designer" src="wedding-designer.jpg" sx={{ width: 100, height: 100, mx: 'auto' }} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Rina Purnama
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Head of Design & Decor
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Rina menciptakan desain dekorasi yang elegan dan mewah untuk memastikan suasana pernikahan Anda sempurna.
          </Typography>
        </Paper>
      </Grid>

      {/* Catering Manager */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ padding: 3, textAlign: 'center' }}>
          <Avatar alt="Catering Manager" src="catering-manager.jpg" sx={{ width: 100, height: 100, mx: 'auto' }} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            David Pratama
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Catering Manager
          </Typography>
          <Typography sx={{ mt: 2 }}>
            David memastikan pengalaman kuliner Anda luar biasa dengan menu lezat yang disesuaikan dengan selera pasangan pengantin.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );

  return (
    <Container>
      {renderDescription}
      {renderTeam}
    </Container>
  );
}
