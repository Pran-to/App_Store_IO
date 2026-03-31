import { toast } from "react-toastify";

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
        toast.error('Already Exist');

    }
    else{
         appData.push(id);
         const data =JSON.stringify(appData);
         localStorage.setItem('install',data)
    }
}

const removeApp = (id) => {
    const appData = getApp();
    const updatedData = appData.filter(item => parseInt(item) !== id);
    
    localStorage.setItem('install', JSON.stringify(updatedData));
}
export {addApp,getApp,removeApp};