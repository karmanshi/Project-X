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
import Category from './Category/Category';
import CategoryDetails from './Category/CategoryDetails';
import AddCategory from './Category/AddCategory';
import Employee from './Employee/Employee';
import EmployeeDetails from './Employee/EmployeeDetails';
import AddEmployee from './Employee/AddEmployee';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/body" element={<BodyComponent />} />
          <Route path="/users/" element={<Users />} />
          <Route path="/users/:usersId" element={<UserDetail />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/product/add" element={<AddProducts />} />
          <Route path="/category/" element={<Category />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/employee/" element={<Employee />} />
          <Route path='/employee/:employeeId' element={<EmployeeDetails/>}/>
          <Route path="/employee/add" element={<AddEmployee />} />
        </Route>
      </Routes>
   </>
  );
}

export default App;
