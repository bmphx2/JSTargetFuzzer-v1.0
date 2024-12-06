function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.f = f0;
}
new F1();
new F1();
new F1();
RangeError();
new Int8Array(1024);
new BigInt64Array(1552);
new Uint8Array(170);
new Set();
for (let i21 = 0, i22 = 10;
    (() => {
        const v23 = i21 < 1552;
        const o24 = {
        };
        return v23;
    })();
    i21++) {
    function F30(a32, a33, a34) {
        if (!new.target) { throw 'must be called with new'; }
    }
    let v37 = [Date(Date)];
    let v38 = --v37;
    let v39 = ++v38;
    --v39 == 5n;
}
