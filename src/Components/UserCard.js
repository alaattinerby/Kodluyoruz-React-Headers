import React, {useState} from "react"
import InputCard from "./InputCard";

function UserCard() {
    
    const [nameState, setNameState] = useState()

    return(
        <> 
        <InputCard onChange={value => setNameState(value)} />
            <section className="sectionUserCard">
                <div className="userCard">
                    <span>”</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in erat eget neque eleifend tincidunt in vel magna. 
                        Suspendisse potenti. Aliquam erat volutpat. Aliquam hendrerit molestie feugiat. Praesent sed purus dui. 
                        Nam consequat lacus eget laoreet tempus.
                    </p>
                    <img src=""></img>
                    <h1>Başlık Gelecek : {nameState}</h1>  
                </div>
            </section>
        </>
    )
}

export default UserCard