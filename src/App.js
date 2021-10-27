import { Home } from './components/Home';
import { About } from './components/About';
import { Route, Switch } from 'react-router-dom';
import { MovieProvider } from './context/MovieState';
import './styles/style.scss';

function App() {
	return (
		<Switch>
			<MovieProvider>
				<Route exact path='/' component={Home} />
				<Route exact path='/About' component={About} />
			</MovieProvider>
		</Switch>
	);
}

export default App;
