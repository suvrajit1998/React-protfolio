class Vigibilitytoggle extends React.Component {
  constructor(props) {
    super(props);
    this.handletogglevisibility = this.handletogglevisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handletogglevisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility App</h1>
        <button onClick={this.handletogglevisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Here is the text i am</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Vigibilitytoggle />, document.getElementById("something"));

// let visibility = false;

// const showhide = () => {
//   visibility = !visibility;
//   rerender();
// };

// const approot = document.getElementById("something");

// const rerender = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showhide}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>'This is my hidden text are now showing'</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, approot);
// };
// rerender();
