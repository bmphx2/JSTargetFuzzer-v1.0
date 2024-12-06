new Float64Array(2642);
new Int8Array(14);
const v8 = new Int32Array(98);
const v9 = [v8,v8];
const v10 = [2642,v9,Int8Array,Int32Array];
const v11 = [98,v9];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v8;
    this.d = Float64Array;
    this.f = this;
}
new F12(14, v9, 2642, v11);
new F12(2642, v11, 98, v11);
new F12(2642, v10, 98, v9);
const v22 = new Date();
v22["getSeconds"]();
