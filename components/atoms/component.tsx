import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

import React from 'react';

interface ComponentProps {
  handleusernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Component: React.FC<ComponentProps> = ({ handleusernameChange }) => {
  return (
    <Form className="[border:none] bg-[transparent] self-stretch font-body-h4 text-mini text-gray-100 z-[1]">
      <Form.Control type="text" placeholder="Username" onChange={handleusernameChange}/>
    </Form>
  );
};

export default Component;
