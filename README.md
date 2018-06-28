# innowatts

# For both projects
run npm install </br>
node app.js </br>
go to "localhost:3000"
</br>
# For Task 1
There won't be any graph initially.</br>
Meter id and startdate must be selected and then click update.</br>
Tmp.json is a file I created from Disagg.json. i ran a script to convert it in valid JSON. <br>
tmp.js is an utility file for checking whether the JSON is valid or not.
</br>
# For Task 2
Run curl -d '{"address":"SW SCHOLLS FERRY RD,# 102, 97007"}' -H "Content-Type: application/json" -X POST localhost:3000/resolve
and check console
