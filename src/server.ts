import {app} from "./app";

app.listen(8080,()=>{
    setInterval(()=>{
        console.log("No ar...");
    },60000)
});