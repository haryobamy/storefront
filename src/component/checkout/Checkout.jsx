import React from 'react';
import { Paper, Stepper, Step, StepLabel, Typography,StepContent, CircularProgress, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MobileForm from './MobileForm';
import AddressForm from './AddressForm';
import Carts from '../cart/Carts';






// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return `To place your order, log in by entering your 10 digit mobile number`;
//     case 1:
//       return 'An ad group contains one or more ads which target a shared set of keywords.';
//     case 2:
//       return `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`;
//     default:
//       return 'Unknown step';
//   }
// }


 const Checkout= ({modalOpen, handleOpen}) => {
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const finalStep = completeStep();

  function completeStep() {
    return ['Accounts', 'Delivery Address', 'Payments  select your payment'];
  }

  function completeStepContent(finalStep) {
    switch (finalStep) {
        case 0:
          return 'you are securely logged in';
        case 1:
          return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
          return `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`;
        default:
          return 'Unknown step';
      }
      
  }

  function getSteps() {
    return ['Accounts', 'Delivery Address', 'Payments  '];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <MobileForm handleNext={handleNext} modalOpen={modalOpen} handleBack={handleBack}  />;
      case 1:
        return <AddressForm modalOpen={modalOpen}/>
      case 2:
        return `select Your Payment.`;
      default:
        return 'Unknown step';
    }
  }

//   

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      <>
      <hr style={{marginBottom:''}} />
      <div className='row'>
          <div className="col-lg-7 md-4 sm-2">
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical"  className={classes.Stepper}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel > <Typography className={classes.label} variant='h6'  > {label}</Typography></StepLabel>
            <StepContent>
              <Typography className={classes.content} >{getStepContent(index)}</Typography>
              {/* <div className={classes.actionsContainer}>
                <div> */}
                    
                    
                  {/* <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button> */}
                  {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button> */}
                {/* </div>
              </div> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
    </div>
    <div className="col-lg-5 md-2 sm-2">
    <div className={classes.bag}>
      <div className={classes.nav}>
                    <h1 className={classes.h1}>Bag  <span className={classes.span}>0</span></h1>
                    <span><button  className={classes.clear} onClick >Clear Bag</button></span>
                    </div>

                    <Carts/>
                    </div>

    </div>
    </div>
</>
  );
}

export default Checkout;

const useStyles = makeStyles((theme) => ({

  nav : {
    display:'flex',
    justifyContent: 'space-between',
   
  },
    clear: {
        border: 'none' ,
        BackgroundColor: '#fff', 
        marginRight:'100px', 
        textDecoration:'underline', 
    },
    bag:{
        marginLeft:'100px',
        marginTop: '25px',
        marginRight:'50px',  
    },
    h1:{
        
    
            borderRadius:'4px',
            fontSize:'20px',
            fontWeight:'bold',
            marginBottom:'30px',
        
            
       

    },
    span:{
       
            backgroundColor:'#2766cc',
            borderRadius:'4px',
            fontSize:'15px',
            color:'#fff',
            paddingLeft:'5px',
            paddingRight:'3px',
       
    },
    stepper: {
        fontSize:'36px'
    },
    content : {
        fontSize:'12px',
        color:'gray',
        marginLeft:'25px',
        fontWeight:'600',
        marginTop:'-8px'

    },
    label :{
        fontWeight:'bold',
        marginLeft:'25px',
        fontSize:'18px'

    },
    root: {
      width: '100%',
      marginLeft: '100px',
      borderRight: '1px solid gray'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
