function f0() {
    const o10 = {
        toString(a5, a6) {
            const t3 = "valueOf";
            t3.length = 55784;
            return a6;
        },
        get c() {
            try {
            const t0 = -62858;
            new t0();
            } catch (e) {}
            return "valueOf";
        },
        4: "valueOf",
        "b": -62858,
    };
    return o10;
}
f0();
const v12 = f0();
const v13 = f0();
let v15 = -4294967295n;
const v17 = [v15,f0,f0,v15];
[v12];
const v19 = [-973794860n,v13,v12];
let v23 = 0;
while (v23 < 1) {
    v19.length <<= v23;
    ({"length":v15,} = v17);
    v23++;
}
