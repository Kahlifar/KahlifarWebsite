import { getOAuthToken } from "./token";
import { getAxiosInstanceChacheAdapter } from '../../plugins/axiosCache'


export async function isLive(channel) {
    const api = await getAxiosInstanceChacheAdapter();
    api.defaults.headers.common['Client-ID'] = process.env.TWITCH_CLIENT_ID
    api.defaults.headers.common['Authorization'] = `Bearer ${await getOAuthToken()}`
    const response = await api.get(`https://api.twitch.tv/helix/streams?user_login=${channel}`)
    const data = response.data
    return data.data.length > 0
}