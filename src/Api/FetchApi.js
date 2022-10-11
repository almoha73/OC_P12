import React, { useState, useEffect } from 'react';



function FetchApi() {

    const [users, setUsers] = useState([])
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (response.status === 200) {
                    let data = await response.json();
                    setUsers(data);
                } else {
                    throw 'Error fetching users list'
                }
            } catch (error) {
                setIsError(true)
            }
        }
        fetchData();

    }, [])

    return (
        <div>
            {isError ? <h3> Error! Please try again later</h3> :
                <ul>
                    {users.map((user) => <li key={user.id} > {user.name} </li>)}
                </ul>
            }
        </div>
    )
}

export default FetchApi;