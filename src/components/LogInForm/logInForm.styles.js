import styled from "@emotion/styled";
import { Box,Paper,TextField,Button } from "@mui/material";


export const StyledBox = styled(Box)`
    height:100%;
    width:100%;
    position:absolute;
`

export const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;

    &  * {
        margin:10px;
    }
`