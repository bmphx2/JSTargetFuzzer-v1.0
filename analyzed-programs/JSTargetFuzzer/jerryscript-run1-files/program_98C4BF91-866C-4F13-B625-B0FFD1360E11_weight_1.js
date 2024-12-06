const v1 = new Date();
const v2 = [v1,v1,Date,Date];
const v3 = [Date];
const v4 = [Date,v1,v1,Date,v3];
const v5 = [1087306216,-536870912,15,-29284,129,9007199254740990];
const v6 = [-2147483647,16,-24225,-2147483647,16,-9007199254740990,9223372036854775807,32221,-65536];
const v7 = [-4294967296,-2,-1073741824,-8,-2147483648,634245649];
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
}
const v13 = new F8(v2, v7, v3);
const v14 = new F8(v5, v5, v4);
const v15 = new F8(v6, v14, v2);
function f16(a17, a18, a19, a20) {
    const o27 = {
        268435439: v3,
        get h() {
            Object.defineProperty(this, v1, { configurable: true, enumerable: true, value: this });
            a20++;
            const v23 = super.e;
            function f24(a25) {
                return a25;
            }
            class C26 extends a20 {
                static 5 = v7;
                8;
                static 113;
            }
            return v23;
        },
    };
    return o27;
}
f16(v7, v15, v15, v14);
f16(v5, v1, v13, v7);
f16(f16, v1, v13, v2);
const v31 = [];
function f32() {
    return f32;
}
function F33(a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
}
const v38 = new F33(v31, v31, v31);
const o40 = {
    "defineProperty": f32,
};
const v42 = new Proxy(v38, o40);
function f43() {
    return f43;
}
function f44() {
    return o40;
}
Object.defineProperty(v42, -16, { configurable: true, get: f44, set: f43 });
