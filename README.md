# JSTargetFuzzer

JSTargetFuzzer-v1.0 is an approach utilizing a novel code-coverage fuzzing guidance using Fuzzilli as base software.

## Install

* System configuration:
  * Intel i9 14900F (24 cores)
  * Kali Linux 2024.1

* Third-Party Software:
  * Install Swift version 5.6.3 (swift-5.6.2-RELEASE-ubuntu20.04)
  * Extract the tarball file and add to the $PATH:
  * ```bash
    export $PATH=$PATH:/home/user/swift-5.6.2/

* Instructions to install JSTargetFuzzer
  * In the terminal, run the following commands to clone the repository
  * ```bash
    git clone https://anonymous.4open.science/r/JSTargetFuzzer/
  
## Usage
If everything is working properly, you can run JSTargetFuzzer using the command-line:
* ```bash
   swift-run FuzzilliCli --help

### Targets & Instrumentation

JSTargetFuzzer utilizes the JavaScript engine's instrumentation to target security-relevant address space and redirect the fuzzing campaings towards it.
Instrumentation examples are found in ./Targets/*

## Experimental Package

### RQ1
The results for RQ1 are saved in CSV files within ./programs/data/ folder, for analysis utilize the `streamlit` client.
* Install StreamLit
```bash
pip install streamlit
```
* Run Streamlit from the folder ./cli/. A front-end interface will be available for the evaluation.
```bash
streamlit run app.py

  You can now view your Streamlit app in your browser.

  Local URL: http://localhost:8501
  Network URL: http://172.27.114.46:8501
```
All the statistics during fuzzing campaigns are saved in the same folder.

### RQ2
All the programs for RQ2 are saved in TXT files within ./programs/files/ folder during the execution, for the program analysis utilize `streamlit` client.
Programs with weight 1 are saved with _weight1 suffix and with weight 1000 are saved with _weight1000.
The programs analyzed during the experiment are compressed in ZIP files and saved in ./analyzed_programs folder.

### RQ3
The JavaScript engine files responsible for the crashes are saved in a directory determined by the command-line, for example
```bash
swift-run FuzzilliCli --profile=duktape /home/kali/PhD/JSEs/duktape/build/duk-fuzzilli --storagePath=./crashes-duktape/
```
Then the directory ./crashes-duktape/crashes will store the files responsible for crashes during the fuzzing campaign.
The crashes found during our experiment is located in ./crashes/

