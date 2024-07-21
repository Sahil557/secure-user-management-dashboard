import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { loginUser, registerUser } from "../services/api";

describe("API Service", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it("should log in a user and return the user data", async () => {
    const mockData = { token: "12345" };
    const email = "test@example.com";
    const password = "password123";

    mock.onPost("https://reqres.in/api/login").reply(200, mockData);

    const result = await loginUser(email, password);

    expect(result).toEqual(mockData);
  });

  it("should handle login error", async () => {
    const email = "test@example.com";
    const password = "wrongpassword";

    mock.onPost("https://reqres.in/api/login").reply(400, { error: "Login failed" });

    await expect(loginUser(email, password)).rejects.toThrow("Request failed with status code 400");
  });

  it("should register a user and return the user data", async () => {
    const mockData = { id: "123", name: "John Doe", job: "Developer" };
    const name = "John Doe";
    const job = "Developer";

    mock.onPost("https://reqres.in/api/users").reply(201, mockData);

    const result = await registerUser(name, job);

    expect(result).toEqual(mockData);
  });

  it("should handle registration error", async () => {
    const name = "John Doe";
    const job = "Developer";

    mock.onPost("https://reqres.in/api/users").reply(400, { error: "Registration failed" });

    await expect(registerUser(name, job)).rejects.toThrow("Request failed with status code 400");
  });
});
