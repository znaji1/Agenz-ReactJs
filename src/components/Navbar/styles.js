import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 0;
export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    title: {
      flexGrow: 1,
      alignItems: "center",
      display: "flex",
      textDecoration: "none",
    },
  },
  image: {
    width: 140,
    height: 57,
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
}));
