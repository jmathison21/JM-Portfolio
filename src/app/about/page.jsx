import Image from "next/image"
import Link from "next/link"
import db from "src/jennaDB"

function Bio({ bio }) {
    const imgSrc = 
        bio.picture != "" ? bio["picture"] : bio["no-picture"]
    const imgAlt =
        bio.picture != "" ? bio["picture-alt"] : bio["no-picture-alt"]

    return (
        <div className="flex w-full flex-grow flex-row flex-wrap justify-center ">
            <div className="w-2/3">
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
            <div className="flex w-full flex-col items-center p-2 pb-0">
                <p className="text-center text-lg font-bold">About Me</p>
                <p className="text-left">{bio.about}</p>
            </div>
            <div className="flex flex-col w-full items-center p-2 pb-0">
                <p className="text-center text-lg font-bold">Education</p>
                <p className="text-center whitespace-pre-line">{bio.education}</p>
            </div>
        </div>
    )
}

function Social({ social }) {
    return (
        <li className="p-3">
            <div className="flex flex-row items-center">
                <Image
                    width={100}
                    height={100}
                    src={social.icon}
                    alt={social["icon-alt"]}
                    
                />
                <Link
                    className="pl-8 text-2xl text-blue-500"
                    href={social.link}>
                    {social.name}
                </Link>
            </div>
        </li>
    )
}

function Socials({ socials }) {
    const socialItems = socials.map((social) => (
        <Social key={social.name} social={social} />
    ))

    return (
        <div className="flex flex-col items-center">
            <h2 className="p-4 text-center text-xl font-bold ">Social Media</h2>
            <ul className="">{socialItems}</ul>
        </div>
    )
}

function Resume({ resume }) {
    return (
        <div className="flex flex-row rounded-xl bg-white p-2">
            <div className="w-1/3 flex items-center">
                <Image
                    width={0}
                    height={0}
                    src={resume["icon-pdf"]}
                    alt={resume["icon-pdf-alt"]}
                    sizes="100vw"
                    className="h-auto w-full"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-l font-bold">{resume.name}</h2>
                <p>Last Modified: {resume.modDate}</p>
            </div>
        </div>
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

export default async function Page() {
    const data = await db.getTabContent("About")

    return <About content={data} />
}
