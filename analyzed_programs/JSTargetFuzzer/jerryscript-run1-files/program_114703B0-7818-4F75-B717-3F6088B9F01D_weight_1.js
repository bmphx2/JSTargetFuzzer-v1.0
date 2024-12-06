function f3() {
    return -256;
}
class C4 {
    static n(a6, a7) {
        this.d = 4096;
        return 10;
    }
    static get a() {
        let v12;
        try { v12 = this.n(); } catch (e) {}
        let [v13] = v12;
        v13.g >>>= 4096;
        return v12.__proto__;
    }
}
new C4(4096, 4096);
new C4(C4, -256);
new C4();
new Uint16Array(127, C4);
new Float32Array(256);
new Uint32Array(128, Uint16Array, 127, -256);
const v27 = [-1745717045,-65537,-193322565,1073741824,-986345720,5864,-15];
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
}
const v31 = new F28();
const o32 = {
};
const v34 = new ArrayBuffer(v31, o32);
const o35 = {
    [v34]: v27,
};
