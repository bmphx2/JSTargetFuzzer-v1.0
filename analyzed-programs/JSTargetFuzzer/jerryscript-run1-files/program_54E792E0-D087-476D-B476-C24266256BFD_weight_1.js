function f3(a4) {
    class C6 {
        set b(a8) {
            a4 %= a4;
        }
        static 1197 = -9007199254740991;
    }
    const v9 = new C6();
    for (const v10 in v9) {
    }
    const o16 = {
        set e(a12) {
        },
        "g": a4,
        "h": "wbH",
        ..."wbH",
        __proto__: "wbH",
        ["l14mh"]: a4,
        ..."symbol",
        2147483647: "symbol",
        ..."wbH",
    };
    return o16;
}
f3("l14mh");
const v18 = f3("symbol");
const v19 = f3("symbol");
function f23(a24, a25) {
    const o35 = {
        "g": 1630750534n,
        "c": f3,
        "d": a24,
        __proto__: a25,
        1053877365: "symbol",
        "e": "symbol",
        "a": 1630750534n,
        ..."wbH",
        ..."l14mh",
        /*
        __proto__: a25,
        */
        set c(a27) {
            this[f3] = undefined;
        },
        "b": a25,
        [1630750534n](a30, a31, a32, a33) {
            new f3(a24);
            return a24;
        },
        [a25]: f3,
        "f": 2147483647n,
    };
    return o35;
}
f23("wbH", v18);
f23("symbol", v19);
f23("l14mh", v19);
new Int16Array(255);
const v44 = new Uint8Array(255);
new Uint8ClampedArray(257);
function f48(a49, a50) {
    const o67 = {
        174: a49,
        "c": v44,
        65536: a49,
        "e": v44,
        set f(a52) {
            try { a52(Int16Array, a52, a52, this); } catch (e) {}
            const v56 = [NaN,1000000000000.0,-1.7976931348623157e+308,4.0,-1.198308267484956,1.7064028347017238e+308,0.044668747173624346,92.3045873679855,1000000000000.0];
            const v57 = [-8.067302531743689e+307,-4.716397555333698,-2.2250738585072014e-308,0.2045822296467411,1000.0,-646987.8616903792,469169.3226549153,-1000.0,337.9072237486639,-1.1279610285651766e+308];
            function f58() {
                return v56;
            }
            class C59 extends f58 {
                [v57];
            }
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o67;
}
f48(5, 255);
const v69 = f48(255, 257);
f48(257, 255);
const v71 = new Uint8Array(257, 257, 255);
let v72;
try { v72 = v71.includes(v71); } catch (e) {}
Object.defineProperty(v69, 257, { enumerable: true, get: f48 });
for (let v73 = 0; v73 < 32; v73++) {
    v44["p" + v73] = v73;
}
v44[3];
try { v72["p"](Int16Array); } catch (e) {}
