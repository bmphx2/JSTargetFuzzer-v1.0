function f0() {
    const o19 = {
        ["4294967296"](a5, a6) {
            [-14];
            const v9 = Symbol.iterator;
            const o18 = {
                [v9]() {
                    let v11 = 10;
                    const o17 = {
                        next() {
                            const v15 = v11-- == 0;
                            const o16 = {
                                "done": v15,
                                "value": v11,
                            };
                            return o16;
                        },
                    };
                    return o17;
                },
            };
            return o18;
        },
    };
    return o19;
}
const v20 = f0();
f0();
f0();
const v25 = new Int32Array(4096);
new Int8Array(11);
new Float64Array(16);
const v37 = new Array(9);
const v40 = new Uint32Array(2334);
new Uint32Array(4);
v20[129] = 129;
v25.byteOffset = 1203889623;
const v45 = f0();
let v46;
try { v46 = v45.getMonth(); } catch (e) {}
function f47(a48, a49) {
    const o50 = {
        ...a49,
    };
    return a49;
}
let v52 = 183588835;
let v55 = --v52;
const v56 = f0 << 14622;
Math.fround(14622);
Math.sqrt(v56);
--v55;
new Int16Array(129);
const v64 = typeof f0 === "number";
try { v46(11, 1203889623, v64, v52); } catch (e) {}
14622 instanceof Float64Array;
const v70 = `
    Uint32Array >= Uint32Array;
    let v72;
    try { v72 = v40.join(v70); } catch (e) {}
    const o73 = {
    };
    new Proxy(Int16Array, o73);
    v37[v72 = o73];
`;
eval(v70);
