import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Header  from './Header';
import button from './Header';

function App() {
  return (
    <div classNam="App">
      
        {/* header container */}
        <Header/>
        

      

      {/* this i s the post container */}
      <div>
       <button/>
      </div>
  {/*the Post container  */}
      <div style={{display:"flex"}}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;

