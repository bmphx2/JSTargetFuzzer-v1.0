function F0() {
    if (!new.target) { throw 'must be called with new'; }
    `multiline${7}bigint`;
    this.d = 1024;
}
const v5 = new F0();
const v6 = new F0();
v6[v5];
const v14 = new F0();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
    this.h = v6;
    this.b = v6;
}
new F15(v14, v14);
new F15(v6, v5);
new F15(v14, v14);
[0.11503297454246875,0.2951622005113992,Infinity,2.220446049250313e-16,0.3824259417311381,2.0];
[-4.499701583252743e+307];
[-1000000.0,1.0,89.97555644333579,-3.0,502.93671618895974,1000000000000.0,1.7976931348623157e+308];
let v25 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v26 = [6,17590];
[-658853788,-256];
let v32 = BigUint64Array;
const v33 = new v32(12);
const v36 = new Uint32Array(v26);
new Uint8Array(16);
let v41;
try { v41 = v25(-4294967295); } catch (e) {}
({"buffer":v25,"d":v32,"g":v41,...v41} = v33);
const o42 = {
};
new Proxy(v36, o42);
const v48 = Symbol.toPrimitive;
const o56 = {
    [v48]() {
        try {
            super.getUint16();
        } catch(e51) {
            function f52() {
                return v25;
            }
            e51.f = e51;
        }
        return this;
    },
};
function F63(a65, a66, a67, a68) {
    if (!new.target) { throw 'must be called with new'; }
    a67.d = a68;
    Reflect.valueOf = a65;
    this.f = a65;
}
const v73 = new F63(-4294967296, 5n, "-16", "-16");
new F63(-1, -7n, "-16", "global");
const v75 = new F63(-4294967296, 5n, "global", "global");
"-16" == v75;
if (-1) {
} else {
    function F80(a82, a83, a84) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a84;
    }
    const v85 = new F80(F80, v73, "function");
    const t65 = -1;
    new t65(v85, "global", "function");
    new F80(v85, "global", "function");
}
