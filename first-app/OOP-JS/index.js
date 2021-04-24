
// //factory function
// function creatCircle(radius){

//     return {
//         radius,
//         draw : function(){
//             console.log("draw");
//         }
//     }; 
// }

// const circle = creatCircle(1);

// // constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const another = new Circle(1);

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start =function() {
        if (running)
            throw new Error('Stopwatch is already running')
        running = true;
        startTime = new Date();      
        };
    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is already stopped')
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
   
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration',{
        get : function() {
            return duration;
        }
    })

};

