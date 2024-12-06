function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 536870912;
    this.e = 536870912;
    this.d = 536870912;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v3;
}
const v14 = new F9(v4, v4, v4);
const v15 = new F9(v3, F0, v4);
new F9(v4, "getFloat32", v5);
v14[v15];
Object.defineProperty(v15, -2, { writable: true, enumerable: true, value: v4 });
const v20 = [F9,F9,v4,v14];
[F0,[v5],v20];
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a29;
}
const v31 = new F25(v5, "getOwnPropertyDescriptor", v4, 65537);
new F25(v3, "getOwnPropertyDescriptor", v5, v31);
new F25(v4, "getOwnPropertyDescriptor", v5, F0);
switch ("getOwnPropertyDescriptor") {
    default:
        break;
}
