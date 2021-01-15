//stateless component 
class Receipt extends React.Component{
  render(){
    console.log(this.props)
    return (
      <div>
      <h1>{this.props.receipt.person}</h1>
      <ul>
        <li>Main: {this.props.receipt.order.main}</li>
        <li>Protein: {this.props.receipt.order.protein}</li>
        <li>Rice: {this.props.receipt.order.rice}</li>
        <li>Sauce: {this.props.receipt.order.sauce}</li>
        <li>Drink: {this.props.receipt.order.drink}</li>
        <li>Cost: ${this.props.receipt.order.cost}</li>
      </ul>
      </div>
    )
  }
}

//stateful component 
class App extends React.Component {
  state ={
    receipts
  }
  render(){
  
      this.state.receipts.forEach(element => {
          console.log(element);
      });
    return(
      <div>
        {this.state.receipts.map( (receipt) => !receipt.paid ? <Receipt receipt= {receipt}/> : "")}
      </div>
    )
  }
}
//ternary syntax
// condition ? if true do this : if false do this
// Iterating through the receipts and mapping method; using an if statement to check if the receipt is not paid = print
// {!this.state.receipt2.paid ? <Receipt receipt= {this.state.receipt2}/> : ""}
// {!this.state.receipt3.paid ? <Receipt receipt= {this.state.receipt3}/> : ""}


ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
