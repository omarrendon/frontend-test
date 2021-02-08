import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/dataActions";

const FormAddProduct = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
    id: Math.random(),
    sku: "",
    name: "",
    quantity: "",
    price: "",
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    formWidth: {
      width: "350px",
    },
    button: {
      marginTop: 30,
      marginLeft: 20,
      width: "150px",
    },
  }));
  const classes = useStyles();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.sku) {
      errors.sku = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.quantity) {
      errors.quantity = "Required";
    }
    if (!values.price) {
      errors.price = "Required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(datos));
    handleClose();
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-end"
      className={classes.formWidth}
    >
      <Typography variant="h5" component="h5" color="primary">
        Add new product into the order.
      </Typography>
      <form
        className={classes.root}
        validate={validate}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            onChange={handleInputChange}
            required
            fullWidth
            id="standard-error"
            label="SKU"
            name="sku"
          />
        </div>
        <div>
          <TextField
            onChange={handleInputChange}
            required
            fullWidth
            id="standard-error"
            label="Name"
            name="name"
          />
        </div>
        <div>
          <TextField
            onChange={handleInputChange}
            required
            fullWidth
            id="standard-error"
            label="Quantity"
            name="quantity"
            type="number"
          />
        </div>
        <div>
          <TextField
            onChange={handleInputChange}
            required
            fullWidth
            id="standard-error"
            label="Price"
            name="price"
            type="number"
          />
        </div>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
        >
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default FormAddProduct;
