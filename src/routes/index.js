import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserInfo from '../pages/UserInfo'
import Period from '../pages/Period'
import Method from '../pages/Method'
import Review from '../pages/Review'
import Layout from '../containers/Layout'
import ScrollToTop from 'react-router-scroll-top'

const routes = () => (
  <Router>
    <ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path='/' component={UserInfo} />
          <Route path='/period' component={Period} />
          <Route path='/method' component={Method} />
          <Route path='/review/:result' component={Review} />
        </Switch>
      </Layout>
    </ScrollToTop>
  </Router>
)

export default (routes)
