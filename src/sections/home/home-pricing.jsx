import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// Mock data for wedding packages
const weddingPackages = [
  {
    license: 'Standard',
    commons: ['Paket dekorasi sederhana', 'Paket catering untuk 100 orang'],
    options: ['Dekorasi bunga', 'Foto dokumentasi', 'Kue pengantin'],
    icons: ['eva:camera-fill', 'eva:heart-fill', 'eva:shopping-bag-fill'],
  },
  {
    license: 'Premium',
    commons: ['Paket dekorasi mewah', 'Paket catering untuk 200 orang'],
    options: ['Dekorasi bunga', 'Foto dokumentasi profesional', 'Kue pengantin eksklusif'],
    icons: ['eva:camera-fill', 'eva:star-fill', 'eva:shopping-cart-fill'],
  },
  {
    license: 'Luxury',
    commons: ['Paket dekorasi eksklusif', 'Paket catering untuk 300 orang'],
    options: ['Dekorasi bunga premium', 'Foto dokumentasi HD', 'Kue pengantin super mewah'],
    icons: ['eva:camera-fill', 'eva:award-fill', 'eva:gift-fill'],
  },
];

export default function HomePricing() {
  const mdUp = useResponsive('up', 'md');

  const [currentTab, setCurrentTab] = useState('Standard');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const renderDescription = (
    <Stack spacing={3} sx={{ mb: 10, textAlign: 'center' }}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
          Paket Harga Pernikahan
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography variant="h2">
          Pilih Paket Pernikahan yang Tepat <br /> untuk Anda
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography sx={{ color: 'text.secondary' }}>
          Pilih paket yang sesuai dengan kebutuhan Anda. Selalu fleksibel untuk berkembang.
        </Typography>
      </m.div>
    </Stack>
  );

  const renderContent = (
    <>
      {mdUp ? (
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          sx={{
            borderRadius: 2,
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {weddingPackages.map((plan) => (
            <m.div key={plan.license} variants={varFade().in}>
              <PlanCard key={plan.license} plan={plan} />
            </m.div>
          ))}
        </Box>
      ) : (
        <>
          <Stack alignItems="center" sx={{ mb: 5 }}>
            <Tabs value={currentTab} onChange={handleChangeTab}>
              {weddingPackages.map((tab) => (
                <Tab key={tab.license} value={tab.license} label={tab.license} />
              ))}
            </Tabs>
          </Stack>

          <Box
            sx={{
              borderRadius: 2,
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            {weddingPackages.map(
              (tab) =>
                tab.license === currentTab && (
                  <PlanCard
                    key={tab.license}
                    plan={tab}
                    sx={{
                      borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
                    }}
                  />
                )
            )}
          </Box>
        </>
      )}

      <m.div variants={varFade().in}>
        <Box
          sx={{
            textAlign: 'center',
            mt: {
              xs: 5,
              md: 10,
            },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h4">Masih ada pertanyaan?</Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
              Silakan deskripsikan kebutuhan Anda untuk mendapatkan saran yang lebih akurat.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Button
              color="inherit"
              size="large"
              variant="contained"
              href="mailto:support@minimals.cc?subject=[Feedback] dari Pelanggan"
            >
              Hubungi Kami
            </Button>
          </m.div>
        </Box>
      </m.div>
    </>
  );

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container component={MotionViewport}>
        {renderDescription}

        {renderContent}
      </Container>
    </Box>
  );
}

function PlanCard({ plan, sx, ...other }) {
  const { license, commons, options, icons } = plan;

  const standard = license === 'Standard';

  const plus = license === 'Premium';

  return (
    <Stack
      spacing={5}
      sx={{
        p: 5,
        pt: 10,
        ...(plus && {
          borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...sx,
        }),
      }}
      {...other}
    >
      <Stack spacing={2}>
        <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
          Paket
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Typography variant="h4">{license}</Typography>
          <Box
            sx={{
              left: 0,
              bottom: 4,
              width: 40,
              height: 8,
              opacity: 0.48,
              bgcolor: 'error.main',
              position: 'absolute',
              ...(standard && { bgcolor: 'primary.main' }),
              ...(plus && { bgcolor: 'warning.main' }),
            }}
          />
        </Box>
      </Stack>

      {standard ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {icons.map((icon) => (
            <Iconify key={icon} icon={icon} width={24} />
          ))}
        </Box>
      ) : (
        <Stack direction="row" spacing={2}>
          {icons.map((icon) => (
            <Iconify key={icon} icon={icon} width={24} />
          ))}
        </Stack>
      )}

      <Stack spacing={2.5}>
        {commons.map((option) => (
          <Stack key={option} spacing={1} direction="row" alignItems="center">
            <Iconify icon="eva:checkmark-fill" width={16} />
            <Typography variant="body2">{option}</Typography>
          </Stack>
        ))}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {options.map((option, optionIndex) => {
          const disabled =
            (standard && optionIndex === 1) ||
            (standard && optionIndex === 2) ||
            (standard && optionIndex === 3) ||
            (plus && optionIndex === 3);

          return (
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{
                ...(disabled && { color: 'text.disabled' }),
              }}
              key={option}
            >
              <Iconify icon={disabled ? 'mingcute:close-line' : 'eva:checkmark-fill'} width={16} />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          );
        })}
      </Stack>

      <Stack alignItems="flex-end">
  <Button
    color="inherit"
    size="small"
    target="_blank"
    rel="noopener"
    href="/booking"  // Update the link to the booking page
    endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
  >
    Booking
  </Button>
</Stack>

    </Stack>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.object,
  sx: PropTypes.object,
};
