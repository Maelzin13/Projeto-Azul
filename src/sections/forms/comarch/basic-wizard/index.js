import { useState } from 'react';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';

import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
// project imports
import AceesComarch from './AceesComarch';
import ScharcUser from './ScharcUser';
import User from './User';
import AlterandoPass from './AlterandoPass';
import Reset from './Reset';
import AcessLogin from './AcessLogin';
import Confirmando from './Confirm';

// step options
const steps = [
  'Acessos Comarch',
  'Encontrando user',
  'User Localizado',
  'Alterando password',
  'Reset do password',
  'Acess. login de user',
  'Confirmando Reset'
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AceesComarch />;
    case 1:
      return <ScharcUser />;
    case 2:
      return <User />;
    case 3:
      return <AlterandoPass />;
    case 4:
      return <Reset />;
    case 5:
      return <AcessLogin />;
    case 6:
      return <Confirmando />;
    default:
      throw new Error('Unknown step');
  }
}

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const Comarch = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainCard
      sx={{ height: '100%' }}
      style={{
        background: 'rgba(0, 0, 0, 0.10)',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -5px 5px',
        borderRadius: '25px'
      }}
    >
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
              Caso não tenha entendido, fique à vontade para ver o procedimento novamente
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
              <Button
  variant="contained"
  color="error"
  onClick={() => setActiveStep(0)}
  sx={{ my: 3, display: 'flex', justifyContent: 'center' }}
>
  Início do Procedimento
</Button>
              </AnimateButton>
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
              {activeStep !== 0 && (
                <Button variant="contained" color="success" onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <AnimateButton>
                <Button variant="contained" color="success" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </AnimateButton>
            </Stack>
          </>
        )}
      </>
    </MainCard>
  );
};

export default Comarch;
