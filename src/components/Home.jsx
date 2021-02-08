import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../redux/actions/dataActions";
import {
  Grid,
  Typography,
  Paper,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Table from "./TableData";
import Card from "./Card";
import FormAddProduct from "./FormAddProduct";

const Home = () => {
  const dispatch = useDispatch();
  const { data, viewInfo, newData } = useSelector((state) => state.data);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchingData());
  }, []);

  const useStyles = makeStyles((theme) => ({
    table: {
      height: 800,
      overflow: "auto",
      marginTop: "30px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    typo: {
      textAlign: "center",
      margin: "10px",
    },
    button: {
      marginTop: "10px",
    },
    principal: {
      margin: "40px",
    },
    typo2: {
      marginTop: 200,
      marginBottom: 200,
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.principal}
      >
        <Grid item xs={9} sm={9} md={9} lg={9}>
          <Typography
            variant="h3"
            component="h3"
            color="secondary"
            className={classes.typo}
          >
            Frontend Test
          </Typography>
        </Grid>
        <Grid item xs={9} sm={9} md={3} lg={3}>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="secondary"
            size="medium"
            className={classes.button}
          >
            Add new product
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <FormAddProduct handleClose={() => handleClose()} />
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
      <Grid item xs={9} sm={9} md={4} lg={4}>
        <Paper elevation={3} className={classes.table}>
          <Typography
            variant="h4"
            component="h4"
            color="primary"
            className={classes.typo}
          >
            Order List
          </Typography>
          {newData ? <Table newData={newData} /> : <Table data={data} />}
        </Paper>
      </Grid>

      <Grid item xs={9} sm={9} md={4} lg={4}>
        <Paper elevation={3} className={classes.table}>
          {viewInfo ? (
            <>
              <Typography
                variant="h4"
                component="h4"
                color="primary"
                className={classes.typo}
              >
                Product's list
              </Typography>
              <Card />
            </>
          ) : (
            <Typography
              variant="h4"
              component="h4"
              color="primary"
              className={classes.typo2}
            >
              Choose an Order
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
