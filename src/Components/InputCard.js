function InputCard() {
var inputData = document.getElementById("inputData");
   
    const inputControl = (e) => {
        var inputArray = [];
        inputArray.push(e.target.value);
    }

    return(<>
        <section> 
            <div className="inputCard">
                <input 
                    id="iputData" 
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