function f3() {
    return 10;
}
class C4 {
    static p(a6) {
        this[135] %= a6;
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return f3;
    }
}
const v18 = new C4();
new C4();
const v20 = new C4();
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = C4;
}
const v28 = new F24(v18, v18);
new F24(v28, v28);
new F24(v20, 10);
const v37 = new WeakSet();
function f38(a39, a40) {
    const o52 = {
        "f": v37,
        set b(a42) {
            let v43;
            try { v43 = a39(f38, a40, f38); } catch (e) {}
            const o45 = {
                "apply": f38,
                "construct": f38,
                "defineProperty": f38,
                "get": f38,
                "getOwnPropertyDescriptor": f38,
                "ownKeys": f38,
                "set": f38,
                "setPrototypeOf": f38,
            };
            new Proxy(v43, o45);
            try { v37.has(a42); } catch (e) {}
            for (let v49 = 0; v49 < 32; v49++) {
                const v51 = "p" + v49;
                v51[v51] = v49;
            }
        },
        "e": WeakSet,
        "g": v37,
    };
    return o52;
}
const v53 = f38(v37, v37);
let v55 = f38(f38(v53, f38), WeakSet);
const v58 = new Uint8Array(1);
new BigUint64Array(1);
new Uint32Array(215);
const v65 = [-0.0,-62005.4832069563,-796.7184022897094,1.7976931348623157e+308,-1.0,5.0,471507.71410557977];
const v66 = [-3.0,22175.46802635526,-1000000.0,-1e-15,-1000000.0,842.1164031164237,3.0,710202.0348831015,-8.0195554739415e+307,-3.0];
let v67 = [1.7976931348623157e+308];
function f68() {
    return v65;
}
new WeakMap();
let v73 = -10;
const v74 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
const v75 = [-1e-15,0.786904425348982,1000000000.0];
const v76 = [-1000.0,-Infinity,-3.0];
v73 = 582866721;
v75[v74];
const v78 = v66[9];
v67 = v75;
const v81 = typeof v78 === "object";
function* f83(a84, a85) {
    new f68();
    yield* v67;
    return v74;
}
const v87 = f83(v74, v73);
v58.buffer = v78;
v55 -= v53;
let [,v89,v90] = v87;
new Float64Array(255);
new BigUint64Array(14, 4294967295);
new Int8Array(255);
const v101 = [8,0,4294967297,-33048,6,1000,983207413];
try { v76["splice"](...v101, ...v87, ...v81, ...v76, v73); } catch (e) {}
("object")[2617003312];
~f83;
const v109 = [8];
const v110 = [-13,-465622521,22703];
let v112 = "number";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v118 = (a119, a120) => {
    const v121 = v87.length;
    const v122 = (a123, a124, a125, a126) => {
        a124[v101] = a123 << 5.286615760405383e+307;
        return v121;
    };
    v112 = v112;
    return v78;
};
570009.5976097113 / "function";
v112 ^ 570009.5976097113;
v109["forEach"](v118, "forEach");
function f133(a134, a135) {
    const o143 = {
        ...a135,
        "c": a135,
        "b": 1073741824,
        "e": a135,
        __proto__: a135,
        [3](a137, a138, a139) {
            try {
                super.m(a135, a137, a139, a137);
            } catch(e141) {
            }
            const v142 = this[8];
            a134 **= -33749;
            return v142;
        },
    };
    return v87;
}
f133(10000, 512);
f133(-33749, f133);
f133(3, f133);
function F147(a149, a150) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a150;
}
new F147(10000, 3);
const v152 = new F147(512, 22165, v110, BigUint64Array);
new F147(1073741824, 3);
delete v152[1509295508];
Math.sinh(F147);
Math.sinh(10000);
const v164 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v164);
