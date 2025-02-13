#!/bin/bash

protoc --go_out=./dist/ --ts_out=./dist/ --go_opt=paths=source_relative --ts_opt=esModuleInterop=true,import_style=es6 *.proto
tsc
