import './home.css';
import {useState} from 'react';

export default function Home(){
    const [query, setQuery] = useState("");
    const handleQuery = (e)=>{
        setQuery(e.target.value);
    }
    const handleSubmit = ()=> {
        window.location="/code";
        
    }
    return(
        <div className="container-fluid home-div">
            <div className="input-div">
                <input className="form-control main-input" type="text" placeholder="Enter your query" name="query" onChange={handleQuery} value={query}/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-12 col-md-6">
                        <div style={{marginBottom:'20px'}}>
                        <button className="upload-btn">
                            <i style={{color:'#0253B3'}} class="fas fa-file-upload fa-2x"></i>
                        </button>
                            
                        </div>
                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Python
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label class="form-check-label" for="flexCheckChecked">
                                Java
                            </label>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 btn-div">
                        <button onClick={handleSubmit} className="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}