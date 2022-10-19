import React from "react";
import {
  Grid,
  Toolbar,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import Product from "./Product/Product";
import app1 from "../../assets/app1.png";
import app2 from "../../assets/app2.png";
import useStyles from "./styles";
import { Col, Row } from "reactstrap";
import Search from "../Navbar/Search";

const products = [
  {
    id: 1,
    prix: "2,670,000 MAD",
    desc: "Maison a vendre | 3 chambres | 230 m",
    place: "Marrakech,Enakhil",
    annonce: "MARRAKACH, CONSEILS INVST",
    image: app1,
  },
  {
    id: 2,
    prix: "3,180,000 MAD",
    desc: "Appartement a vendre | 5 chambres | 400 m",
    place: "Marrakech , Gueliz",
    annonce: "MARRAKACH, CONSEILS INVST",
    image: app2,
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Toolbar>
        <Search />
        <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
          <Button
            variant="outlined"
            style={{
              color: "#460AF0",
              borderColor: "#460AF0",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            A vendre
          </Button>
        </Col>
        <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
          <Button
            variant="outlined"
            style={{
              color: "#460AF0",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Prix
          </Button>
        </Col>
        <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
          <Button
            variant="outlined"
            style={{
              color: "#460AF0",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Type
          </Button>
        </Col>
        <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
          <Button
            variant="outlined"
            style={{
              color: "#460AF0",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Surface
          </Button>
        </Col>
        <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
          <Button
            variant="outlined"
            style={{
              color: "#460AF0",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Chambres
          </Button>
        </Col>

        <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#460AF0",
              color: "white",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Valider
          </Button>
        </Col>
      </Toolbar>
      <Card>
        <CardContent style={{ float: "right" }}>
          <CardHeader
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 20,
            }}
            title="Immobilier et maison à vendre partout au maroc"
          />
          <Button
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "6,37",
              gap: "10",
              width: "200px",
              height: "34px",
              color: "white",
              top: " -11px",
              right: "-21px",
              background: "#00B4FF",
              borderRadius: " 24px",
            }}
          >
            500 Agents listings
          </Button>
          <Col style={{ marginLeft: "18pc", marginTop: "-3pc" }}>
            <Col style={{ marginLeft: -45, paddingTop: 12 }}>Filtre par : </Col>

            <FormControl style={{ marginLeft: "3pc", marginTop: -40 }}>
              <InputLabel
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: " #460AF0",
                }}
              >
                Date - du plus récent ou plus ancien
              </InputLabel>
              <Select label="filter" style={{ paddingRight: 242 }}></Select>
            </FormControl>
          </Col>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={6}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <div>
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Bd%20Dammam,%20Casablanca%2020150&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </Card>
    </main>
  );
};

export default Products;
