import { makeStyles, ListItem } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: "8px",

      "&:hover": {
        color: "grey",
      },
    },
  },
});

const NavigationItem = ({ text, icon }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.item}>
      {icon}
      <p>{text}</p>
    </ListItem>
  );
};

export default NavigationItem;
