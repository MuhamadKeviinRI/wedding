import { m } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Carousel from 'react-multi-carousel'; // Tambahkan impor ini
import 'react-multi-carousel/lib/styles.css';
import { useResponsive } from 'src/hooks/use-responsive';
import { textGradient, bgGradient } from 'src/theme/css';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

const images = [
  '/assets/images/home/wedding1.jpeg',
  '/assets/images/home/wedding2.jpeg',
  '/assets/images/home/wedding3.jpeg',
  '/assets/images/home/wedding4.jpeg'
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function HomeGallery() {
  const theme = useTheme();
  const upMd = useResponsive('up', 'md');

  const renderDescription = (
    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: { xs: 5, md: 10 } }}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          Photo Gallery
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: 5,
            ...textGradient(
              `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
            ),
          }}
        >
          Beautiful Moments
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          target="_blank"
          rel="noopener"
          href={paths.gallery}
        >
          View More
        </Button>
      </m.div>
    </Box>
  );

  const renderGallery = (
    <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            sx={{ width: '100%', height: 500, objectFit: 'cover' }}
          />
        ))}
      </Carousel>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: 600,
        overflow: 'hidden',
        position: 'relative',
        ...bgGradient({
          startColor: `${theme.palette.grey[900]} 25%`,
          endColor: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/home/for_designer.webp',
        }),
      }}
    >
      <Container component={MotionViewport}>
        <Grid container>
          <Grid xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            {renderDescription}
          </Grid>
          <Grid xs={12} md={6}>{renderGallery}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
