import jennaDB from "./jennaDB.json"

//db types
export type Bio = typeof jennaDB.bio

export type Social = typeof jennaDB.socials[0]

export type Resume = typeof jennaDB.resume

export type Project = typeof jennaDB.projects[0]

//db get functions
export function getBio(): Bio {
    return jennaDB.bio
}

export function getSocials(): Social[] {
    return jennaDB.socials
}

export function getResume(): Resume {
    return jennaDB.resume
}

export function getProjects(): Project[] {
    return jennaDB.projects
}