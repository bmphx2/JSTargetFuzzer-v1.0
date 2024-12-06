function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 3;
    this.d = 3;
    this.a = 3;
}
new F0();
new F0();
const v5 = new F0();
const v7 = new Map();
const v8 = [312471602,1024,-1645993475];
const v9 = [-9007199254740990,2147483648,58245,8,-1748203556];
const v10 = [-4294967297,-9223372036854775807,-9223372036854775808,1073741823,11,8,-3,-28136];
const v15 = v10["reduceRight"](v5, v10);
const o16 = {
    __proto__: v7,
    [v7]: v15,
    ...v9,
    [v9]: -611.9802865729915,
};
let v17;
try { v17 = v15(); } catch (e) {}
try { v15(v9, v17, v8, v5, Map); } catch (e) {}
