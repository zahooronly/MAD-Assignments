// *******LAB WORK AT SMIT********
function classLength(){
    let studentNames:string[]|null[]=Array(10);
    for(let i=0;i<=9;i++){
        studentNames[i]=prompt('Enter the name of Student');
        if(studentNames[i]==='Naveed'||studentNames[i]==='naveed'){
            console.log(`Hi ${studentNames[i]}, Welcome to University, You are top scorer in entry test, Congrats`)
        }else {
            console.log(`Hi ${studentNames[i]}, Welcome to University`)
        }
    }
}
