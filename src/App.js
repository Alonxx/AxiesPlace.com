import {GlobalStyles} from './GlobalStyles';
import GlobalGrid from './utils/GlobalGrid';
import RecentlyListed from './pages/RecentlyListed';
import Nav from './components/Nav';

const App = () => {
	return (
		<GlobalGrid>
			<GlobalStyles />
			<Nav />
			<RecentlyListed />
		</GlobalGrid>
	);
};

export default App;
