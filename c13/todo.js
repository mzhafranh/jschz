function showHelp(){
    console.log(">>> JS TODO <<<");
    console.log("$ node todo.js <command>");
    console.log("$ node todo.js list");
    console.log("$ node todo.js task <task_id>");
    console.log("$ node todo.js add <task_content>");
    console.log("$ node todo.js delete <task_id>");
    console.log("$ node todo.js complete <task_id>");
    console.log("$ node todo.js uncomplete <task_id>");
    console.log("$ node todo.js list:outstanding asc|desc");
    console.log("$ node todo.js list:completed asc|desc");
    console.log("$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>");
    console.log("$ node todo.js filter:<tag_name>");
}

function saveList(arrData){
    const arrInJson = JSON.stringify(arrData);
    const data = fs.writeFileSync('todolist.json', arrInJson);
}

function showList(arrData){
    console.log("Daftar kerjaan:")
    for(var i = 0; i < arrData.length; i++){
        console.log(`${arrData[i]["task_id"]}. [${arrData[i]["check"]}] ${arrData[i]["definition"]}`);
    }
}

function addTodo(arrData){
    var newTask = "";
    for(var i = 3; i < process.argv.length ; i++){
        if (i === process.argv.length-1){
            newTask += process.argv[i];
        } else {
            newTask += process.argv[i] + " ";
        }
    }
    arrData.push({
        "task_id" : (arrData.length + 1),
        "definition" : newTask,
        "check" : " ",
        "tags" : []
    })
    console.log(`"${newTask}" telah ditambahkan.`)
}

function deleteTodo(arrData, task_id){
    var deletedTask = arrData[(task_id-1)]["definition"];
    arrData.splice(task_id-1, 1)
    for(var i = 0; i < arrData.length ; i++){
        arrData[i]["task_id"] = i + 1;
    }
    console.log(`"${deletedTask}" telah dihapus.`)
}

function completeTodo(arrData, task_id){
    arrData[task_id-1]["check"] = "x";
    console.log(`"${arrData[task_id-1]["definition"]}" telah selesai`);
}

function uncompleteTodo(arrData, task_id){
    arrData[task_id-1]["check"] = " ";
    console.log(`"${arrData[task_id-1]["definition"]}" status selesai dibatalkan`);
}

function outstanding(arrData, arg){
    console.log("Daftar kerjaan yang belum selesai:");
    if (arg === "asc"){
        for(var i = 0; i < arrData.length ; i++){
            if (arrData[i]["check"] === " "){
                console.log(`${arrData[i]["task_id"]}. [${arrData[i]["check"]}] ${arrData[i]["definition"]}`);
            }
        }
    } else if (arg === "desc"){
        for(var i = arrData.length-1; i >= 0 ; i--){
            if (arrData[i]["check"] === " "){
                console.log(`${arrData[i]["task_id"]}. [${arrData[i]["check"]}] ${arrData[i]["definition"]}`);
            }
        }
    }
}

function complete(arrData, arg){
    console.log("Daftar kerjaan yang sudah selesai:");
    if (arg === "asc"){
        for(var i = 0; i < arrData.length ; i++){
            if (arrData[i]["check"] === "x"){
                console.log(`${arrData[i]["task_id"]}. [${arrData[i]["check"]}] ${arrData[i]["definition"]}`);
            }
        }
    } else if (arg === "desc"){
        for(var i = arrData.length-1; i >= 0 ; i--){
            if (arrData[i]["check"] === "x"){
                console.log(`${arrData[i]["task_id"]}. [${arrData[i]["check"]}] ${arrData[i]["definition"]}`);
            }
        }
    }
}

function addTag(arrData, task_id){
    var newTags = arrData[task_id-1]["tags"];
    for(var i = 4; i < process.argv.length ; i++){
        if (arrData[task_id-1]["tags"].includes(process.argv[i])){
            continue;
        } else if (i === process.argv.length-1){
            newTags.push(process.argv[i])
        } else {
            newTags.push(process.argv[i])
        }
    }
    arrData[task_id-1]["tags"] = newTags;
}

function filterStuff(arrData, filter){
    for(var i = 0; i < arrData.length ; i++){
        if (arrData[i]["tags"].includes(filter)){
            console.log(`${arrData[i]["task_id"]}. [${arrData[i]["check"]}] ${arrData[i]["definition"]}`);
        }
    }
}

function showTask(arrData, task_id){
    console.log(`Kerjaan dengan ID ${task_id}:`);
    console.log(`Title      : ${arrData[task_id-1]["definition"]}`);
    
    if (arrData[task_id-1]["check"] === 'x'){
        console.log(`Completed  : Iya`);
    } else {
        console.log(`Completed  : Tidak`);
    }
    var tags = "Tags       : ";
    for(var i = 0; i < arrData[task_id-1]["tags"].length; i++){
        if (i === arrData[task_id-1]["tags"].length-1){
            tags += arrData[task_id-1]["tags"][i];
        }
        else{
            tags += arrData[task_id-1]["tags"][i] + ",";
        }
    }
    console.log(tags);
}



const fs = require('fs');
const path = './todolist.json'
try{
    if(fs.existsSync(path)){
        main();
    } else {
        const data = fs.writeFileSync('todolist.json', "utf8");
        main();
    }
} catch(err){
    console.error(err);
}

function main(){
    const data = JSON.parse(fs.readFileSync('./todolist.json',{encoding:'utf8', flag:'r'}));
    var command = process.argv[2]
    if (command.startsWith("filter:")){  
        var filter = command.slice(7,command.length);
        filterStuff(data, filter);
    }
    else{
        switch(command){
            case undefined:
            case 'help':
                showHelp(data);
                break;
            case 'list':
                showList(data);
                break;
            case 'add':
                addTodo(data);
                break;
            case 'delete':
                deleteTodo(data, Number(process.argv[3]));
                break;
            case 'complete':
                completeTodo(data, Number(process.argv[3]));
                break;
            case 'uncomplete':
                uncompleteTodo(data, Number(process.argv[3]));
                break;
            case 'list:outstanding':
                outstanding(data, process.argv[3]);
                break;
            case 'list:completed':
                complete(data, process.argv[3]);
                break;
            case 'tag':
                addTag(data, Number(process.argv[3]));
                break;  
            case 'task':
                showTask(data, Number(process.argv[3]));
                break;
            default:
                showHelp();
                break;
        }
    }
    saveList(data);
    
}
