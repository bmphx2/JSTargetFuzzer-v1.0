const v3 = [536870887n];
const v4 = [v3,15681n,v3,v3,1006820243n];
const v5 = [v4,1006820243n,1006820243n,v4];
function f9(a10, a11, a12, a13) {
    const o27 = {
        "c": 536870889,
        "a": v3,
        valueOf(a15, a16, a17, a18) {
            v3[4294967296] = a17;
            let {"e":v19,"g":v20,"length":v21,...v22} = a10;
            try { v20(this, 4294967296, v22); } catch (e) {}
            a18 >= a13;
            try { new a11(4294967296, a12, 128); } catch (e) {}
            this[v3] = v19;
            ~a18;
            return 128;
        },
        __proto__: v4,
    };
    return o27;
}
f9(v4, 128, f9, v5);
f9(v5, f9(v3, 1006820243n, v5, v4), 4294967296, v4);
const v31 = [];
const v32 = [v31,v31];
const v33 = [v32,v32];
[v32,v33,v32,v33,v32];
function* f44(a45, a46) {
    function f47(a48, a49, a50, a51) {
        Object.defineProperty(v32, 1, { enumerable: true, value: a45 });
        a51[8] |= 4.0;
        return arguments;
    }
    f47();
    yield 45279;
    return 39366;
}
f44(v33, 39366);
