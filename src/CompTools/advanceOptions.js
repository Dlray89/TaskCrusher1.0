import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tags from "../components/Tags"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
        background:"inherit",
        margin:"0 auto",
        [theme.breakpoints.down("sm")]: {
            width:"60%"
        }

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Panel:{
      background:"linear-gradient(to top, #00416a, #e4e5e6);",
      color:"#e4e5e6",
      textAlign:"center"
  },
  Icon:{
      color:"#e4e5e6"
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
