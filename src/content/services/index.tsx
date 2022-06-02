import * as React from 'react';

import { Avatar, Badge, Box, Button, Card, CardActionArea, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Tooltip, Typography, } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { ChangeEvent } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from 'src/components/Footer';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';
import Logo from 'src/components/Logo';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { styled } from '@mui/material/styles';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        background: transparent;
        margin-left: -${theme.spacing(0.5)};
        margin-bottom: ${theme.spacing(1)};
        margin-top: ${theme.spacing(2)};
`
);


const ConnectStatus = styled(Typography)(
  ({theme}) => `
      .connected {
        color: ${theme.colors.success.dark};
        font-weight: bold;
      }

      .not_connected {
        color: ${theme.colors.secondary.light};
        font-weight: 700;
      }
  `
)


const SectionWrapper = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.info.light,
  background: theme.colors.alpha.white[100],
  display: "flex", 
  flexDirection: "column",
  borderRadius: '5px'
}));

const FormElement = styled(FormControl)(
  ({theme}) => `
    margin: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.alpha.black[100]};
    
      .input {
        color: ${theme.colors.alpha.black[100]};

        &:hover{
          border: 1px solid ${theme.colors.primary.main};
          border-radius: 5px;
        }
      }

      .select {
        color: ${theme.colors.alpha.black[100]};

        &:hover{
          border: 1px solid ${theme.colors.primary.main}
        }

      }

      .MuiSelect-select{
        color: ${theme.colors.alpha.black[100]} !important;
      }
  `
)

function PageServices() {
  const [value, setValue] = React.useState<Date | null>(null);
  const [project, setProject] = React.useState<String | null>(null);
  const [type, setType] = React.useState<String | null>(null);

  const handleChangeProject = (event: ChangeEvent<HTMLInputElement>) => {
    setProject(event.target.value as string);
  };
  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as string);
  };

  return (
    <>
      <Helmet>
        <title>CAM KPI Dashboard</title>
      </Helmet>
      <PageTitleWrapper>

      </PageTitleWrapper>
      
      <Container maxWidth="xl">
        <Grid container sx={{marginBottom: '20px'}}>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start">
              <Grid item>
                <Card sx={{ px: 1, border: '5px solid #64b5f6', }}>
                  <CardContent>
                    <AvatarWrapper>
                      <img
                        alt="Github"
                        src="/static/images/placeholders/logo/github.png"
                        width="50"
                        height="40"
                      />
                    </AvatarWrapper>
                    <Typography variant="h5" noWrap>
                      Github
                    </Typography>
                    <Box sx={{ pt: 1 }}>
                      <ConnectStatus variant="h5" gutterBottom noWrap>
                        <Typography className="connected">Connected</Typography>
                      </ConnectStatus>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ px: 1, background: 'lightgray'}}>
                  <CardContent>
                    <AvatarWrapper>
                      <img
                        alt="Jira"
                        src="/static/images/placeholders/logo/jira.png"
                        width="50"
                        height="40"
                      />
                    </AvatarWrapper>
                    <Typography variant="h5" noWrap>
                      Jira
                    </Typography>
                    <Box sx={{ pt: 1 }}>
                      <ConnectStatus variant="h5" gutterBottom noWrap>
                        <Typography className="not_connected" noWrap>Disconnected</Typography>
                      </ConnectStatus>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ px: 1}}>
                  <CardContent>
                    <AvatarWrapper>
                      <img
                        alt="Jenkins"
                        src="/static/images/placeholders/logo/jenkins.png"
                        width="50"
                        height="40"
                      />
                    </AvatarWrapper>
                    <Typography variant="h5" noWrap>
                      Jenkins
                    </Typography>
                    <Box sx={{ pt: 1 }}>
                      <ConnectStatus variant="h5" gutterBottom noWrap>
                        <Typography className="connected">Connected</Typography>
                      </ConnectStatus>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              {/* <Grid xs={12} sm={6} md={3} item>
                <Tooltip arrow title="Click to add a new wallet">
                  <CardAddAction>
                    <CardActionArea sx={{ px: 1 }}>
                      <CardContent>
                        <AvatarAddWrapper>
                          <AddTwoToneIcon fontSize="large" />
                        </AvatarAddWrapper>
                      </CardContent>
                    </CardActionArea>
                  </CardAddAction>
                </Tooltip>
              </Grid> */}
            </Grid>
        </Grid>


        <Grid container >
            <Grid container spacing={2}>
              <Grid xs={4} item>
                <SectionWrapper>
                  <Typography variant="h3" color="secondary" align="left" sx={{paddingLeft: '10px', paddingBottom: '10px'}}>Github - Service Details</Typography>
                  
                  <FormElement variant="outlined">
                    <InputLabel id="" className='input'>Project</InputLabel>
                    <Select
                      autoWidth
                      className='select'
                      labelId=""
                      value={project}
                      label="Project"
                      onChange={handleChangeProject}
                    >
                      <MenuItem value="0">All Projects</MenuItem>
                      <MenuItem value="1">DB Web</MenuItem>
                      <MenuItem value="2">RMS</MenuItem>
                      <MenuItem value="3">Others</MenuItem>
                    </Select>
                  </FormElement>

                  <FormElement variant="outlined">
                    <InputLabel id="" className='input'>Type</InputLabel>
                    <Select
                      className='select'
                      labelId=""
                      value={type}
                      label="Type"
                      onChange={handleChangeType}
                    >
                      <MenuItem value="0">Pull Requests</MenuItem>
                      <MenuItem value="1">Commits</MenuItem>
                      <MenuItem value="2">Lines of Code</MenuItem>
                    </Select>
                  </FormElement>

                  <FormElement variant="outlined">
                    <TextField
                        id="outlined-required"
                        label="Service Account"
                        defaultValue=""
                        className='input'
                        InputLabelProps={{
                          style: { color: 'black' }, 
                       }}
                      />
                  </FormElement>

                  <FormElement variant="outlined">
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className='input'
                        InputLabelProps={{
                          style: { color: 'black' }, 
                       }}
                      />
                  </FormElement>

                  <FormElement variant="outlined">
                    <TextField
                        id="outlined-password-input"
                        label="Owner"
                        className='input'
                        color='primary'
                        InputLabelProps={{
                          style: { color: 'black' }, 
                       }}
                      />
                  </FormElement>

                  <FormElement variant="outlined">
                    <TextField
                        id="outlined-password-input"
                        label="Repository"
                        className='input'
                        color='secondary'
                        InputLabelProps={{
                          style: { color: 'black' }, 
                       }}
                      />
                  </FormElement>
                  <Typography variant="caption">API Endpoint:</Typography>
                  <Typography variant="body1" color="secondary">https://api.github.concur.com/repos/cie/CloudInfraServices/pulls</Typography>
                  <Button sx={{ margin: 1 }} variant="contained"  color="secondary">Submit</Button>
                </SectionWrapper>
              </Grid>
              
              <Grid xs={3} item>
                <SectionWrapper>
                  <Typography variant="h3" color="secondary" align="left" sx={{paddingLeft: '10px', paddingBottom: '20px'}}>Metrics</Typography>

                  <Card variant="outlined" sx={{marginBottom: '20px'}}>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                          <Typography gutterBottom variant="h3" align='left'>
                            Pull Requests
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                          <Button size="medium" variant="outlined" startIcon={<AddIcon />}>Add</Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Card variant="outlined" sx={{marginBottom: '20px'}}>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                          <Typography gutterBottom variant="h3" align='left'>
                            Commits
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                          <Button size="medium" variant="contained" color='success'  startIcon={<CheckIcon />}>Added</Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Card variant="outlined" sx={{marginBottom: '20px'}}>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                          <Typography gutterBottom variant="h3" align='left'>
                            Lines of Code
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4}>
                          <Button size="medium" variant="outlined" color='error' startIcon={<DeleteIcon />}>Remove</Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Box textAlign="right"><Button>View Dashboard</Button></Box>
                </SectionWrapper>
              </Grid>
            </Grid>
          

        </Grid>
        
      </Container>


      <Footer />
    </>
  );
}

export default PageServices;