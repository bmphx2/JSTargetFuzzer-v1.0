function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1;
    this.d = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a8;
}
const v10 = new F6(v4, v3);
const v11 = new F6(v4, v10);
const v12 = new F6(v5, v3);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v11;
}
const v19 = new F13(v12, v12, v4, v11);
const v20 = new F13(v19, v11, v19, v12);
const v21 = new F13(v20, v12, v3, v10);
function f22(a23, a24, a25) {
    const o73 = {
        "isExtensible": a25,
        __proto__: a24,
        toString(a27, a28, a29, a30) {
            return SyntaxError();
        },
        "e": a25,
        [F6]: v5,
        ...a23,
        [v21](a34, a35, a36) {
        },
        get a() {
            try {
            } catch(e38) {
                function f39(a40, a41, a42) {
                    return f39;
                }
            }
            return this;
        },
        ...v11,
        "b": F0,
        ...a23,
        m(a44, a45) {
            a25 == a44;
            function F47(a49, a50, a51, a52) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = F6;
                this.g = v21;
                this.e = F6;
            }
            const v53 = new F47(v10, v21, v10, this);
            new F47(v12, v19, v10, v53);
            new F47(v19, a24, a23, a24);
            const v58 = new Uint32Array(858);
            const v60 = new Uint16Array();
            const o67 = {
                m(a62, a63, a64) {
                    return eval(a62);
                },
            };
            for (const v68 in v58) {
                const v70 = [v68];
                Reflect.apply(o67.m, v60, v70);
            }
            return v5;
        },
    };
    return o73;
}
f22(v12, v12, v5);
f22(v21, v11, v4);
f22(v11, v12, v4);
const v82 = new Uint8Array(512);
new Int16Array(447);
new Uint32Array(2438);
Array.from(Float64Array);
new Boolean();
function f97() {
}
([]).values();
-34557n == -9223372036854775808;
function F108(a110) {
    if (!new.target) { throw 'must be called with new'; }
}
new F108();
("number").concat("T", "number");
const v117 = async (a118, a119, a120, a121) => {
    return v117;
};
async function f123(a124, a125) {
    await -1;
    return f123;
}
f123();
v82.description <<= 2006448021;
const v128 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
const v131 = ("1073741824").match(v128.copyWithin(v128, v128));
new Uint8Array(0);
const v138 = [-8,4294967295,148900462];
let v139 = RegExp.bind("2147483647", v138);
const v141 = new Int32Array(127);
v139 /= v141;
new WeakSet();
new BigInt64Array(2);
Object.defineProperty(v138, 30972, { writable: true, enumerable: true, value: 512 });
v128.length <<= -62483;
const v159 = [5];
for (let i161 = 0; i161 < 10; i161++) {
    RegExp(v131);
}
v159.reverse();
