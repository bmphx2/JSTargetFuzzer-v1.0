const v2 = new Array(6);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 6;
}
const v7 = new F3(v2, 6);
new F3(6, Array);
const v9 = new F3(v7, 6);
Array(Array, 6, v7.a, Array, 6);
Array.e = v9;
new BigInt64Array(9);
new Uint16Array(10);
new Uint16Array(129);
const v31 = new Uint8Array(1705);
const o45 = {
    m(a33, a34, a35) {
        function F36(a38, a39, a40) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = this;
        }
        const v41 = new F36("m", 9, a35);
        new F36(a34, this, false);
        new F36("m", F36, v41);
        v31.fill();
        return 1705;
    },
};
Reflect.apply(o45.m);
