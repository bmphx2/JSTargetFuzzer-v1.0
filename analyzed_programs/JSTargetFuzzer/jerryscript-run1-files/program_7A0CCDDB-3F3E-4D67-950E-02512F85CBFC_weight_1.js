const v2 = new Uint16Array(7);
let v3 = 4;
new Int16Array(v3);
new Int16Array(25);
class C12 extends Int16Array {
    set b(a14) {
        function F15(a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a17;
            this.f = a17;
            this.a = a14;
        }
        new F15(NaN, NaN);
        new F15(a14, 1000000000.0);
        new F15(1000000000.0, -1000000.0);
    }
    static 7;
    static [v3] = v2;
    static g = v2;
    static [25];
}
const v22 = new C12();
async function* f23(a24, a25, a26, a27) {
    [5.0,-3.508057024335478e+307,-8.289438071449614e+307,-5.0,1.0,1.5513321525639192,NaN];
    [7.089478676315004];
    [0.9891099866055129,-9.57768556015691,7.170032177394191,-37.43425724326403,-1.4179806503812316,-1e-15,-820820.2653427452,6.70806892796402e+307,-1.7976931348623157e+308];
    await a27;
    yield* v2;
    return C12;
}
const v32 = f23(1000000000.0, NaN, Int16Array, Int16Array);
new C12();
v3 = 7;
Object.defineProperty(this, 7, { configurable: true, set: f23 });
delete v22[C12];
f23(-1000000.0, 1000000000.0, v32, Int16Array);
new C12();
const v39 = [4.0,2.0,-254497.14397592226,-380128.7104823978,NaN,-402041.8476713024,-2.2250738585072014e-308,-3.0,-Infinity];
const v40 = [0.0,880023.6478053604,267.2145883342787,-2.2250738585072014e-308,-382626.49765567726,-5.0,7.306837224269849,1000000000000.0,1000000.0,-1.396531577825679e+308];
Object.defineProperty(v39, Date, { enumerable: true, get: Date });
v39.copyWithin(v40["entries"]());
