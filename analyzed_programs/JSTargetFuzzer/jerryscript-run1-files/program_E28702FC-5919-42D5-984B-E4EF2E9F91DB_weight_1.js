function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.byteLength = null;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    if (a6) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            a11(F8);
        }
    }
}
new F4(0.1725881460737685);
new F1();
const v15 = new F1();
new F1(v15, F1, F1);
new WeakMap();
Array(39830);
new F1();
const v29 = [-1.7316021927119508e+308,-8.003063896159845e+307,8.235260173714625,-2.2250738585072014e-308,0.0,-1000.0];
[-3.0,-1000000.0,4.0,2.0,-7.588153799901834,8.895144589989587e+306,1000000000.0,-1000.0,-1000000000000.0];
[1e-15,3.0,-1000000.0,-1000000000.0];
let v33 = -15;
Math.ceil(0.1725881460737685);
++v33;
-0.1725881460737685;
const v38 = ~null;
-0.3796425229793948;
(v38 - v29) | v29;
