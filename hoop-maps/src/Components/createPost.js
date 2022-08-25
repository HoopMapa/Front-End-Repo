
import { auth } from '../firebase-config';
import { onAuthStateChanged} from 'firebase/auth';
import React, { useState, useContext, useEffect } from 'react'
import Context from "../Context/Context.js"


function CreatePost({ setShowModal, setPosts, posts }) {

    const context = useContext(Context)

    console.log(context.user)


    //const context = useContext(Context)

    //console.log(context.user)

    const [court, setCourt] = useState("")
    const [post_body,setPost_body] = useState("")
    
   // const [user, setUser] = React.useState({});
   // const [userID, setUserID] = React.useState();
//Update UserID state --- grab User ID from our database based on firebase email
  // onAuthStateChanged(auth, (currentUser) => {
   // setUser(currentUser);
 //   if (currentUser!= null) {
     
     // console.log(currentUser.email); 
       //console.log(user);
    ///     fetch(`http://localhost:5004/users/email/${currentUser.email}`) 
    //        .then((response) => response.json()) 
    //        .then((data) => {
    //         //console.log(data.data[0].id); 
    //         const ID = data.data[0].id;
    //         setUserID(ID);
    //    })
    //    //console.log(userID);
    //    return userID
   // }
         
  //})
    

    
   // console.log(auth.currentUser)



    const handleCloseModal = () => {
        setShowModal(false);
    }
    
    const URL = "http://localhost:5004/posts"
    const createNewPost = async () => {
        //let userID = 1;
   

        if (post_body === "") return 
   

        const newPostInfo = {
            user_id: context.user[0].id,
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
        data.data[0].username = context.user[0].username
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