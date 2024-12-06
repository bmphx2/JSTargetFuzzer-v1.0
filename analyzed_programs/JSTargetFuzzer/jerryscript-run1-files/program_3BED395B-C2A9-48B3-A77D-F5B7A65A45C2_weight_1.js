function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -8;
    -128n ^ -128n;
    Promise.reject(Promise)["then"]();
    new BigInt64Array();
    try { ("delete").repeat(2006448021); } catch (e) {}
    this.h = -8;
}
new F0();
new F0();
new F0();
new Int32Array(2);
new Uint16Array(16);
new Uint8Array(1000);
const v28 = Array();
Reflect.apply(v28.reverse, v28);
class C34 {
    constructor(a36, a37) {
        let v38 = undefined;
        const o41 = {
            get c() {
                v38 = arguments;
                return this;
            },
        };
        const o42 = {
            ...o41,
        };
        function f43() {
            return arguments;
        }
        const v45 = f43();
        const o46 = {
            ...v45,
        };
    }
}
new C34(C34, C34);
