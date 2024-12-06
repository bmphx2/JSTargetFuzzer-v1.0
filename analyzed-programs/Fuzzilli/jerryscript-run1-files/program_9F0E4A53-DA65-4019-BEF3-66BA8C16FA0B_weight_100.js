function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    this.a = -2147483647;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14, a15) {
    const o28 = {
        get g() {
            let v16 = this;
            function F17(a19, a20, a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                ({"h":v16,} = this);
                a21.__proto__ = v4;
                try { a22(a21); } catch (e) {}
                Object.defineProperty(v5, 3, { writable: true, enumerable: true, get: f12 });
                try { new a13(a21, a14, F0, v5, v3); } catch (e) {}
                this.a = a21;
                this.b = 65536;
            }
            new F17(268435439, 65536, -256, v4);
            new F17(1995520660, v16, 9007199254740992, v3);
            new F17(9007199254740992, F17, 1995520660, a13);
            return 268435440;
        },
        ...a13,
        "d": a14,
        [a13]: v3,
        3: a14,
    };
    return o28;
}
f12(v3, 268435440, 268435440);
f12(v5, -256, -256);
const v31 = f12(v3, 65536, -256);
const v34 = new BigInt64Array(28);
const v35 = new BigInt64Array(28);
function f36() {
    v31[243.41242208355516] = v35;
    try { v35.filter(f12, v4); } catch (e) {}
    return v35;
}
v34.find(f36);
