import React from 'react';
import { motion } from "framer-motion";
import crypto from '../../pics/pr/image (1).png';
import Eye from '../../pics/pr/image (2).png';
import Live from '../../pics/pr/image (3).png';
import Restro from '../../pics/pr/image (4).png';
import Shop from '../../pics/pr/image (6).png'
import Alter from './alter';
import './styles.css'

function Work() {
    return (
        <div className='workContainer'>
            <motion.h2
                key={"workHead"}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                className='workHeading'>Projects I've Created <span>.</span></motion.h2>

            <Alter
                thumbnail={crypto}
                pName={'CryptoVest'}
                pInfo={"Crypto's is a platform dedicated to crypto investors who want to get more information about the crypto currensies they are interested in to invest and compare them with other currencies available in market."}
                techStack={['React', 'Styled-component', 'CSS', 'Chart Js', 'Coingeko-API', 'Versal']}
                gitrepo={'https://github.com/arjunsinghbazal/crypto'}
                pLink={'https://crypto-steel.vercel.app/'}
            />

            <Alter
                thumbnail={Eye}
                pName={"Roshnee EyeWear"}
                pInfo={"Roshnee Eyewear Store: Your stylish eyewear destination. Explore premium glasses and sunglasses that blend fashion with vision. Discover clarity in style."}
                techStack={['React', 'Styled-component', 'CSS', 'API', 'Versal']}
                gitrepo={'https://github.com/arjunsinghbazal/Roshnee'}
                pLink={'https://roshnee.vercel.app/'}
            />

            <Alter
                thumbnail={Live}
                pName={'Live Green'}
                pInfo={"Explore our plant web for a green oasis of inspiration. Uncover a diverse range of plants and gardening insights. Embrace the serenity of nature in your space."}
                techStack={['React', 'Styled-component', 'CSS', 'API', 'Versal']}
                gitrepo={'https://github.com/arjunsinghbazal/L_Green'}
                pLink={'https://livegreen.vercel.app/'}
            />

            <Alter
                thumbnail={Shop}
                pName={'MeShop.'}
                pInfo={"A interactive but desktop-adaptive dummy e-commerce website. There is no special requirements for accessing this website. It has most of the features that are available in any basic e-commerce website."}
                techStack={['HTML', 'CSS', 'JavaScript', 'Razorpay-API', 'Product-API']}
                gitrepo={'https://github.com/arjunsinghbazal/meshop'}
                pLink={'https://arjunsinghbazal.github.io/meshop/'}
            />

            <Alter
                thumbnail={Restro}
                pName={'DryFry Restro'}
                pInfo={"This webapp replicate the cart functionality of a e-commerce app."}
                techStack={['React', 'CSS', 'Product-API']}
                gitrepo={'https://github.com/arjunsinghbazal/DryFry'}
                pLink={'https://dryfryrestro.vercel.app/'}
            />

        </div>
    )
}

export default Work