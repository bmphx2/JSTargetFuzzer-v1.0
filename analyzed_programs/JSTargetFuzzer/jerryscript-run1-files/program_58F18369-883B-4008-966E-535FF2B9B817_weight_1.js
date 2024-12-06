function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = true;
}
new F1();
new F1();
new F1();
const v7 = -Infinity;
const o15 = {
    valueOf(a11) {
        for (const v12 in this) {
            try {
                super.getOwnPropertyDescriptors(this, -1033928124, 255, v7);
            } catch(e14) {
            }
        }
        return a11;
    },
};
function f17() {
    new ArrayBuffer(ArrayBuffer);
    let v20;
    try { v20 = f17(); } catch (e) {}
    return v20;
}
const v21 = new Int32Array(3038);
const v26 = new Uint16Array(2286, 2286);
v26[4294967295] += 2286;
("m").padStart;
new Float64Array(1024);
new BigUint64Array(12);
typeof v21;
