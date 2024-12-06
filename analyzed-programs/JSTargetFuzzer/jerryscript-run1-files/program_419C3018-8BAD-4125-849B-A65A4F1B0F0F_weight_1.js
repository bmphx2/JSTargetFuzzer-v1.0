function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(v3, v4);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v5;
    this.g = a17;
    this.e = -22490;
}
new F12(v5, 1073741824n, -22490, v3);
new F12(v4, -1460566790n, 52234, v5);
new F12(v3, -1460566790n, 52234, v4);
let v26 = -58444;
new Uint8Array(127);
new BigUint64Array(3485);
new Uint8Array(5);
v26 = 1854567405;
function f36() {
    !arguments;
    [-9007199254740992,2147483647,-4,4294967297,-3,-28259,-9007199254740992,-665863452,1258727004,54404];
    [15];
    [58091,2147483648,-4096,5];
    return arguments;
}
f36(f36);
