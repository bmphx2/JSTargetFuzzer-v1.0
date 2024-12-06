const v1 = new Map();
let v2 = 1000;
let v3 = Int8Array;
const v4 = new v3(v2);
const v7 = new BigInt64Array(v2);
const v9 = `
    new Uint8Array(9);
    new Int16Array(0);
    new Uint8ClampedArray(2687);
`;
const t10 = "undefined";
t10.valueOf = v1;
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a24;
    this.a = a25;
}
new F22(v2, 79);
new F22(79, 7);
new F22(7, v2);
const v30 = eval(v9);
const v32 = Symbol.toPrimitive;
const o35 = {
    [v32]() {
        this[7] = v7;
        try { v30(); } catch (e) {}
        v32.valueOf = eval;
        return "byteLength";
    },
};
const v37 = new Int16Array(7);
[-9.491490414063455e+307];
const v39 = [-841.8070877765892,-9.63668495700489,1000.0,-3.0,-4.039901569308726,NaN,-1.0,-1.7976931348623157e+308,-7.073062108906207e+306];
[-1.9615942508575923,2.3210525310174557,973627.8287056382,-1.7976931348623157e+308];
function f41() {
    return v37;
}
let [v44,...v45] = v4;
f41 / BigInt64Array;
Math.sin((v2 ^ v2) + v2);
let v52 = v2--;
const v53 = --v52;
v3++;
const v55 = new Float64Array(128);
const v56 = v55[1];
v39[3];
v55[140] = v53;
function f58() {
    return v53;
}
v56.__proto__;
