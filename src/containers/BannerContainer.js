import React from "react";
import { Banner } from "../Layout/Banner";
import MultiBanner from "../Layout/MultiBanner";
import { BANNER_TYPE } from "../constants";


const BannerContainer = ({slides, type='FullWidthBanner'}) => {
    console.log('type', type)
    switch(type) {
        case BANNER_TYPE.ONE_SLIDE_IN_VIEW:
            return <MultiBanner slides={slides} config={{ centerMode: false, fullWidth: true }} />
        case BANNER_TYPE.MULTI_SLIDE_IN_VIEW: 
            return <MultiBanner slides={slides}/>
        default: 
            return <Banner slides={slides}></Banner>
    }
    
}

export default BannerContainer;