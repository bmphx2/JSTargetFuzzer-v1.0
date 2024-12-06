function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9223372036854775808;
}
new F0();
const v4 = new F0();
new F0();
function f12() {
}
function f13() {
    const o19 = {
        get g() {
            new f12();
            return f12;
        },
        "h": f12,
        ...f12,
        "g": f12,
        "a": f12,
        ...F0,
    };
    return o19;
}
const v20 = f13();
const v21 = f13();
f13();
let v25 = Int32Array;
let v26 = new v25(8);
new Uint32Array(129);
let v32 = new Int16Array(512, v4, v20, Int16Array);
[,v25,v32,v26] = v32;
v21.g += 8;
const v34 = Symbol.iterator;
const o43 = {
    [v34]() {
        const o42 = {
            next() {
                -10;
                10 == 0;
                const o41 = {
                    "done": 10,
                    "b": 10,
                };
                return o41;
            },
        };
        return o42;
    },
};
