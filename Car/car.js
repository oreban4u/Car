function Car(name, model, type) {
    if (name === null || name === undefined){
      this.name = 'General';
      this.model = 'GM';
    }
    else{
      this.type = type;
      this.model = model;
      this.name = name;
    }
    
    if(this.name === 'Porshe' || this.name === 'Koenigsegg'){
     this.numOfDoors = 2;
     
    }
    else{
     this.numOfDoors = 4;
    }
    if(this.type === 'trailer'){
      this.numOfWheels = 8;
      this.isSaloon = false;
      this.speed = '0 km/h';
      
    }
    else{
      this.numOfWheels = 4;
      this.isSaloon = true;
    }
    this.speed = '0 km/h';
    this.drive = function(driveno) {
      if (this.type === 'trailer'){
        speed = 11 * driveno;
        this.speed = ''+speed+ ' km/h';
      }
      
      else{  
        speed = 50 * driveno;
        this.speed = ''+speed+ ' km/h';
      }
      return this;
      
      
    };
    
}