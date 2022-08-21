import { useState } from "react"

function CreatePost({ setShowModal, setPosts, posts }) {
    const [court, setCourt] = useState("")
    const [post_body,setPost_body] = useState("")

    const handleCloseModal = () => {
        setShowModal(false);
    }
    
    const URL = "http://localhost:5004/posts"
    const createNewPost = async (e) => {
        if (post_body === "") return 

        const newPostInfo = {
            user_id: 1,
            court, 
            post_body
        }
        
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newPostInfo }),
        })
        const data = await response.json()
        const newPost = data.data[0]
        data.data[0].username = 'Shevaughn!'
        setPosts([newPost, ...posts])
        handleCloseModal()
        setCourt('')
        setPost_body('')
    }

    return (
        <>
            <div className="overlay_style"></div>
            <div className="modal_style">
                <div className="headerForm">
                    
                    <button className="MakePost" onClick={createNewPost}>post</button>
                    <button className="closePost" onClick={() => handleCloseModal()}>Close </button>
                </div>

                <div className="post-form">
                        <div className="post-form">
                            <label htmlFor="Court">court</label>
                            <input type="text" id="Court" placeholder="...." value={court} onChange={(e) => setCourt(e.target.value)}/>
                        </div>
                        <div className="leftBottomForm">
                            <label htmlFor="Post">Post Info</label>
                            <textarea name="Post" id="Post" cols="30" rows="20" value={post_body} onChange={(e) => setPost_body(e.target.value)}></textarea>
                        </div>

                </div>
            </div>
        </>
    );
}

export default CreatePost