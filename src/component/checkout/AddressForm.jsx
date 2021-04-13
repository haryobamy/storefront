import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper,Card,Button,CardContent,CardActions, Typography,Modal, CircularProgress, InputLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MobileForm from './MobileForm';





 const AddressForm =()=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

  return (
      <>
      <div className='row'>
          <div className="col-lg-6">
    <Card className={classes.root}  >
      <CardContent>
        <Typography className={classes.title}  variant='h4' gutterBottom>
          Shrey Karah
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Quech ville, plot12 Nkuruma Rd
          <br/>
           kampala Uganda
        </Typography>
        <Typography variant="body2" className={classes.body}  component="p">
        +256 76 633 4574
        </Typography>
      </CardContent>
    </Card>
    </div>
        <div className="col-lg-6">
    <Card className={classes.address}>
      <CardActions>
        <Button  onClick={handleOpen} className={classes.button} size="small"> <i className='fa fa-plus mr-3'></i> Add New Address</Button>
        

                    <div>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div  className={classes.paper}>
                    <i className='fa fa-times close' onClick={handleClose}></i>
                    <Typography id="simple-modal-title" variant='h5' > Edit Address</Typography>
                    <hr/>
                    <div >
                    <form > 
                        <InputLabel className={classes.label} >Name</InputLabel>
                    <input type='text' className={classes.input}  required placeholder='e.g John Doe'  />
                        <InputLabel className={classes.label}>Mobile Number</InputLabel>
                        <div className={classes.input}>
                    <input type='num' className={classes.inter} placeholder='+256'  />
                    <input type='num'className={classes.phone}  required placeholder='enter mobile number'/>
                    </div>
                        <InputLabel className={classes.label}>City</InputLabel>
                    <input type='text' className={classes.input}  required placeholder='e.g kampala' />
                        <InputLabel className={classes.label}>Address</InputLabel>
                    <textarea cols='10' rows='4' className={classes.input} type='text' required placeholder='e,g kampala , plot 25 Uganda'  />
                      

                    <Button className={classes.btn} >Add Address</Button>
                   
                    </form>
                    </div>

                    </div>
                    </Modal>
                    </div>
       
      </CardActions>

    </Card>

    
   
    </div>
    
    </div>
    

  
    </>
  );
}

export default AddressForm;


const useStyles = makeStyles((theme) => ({
  btn: {
    width:'200px', 
    padding:'10px', 
    color:'lightgray', 
    fontWeight:'bold', 
    borderRadius:'5px', 
    margin:'10px 120px 0 120px', 
    borderColor:'grey', 
    border:'none',  
    borderRadius:'5px', 
    backgroundColor:'darkgray',
    
  },
  

   label :{
      fontWeight:'bold',
      fontSize: '18px',
      fontFamily:'Arial',
      marginBottom: '10px',


    },
  
    input :{
        width:'100%',
        borderRadius:'5px',
        // marginBottom:'15px',
        // marginTop:'25px,',
        fontSize:'18px',
        // border:'1px solid gray'
        padding:'8px',
        marginBottom:'20px',
        fontFamily:'Cascadia Mono',
  
      
    },

    inter: {
        borderRight: 'none',
        width:'20%',
        borderRadius:'5px 0 0 5px',
        fontWeight:'bold',
        fontSize:'18px',
        border:'1px solid gray',
        padding:'8px',
        marginLeft: '-5px',
        width:'60px',
        color:'gray',
        marginTop:'-10px',
        
        
        

    },
    phone: {
        borderLeft: 'none',
        borderRadius:'0 5px 5px 0',
        // paddingLeft:'15px',
        fontSize:'18px',
        border:'1px solid gray',
        width:'360px',
        padding:'8px ',
        marginTop:'-10px',

    },

    paper: {
        position: 'absolute',
        width: 500,
        height:650,
        backgroundColor: '#fff',
        border: '2px solid #000',
        boxShadow:'5px',
        padding: theme.spacing(2, 4, 3),
      float:'left',
      left:'50%',
      top:'50%',
      transform: 'translate(-50%, -50%)',
      
      },
      
    button : {
        color:'#2766cc',
        backgroundColor:'#fff'
    },
    address :{
        marginRight:150,
        marginLeft:-50,
        height:'100%',
        padding:'40px 10px 40px 10px',
        color:'blue'
    },
   
    root: {
      minWidth: 275,
      marginRight:100,
      border:'1px solid #2766cc',
      
        
      
    },

    body: {
        fontWeight:'700'
    },
   
    title: {
      fontSize: '16px',
      fontWeight:'bold'
    },
    pos: {
      marginBottom: 12,
      fontSize: '14px',
    },
}));
