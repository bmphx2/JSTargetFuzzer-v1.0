new BigInt64Array(654);
new Int16Array(5);
new Float64Array(64);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.h = a13;
}
new F9(64, 654, 5);
const v15 = new F9(654, 654, 64);
const v16 = new F9(64, 5, 654);
let v17;
try { v17 = v15.seal(5, v16, v16, v16); } catch (e) {}
let v18 = 0;
do {
    try { v17["toString"](); } catch (e) {}
    v18++;
} while (v18 < 5)
