function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -10800;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return F0;
}
let v7 = "b";
let v11 = (v5 >>> v3) == f6;
[v7,v11] = v7;
new Int32Array(2);
new Uint32Array(256);
new BigUint64Array(2);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a25;
    this.f = a26;
}
const v27 = new F21(v4, "undefined", v5, v7);
new F21(v27, "boolean", v5, "undefined");
new F21(v5, v7, v4, "boolean");
function f36(a37, a38) {
    const o50 = {
        ...a38,
        "c": a38,
        "b": 1073741824,
        "e": a38,
        __proto__: a38,
        [3](a40, a41, a42) {
            try {
                super.m(a38, a40, a42, a40);
            } catch(e44) {
                try { e44.call(a37, e44, a41, e44); } catch (e) {}
                this.valueOf = a42;
            }
            const v49 = this[8];
            a37 **= -33749;
            return v49;
        },
    };
    return o50;
}
f36(10000, 512);
f36(-33749, f36);
f36(3, f36);
function F54(a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a57;
}
new F54(10000, 3);
const v59 = new F54(512, 22165);
let v62 = -15;
-1.7976931348623157e+308 + v62;
Math.pow(10000, v62);
~(--v62);
Math.log(10000);
Math.atan(-4096);
v62 ** -4096;
new F54(1073741824, 3);
delete v59[1509295508];
Math.sinh(F54);
Math.sinh(10000);
const v82 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v82);
