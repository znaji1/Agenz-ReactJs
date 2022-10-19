import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Link,
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@material-ui/core";

import { Col } from "reactstrap";
import logo from "../../assets/logo.png";
import Vector from "../../assets/Vector.png";
import maroc from "../../assets/maroc.png";
import admin from "../../assets/admin.png";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  const [annonce, setAnnonce] = React.useState("");

  const handleChange = (event) => {
    setAnnonce(event.target.value);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="annonce.js"
              height="25px"
              className={classes.image}
            />
          </Typography>

          <Col xs={4} position="center" style={{ paddingLeft: "68px" }}>
            <FormControl style={{ top: -10 }}>
              <InputLabel>Acheter</InputLabel>
              <Select
                value={annonce}
                onChange={handleChange}
                label="annonce"
                style={{ paddingRight: 37 }}
              ></Select>
            </FormControl>
          </Col>
          <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
            <Link variant="small" color="inherit">
              Louer
            </Link>
          </Col>
          <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
            <Link variant="small" color="inherit">
              Estimer
            </Link>
          </Col>
          <Col xs={4} position="center" style={{ paddingLeft: "26px" }}>
            <FormControl style={{ top: -10 }}>
              <InputLabel>Crédit</InputLabel>
              <Select
                value={annonce}
                onChange={handleChange}
                label="Crédit"
                style={{ paddingRight: 41 }}
              ></Select>
            </FormControl>
          </Col>

          <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
            <Link variant="small" color="inherit">
              Prix immobilibaires
            </Link>
          </Col>
          <Col xs={4} position="center" style={{ paddingLeft: "39px" }}>
            <Link variant="small" color="inherit">
              Agences
            </Link>
          </Col>

          <Col style={{ paddingLeft: "111px" }}>
            <img src={maroc} alt="maroc" style={{ width: 24, height: 24 }} />
          </Col>
          <Col xs={4} position="center" style={{ paddingLeft: "3px" }}>
            Arabe
          </Col>
          <Col style={{ paddingLeft: "27px" }}>
            <img src={admin} alt="maroc" style={{ width: 24, height: 24 }} />
          </Col>
          <Col xs={4} position="center" style={{ paddingLeft: "3px" }}>
            Connexion
          </Col>

          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton
              aria-label="Show card items"
              color="inherit"
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              float="right"
            >
              <Col xs={4} position="center">
                <div variant="small">Offres Pro</div>
              </Col>

              <Badge color="secondary">
                <img
                  src={Vector}
                  alt="primary"
                  style={{ paddingLeft: "7px" }}
                />
              </Badge>
            </IconButton>
          </div>

          <Col></Col>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
