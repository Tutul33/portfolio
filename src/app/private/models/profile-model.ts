import { ProfileDigitalSkill } from "./profile-digital-skil.model";
import { ProfileEducationAndTraining } from "./profile-education-and-training.model";
import { ProfileLanguageSkill } from "./profile-langulae-skill.model";
import { ProfileSocialOrWeb } from "./profile-social-or-web.model";
import { ProfileWorkExperience } from "./profile-work-experience.model";

export class profile{
    id!:string;
    firstName!:string;
    lastName!:string;
    age!:number;
    address!:string;
    email!:string;
    phone!:string;
    aboutMe!:string;    
    profileWorkExperiences:ProfileWorkExperience[]=[];
    profileSocialOrWebs:ProfileSocialOrWeb[]=[];
    profileEducationAndTrainings:ProfileEducationAndTraining[]=[];
    profileLanguageSkills:ProfileLanguageSkill[]=[];
    profileDigitalSkills:ProfileDigitalSkill[]=[];
}
