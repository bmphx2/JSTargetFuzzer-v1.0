function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 11;
    this.a = 11;
}
new F0();
const v4 = new F0();
new F0();
new Map();
let v10 = new Float32Array(255);
new Uint16Array(246);
v10 **= v10;
for (let v17 = 0; v17 < 32; v17++) {
    v4["p" + "p"] = v17;
}
new Uint8Array(9);
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
        "a": Map,
        ...f21,
    };
    return o28;
}
const v29 = f22();
const v30 = f22();
f22();
let v34 = Int32Array;
let v35 = new v34(4096);
new Uint32Array(v29);
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
