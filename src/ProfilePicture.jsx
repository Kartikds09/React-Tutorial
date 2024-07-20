
function ProfilePicture(){
    const imageURL = 'https://picsum.photos/id/237/200/300'
    const handleClick = (e) => {
        e.target.style.display = "none";
    }
    return(
        <>
        <img onClick={(e) => handleClick(e)} src= {imageURL} alt="" />
        </>
    )
}
export default ProfilePicture