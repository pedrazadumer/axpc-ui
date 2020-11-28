/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
//import dashboardRoutes from './routes/index.jsx'
import reducers from './reducers'
import Authentication from "layouts/Authentication/Authentication";
import AdminLayout from "layouts/Admin.jsx";
const extension = window.devToolsExtension
	? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	: _ => _
const middleware = applyMiddleware(thunk)
const store = createStore(reducers, compose(middleware, extension))
window.store = store

ReactDOM.render(
  <Provider store={store}>
  <React.Fragment>	
			<Router>
				<Switch>
        <Route path="/login" render={props => <Authentication {...props} />} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
         <Redirect from="/" to="/admin/products" />
					{/*dashboardRoutes.map((prop, key) => {
						if (prop.redirect)
							return <Redirect from={prop.path} to={prop.to} key={key}/>
						return <Route path={prop.path} render={prop.handler} key={key} />
					})*/}
				</Switch>
			</Router>
		</React.Fragment>
  </Provider>,
  document.getElementById("root")
);
