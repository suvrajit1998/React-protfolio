class IndecitionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handledeletoptions = this.handledeletoptions.bind(this);
    this.handlepick = this.handlepick.bind(this);
    this.handleaddoption = this.handleaddoption.bind(this);
    this.handledeletoption = this.handledeletoption.bind(this);
    this.state = {
      Optionses: props.Optionses
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ Optionses: options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.Optionses.length !== this.state.Optionses.length) {
      const json = JSON.stringify(this.state.Optionses);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentwillunmount!");
  }

  handledeletoption(optiontoremove) {
    this.setState(prevState => ({
      Optionses: prevState.Optionses.filter(option => {
        return optiontoremove !== option;
      })
    }));
  }

  handledeletoptions() {
    this.setState(() => ({ Optionses: [] }));
  }

  handlepick() {
    const randomnumber = Math.floor(
      Math.random() * this.state.Optionses.length
    );
    const inarray = this.state.Optionses[randomnumber];
    alert(inarray);
  }

  handleaddoption(option) {
    if (!option) {
      return "Enter a valid value";
    } else if (this.state.Optionses.indexOf(option) > -1) {
      return "This value are exiest";
    }
    this.setState(prevState => ({
      Optionses: prevState.Optionses.concat(option)
    }));
  }

  render() {
    const subtitle = "put your life in your hand  of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          Hasoptions={this.state.Optionses.length > 0}
          handlepick={this.handlepick}
        />
        <Options
          Optionses={this.state.Optionses}
          handledeletoptions={this.handledeletoptions}
          handledeletoption={this.handledeletoption}
        />
        <Addoption handleaddoption={this.handleaddoption} />
      </div>
    );
  }
}

IndecitionApp.defaultProps = {
  Optionses: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlepick} disabled={!props.Hasoptions}>
        What should i do ?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handledeletoptions}>Remove All</button>
      {props.Optionses.length === 0 && <p>Put an Option to get started</p>}
      {props.Optionses.map(optioned => (
        <Option
          key={optioned}
          optiontext={optioned}
          handledeletoption={props.handledeletoption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optiontext}
      <button
        onClick={e => {
          props.handledeletoption(props.optiontext);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class Addoption extends React.Component {
  constructor(props) {
    super(props);
    this.handleadd0ption = this.handleadd0ption.bind(this);

    this.state = {
      error: undefined
    };
  }
  handleadd0ption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleaddoption(option);
    e.target.elements.option.value = "";
    this.setState(() => ({ error }));
    // this.setState(() => {
    //   return { error };
    // });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleadd0ption}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

// const User = props => {
//   return (
//     <div>
//       <p>Name : {props.name}</p>
//       <p>Age : {props.Age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecitionApp />, document.getElementById("something"));
