function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "57967";
    this.f = "bigint";
}
new F3("bigint");
new F3(F3);
new F3("57967");
new Float32Array(16);
new Int32Array(12);
new Float64Array(16);
const v19 = new Date();
function f20(a21, a22, a23, a24) {
    const o31 = {
        m(a26, a27, a28) {
            try {
                super.deref(a28, a24);
            } catch(e30) {
            }
            return a22;
        },
    };
    return o31;
}
Reflect.apply(f20().m);
for (let v36 = 0; v36 < 5; v36++) {
    v19.setUTCSeconds();
}
