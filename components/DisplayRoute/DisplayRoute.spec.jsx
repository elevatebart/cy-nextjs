/// <reference types="cypress" />
import * as React from "react";
import { mount } from "@cypress/react";
import DisplayRoute from "./DisplayRoute";

describe("<DisplayRoute />", () => {
  it("Renders component", () => {
    mount(<DisplayRoute />);

    cy.get("p").should("contain", "coco");
  });
});
