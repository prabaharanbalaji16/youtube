import './App.css';
import Header from './Header';
import SIdebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    <div className="app">
        <Header />
        <div className="app__page">
          <SIdebar />
          <RecommendedVideos />
        </div>
    </div>
  );
}

export default App;
