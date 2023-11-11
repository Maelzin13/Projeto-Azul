import { useDispatch } from 'store';

// material-ui
import { Button, FormControl, FormHelperText, Grid, InputLabel, Select, Stack, MenuItem } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'store/reducers/snackbar';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '../../../../node_modules/@mui/material/index';

const validationSchema = yup.object({
  age: yup.number().required('Age selection is required.')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK  ||============================== //

const SelectForms = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      objeto: '',
      modalidade: '',
      contratual: '',
      execucao: '',
      adj: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('select form submit - ', values);
      dispatch(
        openSnackbar({
          open: true,
          message: 'Select - Submit Success',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );
    }
  });

  const handleFormClear = () => {
    formik.resetForm();
  };

  return (
    <div>
      <MainCard title="Nr do processo">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="objeto">Objeto</InputLabel>
                <TextField
                  fullWidth
                  id="objeto"
                  variant="outlined"
                  placeholder="En"
                  value={formik.values.objeto}
                  onChange={formik.handleChange}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="modalidade">Modalidade Licitação</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select id="modalidade" name="modalidade" value={formik.values.modalidade} onChange={formik.handleChange}>
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={10}>CONCORRÊNCIA</MenuItem>
                    <MenuItem value={20}>CONVITE</MenuItem>
                    <MenuItem value={30}>CREDENCIAMENTO</MenuItem>
                    <MenuItem value={40}>LEILÃO</MenuItem>
                    <MenuItem value={50}>PREGÃO ELETRÓNICO</MenuItem>
                    <MenuItem value={60}>PREGÃO PRESENCIAL</MenuItem>s
                  </Select>
                  {formik.errors.modalidade && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.modalidade}{' '}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="contratual">Instrumento contratual</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select id="contratual" name="contratual" value={formik.values.contratual} onChange={formik.handleChange}>
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={10}>NOTA DE EMPENHO</MenuItem>
                    <MenuItem value={20}>TERMO DE CONTRATO</MenuItem>
                  </Select>
                  {formik.errors.contratual && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.contratual}{' '}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="execucao">Regime de Execução</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select id="execucao" name="execucao" value={formik.values.execucao} onChange={formik.handleChange}>
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={10}>GLOBAL</MenuItem>
                    <MenuItem value={20}>MISTO</MenuItem>
                    <MenuItem value={30}>NÃO SE APLICA</MenuItem>
                    <MenuItem value={40}>PREÇO UNITÁRIO</MenuItem>
                  </Select>
                  {formik.errors.execucao && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.execucao}{' '}
                    </FormHelperText>
                  )}
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1} sx={{ width: `calc(100% - 110px)` }}>
                <InputLabel htmlFor="adj">Forma de Adjudicação</InputLabel>
                <TextField
                  fullWidth
                  id="adj"
                  variant="outlined"
                  placeholder="Enter"
                  value={formik.values.adj}
                  onChange={formik.handleChange}
                />
              </Stack>
            </Grid>
          </Grid>
        </form>
      </MainCard>
      <Stack direction="row" justifyContent="center" spacing={2.5} sx={{ marginTop: '20px' }}>
        <AnimateButton>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </AnimateButton>

        <AnimateButton>
          <Button variant="contained" onClick={handleFormClear}>
            Limpar
          </Button>
        </AnimateButton>
      </Stack>
    </div>
  );
};

export default SelectForms;
