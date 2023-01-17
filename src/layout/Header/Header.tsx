import React from "react";
import { useStyles } from "../styles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import PersonOutlined from '@material-ui/icons/PermIdentityOutlined';
import { SearchInput } from "./SearchInput";

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.mainTitle}>ShopIn UA</div>
      <SearchInput />
      <div className={classes.optionsContainer}>
        <FavoriteBorderIcon className={classes.option} />
        <PersonOutlined className={classes.option}/>
        <LocalGroceryStoreOutlinedIcon className={classes.option}/>
      </div>
    </div>
  );
};
