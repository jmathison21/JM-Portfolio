import Image from "next/image"
import Link from "next/link"

function Bio({ bio }) {
    const imgSrc = bio.picture != "" ? bio["picture"] : bio["no-picture"]
    const imgAlt =
        bio.picture != "" ? bio["picture-alt"] : bio["no-picture-alt"]

    return (
        <div className="flex w-full flex-grow flex-row flex-wrap justify-center sm:space-x-6 lg:space-x-8 xl:space-x-10">
            <div className="w-40 sm:w-48 xl:w-60 flex items-center">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={0}
                    height={0}
                    priority={true}
                    sizes="100vw"
                    className="h-auto w-full"
                />
            </div>
            <div className="flex flex-col w-64 items-center py-2 sm:w-72 lg:w-96 mx-2">
                <p className="text-center text-lg font-bold lg:text-xl xl:text-2xl">
                    Who is Jenna?
                </p>
                <p className="text-center lg:text-lg xl:text-xl">{bio.about}</p>
            </div>
            <div className="flex w-full flex-col items-center py-2 sm:pr-6 lg:pr-8 xl:pr-10">
                <p className="text-center text-lg font-bold lg:text-xl xl:text-2xl">
                    Education
                </p>
                <p className="whitespace-pre-line text-center lg:text-lg xl:text-xl">
                    {bio.education}
                </p>
            </div>
        </div>
    )
}

function SectionTitle({text}) {
    return (
            <h2 className="p-4 text-center text-lg font-bold lg:py-6 lg:text-xl xl:text-2xl">
                {text}
            </h2>
    )
}

function Social({ social }) {
    return (
        <div className="flex flex-row items-center bg-white rounded-xl p-3">
            <div className="w-20">
                <Image
                    width={0}
                    height={0}
                    src={social.icon}
                    alt={social["icon-alt"]}
                    sizes="100vw"
                    className="h-auto w-full"
                />
            </div>
            <Link
                className="font-bold px-4 text-lg text-blue-500 sm:text-lg lg:text-xl hover:underline"
                href={social.link}>
                {social.name}
            </Link>
        </div>
    )
}

function Socials({ socials }) {
    const socialItems = socials.map((social) => (
        <Social key={social.name} social={social} />
    ))

    return (
        <div className="flex flex-col items-center">
            <SectionTitle text={"Social Media"} />
            <div className="grid grid-cols-1 grid-rows-auto gap-4 md:grid-cols-2 ">{socialItems}</div>
        </div>
    )
}

function Resume({ resume }) {
    return (
        <>
            <SectionTitle text={"Resume"} />
            <div className="flex flex-row rounded-xl bg-white p-4 pl-2">
                <div className="flex w-16 items-center sm:w-20 lg:w-24 xl:w-28">
                    <Image
                        width={0}
                        height={0}
                        src={resume["icon-pdf"]}
                        alt={resume["icon-pdf-alt"]}
                        sizes="100vw"
                        className="h-auto w-full"
                    />
                </div>
                <div className="flex flex-col justify-center space-y-1 px-1 lg:px-2">
                    <Link href={resume.link} className="font-bold text-blue-500 sm:text-lg lg:text-xl hover:underline">{resume.name}</Link>
                    <p className="lg:text-lg">Last Modified: {resume.modDate}</p>
                </div>
            </div>
        </>
    )
}

function About({ content }) {
    if (content == null) {
        return <p>content not found</p>
    }

    return (
        <>
            <Bio bio={content.Bio} />
            <Socials socials={content.Social} />
            <Resume resume={content.Resume} />
        </>
    )
}

async function getDB() {
    const revalidate =
        process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? 0 : 3600
    const dbURL =
        revalidate != 0
            ? process.env.NEXT_PUBLIC_DB_URL
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

export default async function Page() {
    const db = await getDB()
    const data = db.tabs.find(tab => tab.name === "About").content

    return <About content={data} />
}
