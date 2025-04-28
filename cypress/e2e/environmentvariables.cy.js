import TestAutomation from "../Pages/testautomation.js";  // Capitalized class name
import Google from "../Pages/google.js";  // Capitalized class name

describe("How to use environment variables", () => {
    it("Write data under testautomation website", () => {
        const testAutomationInstance = new TestAutomation();  // Use a different name for the instance
        testAutomationInstance.testautomation();  // Call the method on the instance
    });

    it("Google search write", () => {
        const googleInstance = new Google();  // Use a different name for the instance
        googleInstance.google();  // Call the method on the instance
    });
});
