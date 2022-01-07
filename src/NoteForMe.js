import React from "react";
import ReactDOM from "react-dom";

// Step 1. Import react-router functions
// Step 5. Import Switch
// Step 9. Add NavLink to import 
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Step 10.  Add basic styling for NavLinks
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

// Step 11. define the NavBar component
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}

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
    {/* Step 12. add the NavBar component to the render method */}
    <NavBar />
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
