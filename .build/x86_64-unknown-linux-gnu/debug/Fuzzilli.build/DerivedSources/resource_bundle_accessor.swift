import class Foundation.Bundle

extension Foundation.Bundle {
    static var module: Bundle = {
        let mainPath = Bundle.main.bundleURL.appendingPathComponent("Fuzzilli_Fuzzilli.resources").path
        let buildPath = "/home/kali/PhD/JSTargetFuzzer-Dev/.build/x86_64-unknown-linux-gnu/debug/Fuzzilli_Fuzzilli.resources"

        let preferredBundle = Bundle(path: mainPath)

        guard let bundle = preferredBundle ?? Bundle(path: buildPath) else {
            fatalError("could not load resource bundle: from \(mainPath) or \(buildPath)")
        }

        return bundle
    }()
}