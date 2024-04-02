import './GuideAboutUs.css'
export function GuideAboutUs({obj}){
    return(
        <div style={{height:'200px'}} className="guide_aboutus">
            <div style={{}}>
                <h2>{obj.head}</h2>
            </div>
            <div style={{}}>
                <p>{obj.message}</p>
            </div>
        </div>
    )
}