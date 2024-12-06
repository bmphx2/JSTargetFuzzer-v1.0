function f0() {
}
const v3 = new Uint8ClampedArray(15);
function f6() {
    return 15;
}
v3.buffer;
new Uint16Array(15);
const v13 = new Int32Array(16);
new Uint16Array(Float64Array);
new Float64Array(5);
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a22;
    this.e = a22;
}
const v25 = new F20(v13, Uint16Array, Uint16Array);
new F20(15, v25, Uint16Array);
new F20(1000, Uint16Array, Uint16Array);
const v28 = new Uint16Array(14);
function f29(a30, a31) {
    const o47 = {
        ...v28,
        [Uint8ClampedArray]: Float64Array,
        [a30](a33, a34, a35, a36) {
            function F37(a39, a40) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a35;
            }
            for (let v41 = 0; v41 < 32; v41++) {
                v28["p" + v41] = v41;
            }
            new v3(a30, a33);
            new F37(5, a31);
            const v46 = new F37(15, a31);
            return v46;
        },
        __proto__: v3,
    };
    return o47;
}
f29(15, 15);
f29(15, 15);
f29(14, 14);
const v53 = [14769,14769,14769,14769,14769];
const v54 = [5877,5877,5877,5877,5877];
const v55 = [v54,v53,v54];
v54[14769] <<= 5877;
v53 / v55;
