new Array(5);
new Int8Array(6);
new Int16Array(1);
new Int8Array(4);
new Int8Array(97);
new Float64Array(3962);
new Uint16Array(1000);
function f21() {
    new Array(1024);
    let v30 = "message";
    const o35 = {
        get a() {
            let v32;
            try { v32 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v30 = v32;
            try {
                super.n();
            } catch(e34) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v30,
    };
    return o35;
}
const v36 = f21();
f21();
const v38 = f21();
const v41 = v36.__proto__;
f21();
Array(1073741825);
const o44 = {
    "apply": Array,
    "deleteProperty": f21,
    "getOwnPropertyDescriptor": f21,
    "getPrototypeOf": Array,
};
new Proxy(v41, o44);
function F48(a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a50;
    this.d = 1073741825;
}
const v53 = new F48(v38, v38, 3);
const v54 = new F48(v53, v36, 3);
new F48(v36, v54, -31282);
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
