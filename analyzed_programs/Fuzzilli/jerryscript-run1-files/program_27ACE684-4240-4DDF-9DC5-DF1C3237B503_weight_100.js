function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 41585;
    this.g = 41585;
    this.b = 41585;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v3,F0];
const v7 = [v6,v6,F0,v5];
const v8 = [F0,v5,F0];
const v13 = [v6,-2.0,v6,[v5,v3],v8];
[v13];
[v4];
const v16 = [v3,v3,-2.0,v8,v13];
[v16,v3,v16];
v7 ** v6;
const v22 = async (a23, a24, a25) => {
    const v26 = new F0();
    let v27;
    try { v27 = v26.n(v26, -2.0, v26, v26); } catch (e) {}
    let v28;
    try { v28 = v27(); } catch (e) {}
    v28[13] = v26;
    await v28;
    return v3;
};
