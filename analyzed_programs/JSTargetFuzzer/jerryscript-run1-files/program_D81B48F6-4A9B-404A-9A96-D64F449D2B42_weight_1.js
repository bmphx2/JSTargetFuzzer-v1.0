function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 11;
    this.a = 11;
}
new F0();
new F0();
new F0();
new Map();
new Float32Array(255);
new Uint16Array(246);
new Uint8Array(9);
function f17() {
}
function f18() {
    const o24 = {
        get g() {
            new f17();
            return f17;
        },
        "h": f17,
        ...f17,
        "g": f17,
        "a": f17,
        ...f17,
    };
    return o24;
}
f18();
const v26 = f18();
f18();
let v30 = Int32Array;
let v31 = new v30(4096);
new Uint32Array(129);
let v37 = new Int16Array(512);
[,v30,v37,v31] = v37;
v26.g += 4096;
const v39 = Symbol.iterator;
const o48 = {
    [v39]() {
        let v41 = 10;
        const o47 = {
            next() {
                v41--;
                const v45 = v41 == 0;
                const o46 = {
                    "done": v45,
                    "value": v41,
                };
                return o46;
            },
        };
        return o47;
    },
};
