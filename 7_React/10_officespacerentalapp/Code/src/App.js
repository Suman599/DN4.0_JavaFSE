import React from 'react';

function App() {
  const heading = <h1>Office Space Rental Application</h1>;

  const imageUrl ="https://thumbs.dreamstime.com/b/office-work-place-5879959.jpg";

  const office = {
    name: "Elite Business Center",
    rent: 55000,
    address: "123, MG Road, Bengaluru"
  };

  const officeList = [
    {
      name: "Innovate Hub",
      rent: 45000,
      address: "22, Park Street, Kolkata"
    },
    {
      name: "Skyview Offices",
      rent: 72000,
      address: "88, Banjara Hills, Hyderabad"
    },
    {
      name: "Downtown Workspaces",
      rent: 60000,
      address: "44, Church Street, Bengaluru"
    }
  ];

  return (
    <div>
      {heading}

      <img src={imageUrl} alt="Office Space" width="400" height="200" />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p>
        <strong>Rent:</strong>{" "}
        <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          ₹{office.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Available Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {item.name}</p>
            <p>
              <strong>Rent:</strong>{" "}
              <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
                ₹{item.rent}
              </span>
            </p>
            <p><strong>Address:</strong> {item.address}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
