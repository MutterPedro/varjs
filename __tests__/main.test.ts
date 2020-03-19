jest.mock("child_process");
jest.mock("@actions/core");
jest.mock("@actions/github");

import { execSync } from "child_process";

import { info, getInput, setFailed } from "@actions/core";
import * as github from "@actions/github";

import { run } from "../src/runner";

describe("VAR.js", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should run successfully", async () => {
    //@ts-ignore
    getInput.mockReturnValueOnce("task");
    //@ts-ignore
    execSync.mockReturnValueOnce("test");
    github.context.action = "Test";

    await run();

    expect(getInput).toHaveBeenCalledWith("script");
    expect(execSync).toHaveBeenCalled();
    expect(info).toHaveBeenCalled();
    expect(setFailed).not.toHaveBeenCalled();
  });

  it("should fail with no script", async () => {
    //@ts-ignore
    getInput.mockReturnValueOnce(null);
    github.context.action = "Test";

    await run();

    expect(getInput).toHaveBeenCalledWith("script");
    expect(info).toHaveBeenCalled();
    expect(execSync).not.toHaveBeenCalled();
    expect(setFailed).toHaveBeenCalledWith("You must provide a SCRIPT name!");
  });

  it("should fail with broken script", async () => {
    //@ts-ignore
    getInput.mockReturnValueOnce("random name");
    //@ts-ignore
    execSync.mockImplementationOnce(() => {
      throw new Error("Fake error");
    });
    github.context.action = "Test";

    await run();

    expect(getInput).toHaveBeenCalledWith("script");
    expect(info).toHaveBeenCalled();
    expect(execSync).toHaveBeenCalled();
    expect(setFailed).toHaveBeenCalledWith("Fake error");
  });
});
