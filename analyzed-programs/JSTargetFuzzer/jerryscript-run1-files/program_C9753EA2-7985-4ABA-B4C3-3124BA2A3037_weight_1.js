function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
}
new F3(9n, 1000n);
const v8 = new F3(1000n, F3);
new F3(26042n, v8);
[-4294967296,129,256,-128,-4096,1522289280];
const v14 = [10,-65535,-128,1073741824,-211841984,5,-13362];
[9223372036854775807,2,1043771238,-2147483649,5,-24496];
Date.parse(v14);
