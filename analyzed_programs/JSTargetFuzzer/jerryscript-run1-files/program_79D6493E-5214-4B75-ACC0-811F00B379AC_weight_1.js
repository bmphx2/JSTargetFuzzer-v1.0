function f0() {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
new F3(null, f0);
const v8 = new F3(null, null);
const v9 = new F3(f0, v8);
const v11 = new Array(256);
function f12(a13) {
    const o34 = {
        166: v11,
        set d(a15) {
            let v16 = 0;
            do {
                let v17;
                try { v17 = Array.isArray(f12); } catch (e) {}
                const v18 = v17.f;
                const o20 = {
                };
                const v22 = new Proxy(Date, o20);
                new v22();
                v9[v18] = a13;
                v16++;
            } while (v16 < 2)
            try { a15(v16, a15); } catch (e) {}
            const v30 = --a13;
            Math.log1p(v30);
            a13 + v30;
            a13 || a13;
        },
        [v11]: a13,
    };
    return a13;
}
f12(f12);
f12(Array);
const v37 = f12(Array);
new Uint16Array(2);
new Uint8Array(2);
new Uint8Array(1);
v37 === 1073741823n;
const v50 = F3 && 256;
Math.log1p(Array);
985694323 && Array;
Array >> v50;
