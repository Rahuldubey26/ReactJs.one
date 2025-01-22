import React from 'react'
import appwriteService from "../appwrite/config"
import { PostCard, Container } from '../components'
import { useState, useEffect } from 'react'
function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        appwriteService.getPosts([])
            .then((posts) => {
                if (posts) setPosts(posts.documents)

            }).catch((error) => {
                console.log(`Error is ${error}`)
            });
    }, []);
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='py-2 w-1/4'>
                                <PostCard post={post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts