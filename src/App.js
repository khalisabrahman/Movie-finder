import { Home } from './components/Home';
import { Route, Switch } from 'react-router-dom';

import './styles/style.scss';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	);
}

export default App;
