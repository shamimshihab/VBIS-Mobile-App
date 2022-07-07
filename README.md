# VBIS-Mobile-App
A mobile app for the Victoria Brain Injury Society ([VBIS](https://vbis.ca/)) that presents all their information in an acquired brain injury (ABI) friendly way!

## VBIS
> VBIS is a not-for-profit organization that offers free-of-charge programs and services, and whose mission is to support, educate, and advocate for adults with acquired brain injuries and their families; and to increase community awareness about acquired brain injuries.

## CODING STANDARDS

Naming
- Variables are to be named in lowerCamelCase
- Constants are to be names in SCREAMING_SNAKE_CASE
- Class are to be named in UpperCamelCase
  - Attributes are to be names in snake_case
- Functions are to be named in UpperCamelCase
- Branches are to be named in UpperCamelCase
  - Branch name should be the feature name. Ex: FeatureName
- Files follow Kebab naming method. Ex: This-is-kebab.js

Running
- To run it, use `expo start --tunnel`
- If you got this error, Unable to find expo in this project - have you run yarn / npm install yet?, please try `npm install` or `yarn install`, and then use `expo start --tunnel` to run the code.

Organization
- All screens should be their own javascript file under the Screens folder
- CSS should be on it's own file

Documentation
- Each function should have a commented description above it following this format:
```
/*
NameOfFunction
Function description
Parameter A: type, description of parameter
Parameter B: ...
*/
```

Git Standards
- All unstable code is to be pushed to a branch and reviewed by at least 1 peer before merging
