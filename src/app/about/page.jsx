import Image from "next/image"
import Link from "next/link"
import db from "src/jennaDB"

function Social({social}) {
    return(
    <li className="p-3">
        <div className="flex flex-row items-center">
            <Image width={100} height={100} src={social.icon} alt={social["icon-alt"]} />
            <Link className="pl-8 text-2xl text-blue-500"href={social.link}>{social.name}</Link>
        </div>
    </li>)
}


function Socials({socials}) {
    const socialItems = socials.map(social => <Social key={social.name} social={social} />)
  
    return(
    <div className="flex flex-col items-center">
        <h2 className="text-center p-4 font-bold text-xl ">Social Media</h2>
        <ul className="">{socialItems}</ul>
    </div>)
}
  
function Bio({bio}) {
    const imgSrc = bio.picture != "" ? bio["picture"] : bio["no-picture"]
    const imgAlt = bio.picture != "" ? bio["picture-alt"] : bio["no-picture-alt"]
  
    return(
    <div className="flex flex-row flex-grow flex-wrap w-full md:w-4/5 justify-center pt-6">
        <div className="w-1/2"><Image src={imgSrc} alt={imgAlt} width={0} height={0} priority={true} sizes="100vw" className="w-full h-auto"/></div>
        <div className="w-1/2 flex flex-col items-center p-2 px-5">
            <p className="text-lg font-bold text-center">About Me</p>
            <p className="text-left">{bio.about}</p>
        </div>
        <div className="flex flex-col items-center p-2">
            <p className="text-lg font-bold text-center">Current Job</p>
            <p className="text-center">{bio.work}</p>
        </div>
        <div className="flex flex-col items-center p-2">
            <p className="text-lg font-bold text-center">Education</p>
            <p className="text-center">{bio.education}</p>
        </div>
    </div>)
}
  
function Resume ({resume}) {
    return(<p>Empty Resume</p>)
}

function About({content}) {
    if (content == null){
        return (<p>content not found</p>)
    }

    return (<>
        <Bio bio={content.Bio}/>
        <Socials socials={content.Social}/>
        <Resume resume={content.Resume}/>
    </>)
}

export default async function Page() {
    const data = await db.getTabContent("About")
    
    return (<About content={data}/>)
}