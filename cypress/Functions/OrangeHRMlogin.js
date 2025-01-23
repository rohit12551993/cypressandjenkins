class Login {

  // Set the username
  setUsername(username) {
    cy.get("input[placeholder='Username']").type(username);
  }

  // Set the password
  setPassword(password) {
    cy.get("input[placeholder='Password']").type(password);
  }

  // Click the login button
  clickLogin() {
    cy.get("button[type='submit']").click();
  }

}

export default Login;
