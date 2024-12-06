new URIError(2);
const v12 = new Uint16Array(2);
const v15 = new Uint8Array(2557);
const v16 = `
    v12[v15] = -65537;
    const v19 = new Uint32Array();
    function f20() {
        return Uint32Array;
    }
    v19.find(f20);
    function F22(a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = a25;
    }
    new F22(6, 6);
    new F22(-65537, 1024);
    new F22(0, -65537);
    let v29 = +-65537;
    v29--;
`;
eval(v16, Uint16Array, 6);
