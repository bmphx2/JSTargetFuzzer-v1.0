function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Int16Array(0);
new BigInt64Array(8);
new Int32Array(727);
function f15() {
    return v5;
}
function f16() {
    return v3;
}
("number").matchAll(("number").replace("number", "number").__proto__);
Number["isSafeInteger"]();
