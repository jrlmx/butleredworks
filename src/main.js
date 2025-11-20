import Alpine from "alpinejs"
import { db } from "./lib/database"

window.Alpine = Alpine

Alpine.start()

async function setupVideos() {
    const res = await db
        .listRows({
            databaseId: import.meta.env.VITE_AW_DB,
            tableId: "videos",
        })
        .catch((err) => {
            console.log(err)
        })

    console.log(res)
}

await setupVideos()
