function f3(a4) {
    const o15 = {
        p(a6) {
            let o7 = {
            };
            const v9 = new Proxy(this, o7);
            o7 = v9;
            try { a4(v9, this); } catch (e) {}
            return a4;
        },
        set f(a12) {
            const v13 = this && a4;
            let v14;
            try { v14 = new a12(v13, -4n); } catch (e) {}
            v13.f = v14;
            this.__proto__ = v13;
        },
    };
    return o15;
}
f3(4294967296n);
f3(-256n);
f3(-256n);
new Int32Array(257);
new BigInt64Array(7);
new Float64Array(5);
class C28 {
    get b() {
        let v29 = this;
        let v30 = --v29;
        v30--;
    }
}
const v32 = new C28();
v32[536870889];
let v36 = 8 ^ 1073741824;
v36++ & v36;
