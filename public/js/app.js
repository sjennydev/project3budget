// const { HashRouter, NavLink, Route } = ReactRouterDOM;
class Income extends React.Component {
  state = {
    income: 0
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div className='row justify-content-center' >
        <form class="form-inline ">
          <div class="form-group mb-2">
            <label htmlFor="income" class="form-control-plaintext">Monthly Income</label>
          </div>

          <div class="form-group mx-sm-3 mb-2">
            <input type="text" class="form-control" id="income" placeholder="amount" value={this.state.income} onChange={this.handleChange} />
          </div>

          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
    )
  }
}


class Savings extends React.Component {
  state = {};

  render() {
    return (
      <div className='row border p-3' >
        <div className='col'>
          <h3>Montly Income</h3>
          <p>$$$$$$$$$$$$$$$</p>
        </div>
        <div className='col'>
          <h3>Available Money to Save</h3>
          <p>$$$$$$$$$$$$$$$</p>
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
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-center">Monthly Budget App</h1>
        <div className='container-app border'>

          <Income />
          <Savings />
          <div className='row'>
            <Bills />
            <Expenses />
          </div>

        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));

