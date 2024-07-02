import logo from './logo.svg';
import './App.css';
import Add_Subscribers from './components/Add_Subscribers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View_Subscribers from './components/View_Subscribers';
import Search_Subscribers from './components/Search_Subscribers';
import Delete_Subscribers from './components/Delete_Subscribers';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"  element ={<Add_Subscribers/>}/>
    <Route path="/view_sub"  element ={<View_Subscribers/>}/>
    <Route path="/search_sub"  element ={<Search_Subscribers/>}/>
    <Route path="/delete_sub"  element ={<Delete_Subscribers/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
