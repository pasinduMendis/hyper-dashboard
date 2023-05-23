import axios from "axios"

const requestObj = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
    "Origin,Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST,PUT,DELETE, OPTIONS",
    
}

export const paymentService = {
    createPayment,
    isSubscribed
};

async function createPayment(session, body) {
    try {
        const config = {
            headers: {
                ...requestObj,
                "Authorization": session.accessToken
            }
        }

        const url = process.env.BASE_URL + '/payment/createPayment';
        const response = await axios.post(url, body, config);
        //console.log("RES ", response)
        if (response.data.message=='success!') {
            return { status: response.status, message: response.data.message };
        } else {
            return { status: response.status, message: "An error occured" };
        }
    } catch (error) {
        return { status: 500, message: error.message.code };
    }
}

async function isSubscribed(session) {
    try {
        const config = {
            headers: {
                ...requestObj,
                "Authorization": session.accessToken
            }
        }

        const url = process.env.BASE_URL + '/payment/isSubscribed';
        const response = await axios.post(url, {email:session.user.email}, config);
        //console.log("RES ", response)
        if (response.status==200) {
            return { status: response.status, isSubscribed: response.data.isSubscribed };
        } else {
            return { status: response.status, message: "An error occured" };
        }
    } catch (error) {
        return { status: 500, message: error.message.code,isSubscribed:false };
    }
}