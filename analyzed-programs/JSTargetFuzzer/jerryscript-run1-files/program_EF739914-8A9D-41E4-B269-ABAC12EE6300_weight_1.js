function f6() {
    return 7;
}
[-4294967296,-2];
const v8 = new f6();
const v10 = Symbol.iterator;
const o19 = {
    [v10]() {
        let v12 = 10;
        const o18 = {
            next() {
                v12--;
                const v16 = v12 == 0;
                const o17 = {
                    "done": v16,
                    "value": v12,
                };
                return o17;
            },
        };
        return o18;
    },
};
const v20 = [10,4,10000,1540929060,823969000,900,-4096,4,128];
const o21 = {
    "f": v20,
    "d": v8,
};
v20 & v20;
const v23 = [1073741823,536870889,-1473032911,-3];
const v24 = f6(7, ...v23, ...v23, -2147483648);
let {"length":v25,...v26} = v23;
v24 >= 9223372036854775807 ? v24 : 9223372036854775807;
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a34;
    this.e = f6;
}
new F32(7, 3, 860462510, 9223372036854775807);
new F32(9007199254740992, 7, 860462510, 3);
new F32(7, 9223372036854775807, 3, 860462510);
for (let [v42,v43] of "resizable") {
}
