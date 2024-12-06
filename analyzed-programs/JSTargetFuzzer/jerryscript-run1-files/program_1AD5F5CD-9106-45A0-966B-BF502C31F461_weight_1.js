let v1 = -1326686281;
const v3 = [1,4294967295,-60390];
const v4 = [2,909747097,268435440,-1850680752];
const v5 = [-5,512,4096,512,-1367996753,10,-3,-1073741824,4729];
function f6(a7, a8) {
    const o27 = {
        set c(a10) {
        },
        "a": a8,
        valueOf(a15, a16) {
            this[a15] = a15;
            let v17;
            try { v17 = a15(this, ...1, ...a15, ...v3, a15); } catch (e) {}
            function F19(a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a22;
                this.b = a15;
            }
            new F19(v4, a7, v3);
            new F19(v4, v17, v17);
            new F19(v4, a16, v3);
            return v3;
        },
    };
    return o27;
}
const v28 = f6(-2, -2);
const v29 = f6(-2, 1);
const v30 = f6(1, 1);
function f34(a35, a36, a37, a38) {
    const o43 = {
        [v5]: a36,
        485: v1,
        "g": v30,
        "d": v3,
        __proto__: v28,
        get c() {
            const o40 = {
                "call": f6,
                "construct": f6,
                "e": v1,
                "f": 1073741824,
                [a37]: a36,
                __proto__: a35,
                "a": this,
                "get": f6,
                "getPrototypeOf": f6,
                "has": f6,
                "isExtensible": f6,
                "ownKeys": f6,
                "preventExtensions": f6,
                "set": f6,
            };
            const v42 = new Proxy(this, o40);
            return v42;
        },
    };
    return o43;
}
f34(v3, 1073741824, 1073741824, -61079);
const v45 = f34(f34, f6, -61079, f34);
f34(v45, f6, 1073741824, -2);
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
f6(Set, v29, v45, typeof v4 === "number");
v1 = -2;
const v69 = new WeakMap();
new WeakSet();
const v86 = new URIError(512);
const v89 = new Int16Array(447);
new Uint32Array(2438);
function f96() {
}
v86.description <<= 2006448021;
const v104 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v104.copyWithin(v104, v104));
new Uint8Array(0);
const v114 = [-8,4294967295,148900462];
let v115 = RegExp.bind("2147483647", v114);
v69[Symbol.toPrimitive] = Uint32Array;
const v122 = new BigUint64Array(127);
function f123(a124, a125) {
    const o126 = {
        "f": a124,
        ...v115,
        "e": a125,
    };
    return o126;
}
f123(v115, 26357);
f123(v114, 26357);
f123(v104, 2);
v115 /= v122;
new WeakSet();
new BigInt64Array(2, -14, v89);
([5]).reverse();
