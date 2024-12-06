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
    let v26 = "message";
    const o30 = {
        get a() {
            v26 = this();
            return super.n();
        },
    };
    return o30;
}
f25();
