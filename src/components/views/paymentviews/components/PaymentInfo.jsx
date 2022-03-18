import { Grid, Typography } from "@mui/material";
import { useStyle } from "./Style";
import React from "react";

export function PaymentInfo(props) {
  const { formValues } = props;
  const classes = useStyle();
  const { cardHolder, card, expiration } = formValues;

  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Payment details
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card type</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Visa</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card holder</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{cardHolder}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Card number</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{card}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Expiry Date</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{expiration}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}
