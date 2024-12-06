function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 56527153;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v9 = [7,24994,v5];
const v10 = [v5,v9];
const v11 = [7,7,v10,v3,v9];
const v13 = new Set();
function f14(a15, a16, a17, a18) {
    const o32 = {
        get f() {
            this.__proto__ = this;
            function F20(a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = v11;
                Reflect.apply(Array.of);
            }
            new F20(v5, v5, v9);
            new F20(a18, v5, v10);
            new F20(v4, v4, v11);
            return a17;
        },
        ...a15,
        7: v3,
        [a17]: f14,
    };
    return v9;
}
f14(7, 7, v13, v13);
f14(24994, 7, F0, f14(7, 7, f14, v10));
const v36 = [-16,-4294967295,29519,536870888,-5];
const o37 = {
};
Reflect.apply(v36.reverse, o37);
