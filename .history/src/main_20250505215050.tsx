// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage.tsx";
// import Recipes from './components/Recipes.tsx'
// import AddRecipe from './components/addRecipe.tsx';
// import EditRecipe from './components/editRecipe.tsx';
// import { AuthProvider } from "./contexts/AuthUserContext.tsx";
// import { Outlet } from 'react-router-dom';

// function App() {

//   return (
//     <>
//       <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Outlet />} />
//             <Route path='*' element={<HomePage />} />
//             <Route path='/recipes' element={<Recipes />} />
//             <Route path="/editRecipe" element={<EditRecipe recipeId={1} onRecipeUpdated={(updatedRecipe) => console.log(updatedRecipe)} />} />
//             <Route path='/addRecipe' element={<AddRecipe />} />

//           </Routes>
//           <Outlet />
//         </Router>
//       </AuthProvider>

//     </>
//   )
// }
// export default App


import { createRoot } from 'react-dom/client'
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './components/SignIn.tsx'
import Login from './components/Login.tsx'
import GetRecipes from './components/GetRecipes.tsx'
import AddRecipe from './components/AddRecipe'
import EditRecipe from './components/EditRecipe'

const routes = createBrowserRouter([

  {
    path: '*', // דף הבית הראשי

    element:
      <App />,
      
    children: [

      { path: "Login", element: <Login /> },
      { path: 'SignIn', element: <SignIn /> },
      { path: 'GetRecipes', element: <GetRecipes /> },
      { path: 'edit-recipe/:id', element: <EditRecipe /> },
      { path: 'addRecipe', element: <AddRecipe /> }

    ],
  },
]);
createRoot(document.getElementById('root')!).render(

  <RouterProvider router={routes} />,

);