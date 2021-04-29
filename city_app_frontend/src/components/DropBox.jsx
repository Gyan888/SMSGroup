import React, { forwardRef, useState } from 'react';
import  { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DropboxChooser from 'react-dropbox-chooser'




let DropBox = (props) =>{    

    const [url,setUrl] = useState("")

    const APP_KEY="bmpxi0m5jjml851"


    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),                        
          },
        
        },
      }));

    const classes = useStyles();      

    let dropboxRedirect = ()=>{
      let client_id="bmpxi0m5jjml851"
      let MY_REDIRECT_URI=`${process.env.REACT_APP_API_URL}/city-app/authorize`;      
      let url = `https://www.dropbox.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${MY_REDIRECT_URI}&response_type=code`
      console.log(url);
      return (
        <Redirect to={url}/>
      )
    }

    
    let handleSuccess = files =>{
     console.log(files)
     setUrl(files[0].link)
     console.log(url);
    };
    
        

    return (
      <div className="App">
        <h1 style={{textAlign:"center"}}>Upload Or Choose Files to DropBox</h1>
        <br/><br/>
      <Button color='red' size='medium'>
        <DropboxChooser appKey={APP_KEY}
                        success={handleSuccess}
                        cancel={() => console.log('closed')}
                        multiselect={true}
                        >                            
      
        </DropboxChooser>        
      </Button>
      <h2>{url}</h2>
      </div>
    );
}
export default DropBox;