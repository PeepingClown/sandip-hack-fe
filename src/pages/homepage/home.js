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

                    </div>
                    <div className="col col-12 col-md-6 btn-div">
                        <button onClick={handleSubmit} className="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}