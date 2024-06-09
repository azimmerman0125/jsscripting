# Collection of Scripts to show how to use NodeJS and JavaScript as a scripting tool

## Download Scripts
```
git clone https://github.com/azimmerman0125/jsscripting.git
cd jsscripting
```


## Script 1: 01-helloworld
> This script is a basic hello world script

How to run this tool:
```
cd 01-hellowold
./helloworld

``` 

## Script 2: 02-apirequest
> This Script will make an api request out to a generic national data api.  It will calculate the population growth from 2013 - 2022.  Finally it will print out information and show the growth from the previous year.

How to run this tool:
```
cd 02-apirequest

- Run ESLint
npx eslint callapi

- Run the tool
./callapi
```


## Script 3: 03-jscli
> This script will serve as a wrapper aroud the Terraform binary.  It will allow a developer to not focus on credentials for running the terraform command.  It will also run a validate and format for terraform before running a plan.

How to run this tool:
```
cd 03-jscli

- Run ESLint
npx eslint tfwrapper

- Run the tool
./tfwrapper