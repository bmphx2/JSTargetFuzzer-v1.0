function f11(a12, a13) {
    try {
    const t0 = 1073741824;
    t0(a12, a12);
    } catch (e) {}
    for (let v15 = 0; v15 < 5; v15++) {
        const v16 = `
            let v18 = +-65537;
            v18++;
        `;
        eval(v16);
    }
    Object.defineProperty(a13, a13, { configurable: true, set: f11 });
    return f11;
}
f11(f11, f11, -2147483648, -1024, -1073741824);
