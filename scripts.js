document.addEventListener("DOMContentLoaded", async () => {
    const listElement = document.querySelector('.list');  
    const imagesElement = document.querySelector('.images'); 
    const baseURL = 'https://electronic-component-api.onrender.com';

   
    const getComponentNames = async () => {
        try {
            const response = await fetch(`${baseURL}/components`);

            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();  

            
            const componentNames = data.map(component => component.name);

            
            console.log(componentNames);

          
            renderComponentNames(componentNames);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };

    // add names to page 
    const renderComponentNames = (names) => {
        names.forEach(name => {
            const listItem = document.createElement('li');
            listItem.textContent = name;  
            listElement.appendChild(listItem); 
        });
    };

   // get images 
    const getComponentImages = async () => {
        try {
            const response = await fetch(`${baseURL}/components`);

            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();  

         
            const imageUrls = data.map(component => component.image); 

       
            console.log(imageUrls);

          
            renderImages(imageUrls);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };

   
    const renderImages = (urls) => {
        urls.forEach(url => {
            const imgElement = document.createElement('img');
            imgElement.src = url;  
            imgElement.alt = "Component Image";  
            imgElement.classList.add('component-image');  
            imagesElement.appendChild(imgElement);  
        });
    };

    
    getComponentNames();
    getComponentImages();
});
