function f0() {
}
class C4 {
    set d(a6) {
        Object.defineProperty(this, this, { writable: true, get: f0 });
        function f7(a8) {
            return 35058n;
        }
        class C9 extends f7 {
            [-9n] = a6;
            2;
        }
    }
    static o(a11, a12) {
        new BigUint64Array(1000);
        const v18 = new Int8Array(77);
        2383 != v18 ? 2383 : v18;
        new BigInt64Array(2383);
        return 2383;
    }
}
new C4();
new C4();
new C4();
const v30 = [2147483648,65537,5,536870888,-4294967295,2008153787,-9223372036854775807,1073741823,6];
const v31 = [-65536,2,63632,-10312,10];
let v32 = 0;
while (v32 < 9) {
    v32++;
}
const v39 = [740020483,-1073741824,-6,9,42405,-1,33167,5,-2147483649,-10];
function F40(a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a42;
}
new F40(f0, v39);
new F40(-9n, v31);
new F40(v39, v30);
function F48(a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
}
const v53 = new F48(F48, -1.0, -1.0);
-1.0 % -1.0;
function f55(a56, a57) {
    a57.__proto__ = v53;
    return a56;
}
new Promise(f55);
const v61 = Symbol.iterator;
const o70 = {
    [v61]() {
        let v63 = 10;
        const o69 = {
            next() {
                v63--;
                const v67 = v63 == 0;
                const o68 = {
                    "done": v67,
                    "value": v63,
                };
                return o68;
            },
        };
        return o69;
    },
};
