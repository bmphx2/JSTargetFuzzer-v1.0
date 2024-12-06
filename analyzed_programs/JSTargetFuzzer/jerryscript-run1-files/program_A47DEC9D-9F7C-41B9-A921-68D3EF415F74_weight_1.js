new WeakSet();
new Date();
const v5 = new Map();
const v9 = [v5,0.0];
const v10 = [v9,WeakSet,Map];
const v11 = [-5.400070212164981e+307,WeakSet,4.0,4.0];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a15;
    this.h = a15;
    this.a = a15;
}
new F12(v11, v9, 4.0, v9);
new F12(v9, v9, 4.0, v9);
new F12(v10, v10, 4.0, v10);
function f21() {
}
function f22() {
    const o28 = {
        get g() {
            new f21();
            return f21;
        },
        "h": f21,
        ...f21,
        "g": f21,
        "a": f21,
        ...f21,
    };
    return o28;
}
f22();
const v30 = f22();
f22();
let v34 = Int32Array;
let v35 = new v34(4096);
new Uint32Array(129);
let v41 = new Int16Array(512);
[,v34,v41,v35] = v41;
v30.g += 4096;
const v43 = Symbol.iterator;
const o52 = {
    [v43]() {
        let v45 = 10;
        const o51 = {
            next() {
                v45--;
                v45 == 0;
                const o50 = {
                    "done": f22,
                    "value": this,
                };
                return o50;
            },
        };
        return o51;
    },
};
