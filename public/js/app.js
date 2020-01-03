// const { HashRouter, NavLink, Route } = ReactRouterDOM;

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
          <h1>Monthly Budget App</h1>
          <div className='container'>
              <div className='row'>
              <form>
                <label>Income</label>
                <input type='text'></input>
                <input type='submit'/>
              </form>
              </div>
            <div className='row'>
              <div className='col'>
                    <h3>Montly Income</h3>
                    <p>$$$$$$$$$$$$$$$</p>
              </div>
              <div className='col'>
                  <h3>Available Money to Save</h3>
                  <p>$$$$$$$$$$$$$$$</p>
              </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form>
                        <h3>Bills</h3>
                        <label>Name</label>
                        <input type='text'/><br/>
                        <label>Amount</label>
                        <input type='text'/>
                        <input type='submit'/>
                    </form>
                </div>
                <div className='col'>
                <form>
                        <h3>Expenses</h3>
                        <label>Name</label>
                        <input type='text'/><br/>
                        <label>Amount</label>
                        <input type='text'/>
                        <input type='submit'/>
                    </form>
                </div>
                <div className='row'>
                  <div className='col'>
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
                  <div className='col'>
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
      </div>


    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));

