function f3(a4, a5) {
    const o16 = {
        [1372477566n](a7, a8) {
            a8[a7] = 1372477566n;
            a8 <<= a4;
            const o11 = {
                "maxByteLength": 1043,
            };
            const v13 = new ArrayBuffer(1043, o11);
            new DataView(v13);
            return a5;
        },
    };
    return o16;
}
const v17 = f3(-65537n, 65535n);
const v18 = f3(v17, 65535n);
const v19 = f3(v18, 65535n);
class C20 extends f3 {
    [-2];
    p(a22, a23) {
        let v25 = 15;
        const v26 = v19 + v25;
        const v27 = !a22;
        v25 | v26;
        const v29 = v26 & v27;
        Math.log(v27);
        v25++;
        v26 >> v29;
        return this;
    }
    static 3543 = f3;
}
const v33 = new C20();
const v34 = new C20();
const v35 = new C20();
function F36(a38, a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a41;
}
const v42 = new F36(v33, v19, v34, 65535n);
new F36(v35, v42, F36, v42);
const v44 = new F36(v17, v17, 65535n, 1372477566n);
function F45(a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a48;
    this.c = 1372477566n;
}
new F45(C20, v44, v17);
const v51 = new F45(v33, v18, v42);
new F45(C20, v42, v51);
