import img1 from '../../static/media/news/1.jpg'
import img2 from '../../static/media/news/2.jpg'
import img3 from '../../static/media/news/3.jpg'
import './News.css'
export function News(){
    return(
        <div style={{textAlign:'center'}}>
            <div >
                <div className="news_container">
                    <img src={img1} alt="img1"></img>
                    <div className="news_content">
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=newssearch&cd=&cad=rja&uact=8&ved=2ahUKEwjx37iipM6EAxVPnK8BHZSaCWgQxfQBKAB6BAgPEAE&url=https%3A%2F%2Fwww.independent.co.uk%2Ftech%2Fbitcoin-price-latest-halving-peak-ethereum-b2503775.html&usg=AOvVaw2PI3Z5yXFt6rcxjpC3vj7n&opi=89978449" >Bitcoin price hits fresh 2024 high amid record inflows</a>
                        <br/><br/>
                        <p style={{color:'#ffaf02'}}>Bitcoin News | February 24, 2024</p>
                        <br/>
                        <p>Crypto market analysts make bold 2024 prediction ahead of historic halving event</p> 
                    </div>
                            
                </div> 
            </div>
            <div >
                <div style={{textAlign:'center'}}>
                <div className="news_container">
                    <img src={img2} alt="img2"></img>
                    <div className="news_content">
                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=newssearch&cd=&ved=2ahUKEwjx37iipM6EAxVPnK8BHZSaCWgQxfQBKAB6BAgHEAE&url=https%3A%2F%2Fm.economictimes.com%2Fmarkets%2Fcryptocurrency%2Fcrypto-price-on-february-28-bitcoin-holds-above-57000-xrp-dogecoin-jump-up-to-6%2Farticleshow%2F108065212.cms&usg=AOvVaw3zqGWZ1XePdByiki0yLZ3P&opi=89978449" class="post-title" target="_blank">Bitcoin jumps above $59,500 for the first time since November 2021</a>
                                <br/><br/>
                                <p style={{color:'#ffaf02'}}>Bitcoin News | February 24, 2024</p>
                        <br/>
                        <p>Bitcoin achieved a new milestone by surpassing the $59,000 threshold. This surge can be attributed to the substantial trading activity, totaling $3 billion, in Bitcoin spot ETFs, showing increasing demand in the market.</p>
                    </div>
                            
                </div>
                </div> 
            </div>
            <div >
                <div className="news_container">
                    <img src={img3} alt="img3"></img>
                    <div className="news_content">
                    <div className="urls">
                    <a href="https://www.moneycontrol.com/news/world/bitcoin-eyes-60000-in-biggest-monthly-rally-since-late-2020-12370771.html" class="post-title" target="_blank">Bitcoin within touching distance of $60,000: Here's what's fueling its biggest monthly rally since late 2020.</a>                        
                    </div>    
                        <br/><br/>
                        <p style={{color:'#ffaf02'}}>Bitcoin News | February 24, 2024</p>
                        <br/>
                        <p> Euphoric sentiment and institutional buying demand have put the asset on fire. Traders have also doubled down on the asset out of pure FOMO (fear of missing out) about a seemingly new bull rally.</p>
                    </div>
                            
                </div> 
            </div>


    </div>  
    )
}