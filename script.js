document.addEventListener("DOMContentLoaded", () => {

    const listElement = document.querySelector('.list');
    const baseURL = 'https://inclass-suns-api.onrender.com'

    const getNames = async () => {

        const response = await fetch(`${baseURL}/roster`)
        const { roster } = await response.json(); 

        console.log(roster)

        const names = roster.map(player => `${player.first_name} ${player.last_name}`)

        console.log(names)

        names.forEach(name => {
            // <option></option>
            const newOption = document.createElement('option'); 
            newOption.value = name; 
            newOption.textContent = name; 
            listElement.appendChild(newOption)
        })

    }

    getNames(); 

    listElement.addEventListener('change', async (event) => {
        const selectedPlayer = event.target.value; 

        const playerId = selectedPlayer.split(' ')[1]
        console.log(playerId)

        document.getElementById('player-name').textContent = selectedPlayer;
        
     
        try {
            const response = await fetch(`${baseURL}/player/${playerId}`)

            const playerData = await response.json(); 
            console.log(playerData)

            const statsIds = [
                'age', 
                'college_team', 
                'points_per_game', 
                'rebounds_per_game',
                'assists_per_game'
            ]; 

            statsIds.forEach(id => {
                const element = document.getElementById(id); 
                if(id.includes('per_game')){
                    element.innerHTML = playerData.stats[id]
                }else{
                    element.innerHTML = playerData[id]
                }
                
            })

            const imageURL = `${baseURL}${playerData.image_url}`
            const imgElement = document.getElementById('pic'); 
            imgElement.src = imageURL; 

        }
        catch (error) {
            console.error('Error fetching player info.')
        }

    })
}) // document event listener 