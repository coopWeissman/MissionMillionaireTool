import React from 'react';
import Icon from "@material-ui/core/Icon";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import GridItem from "./GridItem.js";
import GridContainer from "./GridContainer.js";
import CustomTabs from "./CustomTabs.js";
import Danger from "./Danger.js";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Card from "./Card.js";
import CardHeader from "./CardHeader.js";
import CardIcon from "./CardIcon.js";
import CardBody from "./CardBody.js";
import CardFooter from "./CardFooter.js";

import styles from "./dashboardStyle.js";
const useStyles = makeStyles(styles);
function Stats(props) {
    const classes = useStyles();
    return (
        <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <AttachMoneyIcon/>
            </CardIcon>
            <p className={classes.cardCategory}>Salary</p>
            <h3 className={classes.cardTitle}>
              ${props.income}
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Danger>
                <Warning />
              </Danger>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Get more space
              </a>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <Store />
            </CardIcon>
            <p className={classes.cardCategory}>Fun Money</p>
            <h3 className={classes.cardTitle}>${(props.spending).toFixed(2)}</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Last 24 Hours
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
            <FastfoodIcon/>
            </CardIcon>
            <p className={classes.cardCategory}>expenses</p>
            <h3 className={classes.cardTitle}>${(props.expenses)}</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <LocalOffer />
              Tracked from Github
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <ShowChartIcon/>
            </CardIcon>
            <p className={classes.cardCategory}>Contributions</p>
            <h3 className={classes.cardTitle}>${props.savings}</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      </GridContainer>
    )
}

export default Stats
