const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v1;
    this.b = a5;
}
const v12 = new F2(F2, v1);
const v13 = new F2(WeakSet, v1);
const v14 = new F2(WeakSet, F2);
new Map();
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F17;
}
const v23 = new F17(F2, v1, v14, v1);
const v24 = new F17(WeakSet, v14, v12, v14);
const v25 = new F17(v24, v1, v13, v12);
new BigUint64Array(BigUint64Array);
const v28 = new BigUint64Array(v14);
try { v1.delete(v12); } catch (e) {}
let v30;
try { v30 = v25.m(v28, v13); } catch (e) {}
const v31 = new BigUint64Array(v14, v30, v30);
try { v23.includes(); } catch (e) {}
const o33 = {
};
new Proxy(v31, o33);
