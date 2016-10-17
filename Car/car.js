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
    
    if(name === 'Porshe' || name === 'Koenigsegg'){
     this.numOfDoors = 2;
     /*this.drive = function(driveno){
        speed = 50 * driveno;
        this.speed = ''+speed+ ' km/h';
      };*/
    }
    else{
     this.numOfDoors = 4;
    }
    if(type === 'trailer'){
      this.numOfWheels = 8;
      this.isSaloon = false;
      this.speed = '0 km/h';
      /*this.drive = function(driveno){
        speed = 11 * driveno;
        this.speed = ''+speed+ ' km/h';
        return this;
      };*/
    }
    else{
      this.numOfWheels = 4;
      this.isSaloon = true;
    }
    this.speed = '0 km/h';
    this.drive = function(driveno) {
      if (type === 'trailer'){
        speed = 11 * driveno;
        this.speed = ''+speed+ ' km/h';
      }
      if (name === 'Porshe' || name === 'Koenigsegg'){
        speed = 50 * driveno;
        this.speed = ''+speed+ ' km/h';
      }
      return this;
      
      
    };
    
}