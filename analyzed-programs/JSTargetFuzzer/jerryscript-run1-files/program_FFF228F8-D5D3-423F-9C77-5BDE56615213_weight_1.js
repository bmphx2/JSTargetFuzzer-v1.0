const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
    let o3 = {
        [this]: v0,
    };
    o3 %= o3;
    this[o3] = F1;
}
const v4 = new F1();
const v5 = new F1();
const v6 = new F1();
const o10 = {
    valueOf() {
        super.e = v0;
        let v9;
        try { v9 = v4.keyFor(v0, v5, this, 9007199254740991); } catch (e) {}
        return v9;
    },
};
let v13 = [1584662342,v5];
[F1,v6,[v4]];
const v20 = new Int16Array();
let [,,...v21] = v20;
v5[3.0] = v20;
v0.g = v6;
let v25 = NaN / -16247;
--v25;
v13--;
Math.pow(NaN, Int16Array);
-(v13 ^ Int16Array);
--v13;
v21.indexOf(Int16Array);
