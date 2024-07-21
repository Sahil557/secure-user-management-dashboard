import { validateName } from "../utils/validateName";

describe("validateName", () => {
  it("should return an error message if the name contains numbers", () => {
    const result = validateName("John123");
    expect(result).toBe("Name cannot contain numbers.");
  });

  it("should return an error message if the name contains special characters", () => {
    const result = validateName("John@Doe");
    expect(result).toBe("Name cannot contain special characters.");
  });

  it("should return null if the name is valid", () => {
    const result = validateName("John");
    expect(result).toBeNull();
  });
});
