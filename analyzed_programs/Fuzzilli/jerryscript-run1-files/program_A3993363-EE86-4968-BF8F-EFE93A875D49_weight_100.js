const v0 = [8,1091014137,9223372036854775807,-1073741824,48305,268435439,-9007199254740992];
const v1 = [-2147483649,9,-2,4294967297,-928,-37045,261398530,11];
let v2 = [4294967297,3,7,-2,11,536870888,-215478233,-38152];
function f6(a7, a8) {
    const o14 = {
        6: a7,
        get a() {
            const v10 = this && v1;
            for (let v11 = 0; v11 < 32; v11++) {
                this["p" + v11] = v11;
            }
            return v10;
        },
        ...v0,
        65537: a7,
    };
    return o14;
}
const v15 = f6(15, v0);
let v16 = f6(-16864, v0);
const v17 = f6(9007199254740991, v1);
class C18 {
    8;
    #valueOf(a20, a21, a22, a23) {
        for (const v24 of a21) {
            v16.a = a20;
            v2 = this;
        }
        this.length = 0;
        return v16;
    }
    #f = v17;
    [v15] = 9007199254740991;
}
const v26 = new C18();
new C18();
const v28 = new C18();
v26.h = v28;
if (15 >= v2) {
} else {
    --v16;
}
const o36 = {
    "maxByteLength": 2836481749,
};
const v38 = new SharedArrayBuffer(1340, o36);
new Int16Array(v38);
