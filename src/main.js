import Alpine from "alpinejs"
import intersect from "@alpinejs/intersect"
import { db } from "./lib/database"

Alpine.plugin(intersect)

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
