function f3() {
    return -4096;
}
const v4 = [536870887,-4096,127];
const t4 = "t";
t4.a = "t";
f3();
const v9 = [127,127];
const v10 = [-4096,-4096];
[v9,v4,v4,127,[v10]];
[v4];
function f14(a15, a16) {
    for (let v17 = 0; v17 < 5; v17++) {
        const v18 = `
            [26988,2147483649,268435456,5,-1,128,-3192];
            [1000,-2147483648,10,1432342896,-25147,-19741,256,10,-31149,512];
            [16,-12,4,2147483647,-4,-571478927,-4294967296,-919570260,0,28145];
            new Uint8ClampedArray(122);
            new Uint8ClampedArray(2681);
            new Uint32Array(16);
            function F31(a33, a34) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        a15(v18);
    }
    return v10;
}
f3(f14, f14);
