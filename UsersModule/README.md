# Start UsersModule
//  Run React on port 4200  
cd UsersModule/src/main/ui  
npm install  
export NODE_OPTIONS=--openssl-legacy-provider  
npm start  


// Run Java Code on 8080  
mvn clean install  
java -jar target/UsersModule-0.0.1-SNAPSHOT.jar 
