import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import BodyComponent from './Components/BodyComponent';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Navigation />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="/body" element={<BodyComponent />} />
        </Route>
      </Routes>
   </>
  );
}

export default App;
