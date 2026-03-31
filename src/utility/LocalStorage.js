
const getApp = ()=>{
    const storeApp = localStorage.getItem('install')

    if(storeApp){
        const storeAppData =JSON.parse(storeApp);
        return storeAppData;
    }
    else{
        return [];
    }
    
}

const addApp = (id)=>{
    const appData = getApp();
    if(appData.includes(id)){
        alert('vhai ame to aseee e');

    }
    else{
         appData.push(id);
         const data =JSON.stringify(appData);
         localStorage.setItem('install',data)
    }
}

const removeApp = (id) => {
    const appData = getApp();
    console.log(id);
    console.log(appData);

    const updatedData = appData.filter(item => parseInt(item) !== id);
    console.log(updatedData);

    localStorage.setItem('install', JSON.stringify(updatedData));
}
export {addApp,getApp,removeApp};