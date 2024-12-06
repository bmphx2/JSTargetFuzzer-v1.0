function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1;
    this.f = -1;
    this.c = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const o15 = {
    n(a7) {
        for (let i10 = 0;
            (() => {
                for (let i = 0; i < 5; i++) {
                }
                return i10 === 1;
            })();
            (() => {
                super.a = 21001;
            })()) {
        }
        return this;
    },
};
const v20 = [v5,-4096,v5,false,268435439];
const v21 = [v4,F0,v3,F0];
[v21,v20,v21,v21];
const v33 = new WeakMap();
const v36 = new Int8Array(4096);
const v39 = new Int32Array(4);
const v42 = new Float64Array(1701);
const v43 = (a44, a45) => {
    const o46 = {
    };
    new Proxy(v36, o46);
    return a44;
};
delete v33[v39];
function F51(a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a54;
}
new F51(-1.0, 4096);
new F51(v42, -4294967297);
new F51(-1.0, 1701);
