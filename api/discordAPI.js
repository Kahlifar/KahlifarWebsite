const express = require('express');
const axios = require('axios');
import { getAxiosInstanceChacheAdapter } from '../plugins/axiosCache'

const app = express();
app.use(express.json());


app.get('/members', async (req, res) => {
    const api = await getAxiosInstanceChacheAdapter();
    const userId = req.query.userId;
    const headers = {
        headers: {
            'Authorization': `Bot ${process.env.TOKEN}`
        }
    }
    if (!userId) {
        const response = await api.get(`https://discord.com/api/v10/guilds/814230131681132605/members?limit=1000`, headers);
        res.send(response.data);
    } else {
        const response = await api.get(`https://discord.com/api/v10/guilds/814230131681132605/members/${userId}`, headers);
        res.send(response.data);
    }
});

app.get('/getRoles', async (req, res) => {
    const api = await getAxiosInstanceChacheAdapter();
    const roleId = req.query.roleId;
    const response = await api.get(`https://discord.com/api/v10/guilds/814230131681132605/roles`,
        {
            headers: {
                'Authorization': `Bot ${process.env.TOKEN}`
            }
        }
    )
    if (roleId) {
        const role = response.data.find(role => role.id === roleId);
        res.send(role);
    }
    response.data.sort((a, b) => b.position - a.position);
    res.send(response.data);
});

module.exports = app