/*Class: An implementation of a car.
interface Drivable {}, with start(), drive() and getPosition()
class Car implements Drivable {}
*/
interface Drivable{

     start():void;
     drive():void;
     getPosition();
}

class Car implements Drivable
{
     start():void
     {
       
        console.log('Car is Start Mode');
     }

     drive():void
     {
         console.log('Car is in driving mode');
     }
    
     getPosition()
     {
         console.log('Current Position of Car');
     }
}

var d: Drivable;

let object1:Car;
object1 = new Car();


d = object1;// copying reference
d.start();
d.drive();
d.getPosition();





