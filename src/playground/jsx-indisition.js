console.log("Testing");

const app = {
  title: "Indecesion app",
  subtitle: "projects",
  options: []
};

const onformsubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = " ";
    recounterapp();
  }
};

const remove = () => {
  app.options = [];
  recounterapp();
};

const randomnum = () => {
  const randomnumber = Math.floor(Math.random() * app.options.length);
  const inarray = app.options[randomnumber];
  alert(inarray);
};

const approot = document.getElementById("something");

// const number = [45, 87, 190];

const recounterapp = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0 ? "Here are your Option" : "Nothing in array"}
      </p>
      <button disabled={app.options.length === 0} onClick={randomnum}>
        What should i do?
      </button>
      <button onClick={remove}>Remove All</button>
      {
        //   number.map(numbers => {
        //   return <p key={numbers}>Number : {numbers}</p>;
        // })
      }
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onformsubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, approot);
};

recounterapp();
