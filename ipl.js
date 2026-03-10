class IPLTeam{
    static #count = 0
    static #champion = null
    constructor(teamName,city,captian){
        this.teamName=teamName
        this.city=city
        this.captian=captian
        IPLTeam.#count++
        
    }
    getInfo(){
        console.log(this.teamName)
        console.log(this.city)
        console.log(this.captian)
    }
    static getTotalTeams(){
        console.log(IPLTeam.#count)
    }
    recordResult(result){
        this.win=0
        this.loss=0   
        if(result=="win"){this.win++}
            else if(result=="loss"){this.loss++}
        
    }
    getStats(){
        console.log("team:"+this.teamName +",WIns"+this.win + "loss:"+this.loss)
    }
    static setChampion(teamName){
        IPLTeam.#champion=teamName
    }
    static getChampion(){
        console.log(this.#champion)
    }
    static compare(team1,team2){
        if(team1.win>team2.win){
            console.log(`${team1.teamName} win against ${team2.teamName}`)
        }else{
            console.log(`${team2.teamName} win against ${team1.teamName}`)
        }
    }
}

const csk = new IPLTeam("Chennai Super Kings", "Chennai", "Dhoni");
const mi = new IPLTeam("Mumbai Indians", "Mumbai", "Rohit");
const rcb = new IPLTeam("Royal Challengers", "Bengaluru", "Kohli");

csk.recordResult("win");
csk.recordResult("win");
csk.recordResult("loss");

mi.recordResult("win");
mi.recordResult("win");
mi.recordResult("win");

csk.getInfo();
csk.getStats();

IPLTeam.getTotalTeams();
IPLTeam.setChampion("Mumbai Indians");
IPLTeam.getChampion();

IPLTeam.compare(mi, csk);