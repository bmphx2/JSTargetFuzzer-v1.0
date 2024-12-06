const v1 = new WeakSet();
const o3 = {
};
new Proxy(WeakSet, o3);
try {
const t0 = -256;
t0(o3, ...WeakSet, o3, ...o3);
} catch (e) {}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v1;
    this.d = a11;
}
new F9(15648);
const v13 = new F9(-65535);
let v15 = 15;
const v17 = +v15;
const v18 = --v15;
v17 | v15;
v13 >> v18;
new F9(v13);
[1.5104849756104254e+307,-744.5459681657713,844972.3723009436,0.8034089379259749,0.0];
[0.6953234487140808,Infinity,-1000000.0];
[NaN,-347.6982921602345,-7.989053743145565e+307,-5.389468036478449,-4.179803090041201,1.7976931348623157e+308,Infinity];
function f25() {
    Math.cos([-1.7976931348623157e+308,1000000.0,-1.0,-3.0,-1.7976931348623157e+308,-1000.0,-Infinity,-2.0,-0.12708546581147928]);
    new Int32Array(15648);
    let v31 = "message";
    const o40 = {
        m(a33, a34, a35) {
            return this;
        },
        get g() {
            return this;
        },
        get a() {
            v31 = this();
            return super.n();
        },
    };
    return o40;
}
f25();
