import { useEffect } from "react"

const Profile=()=>{
    useEffect(()=>{
        let interval=setInterval(()=>{
            console.log("SETINTERVAL CALLED")
        },1000);
        return ()=>{
         clearInterval(interval)
        }
    })
    return(
        <>
        <h1>Profile component here</h1>
        </>
    )
}
export default Profile