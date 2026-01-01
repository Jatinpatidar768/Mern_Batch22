
// import "./UserCard.css"
// function UserCard(props) {
//     console.log(props)
//     console.log(props.Data)
//     return (
//         <div className="user-card">
//             <div className="avatar"></div>
//             <div className="name">Id: {props?.Data?.id}</div>
//             <div className="role">Name:{props?.Data?.name}</div>
//               <div className="role">Age:{props?.Data?.age}</div>
//             <a href="#" className="button">View Profile</a>
//         </div>
//     )
// }




// export default UserCard



import "./UserCard.css"
function UserCard({
    
}) {
    console.log(Data)
    return (
        <div className="user-card">
            <div className="avatar"></div>
            <div className="name">Id: {Data?.id}</div>
            <div className="role">Name:{Data?.name}</div>
              <div className="role">Age:{Data?.age}</div>
            <a href="#" className="button">View Profile</a>
        </div>
    )
}
export default UserCard