function f0() {
}
function f1() {
    return f0;
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    F2.e = a4;
}
const v5 = new F2(f1);
const v6 = new F2(v5);
const v7 = new F2(v6);
function f8(a9, a10, a11, a12) {
    const o28 = {
        get b() {
            a11[this];
            let v21 = -578.6625639816134;
            ~-498555460;
            +a10;
            const v24 = v21--;
            const v25 = +-498555460;
            +v24;
            v21.exp(a10);
            return v25;
        },
    };
    return o28;
}
f8(v5, f1, v6, v5);
f8(v5, f1, f8, v6);
f8(v7, f8, v7, v5);
new Uint16Array(9);
new Uint8Array(52);
new Uint8ClampedArray(257);
function f41() {
    return arguments;
}
const v43 = f41();
for (let v44 = 0; v44 < 5; v44++) {
    v43["p" + v44] = v44;
}
