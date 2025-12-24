import {useEffect, useState} from 'react'
import {me} from '../api/users.ts'
import Button from "../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState<any>()
     const navigate = useNavigate()

    useEffect(() => {
        me().then(r => setUser(r.data))
    }, [])

    if (!user) return null

    return (
        <div>
            <h2>{user.username}</h2>
            <img src={user.avatar}/>
            <Button onClick={() => navigate("/create")}>Добавить пост</Button>
        </div>
    )
}