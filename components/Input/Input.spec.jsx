/// <reference types="cypress" />
import * as React from "react";
import { mount } from "@cypress/react";
import Input from "./Input";

describe("<Input />", () => {
  it("Renders component", () => {
    mount(<Input />);

    cy.get("input").type("124152");
  });
});
