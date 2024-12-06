function f3(a4) {
    const o34 = {
        ["dotAll"]: "g",
        "a": "g",
        __proto__: "g",
        ..."g",
        "c": a4,
        65536: "dotAll",
        ..."dotAll",
        ["dotAll"](a6) {
            var c = "g";
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            async function f12(a13, a14) {
                return await v11;
            }
            f12();
            new Float32Array(10);
            new Int32Array(128);
            new BigInt64Array(255);
            ("g").length;
            try { ("dotAll").toLowerCase(); } catch (e) {}
            return 9007199254740991;
        },
    };
    return o34;
}
f3("dotAll");
f3("g");
f3("g");
const v46 = new Uint32Array(181);
let v48 = BigUint64Array;
let v49 = new v48(1);
let v50 = 253;
[v50,,v48,v49] = v46;
try { v48["abs"](181, v50, v48); } catch (e) {}
new Uint16Array(v50);
for (let i63 = 0; i63 < 2; i63++) {
    const v69 = new Function("x");
    v69.name;
}
Function();
