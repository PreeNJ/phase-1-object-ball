function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismack Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 1, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagana Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}

console.log(gameObject());


function numPointsScored(playerName) {
    const gameData = gameObject();
    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        if (players[playerName]) {
            return players[playerName].points;
        }
    }
    return "null";
}

function shoeSize(playerName) {
    const gameData = gameObject();
    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }
    return "null";
}

function teamColors("teamName") {
    const gameData = gameObject();
    if (gameData[teamName]) {  
        return gameData[teamName].colors;
    }
    return []; 
}

function playerNumbers(teamName) {
    const gameData = gameObject();
    let numbers = [];
    if (gameData[teamName]) {
        const players = gameData[teamName].players;
        for (let playerName in players) {
            numbers.push(players[playerName].number);
        }
    }
    return numbers; 
}

function playerStats(playerName) {
    const gameData = gameObject();
    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        if (players[playerName]) {
            return players[playerName];
        }
    }
    return {};
}

function bigShoeRebounds() {
    const gameData = gameObject();
    let maxShoeSize = 0;
    let playerRebounds = 0;

    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        for (let playerName in players) {
            const player = players[playerName];
            if (player.shoe > maxShoeSize) {
                maxShoeSize = player.shoe;
                playerRebounds = player.rebounds;
            }
        }
    }

    return playerRebounds;  
}

function mostPointsScored() {
    const gameData = gameObject();
    let maxPoints = 0;
    let topScorer = "";

    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        for (let playerName in players) {
            const player = players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                topScorer = playerName;
            }
        }
    }

    return topScorer; 
}


function winningTeam() {
    const gameData = gameObject();
    let maxPoints = 0;
    let topTeam = "";

    for (let teamKey in gameData) {
        let teamPoints = 0;
        const players = gameData[teamKey].players;
        for (let playerName in players) {
            teamPoints += players[playerName].points;
        }
        if (teamPoints > maxPoints) {
            maxPoints = teamPoints;
            topTeam = gameData[teamKey].teamName;
        }
    }

    return topTeam; 
}

function playerWithLongestName() {
    const gameData = gameObject();
    let maxLength = 0;
    let longestNamedPlayer = "";

    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        for (let playerName in players) {
            if (playerName.length > maxLength) {
                maxLength = playerName.length;
                longestNamedPlayer = playerName;
            }
        }
    }

    return longestNamedPlayer;
}

function doesLongNameStealATon() {
    const gameData = gameObject();
    let longestNamedPlayer = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = "";


    for (let teamKey in gameData) {
        const players = gameData[teamKey].players;
        for (let playerName in players) {
            if (players[playerName].steals > maxSteals) {
                maxSteals = players[playerName].steals;
                playerWithMostSteals = playerName;
            }
        }
    }

    return longestNamedPlayer === playerWithMostSteals;
}
