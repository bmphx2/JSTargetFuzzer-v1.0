function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
let v7 = 4294967296;
function f9(a10, a11, a12) {
    const o18 = {
        2431: a10,
        "b": a12,
        [v7]: a12,
        4139229441: a12,
        get c() {
            v5[this];
            const v15 = [v5];
            [a11,[a12,v5,v15,v15,v15],v4];
            return v4;
        },
        __proto__: v4,
        "a": a11,
        "e": v4,
        "g": v7,
    };
    return o18;
}
f9(268435456, v4, 268435456);
const v20 = f9(v7, v7, v5);
const v21 = f9(v7, v5, v3);
class C22 extends f9 {
    7 = v7;
    #b;
    o(a24, a25) {
        const v28 = v21 >> 65535;
        v20 & v28;
        Math.log(v20);
        Math.asin(v7++);
        let v33 = !v28;
        return --v33;
    }
    1;
}
new C22();
const v36 = new C22();
const v37 = new C22();
f9 & C22;
let v39 = 0;
while (v39 < 5) {
    ({"e":v5,} = v36);
    typeof v37 === "symbol";
    v39++;
}
