#! /usr/bin/env bash
# REPLACE ~/.bash_profile or ~/.bashrc
sed -i 's|\(export JAVA_HOME="/d/sblm/program/jdk/\)[^"]*|\1jdk1.8.0.332|' ~/.bashrc
cat ~/.bashrc #파일 내용 출력
source ~/.bashrc 
java -version #자바 버전 확인
