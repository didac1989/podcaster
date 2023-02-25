import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Podcasts from './screens/Podcasts';
import PodcastDetail from './screens/podcastdetail/PodcastDetail';
import PodcastEpisode from './screens/PodcastEpisode';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Podcasts />
            </Route>
            <Route path="/podcast/:podcastId" exact>
              <PodcastDetail />
            </Route>
            <Route path="/podcast/:podcastId/episode/:episodeId" exact>
              <PodcastEpisode />
            </Route>
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
