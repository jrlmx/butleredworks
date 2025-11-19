import { Client, TablesDB } from "appwrite"

const client = new Client()

client.setEndpoint(import.meta.env.VITE_AW_ENDPOINT)
client.setProject(import.meta.env.VITE_AW_PROJECT)

const db = new TablesDB(client)

export { client, db }
