import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const CardaDta = () => {
  const { viewInfo } = useSelector((state) => state.data);

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      width: "100%",
    },
  });
  const classes = useStyles();

  const handlePayment = () => {
    Swal.fire("Success!", "your payment was successful!", "success");
  };

  return (
    <Card className={classes.root} variant="outlined">
      {viewInfo?.items ? (
        viewInfo?.items.map((el) => (
          <CardContent key={el.id}>
            <Typography variant="body2" component="p">
              SKU: {el.sku}
            </Typography>
            <Typography variant="body2" component="p">
              NAME: {el.name}
            </Typography>{" "}
            <Typography variant="body2" component="p">
              QUANTITY: {el.quantity}
            </Typography>{" "}
            <Typography variant="body2" component="p">
              PRICE: {el.price}
            </Typography>
          </CardContent>
        ))
      ) : (
        <CardContent>
          <Typography variant="body2" component="p">
            SKU: {viewInfo.sku}
          </Typography>
          <Typography variant="body2" component="p">
            NAME: {viewInfo.name}
          </Typography>{" "}
          <Typography variant="body2" component="p">
            QUANTITY: {viewInfo.quantity}
          </Typography>{" "}
          <Typography variant="body2" component="p">
            PRICE: {viewInfo.price}
          </Typography>
        </CardContent>
      )}
      <CardActions>
        <Button
          size="large"
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={handlePayment}
        >
          Pay
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardaDta;
