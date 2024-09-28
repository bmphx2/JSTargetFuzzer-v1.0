# JSTargetFuzzer

JSTargetFuzzer-v1.0 is an approach utilizing a novel code-coverage fuzzing guidance using Fuzzilli as base software.

## Install

* System configuration:
  * Intel i9 14900F (24 cores)
  * Kali Linux 2024.1

* Third-Party Software:
  * Install Swift version 5.6.3 (swift-5.6.2-RELEASE-ubuntu20.04)
  * Extract the tarball file and add to the $PATH:
  * `export $PATH=$PATH:/home/user/swift-5.6.2/`

* Instructions to install JSTargetFuzzer
  * In the terminal, run the following commands to clone the repository
  * ```bash
    git clone https://anonymous.4open.science/r/JSTargetFuzzer/
  
## Usage
If everything is working properly, you can run JSTargetFuzzer using the command-line:
```swift-run FuzzilliCli --help``` 

### Targets & Instrumentation

JSTargetFuzzer utilizes the JavaScript engine's instrumentation to target security-relevant address space and redirect the fuzzing campaings towards it.
Instrumentation examples are found in ./Targets/*

