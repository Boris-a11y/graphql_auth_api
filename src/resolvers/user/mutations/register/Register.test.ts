import { TestDataSource } from "../../../../testUtils/TestDataSource";
import { graphqlCall } from "../../../../testUtils/graphqlCall";

beforeAll(async () => {
  await TestDataSource.initialize();
});

afterAll(async () => {
  await TestDataSource.destroy();
});

const register = `
    mutation Register($data:registerInput!) {
    register(
      data:$data 
    ) {
      id
      email
      age
      creationDate
    }
  }
`;

describe("RegisterResolver", () => {
  it("create User", async () => {
    const user = {
      email: "boro@gmail.com",
      password: "gadgaegasdaetg",
      age: 25,
    };

    const response = await graphqlCall({
      source: register,
      variableValues: {
        data: user,
      },
    });

    expect(response).toMatchObject({
      data: {
        register: {
          email: user.email,
          password: user.password,
          age: user.age,
        },
      },
    });
  });
});
