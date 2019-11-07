class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.Addone = this.Addone.bind(this);
    this.Minusone = this.Minusone.bind(this);
    this.Resetall = this.Resetall.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const counts = localStorage.getItem("counts");
    const json = parseInt(counts, 10);
    if (!isNaN(json)) {
      this.setState(() => ({ count: json }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("counts", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Componentwillunmount!");
  }

  Addone() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  Minusone() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  Resetall() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <hr />
        <button onClick={this.Addone}>+1</button>
        <button onClick={this.Minusone}>-1</button>
        <button onClick={this.Resetall}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById("something"));

// let count = 0;

// const add = () => {
//   count++;
//   rendercountapp();
// };

// const minusone = () => {
//   count--;
//   rendercountapp();
// };

// const reset = () => {
//   count = 0;
//   rendercountapp();
// };

// const rendercountapp = () => {
//   const templatetwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={add}>+1</button>
//       <button onClick={minusone}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templatetwo, approot);
// };

// rendercountapp();
