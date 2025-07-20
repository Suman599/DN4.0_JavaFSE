import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <CohortDetails
        name="ReactJS Bootcamp"
        status="ongoing"
        startDate="01-Jul-2025"
        endDate="30-Jul-2025"
      />
      <CohortDetails
        name="Spring Boot Training"
        status="completed"
        startDate="01-Jun-2025"
        endDate="30-Jun-2025"
      />
    </div>
  );
}

export default App;
