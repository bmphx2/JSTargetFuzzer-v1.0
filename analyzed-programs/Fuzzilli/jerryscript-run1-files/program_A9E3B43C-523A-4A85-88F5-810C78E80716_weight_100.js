new Date();
const v2 = [1936825521,1073741823,251591507,-42395,10,10000,-4096,2147483647,45191];
const v3 = [11,-1073741824,1024,65536,-1499827935,-1,-10,10,186943934,-1066697868];
const v4 = [10000,-14,3,1024,-16];
function f5() {
    return v4;
}
function f6(a7, a8, a9) {
    const o20 = {
        __proto__: a7,
        ...v2,
        ...v4,
        [v4]: v2,
        "a": v2,
        toString(a11, a12, a13, a14) {
            const v15 = [Date];
            [v4,a7,a14,this,a8];
            [v2,v15,Date,a12];
            a11 + a8;
            super.g;
            return v2;
        },
    };
    return o20;
}
const v22 = f6(f6, f6(v3, f5, v3), Date);
f6(v22, v22, v22);
new Int16Array(1997);
new Uint32Array(8);
new Float32Array(7);
const v34 = new Set();
function f35() {
    return Set;
}
const v39 = new Uint8ClampedArray(749);
new Int32Array(2259);
const v45 = new Uint8Array(8);
const v46 = `
    f35();
`;
const v49 = eval(v46);
try { v49(f35, v49, v49, v39, Uint8Array); } catch (e) {}
v45[-9223372036854775807] = v34;
