function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = "catch";
    this.g = a9;
    this.h = a8;
}
new F6(142.10670022955446, -1.0, 369.1316311881021);
const v12 = new F6(369.1316311881021, 142.10670022955446, "h");
new F6(142.10670022955446, 369.1316311881021, v12);
function f14() {
}
function f15() {
    const o21 = {
        get g() {
            new f14();
            return f14;
        },
        "h": f14,
        ...f14,
        "g": f14,
        "a": f14,
        ...f14,
    };
    return o21;
}
f15();
const v23 = f15();
f15();
let v27 = Int32Array;
let v28 = new v27(4096);
const v31 = new Set();
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    try { v31.forEach(a35, v31); } catch (e) {}
}
new F32();
new Uint32Array(129);
let v42 = new Int16Array(512);
[,v27,v42,v28] = v42;
v23.g += 4096;
const v44 = Symbol.iterator;
const o53 = {
    [v44]() {
        let v46 = 10;
        const o52 = {
            next() {
                v46--;
                const v50 = v46 == 0;
                const o51 = {
                    "done": v50,
                    "value": v46,
                };
                return o51;
            },
        };
        return o52;
    },
};
