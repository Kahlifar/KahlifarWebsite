import axios from 'axios'
import { getAxiosInstanceChacheAdapter } from '../../plugins/axiosCache'


export async function getTopRole(member) {
    const api = await getAxiosInstanceChacheAdapter();
    const roleResponse = await api.get('http://localhost:3000/api/discord/getRoles')
    const roles = roleResponse.data

    for (const role of roles) {
        if (member.roles.includes(role.id)) {
            return role;
        }
    }
}

export async function getAvatarURL(member) {
    const avatar = member.avatar ? member.avatar : member.user.avatar
    const userId = member.user.id
    var extention = avatar.startsWith('a_') ? '.gif' : '.png'
    if (member.avatar) {
        return `https://cdn.discordapp.com/guilds/814230131681132605/users/${userId}/avatars/${member.avatar}${extention}`
    }
    return `https://cdn.discordapp.com/avatars/${userId}/${member.user.avatar}${extention}`
}