import './App.css';
import { Routes, Route, json } from "react-router-dom";
import Navigation from './Components/Navigation';
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
import AddBlog from './Blog/AddBlog';
import DispalyBlog from './Blog/DispalyBlog';
import BlogDetails from './Blog/BlogDetails';
import UpdateBlog from './Blog/UpdateBlog';
import { BlogData } from './JSON-data/BlogData';

function App() {
  localStorage.setItem('Blog', JSON.stringify(BlogData))


  return (
   <>
   <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Users />} />
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

          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/blog/list" element={<DispalyBlog />} />
          <Route path='/blog/:blogId' element={<BlogDetails/>}/>
          <Route path='/blog/updated/:blogId' element={<UpdateBlog/>}/>
        </Route>
      </Routes>
   </>
  );
}

export default App;
