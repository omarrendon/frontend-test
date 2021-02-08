import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { viewData } from "../redux/actions/dataActions";

const TableData = ({ data, newData }) => {
  const dispatch = useDispatch();

  const handleViewInfo = (el) => {
    dispatch(viewData(el));
  };

  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Order number</TableCell>
          <TableCell align="center">Name</TableCell>

          <TableCell align="right">View Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!newData
          ? data?.orders?.map((el) => (
              <TableRow key={el.id}>
                <TableCell component="th" scope="row">
                  {el.number}
                </TableCell>
                <TableCell align="center">{el.items[0].name}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => handleViewInfo(el)}
                  >
                    View info.
                  </Button>
                </TableCell>
              </TableRow>
            ))
          : newData?.map((el) => (
              <TableRow key={el.id}>
                <TableCell component="th" scope="row">
                  {el.number ? el.number : el.sku}
                </TableCell>
                <TableCell align="center">
                  {el.items ? el?.items[0]?.name : el.name}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => handleViewInfo(el)}
                  >
                    View info.
                  </Button>
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
