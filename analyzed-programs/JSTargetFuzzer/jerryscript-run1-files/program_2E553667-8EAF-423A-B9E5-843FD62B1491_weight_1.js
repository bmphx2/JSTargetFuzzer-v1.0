const v1 = new WeakSet();
function f2() {
    return v1;
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
new F5();
const v10 = [1262143293,15,46313,5,2147483649];
function f11() {
    return v10;
}
const v12 = new Uint32Array();
let v13 = [Uint16Array];
function f14(a15, a16, a17) {
    ({"length":a15,...v13} = v12);
    return f11;
}
new Int32Array(9);
new Int16Array(15);
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    const v29 = new Date();
    Reflect.get(v29.toUTCString);
}
new F23();
new Uint16Array(29);
new Int32Array(1621);
new Int8Array(6);
new Float64Array(5);
let v46 = -9007199254740992n;
v46 ^= 48735n;
