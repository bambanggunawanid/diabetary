import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Text, View } from "react-native";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function NavBottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <View>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <Text>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </Text>
        <Text>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Text>
        <Text>
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </Text>
      </BottomNavigation>
    </View>
  );
}
