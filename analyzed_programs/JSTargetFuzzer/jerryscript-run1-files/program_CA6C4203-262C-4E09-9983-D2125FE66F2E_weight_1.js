function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -256;
    this.f = -256;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
try { v3(22821, v3, v4, v4, F0); } catch (e) {}
const v10 = Symbol.iterator;
const o19 = {
    [v10]() {
        let v12 = 10;
        const o18 = {
            next() {
                v12--;
                const v16 = v12 == 0;
                const o17 = {
                    "done": v16,
                    "value": v12,
                };
                return o17;
            },
        };
        return o18;
    },
};
function f21() {
    return v4;
}
o19[v5] = F0;
let v22 = o19[f21];
const o25 = {
    "maxByteLength": 256,
};
const v27 = new ArrayBuffer(5, o25);
new Uint8Array(v27);
v4 = v3;
v22 = v3;
Uint8Array - F0;
[-8,512];
[1073741824,0,631862414,256,22866,4];
[-2147483648];
new Int8Array(8);
new Uint16Array(129);
new BigUint64Array(2065);
const v45 = new Set([341405.33588224393,0.0,-7.046174549398449,-5.369991204502897e+307,177.30034694649544,-2.2250738585072014e-308,-818956.3696860767,65.99194227958424,0.24977911778066764]);
new Uint8ClampedArray(v45);
