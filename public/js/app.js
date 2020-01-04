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
        {this.state.amount}
        
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
    amount: '',
    editMode: false
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
  // editAmount = () => {
  //   this.setState({
  //     editMode: !this.state.editMode
  //   })
  //  }
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
          <h3>Amount Left to Budget</h3>
          <p>{this.props.income}</p>
        </div>
      </div>
    )
  }
}

class Bills extends React.Component {
  state = {
    name: '',
    amount: 0,
    isPaid: false
  }
  render() {
    return (
      <div className='col'>

        {/* ***************** 
            add bill section 
        ****************/}

        <div className="border my-3 p-3">
          <form>
            <div className="form-group">
              <h3 className='text-center'>Bills</h3>
              <label>Name</label>
              <input className="form-control" type='text' /><br />
              <label>Amount</label>
              <input className="form-control" type='text' />
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
              <tr>
                <th scope="row">Tmobile</th>
                <td>$120</td>
                <td>Paid</td>
                <td><button>DELETE</button></td>
              </tr>
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
    name: '',
    amount: 0
  }
  render() {
    return (
      <div className='col'>

        {/* ***************** 
            add Expenses section
        ****************/}
        <div className=' border my-3 p-3'>
          <form>
            <div className="form-group">
              <h3 className='text-center'>Expenses</h3>
              <label>Name</label>
              <input className="form-control" type='text' /><br />
              <label>Amount</label>
              <input className="form-control" type='text' />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </form>
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
              <tr>
                <th scope="row">Tmobile</th>
                <td>$120</td>
                <td><button>DELETE</button></td>
              </tr>
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
            <Bills  />
            <Expenses/>
          </div>

        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));



