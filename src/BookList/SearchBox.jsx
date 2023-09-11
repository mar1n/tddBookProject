import React from "react";
import { TextField } from "@mui/material";
import clone from "lodash.clone";
import isEmpty from "lodash.isempty";


const SearchBox = ({term, onSearch}) => {
    const protect = (event) => {
        const value = clone(event.target.value);
        if(!isEmpty(value.trim())) {
            return onSearch(event)
        }
    }
    return(
        <TextField
        label="Search"
        value={term}
        data-test="search"
        data-testid="search"
        onChange={protect}
        margin="normal"
        variant="outlined"
      />
    //   <input id="search" type="text" name="search" data-test="search" className="search" value={term} onChange={protect} data-testid="search" />
    )
}

export default SearchBox;