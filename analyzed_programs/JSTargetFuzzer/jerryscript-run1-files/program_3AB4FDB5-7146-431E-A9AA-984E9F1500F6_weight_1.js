new Date();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a10;
    this.c = a12;
    this.f = -9007199254740992;
}
new F8(-1, 0, 2147483648);
new F8(-9007199254740992, -9007199254740992, 9);
new F8(9, 9, -1);
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
const o51 = {
    [v38]() {
        let v40 = 10;
        const v43 = new BigUint64Array(256);
        try { v43.set(BigUint64Array); } catch (e) {}
        const o50 = {
            next() {
                v40--;
                const v48 = v40 == 0;
                const o49 = {
                    "done": v48,
                    "value": v40,
                };
                return o49;
            },
        };
        return o50;
    },
};
