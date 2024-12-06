function f0() {
    const v4 = Math.min(RegExp);
    try { RegExp.apply(Date, v4); } catch (e) {}
    let v6 = 5.319407538173564;
    const o15 = {
        set c(a10) {
            [] = "global";
            const t7 = "global";
            t7.length >>>= -9.91833988203988e+307;
            const v11 = v6++;
            new Error(v6);
            try { this.getDay(v11, v6); } catch (e) {}
        },
        "f": "global",
        "d": "global",
        __proto__: "global",
        [-9.91833988203988e+307]: v6,
        7: -9.91833988203988e+307,
        ["global"]: "global",
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
const v19 = [v16];
[v19,f0,v17,v19];
const v21 = [v19,v16,v17,v19];
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v21;
}
new F25(v16, v16, v18);
const v31 = new F25(v17, v16, v18);
new F25(v17, v18, v31);
let v33 = -4294967297n;
v33 &= v33;
