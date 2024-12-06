function f0() {
    const o8 = {
        ...f0,
        ["freeze"]: 1e-15,
        [f0](a5) {
            const o6 = {
                ..."freeze",
                __proto__: "freeze",
                [a5]: a5,
                "a": 1e-15,
            };
            const t11 = "freeze";
            return delete t11["freeze"];
        },
        __proto__: "freeze",
    };
    return o8;
}
f0();
f0();
f0();
[15368,536870887,9,65535];
[-41182];
[268435441,7,10,12787];
new BigUint64Array(0);
new Uint16Array(0);
new Uint32Array(1);
const v29 = new Uint32Array(Uint32Array);
let v31 = BigUint64Array;
let v32 = new v31(1);
let v33 = 253;
[v33,,v31,v32] = v29;
try { v31["abs"](181, v33, v31); } catch (e) {}
new Uint16Array(v33);
for (let i46 = 0; i46 < 2; i46++) {
    const v52 = new Function("x");
    v52.name;
}
Function();
