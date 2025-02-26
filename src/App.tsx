import { RouterProvider } from 'react-router';
import router from './router';

const App = () => {
  return (
    <div className="">
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App;