class Storage{

    static addFilmToStorage(newfilm){
        let films = this.getFilmsFromStorage();
        films.push(newfilm);
        
        localStorage.setItem("films",JSON.stringify(films));
        
          
        }
        
        
        static getFilmsFromStorage(){
        
            let films;
        
            if(localStorage.getItem("films") === null){
         
             films =[];
            }
         
            else{
         
             films = JSON.parse(localStorage.getItem("films"));
         
         
            }
        
            return films;
        
        }
        
        static deleteFilmFromStorage(filmTitle){
        
            let films = this.getFilmsFromStorage();
        
            films.forEach(function(film,index){
                if(film.title === filmTitle){
        
                    films.splice(index,1); //deletes 1 object from the array in the storage
                }
        
            });
        
            localStorage.setItem("films",JSON.stringify(films));
        }
        
        static clearAllfilmsFromStorage(){
        
        localStorage.removeItem("films");
        
        }


}

