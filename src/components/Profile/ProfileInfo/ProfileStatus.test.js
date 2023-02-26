import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./../../Profile/ProfileInfo/ProfileStatus"

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="blabla" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("blabla");
  });
  test("after creation span with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="blabla" />);
    const instance = component.getInstance();
    let span = instance.findAllByType("span")
    expect(span.length).toBe(1);
  });
});