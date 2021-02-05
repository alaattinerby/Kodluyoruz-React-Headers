import React, {useState} from "react"
import InputCard from "./InputCard";

function UserCard() {
    
    const [nameState, setNameState] = useState()

    return(
        <>
            <InputCard onChange={value => setNameState(value)} />
            <h1>Başlık Gelecek : {nameState}</h1>
            
        </>
    )
}

export default UserCard