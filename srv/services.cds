using { sap.resume as datamodel } from '../db/data-model';

service ResumeService @(path:'ResumeService')  {

    entity IntroSet as projection on datamodel.Intro; 
    entity empDetailsSet as projection on datamodel.empDetails; 

}
