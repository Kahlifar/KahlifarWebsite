import axios from 'axios'
import { setupCache } from "axios-cache-adapter";

export async function getAxiosInstanceChacheAdapter() {
    const cache = setupCache({
        maxAge: 2 * 60 * 1000,
    });
    return axios.create({
        adapter: cache.adapter,
    });
} 