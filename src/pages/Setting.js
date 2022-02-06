import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import { SelectField } from "../components/SelectField";
import { TextFiledComp } from "../components/TextFieldComp";
import { useAxios } from "../hooks/useAxios";

const Settings=()=>{
    const {response,error,loading}=useAxios({url:"/api_category.php"})
    const history = useHistory();
    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }
    if(error){
        return(
            <Typography variant="h6" mt={20} color="red">
                Something is wrong!
            </Typography>
        )
    }
    const difficultyOptions=[
        {id:"easy",name:"Easy"},
        {id:"medium",name:"Medium"},
        {id:"hard",name:"Hard"}
    ]

    const typeOptions=[
        {id:"multiple", name:"Multiple Choice"}
        // {id:"boolean", name:"True/False"}

    ]
    const handleSubmit=(e)=>{
        e.preventDefault();
        history.push('/questions')

    }
    return (
       <form onSubmit={handleSubmit}>
           <SelectField options={response.trivia_categories} label="Category"/>
           <SelectField options={difficultyOptions} label="Difficulty"/>
           <SelectField options={typeOptions} label="Type"/>
           
           <TextFiledComp/>
           <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Get Started
                </Button>
           </Box>
       </form>
    )
}
export default Settings;