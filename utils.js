const path = 'https://api.nasa.gov/planetary/apod';
const key = 'ebrhafq5ZkTPwJsupcuAj7eZPMnHUD1FGWka3UbX';

const fetchData = async (searchTerm) => {
    const response = await axios.get(path, {
    params: {
        api_key : key,
        date : searchTerm
    }
});
const{
    title,
    explanation,
    date,
    hdurl
} = response.data;
    if(!response.data){
        return [];
    }
    return {title,date,explanation,hdurl};


};
// RETURNEAZA UN OBIECT {}

const createTemplate =  async (root, searchTerm)=>{

    const fetchedData = await fetchData(searchTerm);

    root.innerHTML  = `
    <div class = "left-section"></div>
    <div class = "right-section">
       <p class = "title"> ${fetchedData.title}( ${fetchedData.date} )</p>
       <p class= "explanation"> ${fetchedData.explanation}</p>

    </div>
    `;
    const leftSection = document.querySelector('.left-section');
    leftSection.style.backgroundImage = 'url("'+`${fetchedData.hdurl}` + '")';
    

    root.style.webkitBoxShadow = '0px 0px 28px 11px rgba(183, 183, 190, 1)';
    root.style.mozBoxShadow = '0px 0px 28px 11px rgba(183, 183, 190, 1)';
    root.style.boxShadow = '0px 0px 28px 11px rgba(183, 183, 190, 1)';

}

const  createSearchBox =  (root)=>{ 
    root.innerHTML = `
        <div class="search-box">
            <input class = "search-input" placeholder= "       YYYY-MM-DD"/>
            <button class="submit">Search</button>
        </div>`;
    
        return [document.querySelector('.submit'), document.querySelector(".search-input")];
    };