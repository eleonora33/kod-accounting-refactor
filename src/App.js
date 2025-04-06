import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import HeaderMoreForUs from './components/HeaderMoreForUs';
import AboutMoreForUs from './components/AboutMoreForUs';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProjectsPage from './components/ProjectsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'more-for-us', element: <HeaderMoreForUs /> },
      { path: 'about-more-for-us', element: <AboutMoreForUs /> },
      { path: 'projects', element: <ProjectsPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
