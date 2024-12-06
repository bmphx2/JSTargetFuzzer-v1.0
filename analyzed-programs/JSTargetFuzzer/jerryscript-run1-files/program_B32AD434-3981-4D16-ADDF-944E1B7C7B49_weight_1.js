function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = new F2();
    with (v4) {
        const o7 = {
            valueOf() {
                this();
                return v4;
            },
        };
    }
    this.h = 1441031201;
}
new F0();
new F0();
new F0();
([0.6384344879052155,5.0,-7.040386752428791e+307,1.0,1000000000.0,1.7976931348623157e+308,NaN])["fill"]();
new BigInt64Array(256);
new Int8Array(255);
new Int16Array(129);
[NaN];
[-1e-15,-2.0,0.737465722832199,-1000000.0,-493.92830781524833,-0.0,-1000000000.0,4.0,0.17156768457194693,-662.3994463876222];
[-Infinity,2.175972701968868e+307,1e-15,-704.7844756200124,-4.0,-2.0,-1.7976931348623157e+308];
new Int32Array(64);
new Int32Array(1024);
new Int16Array(1000);
const v43 = [129];
const v44 = [0,-2,-646376397,1855814374,-2,-8,-29428,-3];
[-1194622953,-65536,4294967297,-65535,-112499346,512,9007199254740991,268435440,-1940231846];
v43[Symbol.unscopables];
Math.hypot(17986);
const v54 = v44 || (42942 ** 42942);
Math.sin(17986);
+v54;
