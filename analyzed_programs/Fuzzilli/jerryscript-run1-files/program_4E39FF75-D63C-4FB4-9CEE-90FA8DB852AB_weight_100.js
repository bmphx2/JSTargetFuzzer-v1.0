let v1 = 1073741824;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a7;
}
new F5(1n, v1);
new F5(1n, 1098776341);
new F5(25481, v1);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -11n;
    this.a = a16;
    this.g = a16;
}
const v19 = new F13(v1, F13, 1n, v1);
const v20 = new F13(25481, 2147483648n, 1098776341, 1098776341);
let v21 = new F13(1098776341, v20, F13, v1);
Object.defineProperty(v21, v1, { writable: true, enumerable: true, value: v20 });
Math.cbrt(v19);
Math.min(-15);
v21++;
-v21;
Math.hypot(v19);
-15 + -15;
!v21;
const v34 = [-1000.0,0.6208586043446583];
const v35 = [-1000000000.0,1000000000.0,1.0,NaN,NaN,-3.650883429328882,3.4939116716666203e+307,0.9250747980809987,1.0];
const v36 = [-640164.7436657847,-0.0,Infinity,-4.0,4.0];
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a40;
    this.b = v36;
}
new F37(v35, v35);
new F37(v36, v36);
const v43 = new F37(v34, v34);
const v44 = [-2,-9007199254740992,1726940612,65535,30936,3,175721459,-9007199254740990,65536,13];
[65535,-9,536870889];
const v48 = [v44,v35,[-22938,128,-14785,-45958,5,268435439,-563026776,9007199254740990,-1073741824,3]];
v1 = 9223372036854775807;
let v51 = 3;
v51 = 848131163;
Reflect.apply(v44.copyWithin, v43, v48);
for (let i66 = (() => {
        const v55 = Symbol.iterator;
        const o64 = {
            [v55]() {
                let v57 = 10;
                const o63 = {
                    next() {
                        v57--;
                        const v61 = v57 == 0;
                        const o62 = {
                            "done": v61,
                            "value": v57,
                        };
                        return o62;
                    },
                };
                return o63;
            },
        };
        return 0;
    })();
    i66 < 4;
    i66++) {
}
