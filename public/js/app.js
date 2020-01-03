// const { HashRouter, NavLink, Route } = ReactRouterDOM;

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-center">Monthly Budget App</h1>
        <div className='container-app border'>

          {/* income form and submit */}
          <div className='row justify-content-center'>
            <form class="form-inline ">
              <div class="form-group mb-2">
                <label class="form-control-plaintext">Monthly Income</label>
              </div>

              <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control" id="income-amount" placeholder="amount" />
              </div>
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
          </div>

          {/* income and savings section display */}
          <div className='row border p-3'>
            <div className='col'>
              <h3>Montly Income</h3>
              <p>$$$$$$$$$$$$$$$</p>
            </div>
            <div className='col'>
              <h3>Available Money to Save</h3>
              <p>$$$$$$$$$$$$$$$</p>
            </div>
          </div>

          {/* bills form section */}
          <div className='row'>
            <div className='col border my-3 p-3'>
              <form>
                <h3 className='text-center'>Bills</h3>
                <label>Name</label>
                <input type='text' /><br />
                <label>Amount</label>
                <input type='text' />
                <input type='submit' />
              </form>
            </div>

            {/* bills form section */}
            <div className='col border my-3 p-3'>
              <form>
                <h3 className='text-center'>Expenses</h3>
                <label>Name</label>
                <input type='text' /><br />
                <label>Amount</label>
                <input type='text' />
                <input type='submit' />
              </form>
            </div>
          </div>

          {/* bill data display */}
          <div className='row'>
            <div className='col border p-3'>
              <h3>Bill data</h3>
              <table class="table table-striped">
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

            {/* expenses data display */}
            <div className='col border p-3'>
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

        </div>
      </div>




    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));

