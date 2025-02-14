import './App.css';
import DocumentEditor from "./components/DocumentEditor";
import DocumentList from "./components/DocumentList";
import TreeView from "./components/TreeView";
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<DocumentList/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/tree" element={<TreeView/>} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/edit" element={<DocumentEditor/>} />
            
        </Routes>
      </Router>
    </>
  );
}

export default App;
