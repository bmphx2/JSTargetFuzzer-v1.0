function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 5;
}
new F0();
new F0();
new F0();
[-14,2147483648,7,-2,4294967296];
[-2685];
[5,2115573138,515157472,-438953635];
const v10 = new Map();
function f15(a16, a17) {
    const o18 = {
    };
    return v10;
}
const v19 = f15();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v19, 32753n, { enumerable: true, get: f15 });
}
