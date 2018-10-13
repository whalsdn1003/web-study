const Rx = require('rxjs')

let Study = (
    function() {
        let array = [1, 2, 3];
        let b = Rx.Observable.from(array);

        function Study() {

        }

        Study.prototype.test = function() {
            

            
        }

        return Study;
    }
)();

let a = new Study();

a.test();


