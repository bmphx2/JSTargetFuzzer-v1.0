const v3 = [-4n,792529151n,-821237703n];
const v4 = [-4n,792529151n,-821237703n,-4n,v3];
const v5 = [-821237703n];
function f6(a7, a8) {
    const o16 = {
        get e() {
            const v10 = [-9223372036854775807,2,268435439,0,0,55990];
            const o12 = {
                "has": Array,
            };
            new Proxy(v10, o12);
            this % v3;
            return this;
        },
        "c": a8,
        __proto__: v4,
        ...v4,
        "h": a8,
        4: a7,
        ...v5,
        ...v3,
        "d": a7,
        "a": -821237703n,
    };
    return o16;
}
f6(v4, -821237703n);
const v18 = f6(v5, 792529151n);
const v19 = f6(v4, -821237703n);
function f20() {
    return v18;
}
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a24;
    this.e = v18;
    Set.g;
    [[100111.95759279677,-0.9785849807124603],-65537];
}
new F21(-821237703n, f6);
new F21(v18, v4);
new F21(v19, v4);
for (let v33 = 0; v33 < 5; v33++) {
    const v34 = `
        let v36 = +-65537;
        v36++;
    `;
    eval(v34);
}
