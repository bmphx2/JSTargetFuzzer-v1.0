function f0() {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 129;
    this.description = -4294967296;
}
new F7(6, 1073741825);
new F7(-4294967296, 6);
new F7(1073741825, 1073741825, 1073741825, 1073741825);
const v22 = new Int32Array(2083);
new gc(255);
const v28 = new Int16Array(7);
function f29(a30, a31, a32) {
    const o39 = {
        "h": Int32Array,
        set e(a34) {
            e = a31;
            [a32,a31,-12013,this];
            [v22];
            [Int16Array,gc];
            this.h;
        },
        __proto__: v28,
        "b": gc,
        "c": 255,
        ...a30,
        268435439: a31,
    };
    return o39;
}
const v40 = f29(2083, 255, 7);
const v41 = f29(v40, 7, 2083);
f29(f29, 255, 7);
v40[-2] &= 2083;
v28[-1] -= 7;
let v43 = 10;
for (; --v43;) {
    v41.h;
    v41[Symbol.toPrimitive] = 7;
}
