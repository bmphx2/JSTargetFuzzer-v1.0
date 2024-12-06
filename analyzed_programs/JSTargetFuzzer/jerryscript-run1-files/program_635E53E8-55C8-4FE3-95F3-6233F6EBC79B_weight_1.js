function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.MAX_SAFE_INTEGER = 8;
    this.g = 8;
}
const v3 = new F0();
new F0();
const v5 = new F0();
[v5,v5];
[v3,v3,[v5,F0,v5,F0,v5]];
[2147483649,9007199254740990,569928715,9007199254740991,-41640,64,-4,-46791];
[-2,2,-4,11,9007199254740992,1024,-379006648,9126,-9007199254740992,128];
[4294967295,10698];
const v17 = new Float64Array(65);
v17["toLocaleString"]();
