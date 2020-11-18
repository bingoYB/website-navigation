import {Route, Switch, Link, IndexRoute, HashRouter } from 'react-router-dom'
import Home from '../page/home'
import NavPage from '../page/nav'
import Layout from '../wget/Layout'

export default function CusRouter(props) {
	return <HashRouter>
		<Route path="/">
			<Layout>
				<Switch>
					<Route path="/nav">
						<NavPage></NavPage>
					</Route>
					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Layout>
		</Route>
	</HashRouter>
}