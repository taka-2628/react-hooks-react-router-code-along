import React from "react";
import ReactDOM from "react-dom";

// Step 1. Import react-router functions
// Step. 5. Import Switch
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

// Step 3. Add additional Components
function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// Step 2. Let router coordinate what is displayed
ReactDOM.render(
  <BrowserRouter>
    {/* Step 6. Use Switch component*/}
    <Switch>
      {/* Step 4. Add routers for the additional components*/}
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* Step 7. Move the route for / to the bottom of the Switch component*/}
      {/* Step 8. Add exact */}
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>  
  </BrowserRouter>,
  document.getElementById("root")
);
