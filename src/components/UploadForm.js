import React, { useState } from "react";

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    
    const types = ['image/png', 'image/jpg']

    const changeHandler = e =>{
        let selected = e.target.files[0]

        if(selected && types.includes(selected.type)) {
            setFile(selected)
        }else{
            setFile(null)
            setError('png 또는 jpg로 선택해주세요.')
        }
    }

    return (
        <form>
            <input type ="file" onChange={changeHandler}></input>
            <div className="output">
                {error && <div className="error">{error}</div> }
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm