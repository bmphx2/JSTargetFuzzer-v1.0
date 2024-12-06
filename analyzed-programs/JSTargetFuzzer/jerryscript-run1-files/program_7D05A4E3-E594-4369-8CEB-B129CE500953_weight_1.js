new WeakSet();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.hasInstance = -65536;
}
new F5(-65536);
new F5(65536);
new F5(-128);
[1882790478,256,519542840,4096,-6];
[536870888,1410167869,2147483649,4];
[-34675];
const v16 = new Int8Array(2);
const v19 = new BigUint64Array(300);
const o20 = {
    ...v19,
    [v16]: 2,
};
try { o20.getFloat32(); } catch (e) {}
