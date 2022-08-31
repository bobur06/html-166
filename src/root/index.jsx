import React from "react";
import { Routes, Route } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navbar.map(({ id, Element, path, title }) => (
            <Route key={id} path={path} element={Element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default Root;
