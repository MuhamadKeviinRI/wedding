import { m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { varFade } from 'src/components/animate';

// Daftar gambar untuk slideshow
const images = [
  '/assets/background/overlay_1.jpg',
  '/assets/background/overlay_2.jpg',
  '/assets/background/overlay_3.jpg',
];

const StyledRoot = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

export default function HomeHero() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledRoot
      as={m.div} // ✅ Menggunakan `m.div` agar tetap optimal untuk tree shaking
      key={currentImageIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: 1,
          mx: 'auto',
          maxWidth: 600,
          textAlign: 'center',
        }}
        spacing={4} // ✅ Menambah jarak antar elemen agar lebih rapi
      >
        
        <m.div variants={varFade().in}>
          <Typography variant="h1" sx={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold' }}>
            Wedding Organizer
          </Typography>
        </m.div>

        <m.div variants={varFade().in}>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', px: 3 }}>
            Percayakan Pernikahan Impian Anda pada Kami – Elegan, Berkesan, dan Tak Terlupakan!
          </Typography>
        </m.div>

      
      </Stack>
    </StyledRoot>
  );
}
