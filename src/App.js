import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import TransactionsPanel from './components/TransactionsPanel'
import UserEditForm from './components/UserEditForm'
import TransactionForm from './components/TransactionForm'
import TransactionUpdateForm from './components/TransactionUpdateForm'
import AccountsPanel from './components/AccountsPanel'
import AccountForm from './components/AccountForm'
import AccountUpdateForm from './components/AccountUpdateForm'
import BudgetsPanel from './components/BudgetsPanel'
import BudgetForm from './components/BudgetFrom'
import BudgetUpdateForm from './components/BudgetUpdateForm'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user/edit" component={UserEditForm} />
          
          <Route exact path="/transactions" component={TransactionsPanel} />
          <Route exact path="/transactions/new" component={TransactionForm} />
          <Route exact path="/transactions/edit/:id" component={TransactionUpdateForm} />

          <Route exact path="/accounts" component={AccountsPanel} />
          <Route exact path="/accounts/new" component={AccountForm} />
          <Route exact path="/accounts/edit/:id" component={AccountUpdateForm} />

          <Route exact path="/budgets" component={BudgetsPanel} />
          <Route exact path="/budgets/new" component={BudgetForm} />
          <Route exact path="/budgets/edit/:id" component={BudgetUpdateForm} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
