import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  //   CardActions,
  CardHeader,
  Typography,
  IconButton,
  //   IconBottom,
} from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useStyles from "./styles";
// import { AddShoppingCard } from "@materia-ui/core";
const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image}>
        <IconButton
          aria-label="settings"
          style={{
            left: "86.13%",
            right: "3.73%",
            marginTop: "-23pc",
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </CardMedia>

      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: 20,
            fontWeight: 600,
            color: "black",
          }}
        >
          {product.prix}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          {product.desc}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          {product.place}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ANNONCER PAR : {product.annonce}
        </Typography>
      </CardContent>
      {/* <CardActions  disableSpacing className={classes.cardActions}>
        <IconBottom aria-label=""></IconBottom>
      </CardActions> */}
    </Card>
  );
};

export default Product;
