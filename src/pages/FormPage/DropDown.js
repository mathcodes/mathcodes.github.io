import React, { useState } from "react";
import "./FormPage.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SelectValidator } from "react-material-ui-form-validator";

export default function Dropdown(props) {
  const { options } = props;
  console.log("options : ", options);
  const [stateName, setStateName] = useState("");

  // const handleChange = (e) => {
  //   setStateName({[e.target.name]: e.target.value});
  // };

  return (
    // <FormControl
    //   variant="outlined"
    //   // className={classes.formControl}
    //   // error={!state ? true : false}
    // >
    //   <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
    //   <Select
    //     labelId="demo-simple-select-outlined-label"
    //     id="demo-simple-select-outlined"
    //     // value={formData.state}
    //     onChange={handleChange}
    //     label="State"
    //   >
    //     {options.map((item) => (
    //       <MenuItem value={item}>{item}</MenuItem>
    //     ))}
    //   </Select>
    // </FormControl>
    <SelectValidator
      name="bank"
      id="banks"
      variant="outlined"
      onChange={(e) => setStateName({ [e.target.name]: e.target.value })}
      // onChange={handleChange}
      // value={formData.state}
      // SelectProps={{
      //   native: true
      // }}
      validators={["required"]}
      errorMessages={["required"]}
    >
      {options.map((item) => (
        <option value={item}>{item}</option>
      ))}
      {/* <option value="">select me</option>
      <option value="-1">Bancos</option>
      <option value="-1">ghh</option> */}
      {/* {this.getBanks()} */}
    </SelectValidator>
  );
}
