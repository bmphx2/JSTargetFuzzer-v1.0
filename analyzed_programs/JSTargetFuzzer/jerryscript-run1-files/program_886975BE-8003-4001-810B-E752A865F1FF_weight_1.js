function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 300989698;
}
new F6(1073741823n, -536870912, -536870912);
const v12 = new F6(1073741824n, -536870912, -536870912);
new F6(-9007199254740990n, -536870912, 300989698, v12, -536870912);
new Set([5.0]);
new Int16Array(4096);
