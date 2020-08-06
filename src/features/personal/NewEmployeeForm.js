/*@jsx jsx*/
import React from "react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { jsx } from "@emotion/core";
import { CancelButton, ViewButton } from "./layout";
import { addPersonal } from "./personalSlice";
import { useDispatch } from "react-redux";

function Fullfield(props) {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;

  return (
    <div css={{ marginBottom: "8px", display: "flex", flexWrap: "wrap" }}>
      <label css={{ marginRight: "5px" }}>{props.label}</label>
      <input
        {...field}
        {...props}
        css={{
          backgroundColor: "transparent",
          height: "20px",
          fontSize: "14px",
          color: "#2d2d2d",
          border: "1px solid gray",
          padding: "3px 5px",
          borderRadius: "5px",
        }}
      />
      {meta.touched && meta.error && (
        <span css={{ fontsize: "11px", color: "#F01F0E", paddingTop: "4px" }}>
          {meta.error}
        </span>
      )}
    </div>
  );
}
function NewEmployee({ onClose }) {
  const dispatch = useDispatch();
  return (
    <div css={{ paddingTop: "20px" }}>
      <Formik
        initialValues={{
          name: "",
          last_name: "",
          area: "",
          years: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must have more than 2 letters")
            .required("Is required"),
          last_name: Yup.string()
            .min(2, "Must have more than 1 letters")
            .required("Is required"),
          area: Yup.string()
            .min(2, "Must have more than 1 letters")
            .required("Is required"),
          years: Yup.number()
            .min(0)
            .max(40, "Must be least or equual than 40")
            .required("Is required"),
        })}
        onSubmit={(values) =>
          dispatch(
            addPersonal(
              values.name,
              values.last_name,
              values.area,
              values.years
            )
          )
        }
      >
        <Form>
          <Fullfield name="name" label="Name:" type="text" />
          <Fullfield name="last_name" label="Last Name:" type="text" />
          <Fullfield name="area" label="Area:" type="text" />
          <Fullfield name="years" label="Years in the company:" type="text" />
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ViewButton type="submit">Add employee</ViewButton>
        </Form>
      </Formik>
    </div>
  );
}

export default NewEmployee;
