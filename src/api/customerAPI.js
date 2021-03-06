import axios from "axios";

const path = 'http://localhost:8080/api/orders/'

async function sendOrder(order, authorization) {
    const r = await axios(
        {
            method: 'POST',
            url: path,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + authorization,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(order),
        }
    );
    return await r.data;
}

export { sendOrder };