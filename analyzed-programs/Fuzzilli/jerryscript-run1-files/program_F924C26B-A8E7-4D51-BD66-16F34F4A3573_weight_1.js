new Set();
const v2 = [5,11,257,-12,-10];
const v3 = [-65537,43358,255,46100,0,-9,-1477568227,536870888];
const v4 = [2130331537,512,-2147483648,-56938];
function f8(a9, a10) {
    const o23 = {
        "h": a10,
        __proto__: v3,
        ...v3,
        [a9]: v4,
        m(a12, a13) {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a10;
            }
            new F14(-10759, v4, a9, a10);
            new F14(a9, a9, a10, a9);
            new F14(a9, a10, a10, v4);
            return a12;
        },
    };
    return o23;
}
f8(v3, v2);
f8(v3, v4);
f8(v4, v3);
const o29 = {
    "maxByteLength": 2147483648,
};
const v31 = new ArrayBuffer(3870, o29);
new BigInt64Array(v31);
v3.length;
