const { faker } = require("@faker-js/faker");

describe("POST CALLS", () => {
  
  it("Approach 1 - hardcoded json object", () => {
    const requestbody = {
      tourist_name: "dsad",
      tourist_email: "dsadsa@gmail.com",
      tourist_location: "dsaxasd"
    };

    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: requestbody
    }).then((Response) => {
      expect(Response.status).to.eq(201);
      expect(Response.body.tourist_name).to.equal("dsad");
    });
  });

  it("Approach 2 - dynamically generate values", () => {
    const touristname = faker.person.firstName();
    const touristemail = faker.person.firstName() + "@gmail.com";
    const touristlocation = faker.animal.type();

    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        tourist_name: touristname,
        tourist_email: touristemail,
        tourist_location: touristlocation
      }
    }).then((Response) => {
      expect(Response.status).to.eq(201);
      expect(Response.body.tourist_email).to.eq(touristemail);
    });
  });

  it.only("Approach 3 - using fixture file", () => {
    cy.fixture("Creds.json").then((data) => {
      const touristname = data.tourist_name;
      const touristemail = data.tourist_email;
      const touristlocation = data.tourist_location;

      cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        body: {
          tourist_name: touristname,
          tourist_email: touristemail,
          tourist_location: touristlocation
        }
      }).then((Response) => {
        expect(Response.status).to.eq(201);
        expect(Response.body.tourist_email).to.eq(touristemail);
      });
    });
  });

});
