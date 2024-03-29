import './BitcoinFeature.css'
export function BitcoinFeature(){
    return(
        <div>
            <div style={{width:'100%',textAlign:'center'}}>
                <div style={{}}>
                <h2 style={{paddingTop:'80px',paddingBottom:'20px'}}>Let’s change the world together</h2>
                <p style={{paddingLeft:'20%',paddingRight:'20%',color:'rgb(229, 172, 29)',fontSize:'larger'}}>Unlock the future of Bitcoin investing with our intuitive Prediction App. Instantly access reliable forecasts, real-time data, and personalized insights to make informed decisions. Stay ahead of market movements and maximize your returns effortlessly.</p>
                </div>
            </div>
            <div class="row">
                        <div class="feature">
                            <i class="icon-safebox"></i>
                            <h3>Accessibility</h3>
                            <p>Bitcoin offers global accessibility, allowing users to participate in financial transactions without geographical restrictions or traditional banking infrastructure. This feature enables individuals in underserved regions or without access to traditional banking services to engage in secure and borderless transactions.</p>
                        </div>

                        <div class="feature">
                            <i class="icon-bitcoin"></i>
                            <h3>Transparency</h3>
                            <p>The blockchain technology underlying Bitcoin offers transparent transaction records that are publicly accessible and immutable. This feature enhances trust and accountability within the Bitcoin network, as users can verify transactions and track the movement of funds in real-time without relying on third-party oversight.</p>
                        </div>
                        <div class="feature">
                            <i class="icon-exchange"></i>
                            <h3>Decentralized</h3>
                            <p>Bitcoin operates on a decentralized network, meaning it is not controlled by any single authority like a government or financial institution. This feature ensures that transactions can be conducted peer-to-peer without the need for intermediaries, providing users with greater autonomy over their finances.</p>
                    </div>
                        <div class="feature">
                            <i class="icon-wallet"></i>
                            <h3>Secure</h3>
                            <p>Bitcoin transactions are secured through cryptographic protocols that ensure the integrity and authenticity of each transaction. The decentralized nature of the blockchain, coupled with advanced encryption techniques, enhances the security of Bitcoin transactions, making them resistant to fraud and unauthorized manipulation.</p>
                        </div>
                </div>
        </div>
    )
}