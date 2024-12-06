function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1;
    this.f = -1;
    this.c = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v10 = [v5,-4096,v5,false,268435439];
const v11 = [v4,F0,v3,F0];
[v11,v10,v11,v11];
const v23 = new WeakMap();
const v26 = new Int8Array(4096);
const v29 = new Int32Array(4);
const v32 = new Float64Array(1701);
const v33 = (a34, a35) => {
    const o36 = {
    };
    new Proxy(v26, o36);
    return a34;
};
delete v23[v29];
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a44;
}
new F41(-1.0, 4096);
new F41(v32, -4294967297);
new F41(-1.0, 1701);
