import React, {useEffect,useState} from 'react';


const Table = ({employees}) => {
    const [sortedEmployees, setUpdatedEmployees] = useState([]);

    useEffect(() => setUpdatedEmployees(employees),[employees])

    return (
        <div>
          <table className="table">
            <thead>
              <tr>
              <th scope="col">picture</th>
                <th scope="col">title</th>
                <th
                  scope="col"
                  onClick={() => {
                    const employeesCopy = [...employees];
                    const updateSort = employeesCopy.sort((a, b) => {
                      const nameA = a.name.first;
                      const nameB = b.name.first;
    
                      if (nameA < nameB) {
                        return -1;
                      }
                      if (nameA > nameB) {
                        return 1;
                      }
    
                      return 0;
                    });
    
                    setUpdatedEmployees(updateSort);
                  }}
                >
                  First
                </th>
                <th scope="col">Last</th>
                <th scope="col">gender</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">cell</th>
                <th scope="col">city</th>
                <th scope="col">state</th>
                <th scope="col">country</th>
                <th scope="col">postcode</th>
               
              </tr>
            </thead>
            <tbody>
              {sortedEmployees.map(
                ({
                  location: { city, state, country, postcode },
                  picture: { thumbnail },
                  cell,
                  phone,
                  gender,
                  email,
                  name: { first, last, title }
                }) => (
                  <tr key={email}>
                      <td>
                      <img src={thumbnail} />
                    </td>
                    <td>{title}</td>
                    <th>{first}</th>
                    <td>{last}</td>
                    <td>{gender}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{cell}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{country}</td>
                    <td>{postcode}</td>
                    
    
                    <td></td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default Table;

