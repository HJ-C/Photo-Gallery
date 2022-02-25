import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({file, setFile}) => {

    const { progress, url } = useStorage(file);
    console.log(progress,url)

    return (
        <div className="progress-bar" style={{width:progress + '%'}}>progress</div>
    )

}

export default ProgressBar