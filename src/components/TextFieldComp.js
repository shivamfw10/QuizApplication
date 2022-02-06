import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/action";

export const TextFiledComp=()=>{
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        dispatch(handleAmountChange(e.target.value));
    }
    return(
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>
    )
}