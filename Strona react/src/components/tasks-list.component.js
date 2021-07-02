import React, {useEffect,useState } from 'react';
import axios from 'axios';


const TaskList = () =>{
    const [data,setData] =  useState([])

   /* const staticData = [
        {
            id: 1,
            username: 'test',
            description: 'dadada',
            duration: 14,
        },
        {
            id: 2,
            username: 'test 2',
            description: 'dsafada',
            duration: 15,
        }

    ]
*/

    useEffect(() => {

        setData()
         axios.get('http://localhost:5000/Tasks/')
            .then(response => {
                 setData(response.data)
                 console.log(response.data);
             })
             .catch((error) => {
                 console.log(error);
             })
    },[]);

  const  handleClick = (event, id) => {

      console.log('dada')
      console.log('konsolowana data ',data)
      console.log(id)
             axios.delete(`http://localhost:5000/Tasks/${id}`)
                 .then(response => { console.log(response.data)});
        
            
            
        }
        const  handleClickEdit = (event, id) => {
            
                  
              }

    if (data)
    {
    var elemToRender =
        (
            <>
                <div>
                    <h3>Logged Tasks</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {data.map((item, iIndex) => (
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.description}</td>
                                    <td>{item.duration}</td>
                                    <td><input type='submit' value={'Delete'} onClick={event => handleClick(event, item._id)}/> </td>
                                    <td><a href={`http://localhost:3000/edit/${item._id}`}>edit</a></td>
                                        </tr>
                                        )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            </>

        )

                        }
                        else
                        {
                            var elemToRender = null;
                            return elemToRender;
                        }
return(
        <>
            {elemToRender}
        </>
    )
}

export default TaskList;