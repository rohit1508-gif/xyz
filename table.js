import React from "react";
import './styles.css';
import {
    Grid,
    Button,
    Paper,
    Checkbox,


} from "@material-ui/core";
import LanguageIcon from '@mui/icons-material/Language';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function App() {
    return (
        <Paper
            variant="elevation"
            elevation={3}
            className="mainMargin"
        >
            <Grid container
                        direction="row"
                        className="topRow"
                    >

                        <Grid item xs={11}

                        >
                            Filter Available Statements
                        </Grid>
                        <Grid item xs={1} className="butnElement"
                        >

                            <Button variant="text" ><span className="minButn">---</span></Button>
                        </Grid>
                    </Grid>
            <div className="mainGrid">
                <Grid container
                    direction="column"
                    

                >
                    

                    <Grid container
                        direction="row"
                        className="scndRow"
                    >

                        <Grid container
                            direction="row"
                            xs={6}           >

                            <Grid item className="scndRowBack">
                                {<LanguageIcon />}
                            </Grid>
                        </Grid>
                        <Grid container
                            direction="row"
                            xs={6} >
                            <Grid item className="scndRowBack" >
                                Statement Type
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        className=""
                    >

                        <Grid item xs={6}>

                            <select name="decision" id="decision"
                                style={{ width: "90%" }}>
                                <option value="0">Bahrain</option>
                                <option value="1">option</option>
                            </select>
                        </Grid>

                        <Grid item xs={6}>
                            <select name="decision" id="decision"
                                style={{ width: "80%" }}>
                                <option value="0">Current & Savings Account</option>
                                <option value="1">option</option>
                            </select>
                        </Grid>
                    </Grid>


                    <Grid container
                        direction="row"
                        className="thirdRow"
                    >
                        <Grid container
                            direction="row"
                            xs={6}
                        >
                            <Grid item className="relNoIcon">

                                {
                                    < ContactMailIcon />}
                            </Grid>
                            <Grid item xs={6}>
                                <input className="relNoInp" value="Please enter a valid relationship number">

                                </input>
                            </Grid>
                        </Grid>

                        <Grid container
                            direction="row"
                            xs={6}
                        >
                            <Grid item className="relNoIcon">

                                {
                                    < CalendarMonthIcon />}
                            </Grid>
                            <Grid item xs={6}>
                                <input className="relNoInp" value="Please click here to select a valid date range from drop-down">

                                </input>
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid container className="lastRow"
                        direction="row"
                    >
<Grid item xs={6}>
</Grid>
<Grid item xs={2}>
<Checkbox {...label} defaultChecked size="small" />
    Fetch Pilot Statements
</Grid>
<Grid item xs={2}>
<Button variant="outlined">Reset</Button>
</Grid>
<Grid item xs={1}>
<Button variant="outlined">Search</Button>
</Grid>



</Grid>


                    </Grid>


            </div>
        </Paper>




    );
}

export default App;