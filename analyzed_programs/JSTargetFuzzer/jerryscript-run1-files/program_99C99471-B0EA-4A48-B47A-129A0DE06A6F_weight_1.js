const v0 = [268435456,-9223372036854775807,65536,512,-2000568765,4294967297];
const v1 = [-1024,374266903,-1024,-4,536870889,65535,-9223372036854775808,-2029145076];
const v2 = [268435441,-16,-2147483648,2,-2133033448,257,-65292,2050852149];
function f9(a10, a11, a12, a13) {
    const o23 = {
        [a10]: a11,
        __proto__: a12,
        268435441: a13,
        get a() {
            if (a10) {
                v1.__proto__;
                function F16(a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.g = a18;
                    this.d = this;
                }
                new F16(0.0, this);
                new F16(-1000.0, v0);
                new F16(this, v1);
            } else {
                super.c = 268435439;
            }
            return v1;
        },
    };
    return o23;
}
f9(v2, -1000.0, 7, -1000.0);
f9(v0, 0.0, 7, 1e-15);
f9(v2, 0.0, -278170861, 1e-15);
f9.apply(Date.now);
