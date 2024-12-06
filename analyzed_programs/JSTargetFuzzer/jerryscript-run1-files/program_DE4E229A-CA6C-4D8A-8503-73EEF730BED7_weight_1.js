function f0() {
    const o7 = {
        ..."caller",
        [1.0](a5) {
            this.length = 2;
            return 988.8834567264646;
        },
        "g": 1.0,
        "d": "caller",
        "b": 1.0,
        "a": "caller",
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
f0();
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a13;
}
new F11(v8);
new F11(v8);
new F11(v8);
new Int32Array(6);
let v24 = Int16Array;
new v24(184);
const v28 = new Float64Array(65);
v8[v28] = Int32Array;
new Int16Array(251);
new Float32Array(57);
new Int16Array(1142);
[v24] = v28;
const v45 = Symbol.iterator;
const o54 = {
    "b": v9,
    "f": F11,
    "g": Float32Array,
    "c": Int32Array,
    "h": 184,
    [v45]() {
        let v47 = 10;
        const o53 = {
            next() {
                v47--;
                const v51 = v47 == 0;
                const o52 = {
                    "done": v51,
                    "value": v47,
                };
                return o52;
            },
        };
        return o53;
    },
};
