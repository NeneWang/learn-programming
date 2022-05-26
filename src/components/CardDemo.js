import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const linkSample = { "Udemy": "https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/", "My Notes": "https://docs.google.com/document/d/1kP4wv0uMWKvrFWUlq66kVZnvnyb0km1AmkP65-dFJqQ/edit" }


export default function CardDemo({ title = "", tags = ["Machine Learning", "Programming"], links = linkSample }) {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {tags.map(tag => tag + " | ")}
                </Typography>
                <Typography variant="h5" component="div">{title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {Object.keys(links).map(linkItem => {
                        return <span><a href={links[linkItem]} target="_blank" >{linkItem}</a>  | </span>
                    })}
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    )

}



