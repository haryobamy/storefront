import React, { useState, useEffect } from 'react';
import { InputLabel,Modal, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './CustomTextField';
import styled from 'styled-components'
import ReactCodeInput from "react-verification-code-input";
// import VerifyModal from './Modal';
import { makeStyles } from '@material-ui/core/styles';






const MobileForm = ({handleNext, handleBack}) => {
    const classes = useStyles();
    const methods = useForm();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    const handleVerify = () => {

    }

    return (
        <>
        <MobileWrapper>
            <div>
                <Typography style={{  color:'gray', fontSize:'14px' }}> To place your order, log in by entering your 10 digit mobile number</Typography>
        
        <FormProvider {...methods}>
            <Grid>
            <form >
            <InputLabel style={{  color:'gray', fontSize:'12px',marginTop:'20px',marginBottom:'10px' }}>Mobile Number</InputLabel>
            <input  className='inter' placeholder='+256'/>
                <input type='tel'  pattern='[0-9]{3}-[0-9}{2}-[0-9]{3}' className='phone' name='mobile' maxLength={10} placeholder='Enter mobile Number' requiredtitle='enter a valid phone number'/>
                
                <Button onClick={handleOpen}  style={{ backgroundColor:'#fefe33', color:'#2766cc', fontWeight:'bold',marginLeft:'10px',padding:'9px 40px 9px 40px',borderRadius:'10px', marginTop:'-3px' }}>Login</Button>

                <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div  className={classes.paper}>
        <i className='fa fa-times close' onClick={handleClose}></i>
      <h2 id="simple-modal-title" className={classes.h2}>Verify your number</h2>
      <hr/>
      <p id="simple-modal-description" className={classes.p}>
        please enter the verification code sent via sms to +25686345278
      </p>
        <div>
            <form> 
              <div style={{dispaly:'inline', backgroundColor:'green', justifyContent:'space-between'}}>
      <ReactCodeInput fields={4} className={classes.reactinput} style={{}} onInput={handleVerify} onComplete={handleNext} />
      </div>   
      <Link className={classes.code}>Resend code</Link>
      </form>
      </div>
      
    </div>
      </Modal>
    </div>
            </form>
            </Grid>
        </FormProvider>
        </div>
        
        </MobileWrapper>
        </>
    )
}
const MobileWrapper = styled.div`
p {
  padding-top: -10px;
  align-text: center;
  margin-bottom: 25px; 

}

.close {
    cursor:pointer;
    margin-top: 30px;
    font-size:12px

}



input:focus{
    outline:none; 
}
input {
    font-size:16px;
    padding:6px 0 6px 0;
    border:1px solid gray; 

    


    
}
.phone{
 
 border-left: none; 
 border-radius:0 10px 10px 0;
 padding-left:15px;

}
.inter{
    
    border-right: none  ; 
    padding-left:10px;
    width:10%;
    border-radius:10px 0 0 10px;
    font-weight:bold;
    
}

.styles_react-code-input__CRulA > input {
  border: solid 1px #a8adb7;
  margin: 50px;
  border-right: none;
  font-family: 'Lato';
  font-size: 20px;
  color: #525461;
  text-align: center;
  box-sizing: border-box;
  border-radius: 0;
  -webkit-appearance: initial;
}
`

export default MobileForm;
const useStyles = makeStyles((theme) => ({
  h2:{
    // margin:'0 110px',
    fontSize:'22px',
    fontWeight: 'bold',
    textAlign:'center',

    justifyContent:'center',

  },
  p:{
    margin:'20px 30px 30px 30px ',
    fontSize:'18px',
    fontWeight: '',
    textAlign:'center',

  },
  reactinput:{
    margin:'0 100px',
    fontSize:'25px',
    fontWeight: 'bold',
    textAlign:'center',
  backgroundColor:'red',
  Color:'green'
    
  },

  
  code:{
    margin:'0 150px ',
    marginTop:'100px',
    fontSize:'18px',
    fontWeight: 'bold',
    // padding:'25px',
    // justifyItems:'center',

  },
    
    paper: {
      position: 'absolute',
      justifyContent:'center',
      width: 500,
      height:300,
      backgroundColor: '#fff',
      border: 'none',
      boxShadow:'5px',
      padding: theme.spacing(2, 4, 3),
    float:'left',
    left:'50%',
    top:'50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:'5px',
    },
  }));