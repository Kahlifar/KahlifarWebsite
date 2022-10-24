import axios from 'axios'

export async function getOAuthToken() {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', {
        headers: {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials'
        },
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        grant_type: 'client_credentials'
    })
    return response.data.access_token
} 