new Uint8Array(402);
new Uint8ClampedArray(1000);
const v11 = new Uint16Array(204);
function f12() {
}
function f13() {
    const o19 = {
        get g() {
            new f12();
            return Uint8ClampedArray;
        },
        "h": f12,
        ...f12,
        "g": f12,
        "a": f12,
        ...f12,
    };
    return o19;
}
f13();
const v21 = f13();
f13();
let v23 = true;
let v25 = Int32Array;
let v26 = new v25(v11);
new Uint32Array(129);
let v32 = new Int16Array(512);
[,v25,v32,v26] = v32;
v21.g += 4096;
Symbol.iterator;
const o43 = {
    [v32]() {
        const o42 = {
            next() {
                v23--;
                const v40 = 10 == 0;
                const o41 = {
                    "done": v40,
                    "value": 0,
                };
                return o41;
            },
        };
        return o42;
    },
};
