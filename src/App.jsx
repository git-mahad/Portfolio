import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Home() { /* delet this function*/
  return <h1>Welcome to the Home Page</h1>;
}

function NotFound() {  /* delet this function*/
  return <h1>404 - Page Not Found</h1>;
}

const router = createBrowserRouter([
  {
    path: '/',  // customise according to your project
    element: <Home />,
  },
  {
    path: '*',  // customise according to your project
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
      <p className="bg-red-500 text-white p-4">If this is red, Tailwind is working!</p>
    </div>
  );
}

export default App;
