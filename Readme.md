<h1 align="center"> Selenium Code - Java (Cucumber) with chrome driver setup - simple test on sample application)  </h1> <br>

<p align="center">
  Description. : This is a demo testcase on java tech with cucumber and selenium test.
There are couple testcases ( 2 automation scripts ): which validates the business scenarios:
Scenario 1: Validate user is able to view after log in
Scenario 2: Validate new user is able to view after clicking on new Registration
This simple tests are to validate on the sample application: https://anupdamoda.github.io/AceOnlineShoePortal/index.html

</p>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Quick Start](#quick-start)




## Introduction
This is a demo testcase on java tech with cucumber and selenium test.
This simple test is to validate the product page is appearing post login on the sample application: https://anupdamoda.github.io/AceOnlineShoePortal/index.html

## Features
Selenium Tests


## Test Requirements

<b> Test Scenario 1: </b>
1. Open up google chrome browser (This project has google chrome driver version 115- which is installed and setup as path)
2. Launch the application: https://anupdamoda.github.io/AceOnlineShoePortal/index.html#
3. Click on the hamburger menu
4. Click on 'SignIn Portal'
5. Enter the username
6. Enter the password
7. Click on Login button
8. Verify if the Product Category name is matching with expected.
   The application can be run locally.

<b> Test Scenario 2: </b>
1. Open up google chrome browser (This project has google chrome driver version 115- which is installed and setup as path)
2. Launch the application: https://anupdamoda.github.io/AceOnlineShoePortal/index.html#
3. Click on the hamburger menu
4. Click on 'SignIn Portal'
7. Click on 'New User? Register here' button
8. Verify if the user lands on the User Registration Page
   The application can be run locally.



### Local
* [Java 11 SDK](https://www.oracle.com/au/java/technologies/javase/jdk11-archive-downloads.html)
* [Maven](https://maven.apache.org/download.cgi)
* [ChromeDriver](https://chromedriver.chromium.org/downloads) 

## Execution modes ## 🤖 Starting up

command: mvn test

