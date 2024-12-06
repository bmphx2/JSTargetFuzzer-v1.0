new Uint8ClampedArray(126);
new BigInt64Array(6);
new BigInt64Array(66);
new WeakSet();
function f11() {
}
function f12() {
    const o18 = {
        get g() {
            new f11();
            return f11;
        },
        "h": f11,
        ...f11,
        "g": f11,
        "callee": f11,
        ...f11,
    };
    return o18;
}
f12();
const v20 = f12();
f12();
let v24 = Uint32Array;
let v25 = new v24(4096);
new Uint32Array(129);
let v31 = new Int16Array(512);
[,v24,v31,v25] = v31;
v20.g += 4096;
const v33 = Symbol.iterator;
const o42 = {
    [v33]() {
        const o41 = {
            next() {
                !10;
                const v39 = 10 == 0;
                const o40 = {
                    "done": v39,
                    "value": 10,
                };
                return o40;
            },
        };
        return o41;
    },
};
