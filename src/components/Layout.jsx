import React from "react";

export default function Layout(props) {
  return (
    <>
      <h3>Mon menu</h3>
      {props.children}
      <h3>Mon footer</h3>
    </>
  );
}
