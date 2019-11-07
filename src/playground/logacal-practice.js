console.log("running");

const app = {
  title: "Indecesion",
  subtitle: "app",
  options: []
};

const addone = () => {
  console.log("addOne");
};

const template = (
  <div>
    <h1>{app.title.toUpperCase()}</h1>
    {app.subtitle && app.subtitle && <p>{app.subtitle}</p>}
    <p>
      {app.options.length > 0
        ? "Here is your Options"
        : "Nothing in your Options"}
    </p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
    <button onClick={addone}>1+</button>
  </div>
);

const approot = document.getElementById("something");
ReactDOM.render(template, approot);
