import './getCode.css';
import '../homepage/home.css';
import {useState} from 'react';

export default function GetCode(){
    const [pythonCode, setPythonCode] = useState("")
    const handlePython = (e)=> {
        setPythonCode(e.target.value);
    }
    const [javaCode, setJavaCode] = useState("")
    const handleJava = (e)=> {
        setJavaCode(e.target.value);
    }
    const handleSourceCodeFile = ()=> {

    }
    const handleOutputFile = ()=> {

    }
    const handleUrlFile = ()=> {

    }
    return(
        <div className="container-fluid get-code-div">
            <div className="row">
                <div className="col col-12 col-md-6 code-area">
                    <h4>Java</h4>
                    <textarea className="form-control" onChange={handleJava} value={javaCode} name="javaCode" rows="12" cols="50" style={{width:'100%'}}></textarea>
                </div>
                <div className="col col-12 col-md-6 code-area">
                    <h4>Python</h4>
                    <textarea className="form-control" onChange={handlePython} value={pythonCode} name="pythonCode" rows="12" cols="50" style={{width:'100%'}}></textarea>
                </div>
            </div>
            <div className="row" style={{marginTop:'50px'}}>
                <div className="col col-12 col-md-4" style={{textAlign:'center', padding:'10px 0px'}}>
                    <button onClick={handleSourceCodeFile} className="submit-btn">Source code file</button>
                </div>
                <div className="col col-12 col-md-4" style={{textAlign:'center', padding:'10px 0px'}}>
                    <button onClick={handleOutputFile} className="submit-btn">Output file</button>
                </div>
                <div className="col col-12 col-md-4" style={{textAlign:'center', padding:'10px 0px'}}>
                    <button onClick={handleUrlFile} className="submit-btn">Reference URL file</button>
                </div>
            </div>
        </div>
    )
}