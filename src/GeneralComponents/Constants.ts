type constants = {
    rootUrl: string,
    isDevelopment: boolean
}

const Constants: constants = {
    rootUrl: "",
    isDevelopment: false
}

if(!Constants.isDevelopment){
    Constants.rootUrl = "/DngPortfolio"
}

export default Constants;