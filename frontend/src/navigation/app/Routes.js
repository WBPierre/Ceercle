export const DEFAULT = "/app"
export const LOGIN = getRoutesBaseUrl()+"/"
export const DASHBOARD = getRoutesBaseUrl()+"/dashboard"
export const GLOSSARY = getRoutesBaseUrl()+"/glossary"
export const CALENDAR = getRoutesBaseUrl()+"/calendar"
export const ACCOUNT = getRoutesBaseUrl()+"/myaccount"
export const STATS = getRoutesBaseUrl()+"/stats"
export const WORKPOLICY = getRoutesBaseUrl()+"/workpolicy"
export const TEAMS = getRoutesBaseUrl()+"/teams"
export const TEAMSETTING = getRoutesBaseUrl()+"/team-settings/" // NEED ID

function getRoutesBaseUrl() {
    if(window.location.host.includes('ceercle')){
       return "";
    }else{
        return '/app';
    }
}