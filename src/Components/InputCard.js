function InputCard(props) {

    var inputArray = [];

    const inputControl = (e) => {
        inputArray = [];
        inputArray.push(e.target.value);
        console.log(inputArray);
    }

    return(<>
        <section> 
            <div className="inputCard">
                <input 
                    className="inputData" 
                    onKeyUp={inputControl} 
                    placeholder="Kart Başlığı"
                />
            </div>
        </section>
        
    </>
    )
}

export default InputCard