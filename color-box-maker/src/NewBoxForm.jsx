import React from "react";
import {useFormik} from 'formik';

import "./NewBoxForm.css";

const colors = [
  "aqua", "black", "blue", "brown", "chartreuse", "chocolate", "crimson", "cyan", "fuchsia", "gold", "gray", "green",
  "indigo", "ivory", "lavender", "lime", "magenta", "maroon", "navy", "olive", "orange", "pink", "plum", "purple", "red",
  "salmon", "teal", "turquoise", "violet", "white", "yellow" 
]

const NewBoxForm = ({addBox}) => {
  const formik = useFormik({
    initialValues:{
      color: 'white',
      height: 10,
      width: 10
    },
    onSubmit: values => {
      addBox({color: values.color, height: values.height, width: values.width})
    }
  });

  return (
    <form className="NewBoxForm" onSubmit={formik.handleSubmit}>
      <label htmlFor="color-field">Select Color:</label>
      <select id="color-field" className="NewBoxForm-color-field" name="color" value={formik.values.color} onChange={formik.handleChange}>
        {colors.map(color => (
          <option value={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</option>
        ))}
      </select><br/>

      <label htmlFor="height-field">Height (pixels):</label>
      <input id="height-field" className="NewBoxForm-height-field" type="range" min="10" max="500" name="height"
      value={formik.values.height} onChange={formik.handleChange}/>
      <span className="NewBoxForm-height-display">{formik.values.height}</span><br/>

      <label htmlFor="width-field">Width (pixels): </label>
      <input id="width-field" className="NewBoxForm-width-field" type="range" min="10" max="500" name="width" 
      value={formik.values.width} onChange={formik.handleChange}/>
      <span className="NewBoxForm-width-display">{formik.values.width}</span><br/>

      <button type="submit">Add box</button>
    </form>
  );
};

export default NewBoxForm;