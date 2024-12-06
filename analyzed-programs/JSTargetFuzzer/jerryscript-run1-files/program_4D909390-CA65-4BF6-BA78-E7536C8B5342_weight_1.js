function f3() {
    return 4294967297;
}
[[f3,-256],[4294967297,-256]];
new Uint8Array(4076);
new Uint8ClampedArray(1687);
new Int32Array(64);
new BigInt64Array(256);
const v24 = new Uint32Array(227);
new Uint16Array(129);
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a31;
    const t13 = "ki";
    t13.f = 10;
    const v34 = [];
    class C35 {
        valueOf(a37, a38) {
            const v39 = `
                const t19 = v34.__proto__;
                delete t19?.d;
            `;
            eval(v39);
        }
    }
    async function f44(a45, a46) {
        a45 /= C35;
        return v34;
    }
}
const v47 = [];
const v49 = new Int16Array();
function f50(a51, a52) {
    const v53 = v49[-1];
    Object.defineProperty(v53, v47, { writable: true, value: v53 });
    return Int16Array;
}
new Promise(f50);
new F28(256, 129);
new F28(v24, 227);
new F28(v24, 129);
function f59() {
}
new Uint8Array(227);
let v73 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v73);
v73 /= v73;
new WeakSet();
new BigInt64Array(2);
let v89 = -2147483649n;
v89 &= 4n;
for (let v91 = 0; v91 < 5; v91++) {
    gc(10000);
}
([5]).reverse();
