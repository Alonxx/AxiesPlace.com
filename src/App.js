import {GlobalStyles} from './GlobalStyles';
import GlobalGrid from './utils/GlobalGrid';
import RecentlyListed from './pages/RecentlyListed';
import Nav from './components/Nav';
import Notifications from './components/Notifications';

const App = () => {
	return (
		<GlobalGrid>
			<GlobalStyles />
			<Nav />
			<Notifications />
			<RecentlyListed />
		</GlobalGrid>
	);
};

export default App;
