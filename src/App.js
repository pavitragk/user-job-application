import React from 'react'
import AddJob from './AddJob'
import AdminDashboard from './AdminDashboard'
import { Link, Route } from 'react-router-dom'
import UsersContainer from './UsersContainer'


const App = (props) => {
  return (<div >

    <ul>
      <li><Link to="/" >ApplyJob</Link></li>
      <li><Link to="/userContainer" >AdminDashboard</Link></li>
    </ul>



    <Route path="/" component={AddJob} exact={true} />
    <Route path="/userContainer" component={UsersContainer} />

  </div>
  )


}

export default App