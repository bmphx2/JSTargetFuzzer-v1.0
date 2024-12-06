function f3(a4) {
    const o19 = {
        p(a6) {
            let o7 = {
            };
            const v9 = new Proxy(this, o7);
            try {
                new ArrayBuffer(-13n);
            } catch(e13) {
            } finally {
            }
            o7 = v9;
            try { a4(v9, this); } catch (e) {}
            return a4;
        },
        set f(a16) {
            const v17 = this && a4;
            let v18;
            try { v18 = new a16(v17, -4n); } catch (e) {}
            v17.f = v18;
            this.__proto__ = v17;
        },
    };
    return o19;
}
f3(4294967296n);
f3(-256n);
const v22 = f3(-256n);
new Int32Array(257);
new BigInt64Array(7);
new Float64Array(5);
class C32 {
    get b() {
        let v33 = this;
        let v34 = --v33;
        v34--;
    }
}
const v36 = new C32();
const v39 = new BigInt64Array(257);
v39["slice"]();
delete v22[5];
v36[536870889];
let v45 = 8 ^ 1073741824;
v45++ & v45;
