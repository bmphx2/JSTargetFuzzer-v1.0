function F15() {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F15();
class C18 {
}
const v19 = new C18();
const v21 = `
    const v22 = F15 ^ -1.0;
    function F23(a25, a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = v22;
        this.a = -1.0;
        this.length = a25;
    }
    const v28 = new F23(C18, v17, v19, C18, F23);
    new F23(v22, v17, v28);
`;
eval(v21);
