import {useEffect, useState} from 'react'
import {me} from '../api/users.ts'

export default function Profile() {
    const [user, setUser] = useState<any>()

    useEffect(() => {
        me().then(r => setUser(r.data))
    }, [])

    if (!user) return null

    return (
        <div>
            <h2>{user.username}</h2>
            <img src={user.avatar}/>
        </div>
    )
}