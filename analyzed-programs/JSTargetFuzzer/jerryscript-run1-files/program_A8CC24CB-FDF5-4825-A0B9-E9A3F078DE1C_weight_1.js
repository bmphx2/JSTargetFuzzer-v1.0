const v0 = [414549194,-1901452806,0];
const v1 = [-4294967297,6,-9007199254740992,-14571];
const v2 = [3,-718028864,6,-14,-4294967295,22346,2,1073741824,9,-271131391];
function f3(a4) {
    const o9 = {
        ...v0,
        189: v0,
        get a() {
            const o6 = {
            };
            new Proxy(this, o6);
            return o6;
        },
        ...v1,
        [a4]: a4,
        "a": a4,
        __proto__: v1,
        ...v1,
    };
    return a4;
}
const v10 = f3(v1);
const v11 = f3(v2);
const v12 = f3(v2);
const v14 = [v10,[f3,v10]];
[v14,v12,v14];
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F16;
    this.e = a20;
}
new F16(v10, v12, v10);
const v22 = new F16(v10, v10, v11);
new F16(v12, v12, v22);
const v25 = new F16(Uint32Array);
v25 == v25;
