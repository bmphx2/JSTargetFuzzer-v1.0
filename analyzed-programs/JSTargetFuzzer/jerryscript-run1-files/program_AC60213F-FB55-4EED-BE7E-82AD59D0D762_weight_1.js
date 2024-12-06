const v3 = [59452n,128n];
const v4 = [30196n,59452n,128n,128n];
const v5 = [30196n,128n,30196n,v3];
function f6(a7, a8, a9, a10) {
    const o20 = {
        __proto__: 59452n,
        "c": a9,
        toString(a12, a13) {
            const t8 = "NFKC";
            t8[40] = a7;
            v3.toString = a13;
            const v15 = a8 % a13;
            let v16;
            try { v16 = a12(v15, this); } catch (e) {}
            var f = v16;
            ("bigint").normalize("NFKC");
            return null;
        },
        2: v4,
    };
    return o20;
}
f6(v5, v5, v5, 30196n);
f6(v5, v4, v4, 59452n);
f6(v4, v3, v3, 128n);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a28;
    this.h = 59452n;
}
new F24(v5, v3, v3, v5);
const v31 = new F24(v4, v5, v4, f6);
new F24(v5, v3, v3, v31);
let [v37,v38] = v5;
new Uint8Array(3);
new Int16Array(19);
new Float64Array(1310);
const v48 = [0,-464147500,1074054361,-11,44427,-14698,7,127];
try {
    v48.length = -2;
} catch(e49) {
}
