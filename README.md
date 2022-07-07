# VBIS-Mobile-App
A mobile app for the Victoria Brain Injury Society (VBIS) that presents all their information in an Acquired Brain Injury (ABI) friendly way!


------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------
CODING STANDARDS
------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------


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
- To run it, use expo start --tunnel
- If you got this error, Unable to find expo in this project - have you run yarn / npm install yet?, please try npm install or yarn install, and then use expo start --tunnel to run the code.

Organization
- All pages should be their own javascript file
- CSS should be on it's own file

Documentation
- Each function has a comment above the script following this format:
    // Function name
    // Function description
    // Parameter A: Description of type and what it represents
    // Parameter B: ...

Git Standards
- All unstable code is to be pushed to a branch and reviewed by at least 1 peer before merging
