import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { loginUser } from "../services/api";

describe("SignIn", () => {
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
    const email = "test@example.com";
    const password = "password123";

    mock.onPost("https://reqres.in/api/login").reply(200);

    const result = await loginUser(email, password);
  });

  it("should handle login error", async () => {
    const email = "test@example.com";
    const password = "wrongpassword";

    mock
      .onPost("https://reqres.in/api/login")
      .reply(400, { error: "Login failed" });

    await expect(loginUser(email, password)).rejects.toThrow(
      "Request failed with status code 400"
    );
  });
});
