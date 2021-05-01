import {useEffect, useState} from "react";
import Post from "../post/Post";
import './posts.style.css'
import axiosInstance from '../../services/api';

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);
    useEffect(() => {
        axiosInstance.get('/posts').then(value => {setPosts([...value.data])})
    },[])



    const find = (id) => {
        let findedPost = posts.find(value => value.id === id);
        setSinglePost(findedPost)

    }
    return (
        <div className={'wrapper'}>
            <div className={'posts-block'}>
                {
                    posts.map((value) => <Post key={value.id} item={value} func={find}/>)
                }
            </div>
            <div className={'detail-post-block'}>
                {
                    singlePost ? (<h2>{singlePost.body}</h2>) : (<div>choose post</div>)
                }

            </div>
        </div>
    )
}