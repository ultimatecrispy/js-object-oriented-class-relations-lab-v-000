let store = {drivers:[], passengers:[], trips:[]};
let driverID = 0;
let passengerID = 0;
let tripID = 0;

class Driver {
  constructor(name){
      this.id = ++driverID;
      this.name = name;
      store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(function(trip) {
      return trip.driverId == this.id
    }.bind(this))
  }
  passengers(){
    return this.trips().map(trip => trip.passenger())
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerID;
    this.name = name;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.passengerId == this.id
    }.bind(this))
  }
  drivers(){
    return this.trips().map(trip => trip.driver())
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripID;
    store.trips.push(this);
    this.driverId = driver.id;
    this.passengerId = passenger.id;
  }
  passenger(){
    return store.passengers.filter(passenger => this.passengerId == passenger.id)[0];
  }
  driver(){
    return store.drivers.filter(driver => driver.id == this.driverId)[0];
  }
}
