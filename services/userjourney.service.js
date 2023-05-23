import axios from "axios"

const requestObj = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
    "Origin,Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST,PUT,DELETE, OPTIONS",
}

export const userJourneyService = {
    createUserJourney,
    getUserJourneys,
    updateUserJourney,
    getUserJourneysAuto,
    getUserJourneysAutoFilter,
    updateShareAllow,
    getUserJourneysAutoFilterShare,
    getUserJourneysAutoShare,
    updateShareAllowInvites,


};

async function createUserJourney(session, userJourney, websiteId) {
    try {
        const config = {
            headers: {
                ...requestObj,
                "Authorization": session.accessToken
            }
        }

        const url = process.env.BASE_URL + 'userJourneys/createJourney' + '/' + websiteId;
        const response = await axios.post(url, userJourney, config);
        console.log("RES ", response)
        if (response.status === 200) {
            return { status: response.status, message: response.data.message };
        } else {
            return { status: response.status, message: "An error occured" };
        }
    } catch (error) {
        return { status: 500, message: error.message.code };
    }
}

async function updateUserJourney(session, userJourney, websiteId) {
    try {
        const config = {
            headers: {
                ...requestObj,
                "Authorization": session.accessToken
            }
        }

        const url = process.env.BASE_URL + 'userJourneys/updateJourney' + '/' + websiteId + '/' + userJourney.journeyId;
        const response = await axios.put(url, userJourney, config);

        return { status: response.status, message: response.data.message };
    } catch (error) {
        return { status: 500, message: error };
    }
}

async function getUserJourneys(session, websiteId) {
    try {
        const config = {
            headers: {
                "Authorization": session.accessToken,
                
            }
        }
        const url = process.env.BASE_URL +'userJourneys/getJourneyByWebsiteId/'+ websiteId;

        const response = await axios.get(url, config);
        if (response.status === 200) {
            return { status: response.status, userjourneys: response.data.userJourney}
        } else {
            //console.log("errrr",res.data)
            return { status: response.status, message: response.data.message}
        }
    } catch (error) {
        return { status: 500, message: error.message };
    }
}

async function getUserJourneysAuto(session, websiteId,startDate,endDate) {
    try {
        const config = {
            headers: {
                "Authorization": session.accessToken,
                
            }
        }
        const url = process.env.BASE_URL +'userJourneys/getJourneyByWebsiteIdAuto/'+ websiteId;
        const body={startDate:startDate,endDate:endDate}
        const response = await axios.post(url,body, config);
        if (response.status === 200) {
            return { status: response.status, userjourneys: response.data.userJourney}
        } else {
            //console.log("errrr",res.data)
            return { status: response.status, message: response.data.message}
        }
    } catch (error) {
        return { status: 500, message: error.message };
    }
}

async function getUserJourneysAutoFilter(session, websiteId,startDate,endDate,journey) {
    try {

        const config = {
            headers: {
                "Authorization": session.accessToken,
                
            }
        }
        const url = process.env.BASE_URL +'userJourneys/getJourneyByWebsiteIdAutoFilterWithButton/'+ websiteId;
        const body={startDate:startDate,endDate:endDate,journey:journey}
        const response = await axios.post(url,body, config);
        if (response.status === 200) {
            //console.log("userjourneys :",response.data.userJourney)
            return { status: response.status, userjourneys: response.data.userJourney}
        } else {
            //console.log("errrr",res.data)
            return { status: response.status, message: response.data.message}
        }
    } catch (error) {
        //console.log("errrr",error)
        return { status: 500, message: error.message };
    }
}

async function updateShareAllow(session, websiteId,body) {
    try {
        const config = {
            headers: {
                "Authorization": session.accessToken,
                
            }
        }
        const url = process.env.BASE_URL +'userJourneys/shareAllowUpdate/'+ websiteId;
        const response = await axios.put(url,body, config);
        if (response.status === 200) {
            return { status: response.status, result : response.data.result}
        } else {
            //console.log("errrr",res.data)
            return { status: response.status, result : false}
        }
    } catch (error) {
        return { status: 500, message: error.message , result : false};
    }
}


async function getUserJourneysAutoShare(websiteId,startDate,endDate,userEmail) {
    try {
        //console.log("websiteId :",websiteId)
        const url = process.env.BASE_URL +'userJourneys/getJourneyByWebsiteIdAutoShare/'+ websiteId;
        const body={startDate:startDate,endDate:endDate,userEmail:userEmail}
        const response = await axios.post(url,body);
        console.log("ShareRes :",response)
        if (response.status === 200) {
            return { status: response.status, userjourneys: response.data.userJourney , website :response.data.website}
        } else {
            return { status: response.status, message: response.data.message}
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return { status: error.response.status, message: error.response.data.message}
          }
        return { status: 500, message: error.message };
    }
}

async function getUserJourneysAutoFilterShare(websiteId,startDate,endDate,journey,userEmail) {
    try {
        console.log("websiteId :",websiteId)
        const url = process.env.BASE_URL +'userJourneys/getJourneyByWebsiteIdAutoFilterWithButtonShare/'+ websiteId;
        const body={startDate:startDate,endDate:endDate,journey:journey,userEmail:userEmail}
        const response = await axios.post(url,body);
        if (response.status === 200) {
            //console.log("userjourneys :",response.data.userJourney)
            return { status: response.status, userjourneys: response.data.userJourney,website :response.data.website}
        } else {
            //console.log("errrr",res.data)
            return { status: response.status, message: response.data.message}
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return { status: error.response.status, message: error.response.data.message}
          }
        console.log("errrr",error)
        return { status: 500, message: error.message };
    }
}

async function updateShareAllowInvites(session, websiteId,body) {
    try {
        const config = {
            headers: {
                "Authorization": session.accessToken,
                
            }
        }
        const url = process.env.BASE_URL +'userJourneys/shareAllowUpdateInvitations/'+ websiteId;
        const response = await axios.put(url,body, config);
        if (response.status === 200) {
            return { status: response.status, result : response.data.result}
        } else {
            //console.log("errrr",res.data)
            return { status: response.status, result : false}
        }
    } catch (error) {
        return { status: 500, message: error.message , result : false};
    }
}