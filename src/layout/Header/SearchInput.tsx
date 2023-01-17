import { Button, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { ChangeEvent, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import { useStyles } from "../styles";

export const SearchInput = () => {
  const [input, setInput] = useState<string>("");
  const classes = useStyles();
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const isMobile = useIsMobile();

  return (
    <div className={classes.searchContainer}>
      <TextField
        value={input}
        variant="outlined"
        placeholder={"Enter search keyword"}
        onChange={handleSearchChange}
        fullWidth
        classes={{ root: classes.search }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      {!isMobile && <Button className={classes.button}>Search</Button>}
    </div>
  );
};
