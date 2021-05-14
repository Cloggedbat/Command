import axios from 'axios'
import { Component } from 'react'

const baseURL = `https://api.openweathermap.org/data/2.5/weather?`
const apiKey = '526a2060086048bc6956fbed29dbfe3d'
// after we get this to work lets rename Api
export const weatherAPI = async (city) => {
    try {
        const { data } = await axios.get(baseURL + `q=${city}&appid=${apiKey}`)
        return data
    } catch (error) {
        throw error;
    }
}
    //    hard coded for now will make it dynamic later


// export default weatherAPI;