import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const ShareUrl = `https://play.google.com/store/apps/details?id=com.Trickysys.myapplication.cliniceasy`;

const Share = () => {


    const ClinicLogoBox = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0px 20px 0px ",
    }

    const ShareBox = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }

    // const [value, setValue] = useState();
    // const [copied, setCopied] = useState(false);

    return (
        <Box>
            <HeadingComp heading="Share" navigate="/" />

            <Box sx={ClinicLogoBox}>
                <img style={{ width: "150px" }} src="/assets/MySVG/ClinicEasyLogo.webp" alt="Logo" />
            </Box>
            <Typography variant='subtitle1' mb={2} align='center'> Share with your Friends and Family to help them </Typography>


            <Box sx={ShareBox}>

                <CopyToClipboard text={ShareUrl} >
                    <Button variant='outlined' size="large" endIcon={<ContentCopyIcon />}> drsanch</Button>
                </CopyToClipboard>

                <Typography variant='subtitle1' m={2}>Copy link here</Typography>

                <Button variant='contained' size="large" startIcon={<ShareIcon />}>
                    Share Application via</Button>
            </Box>

            {/* <Box>
                <input value={value} onChange={({ target: { value } }) => setValue(value)} />

                <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                    <Button>Copy to Clipboard</Button>
                </CopyToClipboard>
            </Box> */}

        </Box>
    )
}

export default Share

// npm i react-copy-to-clipboard   ==> Copy to clipboard npm install
