import { Home } from './components/Home';
import { About } from './components/About';
import { Route, Switch } from 'react-router-dom';

import './styles/style.scss';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/About' component={About} />
		</Switch>
	);
}

export default App;
