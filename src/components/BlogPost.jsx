
function BlogPost({image, text}){
    return(
        <>  
            <div>
                <img src={image} width={400} height={350}/>
            </div>
            <p>{text}</p>
        </>
    )
}

export default BlogPost