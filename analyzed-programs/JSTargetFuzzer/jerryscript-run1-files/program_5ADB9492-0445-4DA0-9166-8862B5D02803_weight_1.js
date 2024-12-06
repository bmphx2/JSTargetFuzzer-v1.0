new Float32Array(12);
function f6(a7, a8) {
    for (let v9 = 0; v9 < 5; v9++) {
        const v10 = `
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v10);
    }
    return a7;
}
const v17 = f6(f6, f6);
new Float32Array(8);
new Int8Array(1022);
const v25 = [9007199254740991n,9007199254740991n,64n,-2n,-2n];
const v26 = [v25,64n,-2n,9007199254740991n];
[v26,v26,v26];
try {
const t0 = 1073741823n;
t0();
} catch (e) {}
let v36 = 1000;
v36 >> v17;
v25 || -47218;
+-47218;
!-47218 & 8;
v36++;
