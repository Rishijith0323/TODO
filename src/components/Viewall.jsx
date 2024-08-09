import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
const [data, changedata] = useState([])
const fetchDataFromApi = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
            changedata(response.data)
        }
    ).catch()
}
 useEffect(()=>{fetchDataFromApi()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">userId</th>
                                    <th scope="col">id</th>
                                    <th scope="col">title</th>
                                    <th scope="col">completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.userId}</th>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.completed ? "true" : "false"}</td>
                                            </tr>
                                        }
                                    )

                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewall
