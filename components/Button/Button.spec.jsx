/// <reference types="cypress" />
import * as React from "react";
import { mount } from "@cypress/react";
import Button from "./Button";

describe("<Button />", () => {
  it("Renders component", () => {
    mount(<Button>coco</Button>);

    cy.get("button").should("contain", "coco");
  });
});
