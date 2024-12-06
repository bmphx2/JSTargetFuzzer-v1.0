const v6 = [0.0,657.6953492109394,1000000.0,3.0985239644284412,NaN,-1e-15,1000.0,4.0,1e-15,-9.603972900987458];
const v7 = [0.9458989385538649,-554.8253296979847,0.0];
const v8 = [0.17662989373490712,-706322.3263364455,2.2250738585072014e-308,-4.0,-936502.6318359659,-Infinity];
function f9(a10, a11, a12) {
    const o47 = {
        __proto__: "match",
        ["Qx7V"]: v6,
        "e": v7,
        "a": "match",
        "h": "g",
        [a12]: "symbol",
        set g(a14) {
            const v18 = new Uint8Array(Uint8Array, Uint8Array);
            const v20 = new Int8Array();
            const v23 = new Float64Array();
            function f24() {
                return v23;
            }
            function f25(a26, a27, a28) {
                const o36 = {
                    get e() {
                        function F30(a32, a33, a34) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        return F30(64, this, v18);
                    },
                    [f24]: v20,
                };
                return o36;
            }
            const v37 = f25(64, v20, v18);
            const v38 = f25();
            f25(v38, v20, v38);
            v38[Symbol.isConcatSpreadable];
            for (let v43 = 0; v43 < 5; v43++) {
                v37["p" + v43] = v43;
            }
        },
        536870912: a12,
        16: a11,
    };
    return o47;
}
const v48 = f9("symbol", v7, "g");
f9("match", v7, v6);
f9("e", v8, v48);
try { Array.from(Uint8ClampedArray, RegExp); } catch (e) {}
