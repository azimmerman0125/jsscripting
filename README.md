# Collection of Scripts to show how to use NodeJS and JavaScript as a scripting tool

## Node JS Used
```
node --version
v18.20.3
```

## Download Scripts
```
git clone https://github.com/azimmerman0125/jsscripting.git
cd jsscripting
```


## Script 1: 01-helloworld
> This script is a basic hello world script

How to run this tool:
```
- Change directory to project
cd 01-hellowold

-Run Tool:
./helloworld

``` 

## Script 2: 02-apirequest
> This Script will make an api request out to a generic national data api.  It will calculate the population growth from 2013 - 2022.  Finally it will print out information and show the growth from the previous year.

How to run this tool:
```
- Change directory to project
cd 02-apirequest

- Install npm packages
npm install

- Run ESLint
npx eslint callapi

- Run the tool
./callapi
```


## Script 3: 03-jscli
> This script will serve as a wrapper aroud the Terraform binary.  It will allow a developer to not focus on credentials for running the terraform command.


- Make sure that AWS cli is configured for demo profile
```
aws sts get-caller-identity --profile demo

{
    "UserId": "AIDAXXXXXXXXXX",
    "Account": "ZZZZZZZZZZZ",
    "Arn": "arn:aws:iam::ZZZZZZZZZZZ:user/demouser"
}
```


How to run this tool:
```
- Change directory to project
cd 03-jscli

- Install packages
npm install

- Run the tool with valid terraform
cd 03-jscli/terraform
../tfwrapper init
../tfwrapper plan
../tfwrapper apply
../tfwrapper state list
../tfwrapper destroy