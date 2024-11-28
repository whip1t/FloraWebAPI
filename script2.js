document.addEventListener("DOMContentLoaded", async () => {

    const listElement = document.querySelector('.list');
    const baseURL = 'https://electronic-component-api.onrender.com'

    const getNames = async () => {

       
        const response = await fetch(`${baseURL}/components`)
        const data = await response.json(); 
        components = data
        componentsName = response.components.name

         

        

    };

    getNames(); 
});
   