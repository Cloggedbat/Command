import axios from 'axios'


const baseURL = "https://api.nomics.com/v1/currencies/ticker?"
const apiKey = 'fffc082c271302b57c140b91af190d16'
// after we get this to work lets rename Api
export default {
    search: function (query) {
        return axios.get('https://api.nomics.com/v1/currencies/ticker?key=fffc082c271302b57c140b91af190d16&ids=' + query + '&interval=1d,30d&convert=EUR&per-page=100&page=1')
    }
}

















// og code pre redo
// export const crypAPI = async (Coin) => {
//     try {
//         const { data } = await axios.get(baseURL + `key=${apiKey}&ids=`)
//         return data
//     } catch (error) {
//         throw error;
//     }
// }
    //    hard coded for now will make it dynamic later


// export default weatherAPI;
