import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router"
import { handleAmountChange, handleScoreChange } from "../redux/action";


const FinalScreen=()=>{
    const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);
    const handleBacktoHome=()=>{
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        history.push("/");
    }
    return (
       <Box mt={30}>
           <Typography variant="h3" fontWeight="bold" mb={3}>Final Score : {score}</Typography>
           <Button onClick={handleBacktoHome} variant="outlined">
               Back to Home
           </Button>
       </Box>
    )
}
export default FinalScreen;