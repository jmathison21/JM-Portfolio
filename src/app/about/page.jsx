"use client"
import {useState} from "react";
import Image from "next/image"
import Link from "next/link"


function Social({Social}) {
    const [socials,setSocials] = useState(Social)
  
    const socialItems = socials.map((social) => {
        return (
        <li key={social.name} className="p-3">
            <div className="flex flex-row items-center">
                <Image width={100} height={100} src={social.icon} alt={social["icon-alt"]} />
                <Link className="pl-8 text-2xl text-blue-500"href={social.link}>{social.name}</Link>
            </div>
        </li>)
    })
  
    return(
    <div className="flex flex-col items-center">
        <h2 className="text-center p-4 font-bold text-xl ">Social Media</h2>
        <ul className="">{socialItems}</ul>
    </div>)
}
  
function Bio({Bio}) {
    const [bio, setBio] = useState(Bio)
  
    const imgSrc = bio.picture != "" ? bio["picture"] : bio["no-picture"]
    const imgAlt = bio.picture != "" ? bio["picture-alt"] : bio["no-picture-alt"]
  
    return(
    <div className="flex flex-row flex-grow flex-wrap w-full md:w-4/5 justify-center pt-6">
        <Image src={imgSrc} alt={imgAlt} width={180} height={180} />
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
  
function Resume ({Resume}) {
    const [resume, setResume] = useState(Resume)
    return(<p>Empty Resume</p>)
}

function About({content}) {
    if (content == "") {
        return (<p>content not found</p>)
    }

    return (<>
        <Bio Bio={content.Bio}/>
        <Social Social={content.Social}/>
        <Resume Resume={content.Resume}/>
    </>)
}


export default function Page() {
    return (<About content={""}/>)
}