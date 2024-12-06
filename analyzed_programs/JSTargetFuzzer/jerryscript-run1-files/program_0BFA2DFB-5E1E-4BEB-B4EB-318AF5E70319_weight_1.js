function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 24124;
}
new F3(24124);
new F3(-2147483647);
new F3(-2147483647);
const v15 = [-38216];
const v16 = [v15,v15,v15];
const v18 = new Int16Array(v15);
function f19(a20, a21) {
    const v22 = v18[-1];
    Object.defineProperty(v22, v16, { writable: true, value: v22 });
    return v16;
}
try { v15.forEach(f19); } catch (e) {}
new WeakSet();
const v26 = Symbol.toPrimitive;
const o28 = {
    [v26]() {
        return 0;
    },
};
new BigUint64Array(6);
new BigUint64Array(257);
new Uint8ClampedArray(4);
let v37 = 9007199254740992n;
v37--;
