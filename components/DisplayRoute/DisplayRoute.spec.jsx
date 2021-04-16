/// <reference types="cypress" />
import * as React from "react";
import { mount } from "@cypress/react";
import DisplayRoute from "./DisplayRoute";
import * as nextRouter from "next/router";

describe("<DisplayRoute />", () => {
  it("Renders component", () => {
    cy.stub(nextRouter, "useRouter").callsFake(() => ({ pathname: "coco" }));
    mount(<DisplayRoute />);

    cy.get("p").should("contain", "coco");
  });
});
