
function BlogPost({image, text}){
    return(
        <div class="content">  
            <div>
                <img src={image} width="80%"/>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default BlogPost