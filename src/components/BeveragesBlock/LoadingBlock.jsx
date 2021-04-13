import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <div>
     <ContentLoader
                speed={2}
                width={280}
                height={450}
                viewBox="0 0 280 450"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="394" rx="0" ry="0" width="70" height="40" />
                <rect x="98" y="393" rx="20" ry="20" width="172" height="40" />
                <rect x="0" y="297" rx="8" ry="8" width="260" height="90" />
                <rect x="35" y="3" rx="5" ry="5" width="184" height="284" />
            </ContentLoader>
    
        </div>
    )
}

export default LoadingBlock
