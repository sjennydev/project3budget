// const { HashRouter, NavLink, Route } = ReactRouterDOM;
class Income extends React.Component {
  state = {
    income: [],
    amount: ''
  }


  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/income', {
        body: JSON.stringify({
            amount: this.state.amount
        }),
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(createdIncome => {
        return createdIncome.json();
    }).then(jsonedAmount => {
        this.setState({
            amount: '',
            income: [jsonedAmount, ...this.state.income]
        })
    }).catch(error => console.log(error));
}
  render() {
    return (
      <div className='row justify-content-center' >
        <form class="form-inline " onSubmit={this.handleSubmit}>
          <div class="form-group mb-2">
            <label htmlFor="amount" class="form-control-plaintext">Monthly Income</label>
          </div>

          <div class="form-group mx-sm-3 mb-2">
            <input type="text" class="form-control" id="amount" placeholder="amount" value={this.state.amount} onChange={this.handleChange} />
          </div>

          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
     
        
      </div>
    )
  }
}


class Savings extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  state = {
    income: [],
    amount: ''
  };
    componentDidMount() {
    fetch('/income')
        .then(response => response.json())
        .then(income =>
            this.setState({
                income: income
            })
        );
  }
  deleteIncome = (id, index) => {
    fetch('income/' + id, {
        method: "DELETE"
    }).then(data => {
        this.setState({
            income: [
                ...this.state.income.slice(0, index),
                ...this.state.income.slice(index + 1)
            ]
        })
    })
  }
  render() {
    return (
      <div className='row' >
        <div className='col border my-3 p-3'>
          <h3>Monthly Income</h3>
          <h4>
          {this.state.income.map((amount, index) => {
                    return (
                        <div>
                            <p>${amount.amount}</p>
                            <button onClick={() => this.deleteIncome(amount._id, index)}>DELETE</button>
                        </div>
                    )
                })}
          </h4>
        </div>
        <div className='col border my-3 p-3'>
          <h3>Money Remaining</h3>
          <p>income - (expense.amount + bill.amount)</p>
        </div>
      </div>
    )
  }
}

class Bills extends React.Component {
  state = {
    bills: [],
    name: '',
    amount: '',
    isPaid: false
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/bills', {
        body: JSON.stringify({
            amount: this.state.amount,
            name: this.state.name
        }),
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(createdBills => {
        return createdBills.json();
    }).then(jsonedBills => {
        this.setState({
            name: '',
            amount: '',
            bills: [jsonedBills, ...this.state.bills]
        })
    }).catch(error => console.log(error));
}
componentDidMount() {
  fetch('/bills')
      .then(response => response.json())
      .then(bills =>
          this.setState({
              bills: bills
          })
      );
}
deleteBill = (id, index) => {
  fetch('bills/' + id, {
      method: "DELETE"
  }).then(data => {
      this.setState({
          bills: [
              ...this.state.bills.slice(0, index),
              ...this.state.bills.slice(index + 1)
          ]
      })
  })
}

  render() {
    return (
      <div className='col'>

        {/* ***************** 
            add bill section 
        ****************/}

        <div className="border my-3 p-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h3 className='text-center'>Bills</h3>
              <label>Name</label>
              <input className="form-control" type='text' id="name" placeholder="name" value={this.state.name} onChange={this.handleChange} /><br />
              <label>Amount</label>
              <input className="form-control" type='text' id="amount" placeholder="amount" value={this.state.amount} onChange={this.handleChange} />
            </div>

            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </form>
        </div>


        {/* ***************** 
            bill Data display section
        ****************/}

        <div className=' border my-3 p-3'>
          <h3>Bill data</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Paid</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.state.bills.map((item,index) => {
                return (
                    <tr>
                        <td> {item.name} </td>
                        <td>{item.amount}</td>
                        <td>Paid</td>
                        <td><button onClick={() => this.deleteBill(item._id, index)}>DELETE</button></td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}


class Expenses extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    expenses: [],
    name: '',
    amount: ''
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/expenses', {
        body: JSON.stringify({
            amount: this.state.amount, 
            name: this.state.name
        }),
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(createdExpenses => {
        return createdExpenses.json();
    }).then(jsonedExpenses => {
        this.setState({
            name: '',
            amount: '',
            expenses: [jsonedExpenses, ...this.state.expenses]
        })
    }).catch(error => console.log(error));
}
componentDidMount() {
  fetch('/expenses')
      .then(response => response.json())
      .then(expenses =>
          this.setState({
              expenses: expenses
          })
      );
}
deleteExpense = (id, index) => {
  fetch('expenses/' + id, {
      method: "DELETE"
  }).then(data => {
      this.setState({
          expenses: [
              ...this.state.expenses.slice(0, index),
              ...this.state.expenses.slice(index + 1)
          ]
      })
  })
}

  render() {
    return (
      <div className='col'>

        {/* ***************** 
            add Expenses section
        ****************/}
        <div className=' border my-3 p-3'>
          <form  onSubmit={this.handleSubmit}>
            <div className="form-group" >
              <h3 className='text-center'>Expenses</h3>
              <label>Name</label>
              <input className="form-control" type='text' id="name" placeholder="name" value={this.state.name} onChange={this.handleChange} /><br />
              <label>Amount</label>
              <input className="form-control" type='text' id="amount" placeholder="amount" value={this.state.amount} onChange={this.handleChange}/>

            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </form>
          {/* {
            this.state.name
          } */}
        </div>

        {/* ***************** 
             Expenses data display section
        ****************/}
        
        <div className=' border p-3'>
          <h3>Expenses data</h3>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.expenses.map((item,index) => {
                return (
                    <tr>
                        <td> {item.name} </td>
                        <td>{item.amount}</td>
                        <td><button onClick={() => this.deleteExpense(item._id, index)}>DELETE</button></td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}



class App extends React.Component {
  state = {
    income: 5903.54
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Monthly Budget App</h1>
        <div className='container-app border'>

          <Income income={this.state.income}/>
          <Savings income={this.state.income}/>
          <div className='row'>
            <Bills income={this.state.income} />
            <Expenses income={this.state.income}/>
          </div>

        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));

