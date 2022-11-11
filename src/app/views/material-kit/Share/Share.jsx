import React from 'react'
import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FacebookIcon, FacebookShareButton, TwitterShareButton, TwitterIcon, WhatsappIcon, WhatsappShareButton, } from 'react-share';

const ShareUrl = `https://play.google.com/store/apps/details?id=com.Trickysys.myapplication.cliniceasy`;

const Share = () => {

    // const currentPageUrl = window.location.href;
    const currentPageUrl = `https://www.trickysys.com/`;


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

    return (
        <Box>
            <HeadingComp heading="Share" navigate="/" />

            <Box sx={ClinicLogoBox}>
                <img style={{ width: "150px" }} src="/assets/MySVG/ClinicEasyLogo.webp" alt="Logo" />
            </Box>
            <Typography variant='subtitle1' mb={2} align='center'> Share with your Friends and Family to help them </Typography>


            <Box sx={ShareBox}>

                <Stack direction="row" sx={{ marginBottom: "20px" }}>

                    <Box sx={{ marginX: "5px" }}>
                        <FacebookShareButton
                            url={currentPageUrl}
                            quote={"Clinic Easy is Amazing"}
                            hashtag='#trickysys'
                        >
                            <FacebookIcon round={true} size={50} />
                        </FacebookShareButton>
                    </Box>

                    <Box sx={{ marginX: "5px" }}>
                        <TwitterShareButton quote={"Clinic Easy is Amazing"}
                            url={currentPageUrl}  >
                            <TwitterIcon round={true} size={50} />
                        </TwitterShareButton>

                    </Box>

                    <Box sx={{ marginX: "5px" }}>
                        <WhatsappShareButton quote={"Clinic Easy is Amazing"}
                            url={currentPageUrl}  >
                            <WhatsappIcon round={true} size={50} />
                        </WhatsappShareButton>

                    </Box>
                </Stack>

                <Typography variant='subtitle1' m={2}>Copy link here</Typography>

                <CopyToClipboard text={ShareUrl} >
                    <Button variant='outlined' size="large" endIcon={<ContentCopyIcon />}> Copy </Button>
                </CopyToClipboard>

            </Box>

        </Box>
    )
}

export default Share

// npm i react-copy-to-clipboard   ==> Copy to clipboard npm install
