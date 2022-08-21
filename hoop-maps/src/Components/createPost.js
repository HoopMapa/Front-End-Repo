function CreatePost({ setShowModal }) {

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="overlay_style"></div>
            <div className="modal_style">
                <div className="headerForm">
                    
                    <button className="MakePost">post</button>
                    <button className="closePost" onClick={() => handleCloseModal()}>Close </button>
                </div>

                <div className="post-form">
                
                        <div className="post-form">
                            <label htmlFor="username">userName</label>
                            <input type="text" id="username" placeholder="...." />
                        </div>
                        <div className="post-form">
                            <label htmlFor="Court">court</label>
                            <input type="text" id="Court" placeholder="...." />
                        </div>
                        <div className="leftBottomForm">
                            <label htmlFor="Post">Post</label>
                            <textarea name="Post" id="Post" cols="30" rows="20"></textarea>
                        </div>

                </div>
            </div>
        </>
    );
}

export default CreatePost