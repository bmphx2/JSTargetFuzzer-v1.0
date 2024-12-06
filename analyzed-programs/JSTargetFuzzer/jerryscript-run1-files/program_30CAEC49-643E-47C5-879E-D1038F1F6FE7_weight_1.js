new Uint16Array(8);
new Int8Array(151);
new Float64Array(10);
const v12 = [];
const o13 = {
    __proto__: v12,
};
Int16Array & o13;
function f16() {
}
function f17() {
    const o23 = {
        get g() {
            new f16();
            return f16;
        },
        "h": f16,
        ...f16,
        "g": f16,
        "a": f16,
        ...f16,
    };
    return o23;
}
f17();
const v25 = f17();
f17();
let v29 = Int32Array;
let v30 = new v29(4096);
new Uint32Array(129);
let v36 = new Int16Array(512);
[,v29,v36,v30] = v36;
v25.g += 4096;
const v38 = Symbol.iterator;
const o47 = {
    [v38]() {
        let v40 = 10;
        const o46 = {
            next() {
                v40--;
                const v44 = v40 == 0;
                const o45 = {
                    "done": v44,
                    "value": v40,
                };
                return o45;
            },
        };
        return o46;
    },
};
