import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick'; // Import react-slick
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function CustomerTestimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This product changed my life. Highly recommend!',
      avatar: '/assets/images/testimonials/john_doe.jpg',
    },
    {
      name: 'Jane Smith',
      feedback: 'Excellent customer service and great quality!',
      avatar: '/assets/images/testimonials/jane_smith.jpg',
    },
    {
      name: 'Bob Johnson',
      feedback: 'Fast delivery and exceeded expectations.',
      avatar: '/assets/images/testimonials/bob_johnson.jpg',
    },
    {
      name: 'Sarah Lee',
      feedback: 'Absolutely loved it! Great value for the price.',
      avatar: '/assets/images/testimonials/sarah_lee.jpg',
    },
    {
      name: 'David Wilson',
      feedback: 'Highly efficient and easy to use.',
      avatar: '/assets/images/testimonials/david_wilson.jpg',
    },
    {
      name: 'Emily Davis',
      feedback: 'Very satisfied, will definitely order again.',
      avatar: '/assets/images/testimonials/emily_davis.jpg',
    },
  ];

  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite scrolling
    speed: 500,
    slidesToShow: 3, // Show 3 items at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 item on smaller screens
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'background.default',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ color: 'text.primary', fontWeight: 700, mb: 5 }}>
          Apa Kata Pelanggan Kami
          </Typography>
        </m.div>

        {/* Slider for Testimonials */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <m.div key={index} variants={varFade().inUp}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: (theme) => `0 4px 6px ${alpha(theme.palette.common.black, 0.1)}`,
                  p: 4,
                  mb: 4,
                  width: 300, // Fixed width for all cards
                  height: 380, // Fixed height for all cards
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // Space out image, name, and feedback
                  '&:hover': {
                    boxShadow: (theme) => `0 6px 10px ${alpha(theme.palette.primary.main, 0.3)}`,
                  },
                }}
              >
                <Image
                  alt={testimonial.name}
                  src={testimonial.avatar}
                  sx={{
                    width: '100%', // Full width image
                    height: 180, // Fixed image height
                    objectFit: 'cover', // Keep aspect ratio of image
                    borderRadius: 0, // No border radius for image
                    boxShadow: (theme) => `-10px 10px 20px ${alpha(theme.palette.common.black, 0.2)}`,
                  }}
                />
                <Stack direction="column" alignItems="center" spacing={1}>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    {testimonial.feedback}
                  </Typography>
                </Stack>
              </Box>
            </m.div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
