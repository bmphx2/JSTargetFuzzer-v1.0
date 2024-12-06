function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.f = 2.0;
    this.h = a5;
}
const v6 = new F3(2.0);
const v7 = new F3(-4.0);
const v8 = new F3(v7);
const v9 = [2147483649];
[1073741824,512,65535,1087003268,9,1073741824,-12811904,-268435456];
const v11 = [65537,-6646,-128,-1073741824,14,-268435456,32692,268435439,1878288318];
function f15(a16, a17, a18) {
    const o29 = {
        1: 1073741823,
        "b": a17,
        "a": a17,
        "f": v9,
        [a16]: v11,
        "d": a18,
        toString(a20, a21) {
            let v22 = 0;
            while (v22 < 7) {
                v11.toString = a16;
                for (let v25 = 0; v25 < 32; v25++) {
                    const v27 = "p" + v25;
                    a17[v27] = v27;
                }
                v22++;
            }
            return a20;
        },
    };
    return o29;
}
f15(v8, v11, 2.0);
f15(-35654, v11, 2.0);
f15(f15, v9, 0.0);
function f36(a37) {
    const o42 = {
        m(a39, a40, a41) {
            return a40;
        },
    };
    const v43 = o42.m;
    const o44 = {
        ...v43,
    };
    const o51 = {
        "a": 1000,
        "f": a37,
        1073741824: -9007199254740992,
        [-9007199254740992]: 9007199254740990,
        64: -9007199254740992,
        o(a46) {
            try { new a46(a46, v9, 1000, this, 1000); } catch (e) {}
            return 1000;
        },
    };
    return o51;
}
f36(1000);
let v53 = f36(-9007199254740992);
f36(-9007199254740992);
let v63 = 6;
v63 = 1000;
const v69 = Math.abs(-9223372036854775808) * -9.44001634896165e+306;
let v70 = (-9.44001634896165e+306) ** v69;
-4.0 || v69;
const v72 = v70--;
const v73 = --v53;
function F74(a76, a77, a78, a79) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "create";
    this.h = 9;
}
new F74(v69, 1073741823, 1073741823, "create");
new F74(536870912, -183, -9223372036854775808, "create");
new F74(v6, v73, "k2", v72);
