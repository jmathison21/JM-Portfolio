export const getDB = async function() {
    const env = process.env.NEXT_PUBLIC_VERCEL_ENV
    const revalidate =
        env === "development" ? 0 : 3600
    const dbURL =
        revalidate != 0
            ? (env === "production" ? process.env.NEXT_PUBLIC_DB_URL : process.env.NEXT_PUBLIC_BETA_DB_URL)
            : process.env.DEV_DB_URL
    const res = await fetch(dbURL, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        next: { revalidate: revalidate },
    })

    if (!res.ok) {
        return null
    }

    return await res.json()
}