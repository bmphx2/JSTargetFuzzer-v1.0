let v1 = -3;
function f3(a4) {
    const v5 = a4.__proto__;
    const v7 = Symbol.species;
    v5[v7] = 9007199254740992;
    try { v5.n(v7, 268435440, v1, a4); } catch (e) {}
    const o15 = {
        p(a10, a11) {
            try { new a10(v1, this); } catch (e) {}
            const o13 = {
                __proto__: this,
            };
            a10[9007199254740992] >>>= a4;
            v1--;
            return o13;
        },
        "e": a4,
        __proto__: v1,
        "b": a4,
        [a4]: a4,
        [v1]: 9007199254740992,
        "c": 268435440,
    };
    return o15;
}
f3(268435440);
f3(268435440);
f3(v1);
new BigInt64Array(91);
let v22 = 3;
const v24 = new Uint32Array(v22);
new Float32Array(201);
let v30 = new Uint32Array(181);
let v32 = BigUint64Array;
let v33 = new v32(1);
let v34 = 253;
[v34,,v32,v33] = v30;
try { v32["abs"](181, v34, v32); } catch (e) {}
new Uint16Array(v34);
for (let i47 = 0;
    i47 < 2;
    (() => {
        i47++;
        v33[48] = i47;
        ({"d":v30,"f":i47,"length":v22,} = v24);
    })()) {
    const v56 = new Function("x");
    v56.name;
}
Function();
