function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (const v3 in this) {
    }
    this.c = 4294967295;
    this.h = 4294967295;
}
const v7 = new F0(F0, F0);
const v8 = new F0();
const v9 = new F0();
const v11 = new Date();
function f12() {
    return v7;
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a17;
}
const v19 = new F13(v11, v9, F0, v8);
const v20 = new F13(v8, v7, v8, v19);
new F13(v8, v9, F0, v9, f12);
v11.valueOf = f12;
function f23() {
    return v9;
}
v9[Symbol.isConcatSpreadable] = v7;
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a32;
    this.length = F0;
    this.g = a34;
}
new F30(-376298321, Date, -218573106, -376298321);
const v37 = new F30(1073741823, WeakSet, -376298321, 1073741823);
new F30(-218573106, Date, 1073741823, 1073741823, v8, v37);
try {
    new WeakSet(4087n, v20, v8, F13);
} catch(e40) {
} finally {
}
