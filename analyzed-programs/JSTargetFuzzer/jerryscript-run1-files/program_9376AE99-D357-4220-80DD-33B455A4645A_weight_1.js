const v1 = new WeakSet();
function f2() {
    return v1;
}
let v4;
try { v4 = v1.add(f2); } catch (e) {}
v1 * v4;
const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
new Uint16Array(16);
new Uint32Array(2627);
new Float32Array(257);
new Float32Array(3701);
let v30 = new Int32Array();
v30 >>>= v30;
v4 = Int32Array;
const o31 = {
    "apply": f2,
    "defineProperty": f2,
    "get": f2,
    "getPrototypeOf": f2,
    "preventExtensions": f2,
    "setPrototypeOf": f2,
};
new Proxy(o16, o31);
const v34 = new Int32Array();
function F35(a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v34;
    this.e = v30;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o45 = {
    set a(a44) {
    },
};
for (let v46 = 0; v46 < 5; v46++) {
    [-277.01990682225073,-1.7222303432795588e+308,1.7976931348623157e+308,1.0,264351.78908324963,1.705997104772102,0.87390370523395];
    [0.743969018318265,-5.0,-355.80750662079015,657.0657069550041,-1000000000000.0,-1.2022075228693127e+307];
    [5.0,0.1876942007672162,-1000.0,37158.24744753854,0.10575121900085482,-212.49796363599648,244.47038630179418,3.6933323559598933e+307,-6.840542739623113e+307];
    new BigUint64Array(2576);
    new BigInt64Array(1);
    new Int8Array(64);
    o45.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v62 = [13,9,-12559,-8,-4294967297];
let v63 = [65535,-1139741600];
new Uint8Array(v62);
let v66 = -41990;
const v67 = v63++;
let v68 = --v66;
function f69() {
    return f69;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v68 * (v67 << v66);
