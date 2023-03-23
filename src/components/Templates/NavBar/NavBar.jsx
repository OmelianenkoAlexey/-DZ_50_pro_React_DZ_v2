import React from "react";
import { Typography } from "@mui/material";
import StarNavBar from "./ComponentsNavBar/StarNavBar";


export default function NavBar() {

    return (
        <>


  <Typography
                variant="h3"
                component="h2"
                color="white"
            >
                NavBar
            </Typography>;

            <StarNavBar />
        </>
    )
}