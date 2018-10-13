import { Observable } from 'rxjs'
import { from } from 'rxjs/add/observable/from'

import './css/style.css'

let Study = (
    function() {
        let array = [1, 2, 3];
        let b = Observable.from(array);

        function Study() {
            
        }

        Study.prototype.test = function() {
            b.subscribe(x=>console.log(x))
        }

        return Study;
    }
)();

let a = new Study();

a.test();


