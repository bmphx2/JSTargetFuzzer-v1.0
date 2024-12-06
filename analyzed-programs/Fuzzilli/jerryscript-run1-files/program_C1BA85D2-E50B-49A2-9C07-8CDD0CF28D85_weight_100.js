function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -28790;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v3,v4,v3,v4];
const v7 = [v5,v6,v3,v6];
const v8 = [F0,v5,v4,v7,v4];
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a14;
}
new F12(v4, v5);
const v17 = new F12(v5, v4);
new F12(v4, v5);
const o24 = {
    valueOf() {
        try { this(v8, v5); } catch (e) {}
        return 2.0;
    },
};
delete v8[536870887];
v3[4] = v17;
v7[4] = v17;
[-65535,65536,575640027,9223372036854775807];
[-14727,1073741823,2,6,268435440,516055543];
[-26320,-1870827456,-536870912,-31906,-9007199254740990];
