const v5 = new Array(39);
const v6 = [v5,39,v5,v5];
const v7 = [v6,v5,v6,v6,-2147483649];
[1073741825,v7,v6,v7,-2147483649];
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 268435456;
    this.f = 268435456;
    this.h = 268435456;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a23;
    this.f = a23;
}
new F21(v16, v17);
const v26 = new F21(v17, v16);
const v27 = new F21(v17, v26);
const v28 = [v17,v27,"GXncn",F21,v15];
[v28,"c",v15];
["GXncn",v28,v15];
function f34() {
}
function F35() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f34;
    this.h = f34;
}
new F12();
const v38 = new F35();
new F35();
new Int32Array(10);
new Int8Array(128);
new Uint16Array(10);
const v49 = `
    function F50(a52, a53) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = 4;
    }
    const v54 = new F50(F50, v38);
    [7];
    new BigUint64Array(8);
    const v60 = new F50(v54, Uint16Array);
    new F50(f34, v60);
`;
eval(v49);
