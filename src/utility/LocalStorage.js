
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
export {addApp};