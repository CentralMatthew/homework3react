import {useEffect, useState} from "react";
import User from "../user/user";
import './users.style.css'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])


    const details = (id) => {
        let findedUser = users.find(value => value.id === id)
        setSingleUser(findedUser)
    }

    return (
        <div className={'wrap'}>
            <div className={'user-box'}>
                {
                    users.map((value) => <User key={value.id} item={value} func={details}/>)
                }
            </div>
            <div className={'user-details-box'}>
                {
                    singleUser ? (<h2>{singleUser.id} - {singleUser.name}</h2>) : (<div> user not defined </div>)
                }
            </div>
        </div>
    )
}

