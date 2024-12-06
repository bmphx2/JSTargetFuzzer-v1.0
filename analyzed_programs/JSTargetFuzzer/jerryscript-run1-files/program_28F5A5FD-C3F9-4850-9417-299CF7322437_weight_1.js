function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -15;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6() {
    return v5;
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
}
new F10(F0, "max", v3);
const v16 = new F10(F10, "max", v3);
new F10(v5, "setUTCFullYear", v5);
const v19 = ["boolean",[v16,v16],v3,v5,F10];
[v19,v5,v19,"boolean",v19];
function f21() {
}
function f22() {
    const o28 = {
        get g() {
            new f21();
            return f21;
        },
        "d": f21,
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
let v35 = new v34(1);
new Uint32Array(129);
let v41 = new Int16Array(512);
[,v34,v41,v35] = v41;
v30.g += 1;
const v43 = Symbol.iterator;
const o52 = {
    [v43]() {
        let v45 = 10;
        const o51 = {
            next() {
                v45--;
                const v49 = v45 == 0;
                const o50 = {
                    "done": v49,
                    "value": v45,
                };
                return o50;
            },
        };
        return o51;
    },
};
