function InputCard(props) {
    
    return(
    <>
        <section> 
            <div className="inputCard">
                <input 
                    className="inputData" 
                    placeholder="Yorum Yapan Kullanıcı"
                    onChange={(e) => props.onChange(e.target.value)} 
                />
            </div>
        </section>      
    </>
    )
}

export default InputCard