function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1103991632;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v8;
try { v8 = v5(v5, v3, v5); } catch (e) {}
let v9;
try { v9 = v4.get(v4, v8, v4); } catch (e) {}
const v12 = new Uint8Array(512);
const v15 = new Uint8ClampedArray(7);
new Uint8Array(4);
new Float64Array(3);
let v21 = 0;
while (v21 < 2) {
    function F24(a26, a27, a28) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = v5;
        this.d = 512;
        this.c = v12;
    }
    const v29 = new F24(v3, v3, 7);
    new F24(v4, v5, v9);
    new F24(v4, v29, v9);
    v21++;
}
new Uint16Array(199);
new Uint16Array(2179);
function f38() {
    return 199;
}
const o56 = {
    get c() {
        const v46 = v9 << -2147483649;
        Math.sinh(v46);
        Math.max(v46);
        Math.random();
        let v50 = v15 ^ 1.471954585560037e+308;
        v50++;
        let v53 = -44662;
        const v54 = --v53;
        Math.min(v54);
        return v54;
    },
};
const o57 = {
    ...o56,
};
