const v3 = [59452n,128n];
const v4 = [30196n,59452n,128n,128n];
const v5 = [30196n,128n,30196n,v3];
function f6(a7, a8, a9, a10) {
    const o18 = {
        __proto__: a9,
        "c": a9,
        toString(a12, a13) {
            ("bigint").normalize("NFKC");
            return null;
        },
        2: a7,
    };
    return o18;
}
f6(v5, v5, v5, 30196n);
f6(v5, v4, v4, 59452n);
f6(v4, v3, v3, 128n);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a26;
    this.h = 59452n;
}
new F22(v5, v3, v3, v5);
const v29 = new F22(v4, v5, v4, f6);
new F22(v5, v3, v3, v29);
const v32 = [0,-464147500,1074054361,-11,44427,-14698,7,127];
try {
    v32.length = -2;
} catch(e33) {
}
