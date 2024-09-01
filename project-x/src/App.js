import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import BodyComponent from './Components/BodyComponent';
import Users from './Users/Users';
import UserDetail from './Users/UserDetail';
import AddUser from './Users/AddUser';
import Products from './Products/Products';
import ProductDetails from './Products/ProductDetails';
import AddProducts from './Products/AddProducts';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Navigation />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="/body" element={<BodyComponent />} />
          <Route path="/users/" element={<Users />} />
          <Route path="/users/:usersId" element={<UserDetail />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/product/add" element={<AddProducts />} />
        </Route>
      </Routes>
   </>
  );
}

export default App;
