import PostCard from './PostCard'
import styles from './PostGrid.module.css'

export default function PostGrid({posts}: any) {
    return (
        <div className={styles.container}>
            {posts.map((p: any) => <PostCard key={p.id} post={p}/>)}
        </div>
    )
}