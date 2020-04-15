import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core"
import Tags from "../components/Tags"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '25%',
        background: "inherit",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            width: "60%"
        }

    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    Panel: {
        background: "linear-gradient(to top, #00416a, #e4e5e6);",
        color: "#e4e5e6",
        textAlign: "center"
    },
    Icon: {
        color: "#e4e5e6"
    }
}));

export default function SimpleExpansionPanel() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.Panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.Icon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Advance Searching</Typography>
                </ExpansionPanelSummary>
                <FormControl style={{margin:"0 auto", textAlign:"center"}} component="fieldset">
                            <FormLabel component="legend">Filter:</FormLabel>
                            <FormGroup style={{margin:"0 auto", textAlign:"center"}}  aria-label="position" row>
                                <FormControlLabel value="Completed"
                                    control={<Checkbox color="primary" />}
                                    label="Completed"
                                    labelPlacement="Completed" />

                                    <FormControlLabel value="Issues"
                                    control={<Checkbox color="primary" />}
                                    label="Issues"
                                    labelPlacement="Issues" />

                                    <FormControlLabel value="Working"
                                    control={<Checkbox color="primary" />}
                                    label="Working"
                                    labelPlacement="Working" />
                            </FormGroup>
                        </FormControl>
                <ExpansionPanelDetails>
                    
                    <div>
                        
                        Tags:
   <Tags />
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}
