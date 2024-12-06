const v2 = new Float64Array(3);
const o3 = {
};
new Proxy(Float64Array, o3);
const o6 = {
};
new Proxy(v2, o6);
const v11 = new Float32Array(0);
const v14 = new Uint8ClampedArray(8);
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v14;
}
let v23 = new F18("f", 0, 0);
const v24 = new F18("g", 0, 3);
new F18("f", 3, 8);
const v26 = [10000,-65537,-47701,1928809523,4294967295,9007199254740992,257,35697,16];
try { v14.map(v2, v23); } catch (e) {}
F18 % o6;
v23[0] = v24;
F18 !== v11;
const t20 = "g";
delete t20[Float64Array];
const v32 = v26.__proto__;
const v35 = v23 / v23;
++v23;
9 << v35;
("setUTCDate").lastIndexOf(v32);
