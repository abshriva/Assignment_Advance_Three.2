var Car = (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log('Car is Start Mode');
    };
    Car.prototype.drive = function () {
        console.log('Car is in driving mode');
    };
    Car.prototype.getPosition = function () {
        console.log('Current Position of Car');
    };
    return Car;
}());
var d;
var object1;
object1 = new Car();
d = object1; // copying reference
d.start();
d.drive();
d.getPosition();
