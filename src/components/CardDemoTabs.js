import React, { useState } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const linkSample = { "Udemy": "https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/", "My Notes": "https://docs.google.com/document/d/1kP4wv0uMWKvrFWUlq66kVZnvnyb0km1AmkP65-dFJqQ/edit" }
const image = require("@site/static/img/2022-05-26-19-56-57.png").default
const image2 = require("../../static/img/2022-05-26-20-01-45.png").default

export default function CardDemo({ title = "", tags = ["Machine Learning", "Programming"], links = linkSample }) {

    const [value, setValue] = React.useState(1);

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
            {/* <CardContent>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <Stack direction="row" spacing={1}>

                        {tags.map(tag => <Chip label={tag}></Chip>)}
                    </Stack>

                </Typography>
                <Typography variant="h5" component="div">{title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {Object.keys(links).map(linkItem => {
                        return <span><a href={links[linkItem]} target="_blank" >{linkItem}</a>  | </span>
                    })}
                </Typography>
                <img src={image2} />
            </CardContent>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Content</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
        </Card>
    )

}



