import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import gvisis from './data/gvisis.json';
import useStarred from './useStarred';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    const { result, isPending, error } = useStarred(
        'https://api.github.com/users/gvisis/starred?per_page=1'
    );
    return (
        // {error && <div>{error}</div>}
        // {isPending && <div>Loading</div>}
        <Router>
            <div className='App'>
                <Header />
                <div className='wrapper'>
                    <Sidebar gvisis={gvisis} />
                    <Switch>
                        <Route path='/student/:login'>
                            {result && <Main starred={result} gvisis={gvisis} />}
                        </Route>
                        {/* <Route path='*'>
                            <NotFound />
                        </Route> */}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
