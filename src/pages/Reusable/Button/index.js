import { Button } from '@mui/material'
import React from 'react';
import Link from "next/link";
import style from "./style.module.scss";

const ButtonContainer = () => {
    return (
        <div style={{ paddingRight: 24 }}>
            <Button
                variant="contained"
                size="md"
                className={style.viewPackageText}
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600, background: "#2095AE", }}
            >
                <Link href={"/destinationsPackages"} style={{ color: "#fff", textDecoration: "none" }}> View All Destinations</Link>
                {/* <a href={"/cityWiseDestinations"} style={{ color: "#fff", textDecoration: "none" }}> View Packages</a> */}
            </Button>
        </div>
    )
}

export default ButtonContainer