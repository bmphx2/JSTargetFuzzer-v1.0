const v3 = [3,2147483647,3,2147483647];
let v4 = [2147483647];
[-13596,v4,v4];
const v7 = new Map();
function f8(a9, a10, a11) {
    const o23 = {
        set e(a13) {
            let v12 = this;
            const v17 = v12 ^ v7;
            let v18 = a10 >> 54648;
            +a10;
            --v18;
            v17 & v18;
            v12++;
        },
    };
    return o23;
}
f8(2147483647, 2147483647, 2147483647);
const v25 = f8(2147483647, 2147483647, -13596);
let v26 = f8(2147483647, 3, 3);
v26 = v25;
Object.defineProperty(v4, 65536, { writable: true, get: f8, set: f8 });
const v27 = v4++;
with (v3) {
    length = v27;
    function F28(a30, a31) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a30;
        this.f = v7;
    }
    new F28(3, 2147483647);
    new F28(v4, 2147483647);
    new F28(2147483647, 3);
}
