const v2 = new Array(4096);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.g = 4096;
    this.h = Array;
}
const v7 = new F3(F3, Array);
const v8 = new F3(v7, v2);
const v9 = new F3(v7, v2);
const v12 = new Array(147);
function f13(a14, a15, a16) {
    const o31 = {
        [v2](a18, a19, a20) {
            let v22 = 3;
            let v23 = 7;
            v23 & (a19 * a19);
            a19++;
            Math.min(a19);
            v22 % a19;
            v23++;
            --v22;
            return a19;
        },
    };
    return o31;
}
f13(v8, v7, 147);
f13(f13(v12, v7, v9), v8, 4096);
const v35 = [Array,v9,4096];
for (const v38 in [[v35,v35,v35],v35]) {
}
