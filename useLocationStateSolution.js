// useLocationStateSolution.js
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MyComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState(location.state);

  useEffect(() => {
    setState(location.state);
  }, [location]);

  if (!state) {
    return <Navigate to='/error' replace/>; // Handle missing state gracefully
  }

  return (
    <div>
      <h1>My Component</h1>
      <p>State from location: {JSON.stringify(state)}</p>
    </div>
  );
};
export default MyComponent;