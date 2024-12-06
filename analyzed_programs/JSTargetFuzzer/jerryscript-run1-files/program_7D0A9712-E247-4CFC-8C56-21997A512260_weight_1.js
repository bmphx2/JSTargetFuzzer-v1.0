new Float32Array(3);
new BigInt64Array(3145);
new Float64Array(50);
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
        ...f12,
    };
    return o19;
}
const v20 = f13();
const v21 = f13();
f13();
let v25 = Int32Array;
let v26 = new v25(4096);
const v29 = new Uint32Array(129);
let v32 = new Int16Array(512);
[,v25,v32,v26] = v32;
v21.g += 4096;
const v34 = Symbol.iterator;
const o43 = {
    __proto__: v25,
    "c": v20,
    "g": v21,
    "b": Float64Array,
    "d": f13,
    [v34]() {
        let v36 = 10;
        const o42 = {
            next() {
                v36--;
                const v40 = v36 == 0;
                const o41 = {
                    "done": v40,
                    "value": v36,
                };
                return o41;
            },
        };
        return o42;
    },
    "f": Int16Array,
    "h": f12,
    "e": 50,
    ...v29,
    1424734060: Uint32Array,
};
