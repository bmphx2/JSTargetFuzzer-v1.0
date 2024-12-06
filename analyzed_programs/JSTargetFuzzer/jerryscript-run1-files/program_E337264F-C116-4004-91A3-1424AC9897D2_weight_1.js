function f0() {
    const o28 = {
        valueOf() {
            function f5() {
                return f0;
            }
            function F6(a8, a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F6(this, -24666, "string");
            F6(f0, -24666, f0);
            const v14 = Symbol.iterator;
            const o18 = {
                [v14]() {
                    const o17 = {
                        next() {
                            return this;
                        },
                    };
                },
            };
            return f5;
        },
        set c(a20) {
            const t24 = "string";
            t24.__proto__ = a20;
            a20 !== this;
        },
        6: 64,
        127: "string",
        "e": -24666,
        ..."string",
        get a() {
            try { ("string").trimRight(); } catch (e) {}
            ("string").padEnd(64, 1000, 64, -4294967295, 1000);
            return "string";
        },
    };
    return o28;
}
f0();
f0();
f0();
new Uint32Array(450);
new Uint8Array(10);
new Int16Array(3178);
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
